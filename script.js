const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

/* Animation layer */
(()=>{
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const ld=$('#loader'),hide=()=>ld&&ld.classList.add('done');
addEventListener('load',()=>setTimeout(hide,rm?0:1500));setTimeout(hide,3500);
const pg=$('#progress'),rl=$('#ruler i'),sc=()=>{const h=document.documentElement,p=h.scrollTop/((h.scrollHeight-h.clientHeight)||1);pg.style.transform=`scaleX(${p})`;rl.style.top=`calc(${p*100}% - ${p*2}px)`};
addEventListener('scroll',sc,{passive:true});sc();
const ty=$('#typed');
if(ty){const w=['a Civil Engineer','a Project Planner','a Project Controls Engineer','a Site Coordinator'];let i=0,j=0,del=false;
if(!rm)(function t(){const s=w[i];j+=del?-1:1;ty.textContent=s.slice(0,j);let d=del?35:70;
if(!del&&j===s.length){del=true;d=1500}else if(del&&j===0){del=false;i=(i+1)%w.length;d=300}setTimeout(t,d)})()}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');
t.querySelectorAll('[data-n]').forEach(n=>{const to=+n.dataset.n;if(rm){n.textContent=to;return}let s=null;const f=ts=>{s=s||ts;const k=Math.min((ts-s)/1600,1);n.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)});io.unobserve(t)}),{threshold:.35});
$$('.stats,.scurve').forEach(el=>io.observe(el));
const links=$$('.nav a[href^="#"]');
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
$$('main section[id]').forEach(s=>so.observe(s));
const mq=$('.marquee div');if(mq)mq.innerHTML+=mq.innerHTML;
const hero=$('.hero');
if(hero&&!rm){
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--mx',e.clientX-r.left+'px');hero.style.setProperty('--my',e.clientY-r.top+'px')});
const tw=$('.portrait-wrap');
if(tw&&matchMedia('(hover:hover)').matches){tw.addEventListener('pointermove',e=>{const r=tw.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tw.style.transform=`perspective(900px) rotateY(${x*9}deg) rotateX(${-y*9}deg)`});tw.addEventListener('pointerleave',()=>tw.style.transform='')}
$$('.button').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
const c=$('#truss');
if(c){const x=c.getContext('2d');let W,H,N=[],m={x:-999,y:-999},run=true,raf=0;
const rs=()=>{const r=hero.getBoundingClientRect(),d=devicePixelRatio||1;W=r.width;H=r.height;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);N=Array.from({length:Math.min(60,Math.round(W/30))},()=>({x:Math.random()*W,y:Math.random()*H,vx:Math.random()-.5,vy:Math.random()-.5}))};
rs();addEventListener('resize',rs);
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top});hero.addEventListener('pointerleave',()=>m.x=-999);
const loop=()=>{if(!run)return;x.clearRect(0,0,W,H);
for(const a of N){a.x+=a.vx*.4;a.y+=a.vy*.4;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1}
for(let i=0;i<N.length;i++){const a=N[i];x.fillStyle='rgba(239,113,59,.8)';x.fillRect(a.x-2,a.y-2,4,4);
for(let j=i+1;j<N.length;j++){const b=N[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){x.strokeStyle=`rgba(200,205,200,${.22*(1-d/130)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
const dm=Math.hypot(a.x-m.x,a.y-m.y);if(dm<170){x.strokeStyle=`rgba(239,113,59,${.7*(1-dm/170)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(m.x,m.y);x.stroke()}}
raf=requestAnimationFrame(loop)};
new IntersectionObserver(([e])=>{run=e.isIntersecting;if(run){cancelAnimationFrame(raf);loop()}}).observe(hero)}
}
})();
