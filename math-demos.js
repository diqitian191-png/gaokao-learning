var MATH_DEMOS={
'quadratic':{
  t:'二次函数 y = ax² + bx + c',
  html:'<div class="demo"><label>a: <input type="range" id="qa" min="-3" max="3" step="0.1" value="1"><span id="qa-v">1</span></label><label>b: <input type="range" id="qb" min="-5" max="5" step="0.1" value="0"><span id="qb-v">0</span></label><label>c: <input type="range" id="qc" min="-5" max="5" step="0.1" value="0"><span id="qc-v">0</span></label><canvas id="qcanvas" width="320" height="320"></canvas><p class="demo-info" id="qinfo">顶点：(0, 0)　对称轴：x = 0</p></div>'
},
'trig':{
  t:'正弦函数 y = A·sin(ωx + φ)',
  html:'<div class="demo"><label>A: <input type="range" id="ta" min="0.5" max="3" step="0.1" value="1"><span id="ta-v">1</span></label><label>ω: <input type="range" id="tw" min="0.5" max="3" step="0.1" value="1"><span id="tw-v">1</span></label><label>φ: <input type="range" id="tp" min="-3.14" max="3.14" step="0.1" value="0"><span id="tp-v">0</span></label><canvas id="tcanvas" width="320" height="200"></canvas><p class="demo-info" id="tinfo">振幅 1，周期 2π，初相 0</p></div>'
},
'derivative':{
  t:'导数与切线 y = f(x)',
  html:'<div class="demo"><label>选择函数：<select id="dfn"><option value="x2">y = x²</option><option value="x3">y = x³</option><option value="sin">y = sin x</option></select></label><label>切点 x₀: <input type="range" id="dx" min="-2" max="2" step="0.05" value="1"><span id="dx-v">1</span></label><canvas id="dcanvas" width="320" height="320"></canvas><p class="demo-info" id="dinfo">f(1) = 1　f′(1) = 2</p></div>'
}
};

function renderMathDemo(key){
  var d=MATH_DEMOS[key];
  if(!d)return '';
  return '<div class="demo-box"><h4>🎬 '+d.t+'</h4>'+d.html+'</div>';
}

function initMathDemo(key){
  if(key==='quadratic')initQuadratic();
  else if(key==='trig')initTrig();
  else if(key==='derivative')initDerivative();
}

function initQuadratic(){
  var cvs=document.getElementById('qcanvas');if(!cvs)return;
  var ctx=cvs.getContext('2d');
  var W=cvs.width,H=cvs.height,cx=W/2,cy=H/2,scale=20;
  function draw(){
    var a=parseFloat(document.getElementById('qa').value);
    var b=parseFloat(document.getElementById('qb').value);
    var c=parseFloat(document.getElementById('qc').value);
    document.getElementById('qa-v').textContent=a;
    document.getElementById('qb-v').textContent=b;
    document.getElementById('qc-v').textContent=c;
    ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
    for(var i=0;i<=W;i+=scale){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,H);ctx.stroke();}
    for(var j=0;j<=H;j+=scale){ctx.beginPath();ctx.moveTo(0,j);ctx.lineTo(W,j);ctx.stroke();}
    ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
    ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
    ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.stroke();
    ctx.strokeStyle='#3b6ef6';ctx.lineWidth=2.5;ctx.beginPath();
    var first=true;
    for(var x=-W/2;x<=W/2;x+=1){
      var xv=x/scale;
      var yv=a*xv*xv+b*xv+c;
      var px=cx+x,py=cy-yv*scale;
      if(first){ctx.moveTo(px,py);first=false;}
      else ctx.lineTo(px,py);
    }
    ctx.stroke();
    if(a!==0){
      var vx=-b/(2*a),vy=a*vx*vx+b*vx+c;
      var px=cx+vx*scale,py=cy-vy*scale;
      ctx.fillStyle='#dc2626';ctx.beginPath();ctx.arc(px,py,5,0,Math.PI*2);ctx.fill();
      document.getElementById('qinfo').textContent='顶点：('+vx.toFixed(2)+', '+vy.toFixed(2)+')　对称轴：x = '+vx.toFixed(2);
    }else{
      document.getElementById('qinfo').textContent='a = 0，不是二次函数';
    }
  }
  document.getElementById('qa').oninput=draw;
  document.getElementById('qb').oninput=draw;
  document.getElementById('qc').oninput=draw;
  draw();
}

function initTrig(){
  var cvs=document.getElementById('tcanvas');if(!cvs)return;
  var ctx=cvs.getContext('2d');
  var W=cvs.width,H=cvs.height,cy=H/2,scaleY=40,scaleX=40;
  function draw(){
    var A=parseFloat(document.getElementById('ta').value);
    var w=parseFloat(document.getElementById('tw').value);
    var p=parseFloat(document.getElementById('tp').value);
    document.getElementById('ta-v').textContent=A;
    document.getElementById('tw-v').textContent=w;
    document.getElementById('tp-v').textContent=p;
    ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='#9ca3af';ctx.lineWidth=1.5;
    ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
    ctx.beginPath();ctx.moveTo(10,0);ctx.lineTo(10,H);ctx.stroke();
    ctx.strokeStyle='#10b981';ctx.lineWidth=2.5;ctx.beginPath();
    var first=true;
    for(var px=0;px<=W;px+=1){
      var xv=(px-10)/scaleX;
      var yv=A*Math.sin(w*xv+p);
      var py=cy-yv*scaleY;
      if(first){ctx.moveTo(px,py);first=false;}
      else ctx.lineTo(px,py);
    }
    ctx.stroke();
    document.getElementById('tinfo').textContent='振幅 '+A.toFixed(2)+'，周期 '+(2*Math.PI/w).toFixed(2)+'，初相 '+p.toFixed(2);
  }
  document.getElementById('ta').oninput=draw;
  document.getElementById('tw').oninput=draw;
  document.getElementById('tp').oninput=draw;
  draw();
}

function initDerivative(){
  var cvs=document.getElementById('dcanvas');if(!cvs)return;
  var ctx=cvs.getContext('2d');
  var W=cvs.width,H=cvs.height,cx=W/2,cy=H/2,scale=50;
  function f(x,fn){
    if(fn==='x2')return x*x;
    if(fn==='x3')return x*x*x;
    if(fn==='sin')return Math.sin(x);
    return 0;
  }
  function fp(x,fn){
    if(fn==='x2')return 2*x;
    if(fn==='x3')return 3*x*x;
    if(fn==='sin')return Math.cos(x);
    return 0;
  }
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
      var xv=(px-cx)/scale;
      var yv=f(xv,fn);
      var py=cy-yv*scale;
      if(first){ctx.moveTo(px,py);first=false;}
      else ctx.lineTo(px,py);
    }
    ctx.stroke();
    var y0=f(x0,fn),k=fp(x0,fn);
    ctx.strokeStyle='#dc2626';ctx.lineWidth=2;ctx.beginPath();
    var x1=-3,x2=3;
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
