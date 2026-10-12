var PHYSICS_DEMOS={};

function physClear(svg){while(svg.firstChild)svg.removeChild(svg.firstChild);}
function physLine(svg,x1,y1,x2,y2,stroke,w,dash){
var NS='http://www.w3.org/2000/svg';
var el=document.createElementNS(NS,'line');
el.setAttribute('x1',x1);el.setAttribute('y1',y1);
el.setAttribute('x2',x2);el.setAttribute('y2',y2);
el.setAttribute('stroke',stroke);el.setAttribute('stroke-width',w||1);
if(dash)el.setAttribute('stroke-dasharray',dash);
svg.appendChild(el);
}
function physCircle(svg,x,y,r,fill){
var NS='http://www.w3.org/2000/svg';
var el=document.createElementNS(NS,'circle');
el.setAttribute('cx',x);el.setAttribute('cy',y);el.setAttribute('r',r);
el.setAttribute('fill',fill);
svg.appendChild(el);
}
function physPath(svg,d,stroke,w){
if(!d)return;
var NS='http://www.w3.org/2000/svg';
var el=document.createElementNS(NS,'path');
el.setAttribute('d',d);el.setAttribute('stroke',stroke);
el.setAttribute('stroke-width',w||2.5);el.setAttribute('fill','none');
svg.appendChild(el);
}
function physText(svg,x,y,text,color,size){
var NS='http://www.w3.org/2000/svg';
var el=document.createElementNS(NS,'text');
el.setAttribute('x',x);el.setAttribute('y',y);
el.setAttribute('fill',color||'#374151');
el.setAttribute('font-size',size||12);
el.setAttribute('font-family','sans-serif');
el.textContent=text;
svg.appendChild(el);
}

/* 1. 自由落体 */
function drawFreeFall(id,g){
var svg=document.getElementById(id);if(!svg)return;
physClear(svg);
var W=320,H=260;
physLine(svg,60,20,60,H-30,'#9ca3af',2);
physLine(svg,40,H-30,W-20,H-30,'#9ca3af',2);
var tMax=1.5;
var yMax=0.5*g*tMax*tMax;
var scale=(H-60)/yMax;
var t=0;
var step=tMax/30;
for(var i=0;i<=30;i++){
t=i*step;
var y=0.5*g*t*t;
var py=20+y*scale;
physCircle(svg,60,py,2.5,'#3b6ef6');
}
physCircle(svg,60,20,6,'#dc2626');
physText(svg,70,25,'起点','#dc2626',12);
document.getElementById(id.replace('svg','info')).textContent='g='+g.toFixed(1)+' m/s²，1.5s 下落 '+(0.5*g*2.25).toFixed(2)+' m，末速 '+(g*1.5).toFixed(1)+' m/s';
}

/* 2. 平抛运动 */
function drawProjectile(id,v0){
var svg=document.getElementById(id);if(!svg)return;
physClear(svg);
var W=320,H=240;
var cx=30,cy=30;
physLine(svg,cx,cy,cx,H-20,'#9ca3af',2);
physLine(svg,cx,H-20,W-20,H-20,'#9ca3af',2);
var g=10;
var scaleX=8,scaleY=8;
var d='';
var lastX=cx,lastY=cy;
for(var t=0;t<=2;t+=0.02){
var x=v0*t;
var y=0.5*g*t*t;
var px=cx+x*scaleX;
var py=cy+y*scaleY;
if(px>W-20||py>H-20)break;
if(t===0)d+='M'+px.toFixed(1)+' '+py.toFixed(1);
else d+='L'+px.toFixed(1)+' '+py.toFixed(1);
lastX=px;lastY=py;
}
physPath(svg,d,'#10b981',2.5);
physCircle(svg,lastX,lastY,5,'#dc2626');
var tLand=Math.sqrt(2*(H-20-cy)/(g*scaleY));
document.getElementById(id.replace('svg','info')).textContent='v₀='+v0.toFixed(1)+' m/s，水平射程约 '+(v0*tLand).toFixed(2)+' m，落地时间约 '+tLand.toFixed(2)+' s';
}

/* 3. 简谐运动 */
function drawSHM(id,A,f){
var svg=document.getElementById(id);if(!svg)return;
physClear(svg);
var W=320,H=200;
var cy=H/2;
var cx=W/2;
var scale=50;
physLine(svg,cx,cy, cx+A*scale,cy,'#dc2626',1.5);
physCircle(svg,cx+A*scale,cy,12,'#3b6ef6');
physLine(svg,cx-A*scale,cy-30,cx-A*scale,cy+30,'#e5e7eb',1.5,[4,4]);
physLine(svg,cx+A*scale,cy-30,cx+A*scale,cy+30,'#e5e7eb',1.5,[4,4]);
physText(svg,cx-A*scale-20,cy-40,'-A','#9ca3af',11);
physText(svg,cx+A*scale-10,cy-40,'+A','#9ca3af',11);
physText(svg,cx-15,cy+50,'O','#9ca3af',11);
document.getElementById(id.replace('svg','info')).textContent='A='+A.toFixed(2)+' m，f='+f.toFixed(2)+' Hz，T='+(1/f).toFixed(2)+' s';
}

/* 渲染函数 */
function renderPhysicsDemo(demoId,type){
var container=document.getElementById(demoId);
if(!container)return;
if(type==='freefall'){
container.innerHTML='<div class="demo"><label>g: <input type="range" id="ffg" min="1" max="20" step="0.5" value="10"><span id="ffg-v">10</span> m/s²</label><svg id="ffsvg" width="320" height="260" style="display:block;margin:8px auto;background:#fff;border:1px solid #e5e7eb;border-radius:6px"></svg><p class="demo-info" id="ffinfo">g=10 m/s²</p></div>';
setTimeout(function(){
var g=document.getElementById('ffg');
if(g){
g.oninput=function(){
document.getElementById('ffg-v').textContent=g.value;
drawFreeFall('ffsvg',parseFloat(g.value));
};
drawFreeFall('ffsvg',10);
}
},80);
}else if(type==='projectile'){
container.innerHTML='<div class="demo"><label>v₀: <input type="range" id="pjv" min="2" max="25" step="0.5" value="10"><span id="pjv-v">10</span> m/s</label><svg id="pjsvg" width="320" height="240" style="display:block;margin:8px auto;background:#fff;border:1px solid #e5e7eb;border-radius:6px"></svg><p class="demo-info" id="pjinfo">v₀=10 m/s</p></div>';
setTimeout(function(){
var v=document.getElementById('pjv');
if(v){
v.oninput=function(){
document.getElementById('pjv-v').textContent=v.value;
drawProjectile('pjsvg',parseFloat(v.value));
};
drawProjectile('pjsvg',10);
}
},80);
}else if(type==='shm'){
container.innerHTML='<div class="demo"><label>A: <input type="range" id="sha" min="0.3" max="2.5" step="0.1" value="1"><span id="sha-v">1</span> m</label><label>f: <input type="range" id="shf" min="0.2" max="3" step="0.1" value="1"><span id="shf-v">1</span> Hz</label><svg id="shsvg" width="320" height="200" style="display:block;margin:8px auto;background:#fff;border:1px solid #e5e7eb;border-radius:6px"></svg><p class="demo-info" id="shinfo">A=1.00 m，f=1.00 Hz</p></div>';
setTimeout(function(){
var a=document.getElementById('sha');
var f=document.getElementById('shf');
if(a&&f){
a.oninput=function(){
document.getElementById('sha-v').textContent=a.value;
drawSHM('shsvg',parseFloat(a.value),parseFloat(f.value));
};
f.oninput=function(){
document.getElementById('shf-v').textContent=f.value;
drawSHM('shsvg',parseFloat(a.value),parseFloat(f.value));
};
drawSHM('shsvg',1,1);
}
},80);
}
  }
