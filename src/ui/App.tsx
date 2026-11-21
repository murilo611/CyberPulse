import { useEffect, useRef, useState } from 'react';
import { Activity, ArrowLeft, ArrowRight, Bell, BellRing, BookOpen, Check, CheckCheck, Clock3, ExternalLink, ShieldCheck, Sparkles, Star, ThumbsUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { categories, messages } from '../data/messages';
import { learningTopics } from '../data/learningResources';
import { deliverForSlot, getCurrentSlot, zonedNow } from '../services/scheduler';
import { loadState, saveState, type AppState } from '../services/storage';
import './carousel.css';

const colors=['#ff8c78','#8f9fff','#51d5be','#ffc174','#55b4ed','#bf94ff','#e9c05e','#76caff','#5ad0a0','#f18ba2'];
const times=['09:00','11:00','13:00','15:00','17:00'];
const formatDate=(date:Date,timezone:string)=>new Intl.DateTimeFormat('en-GB',{timeZone:timezone,weekday:'long',day:'numeric',month:'long'}).format(date);

export default function App(){
  const[state,setState]=useState<AppState>(loadState);
  const[now,setNow]=useState(()=>new Date());
  const[toast,setToast]=useState('');
  const[carouselIndex,setCarouselIndex]=useState(0);
  const notifiedSlot=useRef('');
  const carouselRef=useRef<HTMLDivElement>(null);
  const timezone=state.settings.timezone||'Europe/Lisbon';
  const slot=getCurrentSlot(now,timezone,times,'18:00');
  const parts=zonedNow(now,timezone);
  const today=`${parts.year}-${parts.month}-${parts.day}`;
  const todayDeliveries=state.history.filter(item=>item.key.startsWith(today+'@')).sort((a,b)=>a.key.localeCompare(b.key));
  const activeDelivery=todayDeliveries.at(-1);
  const activeMessage=activeDelivery?messages.find(item=>item.id===activeDelivery.messageId):undefined;
  const previewMessage=!activeMessage?(messages.find(item=>!state.history.some(delivery=>delivery.messageId===item.id))??messages[0]):undefined;
  const displayedMessage=activeMessage??previewMessage;
  const isPreview=!activeMessage&&Boolean(previewMessage);
  const nowMinutes=Number(parts.hour)*60+Number(parts.minute);
  const nextTime=slot?times[times.indexOf(slot.time)+1]:times.find(time=>{const[hour,minute]=time.split(':').map(Number);return hour*60+minute>nowMinutes});
  const nextDate=new Date(`${today}T12:00:00Z`);
  if(!nextTime)nextDate.setUTCDate(nextDate.getUTCDate()+1);
  const nextWeekday=new Intl.DateTimeFormat('en-GB',{timeZone:'UTC',weekday:'long'}).format(nextDate);
  const nextDelivery=nextTime?`at ${nextTime}`:`on ${nextWeekday} at 09:00`;
  const messageNumber=displayedMessage?messages.findIndex(item=>item.id===displayedMessage.id)+1:0;
  const categoryIndex=displayedMessage?categories.indexOf(displayedMessage.category):0;
  const todayCount=todayDeliveries.length;
  const latestLabel=isPreview?'A MESSAGE FROM YOUR LIBRARY':slot?`TODAY'S REMINDER · ${activeDelivery?.key.slice(-5)??slot.time}`:activeDelivery?`LAST REMINDER · ${activeDelivery.key.slice(-5)}`:'NEXT REMINDER';

  useEffect(()=>{const timer=window.setInterval(()=>setNow(new Date()),10000);const refresh=()=>setNow(new Date());window.addEventListener('focus',refresh);return()=>{window.clearInterval(timer);window.removeEventListener('focus',refresh)}},[]);
  useEffect(()=>{
    if(!slot||notifiedSlot.current===slot.key)return;
    notifiedSlot.current=slot.key;
    if(state.history.some(item=>item.key===slot.key))return;
    const history=deliverForSlot(messages,state.history,slot,now);
    if(history===state.history)return;
    const next={...state,history};setState(next);saveState(next);
    const delivered=messages.find(item=>item.id===history.at(-1)?.messageId);
    if(delivered){setToast('A new security reminder has arrived.');window.setTimeout(()=>setToast(''),3800);
      if(state.settings.notifications&&'Notification'in window&&Notification.permission==='granted')new Notification('CyberPulse · Security reminder',{body:delivered.text});
    }
  },[slot?.key]);

  function update(change:(value:AppState)=>AppState){setState(previous=>{const next=change(previous);saveState(next);return next})}
  function notify(text:string){setToast(text);window.setTimeout(()=>setToast(''),2200)}
  function markRead(id:string){if(state.read.includes(id))return;update(s=>({...s,read:[...s.read,id]}));notify('Marked as read. Nice work.');}
  function react(id:string,reaction:string){update(s=>({...s,reactions:{...s.reactions,[id]:reaction}}));notify('Thanks for your feedback.');}
  function favorite(id:string){const saved=state.favorites.includes(id);update(s=>({...s,favorites:saved?s.favorites.filter(value=>value!==id):[...s.favorites,id]}));notify(saved?'Removed from saved reminders.':'Saved for later.');}
  function moveCarousel(direction:number){const node=carouselRef.current;if(!node||!node.clientWidth)return;const next=(carouselIndex+direction+messages.length)%messages.length;node.scrollTo({left:next*node.clientWidth,behavior:'smooth'});setCarouselIndex(next)}
  function syncCarousel(){const node=carouselRef.current;if(node&&node.clientWidth)setCarouselIndex(Math.round(node.scrollLeft/node.clientWidth))}
  async function toggleNotifications(){
    if(!('Notification'in window)){notify('Browser notifications are not supported here.');return}
    if(state.settings.notifications){update(s=>({...s,settings:{...s.settings,notifications:false}}));notify('Browser alerts are off.');return}
    const permission=await Notification.requestPermission();
    if(permission==='granted'){update(s=>({...s,settings:{...s.settings,notifications:true}}));notify('Browser alerts are on while CyberPulse is open.');}
    else notify('Notification permission was not granted.');
  }

  return <div className="experience">
    <header className="topbar"><a href="#home" className="wordmark"><span className="logo"><Activity size={19}/></span><span>cyber<span>pulse</span></span></a><div className="header-right"><div className="workday"><span className={slot?'presence live':'presence'}/>{slot?'DELIVERIES LIVE':'DAILY AWARENESS'}</div><button className={`alert-button ${state.settings.notifications?'alert-on':''}`} onClick={toggleNotifications} aria-label={state.settings.notifications?'Disable browser alerts':'Enable browser alerts'}><span className="alert-icon">{state.settings.notifications?<BellRing size={17}/>:<Bell size={17}/>}</span><span>{state.settings.notifications?'Alerts on':'Enable alerts'}</span></button></div></header>
    <main className="page">
      <div className="intro"><div className="date-line"><span className="date-dot"/>{formatDate(now,timezone)}</div><h1>One small reminder.<br/><span>One stronger habit.</span></h1><p>Practical cybersecurity guidance, one message at a time.</p></div>
      <div className="message-shell" style={{'--accent':displayedMessage?colors[categoryIndex]:colors[0]} as React.CSSProperties}>
        <div className="message-decoration"><div className="deco-ring ring-one"/><div className="deco-ring ring-two"/><div className="deco-ring ring-three"/><div className="deco-core"><ShieldCheck size={47}/><i/></div><div className="deco-tag"><span/> CYBERPULSE / DAILY SIGNAL</div><div className="deco-spark spark-one"/><div className="deco-spark spark-two"/></div>
        <div className="message-card">
          <div className="message-overline"><span className="message-category-dot"/>{displayedMessage?.category??'AWARENESS REMINDER'}<span className="message-index">{displayedMessage?`NO. ${String(messageNumber).padStart(2,'0')} / 100`:'TODAY'}</span></div>
          <div className="delivered-label"><span className={slot?'signal-pulse':'signal-idle'}/>{latestLabel}</div>
          <AnimatePresence mode="wait"><motion.div key={displayedMessage?.id??'rest'} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.28}}>
            {displayedMessage?<blockquote>“{displayedMessage.text}”</blockquote>:<div className="rest-message"><h2>Your next reminder is on its way.</h2><p>It will appear automatically at the next scheduled time.</p></div>}
          </motion.div></AnimatePresence>
          {displayedMessage?<>
            <div className="message-info"><span><Clock3 size={14}/> 15-second read</span><span className="info-separator"/><span>{isPreview?'Library preview · not yet delivered':`${activeDelivery?.cycle?`Cycle ${activeDelivery.cycle+1}`:'First cycle'} · ${todayCount} ${todayCount===1?'reminder':'reminders'} today`}</span></div>
            {isPreview?<div className="rest-info"><div className="rest-icon"><Sparkles size={17}/></div><div><strong>A sample from your message library</strong><span>The next reminder is selected automatically at the scheduled time.</span></div></div>:<>
              <div className="message-actions"><button className={`read-button ${state.read.includes(displayedMessage.id)?'is-read':''}`} onClick={()=>markRead(displayedMessage.id)}>{state.read.includes(displayedMessage.id)?<><CheckCheck size={17}/> Read · Thank you</>:<><Check size={17}/> I’ve read this</>}</button><button className={`favorite-button ${state.favorites.includes(displayedMessage.id)?'is-favorite':''}`} aria-label="Save this reminder" onClick={()=>favorite(displayedMessage.id)}><Star size={18} fill={state.favorites.includes(displayedMessage.id)?'currentColor':'none'}/></button></div>
              <div className="reaction-row"><span>Was this reminder useful?</span>{[['Useful','Useful'],['Already knew this','Already knew this']].map(([label,value])=><button key={value} className={state.reactions[displayedMessage.id]===value?'chosen':''} onClick={()=>react(displayedMessage.id,value)}><ThumbsUp size={13}/>{label}</button>)}</div>
            </>}
          </>:<div className="rest-info"><div className="rest-icon"><Sparkles size={17}/></div><div><strong>One good habit at a time.</strong><span>100 selected reminders, delivered throughout the day.</span></div></div>}
          <div className="card-bottom"><span>SMALL REMINDERS <i/> SMARTER HABITS <i/> STRONGER SECURITY</span><span className="card-mark"><Activity size={13}/></span></div>
        </div>
      </div>

      <section className="delivery-strip"><div className="strip-label"><span className="strip-icon"><Clock3 size={16}/></span><div><strong>{activeMessage&&slot?'Next reminder':activeMessage?'Until tomorrow':'Coming up next'}</strong><small>{activeMessage?`Your next message arrives ${nextDelivery}.`:`Your next message arrives ${nextDelivery}.`}</small></div></div><div className="day-progress" aria-label={`${todayCount} of 5 reminders today`}>{times.map((time,index)=><span className={`${index<todayCount?'progress-done':''} ${slot&&time===slot.time?'progress-current':''}`} title={time} key={time}><i/></span>)}</div><div className="strip-total"><strong>{todayCount}<span>/ 5</span></strong><small>TODAY</small></div></section>

      <section className="carousel-section" aria-label="Browse all cybersecurity reminders"><div className="carousel-heading"><div><div className="carousel-kicker"><span/> THE MESSAGE LIBRARY</div><h2>Explore all 100 reminders</h2><p>Swipe through the collection or use the arrows to browse.</p></div><div className="carousel-controls"><span className="carousel-count">{String(carouselIndex+1).padStart(2,'0')} <i/> {String(messages.length).padStart(2,'0')}</span><button onClick={()=>moveCarousel(-1)} aria-label="Previous reminder"><ArrowLeft size={17}/></button><button onClick={()=>moveCarousel(1)} aria-label="Next reminder"><ArrowRight size={17}/></button></div></div><div className="carousel-window" ref={carouselRef} onScroll={syncCarousel}>{messages.map((message,index)=>{const color=colors[categories.indexOf(message.category)]??colors[0];return <article className="carousel-card" key={message.id} style={{'--phrase-accent':color} as React.CSSProperties}><div className="carousel-card-top"><span className="carousel-category"><i/>{message.category}</span><span className="carousel-number">{String(index+1).padStart(2,'0')} / 100</span></div><p>“{message.text}”</p><div className="carousel-card-bottom"><span><span className="carousel-status"/> SELECTED REMINDER</span><span>15 SEC READ</span></div></article>})}</div><div className="carousel-foot"><span>All 100 selected phrases are included.</span><span>Browsing does not change your delivery sequence.</span></div></section>

      <section className="learning-section" aria-label="Cybersecurity learning resources"><div className="learning-heading"><div><div className="carousel-kicker"><span/><BookOpen size={13}/> KEEP LEARNING</div><h2>Build stronger security habits</h2><p>Explore trusted guides and PDFs for each awareness topic.</p></div><span className="learning-total">10 TOPICS <i/> CURATED RESOURCES</span></div><div className="learning-grid">{learningTopics.map((topic,index)=><article className="learning-card" key={topic.title} style={{'--topic-accent':colors[index]} as React.CSSProperties}><div className="learning-card-top"><span className="learning-number">{String(index+1).padStart(2,'0')}</span><span className="learning-mark"><BookOpen size={15}/></span></div><h3>{topic.title}</h3><p>{topic.summary}</p><div className="learning-links">{topic.links.map(link=><a key={link.url} href={link.url} target="_blank" rel="noreferrer noopener"><span className="resource-format">{link.format}</span><span className="resource-label">{link.label}</span><ExternalLink size={14}/></a>)}</div></article>)}</div><p className="learning-disclaimer">Resources open on their original websites or as PDFs in a new tab.</p></section>

      <footer className="footer"><span><span className="footer-shield"><ShieldCheck size={14}/></span> One small security habit for every part of your day.</span><span>Every day <i/> 09:00–18:00 <i/> every 2 hours</span></footer>
      <div className="privacy-note">Browser alerts work while CyberPulse is open. Background delivery requires a push notification service.</div>
    </main>
    <AnimatePresence>{toast&&<motion.div className="toast" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:8}}><Check size={15}/>{toast}</motion.div>}</AnimatePresence>
  </div>;
}
