import {validate,review} from '../lib/review.js';
let active=0,windowStart=Date.now(),requests=0;
export default async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({error:'Usa POST.'});}
 if(!String(req.headers['content-type']||'').startsWith('application/json'))return res.status(415).json({error:'Se requiere JSON.'});
 const origin=req.headers.origin;if(origin){try{if(new URL(origin).host!==req.headers.host)return res.status(403).json({error:'Origen no permitido.'});}catch{return res.status(403).json({error:'Origen inválido.'});}}
 if(Number(req.headers['content-length'])>2900000)return res.status(413).json({error:'Solicitud demasiado grande.'});
 let value;try{if(JSON.stringify(req.body).length>2900000)throw Error('Solicitud demasiado grande.');value=validate(req.body);}catch(e){return res.status(400).json({error:e.message});}
 if(!process.env.GEMINI_API_KEY)return res.status(503).json({error:'La IA todavía no está configurada. El checklist sí funciona.'});
 if(Date.now()-windowStart>60000){windowStart=Date.now();requests=0;}
 if(active>=2||requests>=10)return res.status(429).json({error:'Capacidad temporal alcanzada. Intenta en un minuto.'});
 active++;requests++;
 try{return res.status(200).json(await review(value,process.env.GEMINI_API_KEY,fetch,process.env.GEMINI_MODEL||'gemini-3-flash-preview'));}
 catch(e){return res.status(e.status||502).json({error:e.name==='TimeoutError'?'Se agotaron los 25 segundos. Intenta más tarde.':e.status?e.message:'La respuesta de IA no pudo validarse. Intenta otra vez.'});}
 finally{active--;}
}
