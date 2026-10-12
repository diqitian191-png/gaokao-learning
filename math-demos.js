var MATH_DEMOS={
'quadratic':{
t:'二次函数 y = ax² + bx + c',
html:'<div class="demo"><label>a: <input type="range" id="qa" min="-10" max="10" step="0.1" value="1"><span id="qa-v">1</span></label><label>b: <input type="range" id="qb" min="-20" max="20" step="0.2" value="0"><span id="qb-v">0</span></label><label>c: <input type="range" id="qc" min="-20" max="20" step="0.2" value="0"><span id="qc-v">0</span></label><button class="btn small" onclick="qAddCompare()">➕ 对比一条</button><button class="btn small" onclick="qClearCompare()">🗑 清空对比</button><canvas id="qcanvas" width="320" height="320"></canvas><p class="demo-info" id="qinfo">顶点：(0, 0)　对称轴：x = 0</p></div>'
},
'trig':{
t:'正弦函数 y = A·sin(ωx + φ)',
html:'<div class="demo"><label>A: <input type="range" id="ta" min="-5" max="5" step="0.1" value="1"><span id="ta-v">1</span></label><label>ω: <input type="range" id="tw" min="-5" max="5" step="0.1" value="1"><span id="tw-v">1</span></label><label>φ: <input type="range" id="tp" min="-6.28" max="6.28" step="0.05" value="0"><span id="tp-v">0</span></label><button class="btn small" onclick="tAddCompare()">➕ 对比一条</button><button class="btn small" onclick="tClearCompare()">🗑 清空对比</button><canvas id="tcanvas" width="320" height="200"></canvas><p class="demo-info" id="tinfo">振幅 1，周期 2π，初相 0</p></div>'
},
'derivative':{
t:'导数与切线 y = f(x)',
html:'<div class="demo"><label>函数：<select id="dfn"><option value="x2">y = x²</option><option value="x3">y = x³</option><option value="sin">y = sin x</option></select></label><label>切点 x₀: <input type="range" id="dx" min="-4" max="4" step="0.05" value="1"><span id="dx-v">1</span></label><canvas id="dcanvas" width="320" height="320"></canvas><p class="demo-info" id="dinfo">f(1) = 1　f′(1) = 2</p></div>'
},
'exponential':{
t:'指数函数 y = aˣ',
html:'<div class="demo"><label>底数 a: <input type="range" id="ea" min="0.1" max="10" step="0.1" value="2"><span id="ea-v">2</span></label><button class="btn small" onclick="eAddCompare()">➕ 对比一条</button><button class="btn small" onclick="eClearCompare()">🗑 清空对比</button><canvas id="ecanvas" width="320" height="240"></canvas><p class="demo-info" id="einfo">a=2，过点(0,1)，单调递增</p></div>'
},
'logarithm':{
t:'对数函数 y = logₐ x',
html:'<div class="demo"><label>底数 a: <input type="range" id="la" min="0.1" max="10" step="0.1" value="2"><span id="la-v">2</span></label><button class="btn small" onclick="lAddCompare()">➕ 对比一条</button><button class="btn small" onclick="lClearCompare()">🗑 清空对比</button><canvas id="lcanvas" width="320" height="240"></canvas><p class="demo-info" id="linfo">a=2，过点(1,0)，单调递增</p></div>'
},
'circle':{
t:'圆与直线的位置关系',
html:'<div class="demo"><label>圆心横坐标: <input type="range" id="ccx" min="-8" max="8" step="0.2" value="0"><span id="ccx-v">0</span></label><label>半径: <input type="range" id="cr" min="0.5" max="8" step="0.1" value="2"><span id="cr-v">2</span></label><label>斜率 k: <input type="range" id="clk" min="-5" max="5" step="0.1" value="0"><span id="clk-v">0</span></label><label>截距 b: <input type="range" id="clb" min="-8" max="8" step="0.2" value="0"><span id="clb-v">0</span></label><canvas id="cccanvas" width="320" height="320"></canvas><p class="demo-info" id="ccinfo">圆心(0,0)，半径2，直线 y=0，相交(2个交点)</p></div>'
},
'sequence':{
t:'数列 (等差/等比)',
html:'<div class="demo"><label>类型：<select id="stype"><option value="ap">等差数列</option><option value="gp">等比数列</option></select></label><label>首项 a₁: <input type="range" id="sa1" min="-10" max="20" step="1" value="1"><span id="sa1-v">1</span></label><label id="sdlabel">公差 d: <input type="range" id="sd" min="-10" max="10" step="0.5" value="2"><span id="sd-v">2</span></label><canvas id="scanvas" width="320" height="240"></canvas><p class="demo-info" id="sinfo">a₁=1, d=2，第5项=9</p></div>'
},
'parabola':{
t:'抛物线 y² = 2px',
html:'<div class="demo"><label>p: <input type="range" id="pp" min="-10" max="10" step="0.2" value="2"><span id="pp-v">2</span></label><canvas id="pcanvas" width="320" height="240"></canvas><p class="demo-info" id="pinfo">y²=4x，焦点(1,0)，准线x=-1</p></div>'
},
'unitcircle':{
t:'单位圆与三角函数',
html:'<div class="demo"><label>角度 θ: <input type="range" id="ut" min="0" max="720" step="1" value="45"><span id="ut-v">45</span>°</label><canvas id="ucanvas" width="280" height="280"></canvas><p class="demo-info" id="uinfo">θ=45°，sin=0.707，cos=0.707，tan=1.000</p></div>'
}
};

var COMPARE={
quadratic:[],trig:[],cos:[],tan:[],exponential:[],logarithm:[],ellipse:[],hyperbola:[]
};
var CMP_COLORS=['#f59e0b','#10b981','#dc2626'];

function renderMathDemo(key){
var d=MATH_DEMOS[key];
if(!d)return '';
return '<div class="demo-box"><h4>🎬 '+d.t+'</h4>'+d.html+'</div>';
}

function initMathDemo(key){
if(key==='quadratic')initQuadratic();
else if(key==='trig')initTrig();
else if(key==='derivative')initDerivative();
else if(key==='exponential')initExponential();
else if(key==='logarithm')initLogarithm();
else if(key==='circle')initCircle();
else if(key==='sequence')initSequence();
else if(key==='parabola')initParabola();
else if(key==='unitcircle')initUnitCircle();
else if(typeof initMathDemo2==='function')initMathDemo2(key);
}

function initQuadratic(){
var cvs=document.getElementById('qcanvas');if(!cvs)return;
var ctx=cvs.getContext('2d');
var W=cvs.width,H=cvs.height,cx=W/2,cy=H/2,scale=8;
window.qDraw=function(){
var a=parseFloat(document.getElementById('qa').value);
var b=parseFloat(document.getElementById('qb').value);
var c=parseFloat(document.getElementById('qc').value);
document.getElementById('qa-v').textContent=a;
document.getElementById('qb-v').textContent=b;
document.getElementById('qc-v').textContent=c;
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
for(var i=0;i<=W;i+=32){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,H);ctx.stroke();}
for(var j=0;j<=H;j+=32){ctx.beginPath();ctx.moveTo(0,j);ctx.lineTo(W,j);ctx.stroke();}
ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.stroke();
for(var ci=0;ci<COMPARE.quadratic.length;ci++){
var p=COMPARE.quadratic[ci];
ctx.strokeStyle=CMP_COLORS[ci%3];ctx.lineWidth=1.5;ctx.beginPath();
var f2=true;
for(var x=-W/2;x<=W/2;x+=1){
var xv=x/scale;var yv=p[0]*xv*xv+p[1]*xv+p[2];var px=cx+x,py=cy-yv*scale;
if(py<-H||py>2*H)continue;
if(f2){ctx.moveTo(px,py);f2=false;}else ctx.lineTo(px,py);
}
ctx.stroke();
}
ctx.strokeStyle='#3b6ef6';ctx.lineWidth=2.5;ctx.beginPath();
var first=true;
for(var x2=-W/2;x2<=W/2;x2+=1){
var xv2=x2/scale;var yv2=a*xv2*xv2+b*xv2+c;var px2=cx+x2,py2=cy-yv2*scale;
if(first){ctx.moveTo(px2,py2);first=false;}else ctx.lineTo(px2,py2);
}
ctx.stroke();
if(a!==0){
var vx=-b/(2*a),vy=a*vx*vx+b*vx+c;
var px3=cx+vx*scale,py3=cy-vy*scale;
ctx.fillStyle='#3b6ef6';ctx.beginPath();ctx.arc(px3,py3,5,0,Math.PI*2);ctx.fill();
document.getElementById('qinfo').textContent='顶点：('+vx.toFixed(2)+', '+vy.toFixed(2)+')　对称轴：x = '+vx.toFixed(2)+(COMPARE.quadratic.length?'　已对比 '+COMPARE.quadratic.length+' 条':'');
}else{document.getElementById('qinfo').textContent='a = 0，不是二次函数';}
};
document.getElementById('qa').oninput=qDraw;
document.getElementById('qb').oninput=qDraw;
document.getElementById('qc').oninput=qDraw;
qDraw();
}
function qAddCompare(){if(COMPARE.quadratic.length>=3)return alert('最多对比 3 条');COMPARE.quadratic.push([parseFloat(document.getElementById('qa').value),parseFloat(document.getElementById('qb').value),parseFloat(document.getElementById('qc').value)]);qDraw();}
function qClearCompare(){COMPARE.quadratic=[];qDraw();}

function initTrig(){
var cvs=document.getElementById('tcanvas');if(!cvs)return;
var ctx=cvs.getContext('2d');
var W=cvs.width,H=cvs.height,cy=H/2,scaleY=20,scaleX=20;
window.tDraw=function(){
var A=parseFloat(document.getElementById('ta').value);
var w=parseFloat(document.getElementById('tw').value);
var p=parseFloat(document.getElementById('tp').value);
document.getElementById('ta-v').textContent=A;
document.getElementById('tw-v').textContent=w;
document.getElementById('tp-v').textContent=p;
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
for(var i=0;i<=W;i+=20){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,H);ctx.stroke();}
ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
ctx.beginPath();ctx.moveTo(10,0);ctx.lineTo(10,H);ctx.stroke();
for(var ci=0;ci<COMPARE.trig.length;ci++){
var pr=COMPARE.trig[ci];
ctx.strokeStyle=CMP_COLORS[ci%3];ctx.lineWidth=1.5;ctx.beginPath();
var f2=true;
for(var px=0;px<=W;px+=1){
var xv=(px-10)/scaleX;var yv=pr[0]*Math.sin(pr[1]*xv+pr[2]);var py=cy-yv*scaleY;
if(py<-H||py>2*H)continue;
if(f2){ctx.moveTo(px,py);f2=false;}else ctx.lineTo(px,py);
}
ctx.stroke();
}
ctx.strokeStyle='#10b981';ctx.lineWidth=2.5;ctx.beginPath();
var first=true;
for(var px2=0;px2<=W;px2+=1){
var xv2=(px2-10)/scaleX;var yv2=A*Math.sin(w*xv2+p);var py2=cy-yv2*scaleY;
if(first){ctx.moveTo(px2,py2);first=false;}else ctx.lineTo(px2,py2);
}
ctx.stroke();
document.getElementById('tinfo').textContent='振幅 '+A.toFixed(2)+'，周期 '+(w!==0?(2*Math.PI/Math.abs(w)).toFixed(2):'∞')+'，初相 '+p.toFixed(2)+(COMPARE.trig.length?'　已对比 '+COMPARE.trig.length+' 条':'');
};
document.getElementById('ta').oninput=tDraw;
document.getElementById('tw').oninput=tDraw;
document.getElementById('tp').oninput=tDraw;
tDraw();
}
function tAddCompare(){if(COMPARE.trig.length>=3)return alert('最多对比 3 条');COMPARE.trig.push([parseFloat(document.getElementById('ta').value),parseFloat(document.getElementById('tw').value),parseFloat(document.getElementById('tp').value)]);tDraw();}
function tClearCompare(){COMPARE.trig=[];tDraw();}

function initDerivative(){
var cvs=document.getElementById('dcanvas');if(!cvs)return;
var ctx=cvs.getContext('2d');
var W=cvs.width,H=cvs.height,cx=W/2,cy=H/2,scale=20;
function f(x,fn){if(fn==='x2')return x*x;if(fn==='x3')return x*x*x;if(fn==='sin')return Math.sin(x);return 0;}
function fp(x,fn){if(fn==='x2')return 2*x;if(fn==='x3')return 3*x*x;if(fn==='sin')return Math.cos(x);return 0;}
function draw(){
var fn=document.getElementById('dfn').value;
var x0=parseFloat(document.getElementById('dx').value);
document.getElementById('dx-v').textContent=x0.toFixed(2);
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
for(var i=0;i<=W;i+=scale){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,H);ctx.stroke();}
for(var j=0;j<=H;j+=scale){ctx.beginPath();ctx.moveTo(0,j);ctx.lineTo(W,j);ctx.stroke();}
ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.stroke();
ctx.strokeStyle='#3b6ef6';ctx.lineWidth=2.5;ctx.beginPath();
var first=true;
for(var px=0;px<=W;px+=1){
var xv=(px-cx)/scale;var yv=f(xv,fn);var py=cy-yv*scale;
if(first){ctx.moveTo(px,py);first=false;}else ctx.lineTo(px,py);
}
ctx.stroke();
var y0=f(x0,fn),k=fp(x0,fn);
ctx.strokeStyle='#dc2626';ctx.lineWidth=2;ctx.beginPath();
var x1=-8,x2=8;
var px1=cx+x1*scale,py1=cy-(y0+k*(x1-x0))*scale;
var px2=cx+x2*scale,py2=cy-(y0+k*(x2-x0))*scale;
ctx.moveTo(px1,py1);ctx.lineTo(px2,py2);ctx.stroke();
var pxx=cx+x0*scale,pyy=cy-y0*scale;
ctx.fillStyle='#dc2626';ctx.beginPath();ctx.arc(pxx,pyy,5,0,Math.PI*2);ctx.fill();
document.getElementById('dinfo').textContent='f('+x0.toFixed(2)+') = '+y0.toFixed(2)+'　f′('+x0.toFixed(2)+') = '+k.toFixed(2);
}
document.getElementById('dfn').onchange=draw;
document.getElementById('dx').oninput=draw;
draw();
}
