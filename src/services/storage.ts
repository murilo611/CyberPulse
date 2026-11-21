import type {Delivery} from './scheduler';
export type Settings={timezone:string;notifications:boolean};
export type AppState={history:Delivery[];read:string[];favorites:string[];reactions:Record<string,string>;settings:Settings};
const key='cyberpulse.v2';
export const initialState:AppState={history:[],read:[],favorites:[],reactions:{},settings:{timezone:'Europe/Lisbon',notifications:false}};
export function loadState():AppState{try{const saved=localStorage.getItem(key);if(!saved)return initialState;const parsed=JSON.parse(saved);return{...initialState,...parsed,settings:{...initialState.settings,...parsed.settings}}}catch{return initialState}}
export function saveState(state:AppState){try{localStorage.setItem(key,JSON.stringify(state))}catch{/* Storage may be disabled or full. */}}
