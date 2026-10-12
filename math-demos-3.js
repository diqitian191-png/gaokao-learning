function initExponential(){
var cvs=document.getElementById('ecanvas');if(!cvs)return;
var ctx=cvs.getContext('2d');
var W=cvs.width,H=cvs.height,cx=W/2,cy=H/2,scale=20;
window.eDraw=function(){
var a=parseFloat(document.getElementById('ea').value);
document.getElementById('ea-v').textContent=a;
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
for(var i=0;i<=W;i+=scale){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,H);ctx.stroke();}
for(var j=0;j<=H;j+=scale){ctx.beginPath();ctx.moveTo(0,j);ctx.lineTo(W,j);ctx.stroke();}
ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.stroke();
for(var ci=0;ci<COMPARE.exponential.length;ci++){
ctx.strokeStyle=CMP_COLORS[ci%3];ctx.lineWidth=1.5;ctx.beginPath();
var f2=true;
for(var px=0;px<=W;px+=1){
var xv=(px-cx)/scale;var yv=Math.pow(COMPARE.exponential[ci],xv);var py=cy-yv*scale;
if(py<-H||py>2*H)continue;
if(f2){ctx.moveTo(px,py);f2=false;}else ctx.lineTo(px,py);
}
ctx.stroke();
}
ctx.strokeStyle='#f59e0b';ctx.lineWidth=2.5;ctx.beginPath();
var first=true;
for(var px2=0;px2<=W;px2+=1){
var xv2=(px2-cx)/scale;var yv2=Math.pow(a,xv2);var py2=cy-yv2*scale;
if(py2<-H||py2>2*H)continue;
if(first){ctx.moveTo(px2,py2);first=false;}else ctx.lineTo(px2,py2);
}
ctx.stroke();
document.getElementById('einfo').textContent='a='+a.toFixed(1)+'，过点(0,1)，'+(a>1?'单调递增':(a<1?'单调递减':'常函数y=1'));
};
document.getElementById('ea').oninput=eDraw;
eDraw();
}
function eAddCompare(){if(COMPARE.exponential.length>=3)return alert('最多对比 3 条');COMPARE.exponential.push(parseFloat(document.getElementById('ea').value));eDraw();}
function eClearCompare(){COMPARE.exponential=[];eDraw();}

function initLogarithm(){
var cvs=document.getElementById('lcanvas');if(!cvs)return;
var ctx=cvs.getContext('2d');
var W=cvs.width,H=cvs.height,cx=W/2,cy=H/2,scale=20;
window.lDraw=function(){
var a=parseFloat(document.getElementById('la').value);
document.getElementById('la-v').textContent=a;
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
for(var i=0;i<=W;i+=scale){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,H);ctx.stroke();}
for(var j=0;j<=H;j+=scale){ctx.beginPath();ctx.moveTo(0,j);ctx.lineTo(W,j);ctx.stroke();}
ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.stroke();
for(var ci=0;ci<COMPARE.logarithm.length;ci++){
ctx.strokeStyle=CMP_COLORS[ci%3];ctx.lineWidth=1.5;ctx.beginPath();
var f2=true;
for(var px=cx+1;px<=W;px+=1){
var xv=(px-cx)/scale;var yv=Math.log(xv)/Math.log(COMPARE.logarithm[ci]);var py=cy-yv*scale;
if(py<-H||py>2*H)continue;
if(f2){ctx.moveTo(px,py);f2=false;}else ctx.lineTo(px,py);
}
ctx.stroke();
}
ctx.strokeStyle='#8b5cf6';ctx.lineWidth=2.5;ctx.beginPath();
var first=true;
for(var px2=cx+1;px2<=W;px2+=1){
var xv2=(px2-cx)/scale;var yv2=Math.log(xv2)/Math.log(a);var py2=cy-yv2*scale;
if(py2<-H||py2>2*H)continue;
if(first){ctx.moveTo(px2,py2);first=false;}else ctx.lineTo(px2,py2);
}
ctx.stroke();
document.getElementById('linfo').textContent='a='+a.toFixed(1)+'，过点(1,0)，'+(a>1?'单调递增':(a<1?'单调递减':'无定义'));
};
document.getElementById('la').oninput=lDraw;
lDraw();
}
function lAddCompare(){if(COMPARE.logarithm.length>=3)return alert('最多对比 3 条');COMPARE.logarithm.push(parseFloat(document.getElementById('la').value));lDraw();}
function lClearCompare(){COMPARE.logarithm=[];lDraw();}

function initCircle(){
var cvs=document.getElementById('cccanvas');if(!cvs)return;
var ctx=cvs.getContext('2d');
var W=cvs.width,H=cvs.height,cx=W/2,cy=H/2,scale=25;
function draw(){
var ox=parseFloat(document.getElementById('ccx').value);
var r=parseFloat(document.getElementById('cr').value);
var k=parseFloat(document.getElementById('clk').value);
var b=parseFloat(document.getElementById('clb').value);
document.getElementById('ccx-v').textContent=ox;
document.getElementById('cr-v').textContent=r;
document.getElementById('clk-v').textContent=k;
document.getElementById('clb-v').textContent=b;
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
for(var i=0;i<=W;i+=scale){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,H);ctx.stroke();}
for(var j=0;j<=H;j+=scale){ctx.beginPath();ctx.moveTo(0,j);ctx.lineTo(W,j);ctx.stroke();}
ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.stroke();
ctx.strokeStyle='#3b6ef6';ctx.lineWidth=2;ctx.beginPath();
ctx.arc(cx+ox*scale,cy,r*scale,0,Math.PI*2);ctx.stroke();
ctx.strokeStyle='#dc2626';ctx.lineWidth=2;ctx.beginPath();
var x1=-12,x2=12;
ctx.moveTo(cx+x1*scale,cy-(k*x1+b)*scale);
ctx.lineTo(cx+x2*scale,cy-(k*x2+b)*scale);
ctx.stroke();
var d=Math.abs(k*ox-b)/Math.sqrt(k*k+1);
var msg='';
if(Math.abs(d-r)<0.1)msg='相切(1个交点)';
else if(d<r)msg='相交(2个交点)';
else msg='相离(0个交点)';
document.getElementById('ccinfo').textContent='圆心('+ox.toFixed(1)+',0)，半径'+r.toFixed(1)+'，直线 y='+k.toFixed(1)+'x+'+b.toFixed(1)+'，'+msg;
}
document.getElementById('ccx').oninput=draw;
document.getElementById('cr').oninput=draw;
document.getElementById('clk').oninput=draw;
document.getElementById('clb').oninput=draw;
draw();
}

function initSequence(){
var cvs=document.getElementById('scanvas');if(!cvs)return;
var ctx=cvs.getContext('2d');
var W=cvs.width,H=cvs.height,scale=6;
function draw(){
var type=document.getElementById('stype').value;
var a1=parseFloat(document.getElementById('sa1').value);
var dEl=document.getElementById('sd');
var d=dEl?parseFloat(dEl.value):2;
document.getElementById('sa1-v').textContent=a1;
if(document.getElementById('sd-v'))document.getElementById('sd-v').textContent=d;
document.getElementById('sdlabel').innerHTML=(type==='ap'?'公差 d: ':'公比 q: ')+'<input type="range" id="sd" min="-10" max="10" step="0.5" value="'+d+'"><span id="sd-v">'+d+'</span>';
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(20,H-20);ctx.lineTo(W-10,H-20);ctx.stroke();
ctx.beginPath();ctx.moveTo(20,H-20);ctx.lineTo(20,10);ctx.stroke();
var val=a1;
var info='a₁='+a1+', ';
for(var i=1;i<=10;i++){
if(i>1){if(type==='ap')val+=d;else val*=d;}
var px=20+(i-1)*28;
var py=H-20-val*scale;
if(py>10&&py<H-10){
ctx.fillStyle='#3b6ef6';ctx.beginPath();ctx.arc(px,py,4,0,Math.PI*2);ctx.fill();
}
}
info+=(type==='ap'?'d='+d:'q='+d)+'，第5项='+(type==='ap'?(a1+4*d):(a1*Math.pow(d,4))).toFixed(2);
document.getElementById('sinfo').textContent=info;
var sdEl2=document.getElementById('sd');if(sdEl2)sdEl2.oninput=draw;
}
document.getElementById('stype').onchange=draw;
document.getElementById('sa1').oninput=draw;
var sdEl=document.getElementById('sd');if(sdEl)sdEl.oninput=draw;
draw();
}

function initParabola(){
var cvs=document.getElementById('pcanvas');if(!cvs)return;
var ctx=cvs.getContext('2d');
var W=cvs.width,H=cvs.height,cx=W/2,cy=H/2,scale=15;
function draw(){
var p=parseFloat(document.getElementById('pp').value);
document.getElementById('pp-v').textContent=p;
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
for(var i=0;i<=W;i+=scale){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,H);ctx.stroke();}
for(var j=0;j<=H;j+=scale){ctx.beginPath();ctx.moveTo(0,j);ctx.lineTo(W,j);ctx.stroke();}
ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.stroke();
if(p!==0){
ctx.strokeStyle='#3b6ef6';ctx.lineWidth=2.5;ctx.beginPath();
var first=true;
for(var py=0;py<=H;py+=1){
var yv=(cy-py)/scale;var xv=yv*yv/(2*p);var px=cx+xv*scale;
if(px<0||px>W)continue;
if(first){ctx.moveTo(px,py);first=false;}else ctx.lineTo(px,py);
}
ctx.stroke();
}
ctx.strokeStyle='#10b981';ctx.lineWidth=2;ctx.beginPath();
ctx.moveTo(cx-p/2*scale,0);ctx.lineTo(cx-p/2*scale,H);ctx.stroke();
var fx=cx+p/2*scale,fy=cy;
ctx.fillStyle='#dc2626';ctx.beginPath();ctx.arc(fx,fy,5,0,Math.PI*2);ctx.fill();
document.getElementById('pinfo').textContent='y²='+(2*p).toFixed(1)+'x，焦点('+(p/2).toFixed(2)+',0)，准线x='+(-p/2).toFixed(2);
}
document.getElementById('pp').oninput=draw;
draw();
}

function initUnitCircle(){
var cvs=document.getElementById('ucanvas');if(!cvs)return;
var ctx=cvs.getContext('2d');
var W=cvs.width,H=cvs.height,cx=W/2,cy=H/2,R=100;
function draw(){
var deg=parseFloat(document.getElementById('ut').value);
document.getElementById('ut-v').textContent=deg;
var rad=deg*Math.PI/180;
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.stroke();
ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;ctx.beginPath();
ctx.arc(cx,cy,R,0,Math.PI*2);ctx.stroke();
var x=cx+R*Math.cos(rad),y=cy-R*Math.sin(rad);
ctx.strokeStyle='#3b6ef6';ctx.lineWidth=2;ctx.beginPath();
ctx.moveTo(cx,cy);ctx.lineTo(x,y);ctx.stroke();
ctx.strokeStyle='#dc2626';ctx.lineWidth=2;ctx.beginPath();
ctx.moveTo(x,y);ctx.lineTo(x,cy);ctx.stroke();
ctx.strokeStyle='#10b981';ctx.lineWidth=2;ctx.beginPath();
ctx.moveTo(x,y);ctx.lineTo(cx,y);ctx.stroke();
ctx.fillStyle='#3b6ef6';ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fill();
var sin=Math.sin(rad),cos=Math.cos(rad),tan=sin/cos;
document.getElementById('uinfo').textContent='θ='+deg+'°，sin='+sin.toFixed(3)+'，cos='+cos.toFixed(3)+'，tan='+(Math.abs(cos)<0.001?'不存在':tan.toFixed(3));
}
document.getElementById('ut').oninput=draw;
draw();
  }
