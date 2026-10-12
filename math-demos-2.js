MATH_DEMOS['cos']={
t:'余弦函数 y = A·cos(ωx + φ)',
html:'<div class="demo"><label>A: <input type="range" id="ca" min="-5" max="5" step="0.1" value="1"><span id="ca-v">1</span></label><label>ω: <input type="range" id="cw" min="-5" max="5" step="0.1" value="1"><span id="cw-v">1</span></label><label>φ: <input type="range" id="cp" min="-6.28" max="6.28" step="0.05" value="0"><span id="cp-v">0</span></label><button class="btn small" onclick="cAddCompare()">➕ 对比一条</button><button class="btn small" onclick="cClearCompare()">🗑 清空对比</button><canvas id="ccoscanvas" width="320" height="200"></canvas><p class="demo-info" id="cinfo">振幅 1，周期 2π，初相 0</p></div>'
};
MATH_DEMOS['tan']={
t:'正切函数 y = A·tan(ωx)',
html:'<div class="demo"><label>A: <input type="range" id="tna" min="-5" max="5" step="0.1" value="1"><span id="tna-v">1</span></label><label>ω: <input type="range" id="tnw" min="-5" max="5" step="0.1" value="1"><span id="tnw-v">1</span></label><button class="btn small" onclick="tnAddCompare()">➕ 对比一条</button><button class="btn small" onclick="tnClearCompare()">🗑 清空对比</button><canvas id="tncanvas" width="320" height="240"></canvas><p class="demo-info" id="tninfo">周期 π，渐近线 x = π/2 + kπ</p></div>'
};
MATH_DEMOS['ellipse']={
t:'椭圆 x²/a² + y²/b² = 1',
html:'<div class="demo"><label>a: <input type="range" id="ela" min="1" max="10" step="0.1" value="3"><span id="ela-v">3</span></label><label>b: <input type="range" id="elb" min="1" max="10" step="0.1" value="2"><span id="elb-v">2</span></label><button class="btn small" onclick="elAddCompare()">➕ 对比一条</button><button class="btn small" onclick="elClearCompare()">🗑 清空对比</button><canvas id="elcanvas" width="320" height="280"></canvas><p class="demo-info" id="elinfo">a=3, b=2, 离心率e=0.75</p></div>'
};
MATH_DEMOS['hyperbola']={
t:'双曲线 x²/a² − y²/b² = 1',
html:'<div class="demo"><label>a: <input type="range" id="hpa" min="0.2" max="10" step="0.1" value="2"><span id="hpa-v">2</span></label><label>b: <input type="range" id="hpb" min="0.2" max="10" step="0.1" value="1"><span id="hpb-v">1</span></label><button class="btn small" onclick="hpAddCompare()">➕ 对比一条</button><button class="btn small" onclick="hpClearCompare()">🗑 清空对比</button><canvas id="hpcanvas" width="320" height="280"></canvas><p class="demo-info" id="hpi">a=2, b=1, 渐近线 y=±0.5x</p></div>'
};

function initMathDemo2(key){
if(key==='cos')initCos();
else if(key==='tan')initTan();
else if(key==='ellipse')initEllipse();
else if(key==='hyperbola')initHyperbola();
}

function initCos(){
var cvs=document.getElementById('ccoscanvas');if(!cvs)return;
var ctx=cvs.getContext('2d');
var W=cvs.width,H=cvs.height,cy=H/2,scaleY=20,scaleX=20;
window.cDraw=function(){
var A=parseFloat(document.getElementById('ca').value);
var w=parseFloat(document.getElementById('cw').value);
var p=parseFloat(document.getElementById('cp').value);
document.getElementById('ca-v').textContent=A;
document.getElementById('cw-v').textContent=w;
document.getElementById('cp-v').textContent=p;
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
for(var i=0;i<=W;i+=20){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,H);ctx.stroke();}
ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
ctx.beginPath();ctx.moveTo(10,0);ctx.lineTo(10,H);ctx.stroke();
for(var ci=0;ci<COMPARE.cos.length;ci++){
var pr=COMPARE.cos[ci];
ctx.strokeStyle=CMP_COLORS[ci%3];ctx.lineWidth=1.5;ctx.beginPath();
var f2=true;
for(var px=0;px<=W;px+=1){
var xv=(px-10)/scaleX;var yv=pr[0]*Math.cos(pr[1]*xv+pr[2]);var py=cy-yv*scaleY;
if(py<-H||py>2*H)continue;
if(f2){ctx.moveTo(px,py);f2=false;}else ctx.lineTo(px,py);
}
ctx.stroke();
}
ctx.strokeStyle='#8b5cf6';ctx.lineWidth=2.5;ctx.beginPath();
var first=true;
for(var px2=0;px2<=W;px2+=1){
var xv2=(px2-10)/scaleX;var yv2=A*Math.cos(w*xv2+p);var py2=cy-yv2*scaleY;
if(first){ctx.moveTo(px2,py2);first=false;}else ctx.lineTo(px2,py2);
}
ctx.stroke();
document.getElementById('cinfo').textContent='振幅 '+A.toFixed(2)+'，周期 '+(w!==0?(2*Math.PI/Math.abs(w)).toFixed(2):'∞')+'，初相 '+p.toFixed(2)+(COMPARE.cos.length?'　已对比 '+COMPARE.cos.length+' 条':'');
};
document.getElementById('ca').oninput=cDraw;
document.getElementById('cw').oninput=cDraw;
document.getElementById('cp').oninput=cDraw;
cDraw();
}
function cAddCompare(){if(COMPARE.cos.length>=3)return alert('最多对比 3 条');COMPARE.cos.push([parseFloat(document.getElementById('ca').value),parseFloat(document.getElementById('cw').value),parseFloat(document.getElementById('cp').value)]);cDraw();}
function cClearCompare(){COMPARE.cos=[];cDraw();}

function initTan(){
var cvs=document.getElementById('tncanvas');if(!cvs)return;
var ctx=cvs.getContext('2d');
var W=cvs.width,H=cvs.height,cy=H/2,scaleY=15,scaleX=20;
window.tnDraw=function(){
var A=parseFloat(document.getElementById('tna').value);
var w=parseFloat(document.getElementById('tnw').value);
document.getElementById('tna-v').textContent=A;
document.getElementById('tnw-v').textContent=w;
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
for(var i=0;i<=W;i+=scaleX){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,H);ctx.stroke();}
ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
ctx.beginPath();ctx.moveTo(W/2,0);ctx.lineTo(W/2,H);ctx.stroke();
if(w!==0){
ctx.strokeStyle='#dc2626';ctx.lineWidth=1;ctx.setLineDash([4,4]);
for(var k=-6;k<=6;k++){
var ax=W/2+(Math.PI/2+k*Math.PI)/w*scaleX;
if(ax>0&&ax<W){ctx.beginPath();ctx.moveTo(ax,0);ctx.lineTo(ax,H);ctx.stroke();}
}
ctx.setLineDash([]);
}
for(var ci=0;ci<COMPARE.tan.length;ci++){
ctx.strokeStyle=CMP_COLORS[ci%3];ctx.lineWidth=1.5;
drawTanCurve(COMPARE.tan[ci][0],COMPARE.tan[ci][1]);
}
ctx.strokeStyle='#f59e0b';ctx.lineWidth=2.5;
drawTanCurve(A,w);
function drawTanCurve(a2,w2){
if(w2===0)return;
var cur=[];
for(var px=0;px<=W;px+=1){
var xv=(px-W/2)/scaleX;var yv=a2*Math.tan(w2*xv);
if(Math.abs(yv)>15){if(cur.length>1){ctx.beginPath();for(var p2=0;p2<cur.length;p2++){if(p2===0)ctx.moveTo(cur[p2][0],cur[p2][1]);else ctx.lineTo(cur[p2][0],cur[p2][1]);}ctx.stroke();}cur=[];continue;}
cur.push([px,cy-yv*scaleY]);
}
if(cur.length>1){ctx.beginPath();for(var p3=0;p3<cur.length;p3++){if(p3===0)ctx.moveTo(cur[p3][0],cur[p3][1]);else ctx.lineTo(cur[p3][0],cur[p3][1]);}ctx.stroke();}
}
document.getElementById('tninfo').textContent='振幅 '+A.toFixed(1)+'，周期 '+(w!==0?(Math.PI/Math.abs(w)).toFixed(2):'∞')+'，渐近线 x = π/2 + kπ'+(COMPARE.tan.length?'　已对比 '+COMPARE.tan.length+' 条':'');
};
document.getElementById('tna').oninput=tnDraw;
document.getElementById('tnw').oninput=tnDraw;
tnDraw();
}
function tnAddCompare(){if(COMPARE.tan.length>=3)return alert('最多对比 3 条');COMPARE.tan.push([parseFloat(document.getElementById('tna').value),parseFloat(document.getElementById('tnw').value)]);tnDraw();}
function tnClearCompare(){COMPARE.tan=[];tnDraw();}

function initEllipse(){
var cvs=document.getElementById('elcanvas');if(!cvs)return;
var ctx=cvs.getContext('2d');
var W=cvs.width,H=cvs.height,cx=W/2,cy=H/2,scale=15;
window.elDraw=function(){
var a=parseFloat(document.getElementById('ela').value);
var b=parseFloat(document.getElementById('elb').value);
if(b>a)b=a;
document.getElementById('ela-v').textContent=a.toFixed(1);
document.getElementById('elb-v').textContent=b.toFixed(1);
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
for(var i=0;i<=W;i+=scale){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,H);ctx.stroke();}
for(var j=0;j<=H;j+=scale){ctx.beginPath();ctx.moveTo(0,j);ctx.lineTo(W,j);ctx.stroke();}
ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.stroke();
for(var ci=0;ci<COMPARE.ellipse.length;ci++){
var pr=COMPARE.ellipse[ci];
ctx.strokeStyle=CMP_COLORS[ci%3];ctx.lineWidth=1.5;ctx.beginPath();
ctx.ellipse(cx,cy,pr[0]*scale,pr[1]*scale,0,0,Math.PI*2);ctx.stroke();
}
ctx.strokeStyle='#3b6ef6';ctx.lineWidth=2.5;ctx.beginPath();
ctx.ellipse(cx,cy,a*scale,b*scale,0,0,Math.PI*2);ctx.stroke();
var c=Math.sqrt(a*a-b*b);
ctx.fillStyle='#dc2626';
ctx.beginPath();ctx.arc(cx-c*scale,cy,5,0,Math.PI*2);ctx.fill();
ctx.beginPath();ctx.arc(cx+c*scale,cy,5,0,Math.PI*2);ctx.fill();
var e=c/a;
document.getElementById('elinfo').textContent='a='+a.toFixed(1)+', b='+b.toFixed(1)+', c='+c.toFixed(2)+', 离心率e='+e.toFixed(3)+(COMPARE.ellipse.length?'　已对比 '+COMPARE.ellipse.length+' 条':'');
};
document.getElementById('ela').oninput=elDraw;
document.getElementById('elb').oninput=elDraw;
elDraw();
}
function elAddCompare(){if(COMPARE.ellipse.length>=3)return alert('最多对比 3 条');var a=parseFloat(document.getElementById('ela').value);var b=Math.min(parseFloat(document.getElementById('elb').value),a);COMPARE.ellipse.push([a,b]);elDraw();}
function elClearCompare(){COMPARE.ellipse=[];elDraw();}

function initHyperbola(){
var cvs=document.getElementById('hpcanvas');if(!cvs)return;
var ctx=cvs.getContext('2d');
var W=cvs.width,H=cvs.height,cx=W/2,cy=H/2,scale=15;
window.hpDraw=function(){
var a=parseFloat(document.getElementById('hpa').value);
var b=parseFloat(document.getElementById('hpb').value);
document.getElementById('hpa-v').textContent=a.toFixed(1);
document.getElementById('hpb-v').textContent=b.toFixed(1);
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
for(var i=0;i<=W;i+=scale){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,H);ctx.stroke();}
for(var j=0;j<=H;j+=scale){ctx.beginPath();ctx.moveTo(0,j);ctx.lineTo(W,j);ctx.stroke();}
ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.stroke();
for(var ci=0;ci<COMPARE.hyperbola.length;ci++){
var pr=COMPARE.hyperbola[ci];
ctx.strokeStyle=CMP_COLORS[ci%3];ctx.lineWidth=1.5;
drawHyp(pr[0],pr[1]);
}
ctx.strokeStyle='#3b6ef6';ctx.lineWidth=2.5;
drawHyp(a,b);
function drawHyp(a2,b2){
for(var side=-1;side<=1;side+=2){
ctx.beginPath();
var first=true;
for(var py=0;py<=H;py+=1){
var yv=(cy-py)/scale;var xv=side*a2*Math.sqrt(1+yv*yv/(b2*b2));var px=cx+xv*scale;
if(px<0||px>W)continue;
if(first){ctx.moveTo(px,py);first=false;}else ctx.lineTo(px,py);
}
ctx.stroke();
}
}
document.getElementById('hpi').textContent='a='+a.toFixed(1)+', b='+b.toFixed(1)+', 渐近线 y=±'+(b/a).toFixed(2)+'x'+(COMPARE.hyperbola.length?'　已对比 '+COMPARE.hyperbola.length+' 条':'');
};
document.getElementById('hpa').oninput=hpDraw;
document.getElementById('hpb').oninput=hpDraw;
hpDraw();
}
function hpAddCompare(){if(COMPARE.hyperbola.length>=3)return alert('最多对比 3 条');COMPARE.hyperbola.push([parseFloat(document.getElementById('hpa').value),parseFloat(document.getElementById('hpb').value)]);hpDraw();}
function hpClearCompare(){COMPARE.hyperbola=[];hpDraw();}
