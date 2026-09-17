const VERSION='2.0.0';
const PREFIX='dnd5e-universal-cache-'+encodeURIComponent(new URL(self.registration.scope).pathname)+'-';
const CACHE=PREFIX+VERSION;
const FILES=['./','./index.html','./styles.css','./manifest.webmanifest','./app.js','./class-data.js','./app-icon.png','./poing.png','./social.png','./journal.png','./jets.png','./vitalite.png','./brassards.png','./ki.png','./inventaire.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;event.respondWith(caches.open(CACHE).then(async cache=>{const hit=await cache.match(event.request,{ignoreSearch:true});if(hit)return hit;try{const res=await fetch(event.request);if(res.ok)cache.put(event.request,res.clone());return res}catch(error){if(event.request.mode==='navigate')return(await cache.match('./index.html'))||Response.error();throw error}}))});
