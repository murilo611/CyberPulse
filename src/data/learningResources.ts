export type LearningLink={label:string;url:string;format:'Guide'|'PDF'};
export type LearningTopic={title:string;summary:string;links:LearningLink[]};

export const learningTopics:LearningTopic[]=[
  {title:'Phishing & Suspicious Emails',summary:'Spot suspicious messages, verify senders, and learn what to do when an email feels wrong.',links:[
    {label:'Avoid phishing scams',url:'https://www.cisa.gov/sites/default/files/2024-09/Secure-Our-World-Phishing-Tip-Sheet.pdf',format:'PDF'},
    {label:'Phishing: signs and prevention',url:'https://www.cisa.gov/sites/default/files/publications/phishing-infographic-508c.pdf',format:'PDF'}]},
  {title:'Password Security',summary:'Learn how strong, unique passwords and password managers protect your accounts.',links:[
    {label:'Strong passwords & password managers',url:'https://www.cisa.gov/sites/default/files/2024-09/Secure-Our-World-Passwords-Tip-Sheet.pdf',format:'PDF'},
    {label:'Three random words',url:'https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/three-random-words',format:'Guide'}]},
  {title:'Multi-Factor Authentication (MFA)',summary:'See how a second sign-in check can add protection to your accounts.',links:[
    {label:'Turn on MFA',url:'https://www.cisa.gov/sites/default/files/2024-09/Secure-Our-World-MFA-Tip-Sheet.pdf',format:'PDF'},
    {label:'MFA implementation guidance',url:'https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf',format:'PDF'}]},
  {title:'Clean Desk & Screen Security',summary:'Protect work information when screens, documents, or devices are left unattended.',links:[
    {label:'Advice for end-user devices',url:'https://www.ncsc.gov.uk/guidance/end-user-devices-advice-end-users',format:'Guide'},
    {label:'FCC small-business cybersecurity guide',url:'https://www.cisa.gov/sites/default/files/publications/FCC%20Cybersecurity%20Planning%20Guide.pdf',format:'PDF'}]},
  {title:'Data Protection & Privacy',summary:'Make thoughtful choices before sharing personal or company information.',links:[
    {label:'Data sharing advice',url:'https://ico.org.uk/for-organisations/advice-for-small-organisations/information-security/data-sharing-advice/',format:'Guide'},
    {label:'Data sharing code of practice',url:'https://ico.org.uk/media/1068/data_sharing_code_of_practice.pdf',format:'PDF'}]},
  {title:'Remote Work & Public Wi-Fi',summary:'Explore practical ways to protect work devices and information away from the office.',links:[
    {label:'Home working: preparing your organisation',url:'https://www.ncsc.gov.uk/pdfs/guidance/home-working.pdf',format:'PDF'},
    {label:'Security tips for remote working',url:'https://www.cyber.gov.au/sites/default/files/2025-08/security-tips-for-remote-working.pdf',format:'PDF'}]},
  {title:'USB Devices & Unknown Hardware',summary:'Understand the risks of removable media and unfamiliar connected devices.',links:[
    {label:'Using peripherals securely',url:'https://www.ncsc.gov.uk/collection/device-security-guidance/policies-and-settings/using-peripherals-securely',format:'Guide'},
    {label:'Removable media advice for home working',url:'https://www.ncsc.gov.uk/pdfs/guidance/home-working.pdf',format:'PDF'}]},
  {title:'Software Updates & Security Patches',summary:'Find out why timely updates help close known security weaknesses.',links:[
    {label:'Update business software',url:'https://www.cisa.gov/secure-our-world/update-business-software',format:'Guide'},
    {label:'Top tips for staying secure online',url:'https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online',format:'Guide'}]},
  {title:'Incident Reporting',summary:'Learn why prompt reporting and a clear response plan help limit the impact of an incident.',links:[
    {label:'Incident response plan basics',url:'https://www.cisa.gov/sites/default/files/2024-02/Incident-Response-Plan-Basics_508c_1Feb2024.pdf',format:'PDF'},
    {label:'Phishing and incident reporting tips',url:'https://www.cisa.gov/sites/default/files/2024-02/Update%20to%20Phishing%20General%20Security%20Postcard_01.01.2024.pdf',format:'PDF'}]},
  {title:'Social Engineering & Impersonation',summary:'Recognize attempts to exploit trust, authority, or urgency in messages and calls.',links:[
    {label:'Phishing guidance: stopping the attack cycle',url:'https://www.cisa.gov/sites/default/files/2025-03/Phishing%20Guidance%20-%20Stopping%20the%20Attack%20Cycle%20at%20Phase%20One%20508.pdf',format:'PDF'},
    {label:'Protect accounts from impersonation',url:'https://www.cisa.gov/sites/default/files/2024-10/cisa-fbi-protecting-against-irgc-phishing-508c.pdf',format:'PDF'}]}
];
