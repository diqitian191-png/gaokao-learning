(function(){
function addItems(name,items){
for(var i=0;i<KNOWLEDGE.math.length;i++){
if(KNOWLEDGE.math[i].t===name){
KNOWLEDGE.math[i].items=KNOWLEDGE.math[i].items.concat(items);
return;
}
}
}

addItems('平面向量',[
{n:'共线向量定理',c:'向量a、b（b≠0）共线 ⟺ 存在唯一实数λ使 a=λb。坐标：a=(x₁,y₁)，b=(x₂,y₂)共线 ⟺ x₁y₂-x₂y₁=0。'},
{n:'向量垂直条件',c:'a⊥b ⟺ a·b=0 ⟺ x₁x₂+y₁y₂=0。'},
{n:'极化恒等式',c:'a·b=¼(|a+b|²-|a-b|²)。用于已知两边求中线或角度。'},
{n:'模的平方公式',c:'|a+b|²=|a|²+2a·b+|b|²；|a-b|²=|a|²-2a·b+|b|²。'},
{n:'共起点三向量定理',c:'OA、OB不共线，OP=x·OA+y·OB。①P在直线AB上 ⟺ x+y=1；②P在AB外 ⟺ x+y≠1。'},
{n:'三角形四心向量表示',c:'①重心G=(A+B+C)/3；②垂心H：HA·HB=HB·HC=HC·HA；③内心I=(aA+bB+cC)/(a+b+c)；④外心O：|OA|=|OB|=|OC|。'}
]);

addItems('解析几何',[
{n:'椭圆焦半径',c:'椭圆x²/a²+y²/b²=1，F₁(-c,0)，F₂(c,0)，P(x₀,y₀)。则PF₁=a+ex₀，PF₂=a-ex₀。'},
{n:'双曲线焦半径',c:'双曲线x²/a²-y²/b²=1右支上点P(x₀,y₀)，则PF₁=ex₀+a，PF₂=ex₀-a。'},
{n:'椭圆通径',c:'过焦点的垂直于长轴的弦长=2b²/a。'},
{n:'双曲线通径',c:'过焦点的垂直于实轴的弦长=2b²/a。'},
{n:'抛物线通径',c:'y²=2px过焦点的垂直对称轴的弦长=2p。'},
{n:'抛物线焦点弦',c:'y²=2px的焦点弦AB，A(x₁,y₁)，B(x₂,y₂)：①x₁x₂=p²/4，y₁y₂=-p²；②|AB|=x₁+x₂+p。'},
{n:'椭圆焦点三角形',c:'椭圆上点P与两焦点组成三角形，S=b²·tan(∠F₁PF₂/2)。'},
{n:'双曲线焦点三角形',c:'双曲线上点P与两焦点组成三角形，S=b²·cot(∠F₁PF₂/2)。'},
{n:'椭圆中点弦斜率',c:'椭圆中弦AB中点为M(x₀,y₀)，则 k_AB·k_OM=-b²/a²。'},
{n:'双曲线中点弦斜率',c:'双曲线中弦AB中点为M(x₀,y₀)，则 k_AB·k_OM=b²/a²。'},
{n:'抛物线中点弦斜率',c:'y²=2px中弦AB中点为M(x₀,y₀)，则 k_AB=p/y₀。'},
{n:'椭圆切点弦',c:'椭圆外一点P(x₀,y₀)作两切线切点A、B，则AB方程：x₀x/a²+y₀y/b²=1。'},
{n:'焦点弦倒数和',c:'椭圆过焦点F的弦AB，则 1/|AF|+1/|BF|=2a/b²。'}
]);

addItems('数列',[
{n:'等差数列片段和',c:'Sₙ、S₂ₙ-Sₙ、S₃ₙ-S₂ₙ 成等差数列，公差 n²d。'},
{n:'等比数列片段和',c:'q≠-1时，Sₙ、S₂ₙ-Sₙ、S₃ₙ-S₂ₙ 成等比数列，公比 qⁿ。'},
{n:'等差项和相等',c:'等差数列中，aₘ+aₙ=aₚ+aq ⟺ m+n=p+q。'},
{n:'等比项积相等',c:'等比数列中，aₘ·aₙ=aₚ·aq ⟺ m+n=p+q。'},
{n:'裂项公式',c:'①1/[n(n+1)]=1/n-1/(n+1)；②1/[n(n+k)]=(1/k)(1/n-1/(n+k))；③1/(√n+√(n+1))=√(n+1)-√n。'},
{n:'错位相减结论',c:'aₙ=n·qⁿ求和：Sₙ=q(1-qⁿ)/(1-q)²-nqⁿ⁺¹/(1-q)。'},
{n:'递推构造',c:'aₙ₊₁=p·aₙ+q（p≠1）→ 令bₙ=aₙ+q/(p-1)，{bₙ}为等比数列，公比p。'}
]);

addItems('三角函数',[
{n:'辅助角公式',c:'a·sinx+b·cosx=√(a²+b²)·sin(x+φ)，tanφ=b/a。'},
{n:'万能公式',c:'sinα=2tan(α/2)/[1+tan²(α/2)]；cosα=[1-tan²(α/2)]/[1+tan²(α/2)]。'},
{n:'半角公式',c:'sin(α/2)=±√[(1-cosα)/2]；cos(α/2)=±√[(1+cosα)/2]；tan(α/2)=(1-cosα)/sinα=sinα/(1+cosα)。'},
{n:'积化和差',c:'sinA·cosB=½[sin(A+B)+sin(A-B)]；cosA·cosB=½[cos(A+B)+cos(A-B)]。'},
{n:'和差化积',c:'sinA+sinB=2sin((A+B)/2)cos((A-B)/2)；cosA+cosB=2cos((A+B)/2)cos((A-B)/2)。'},
{n:'三角形内恒等式',c:'在△ABC中：①tanA+tanB+tanC=tanA·tanB·tanC；②sin2A+sin2B+sin2C=4sinA·sinB·sinC。'}
]);

addItems('不等式',[
{n:'均值不等式链',c:'√[(a²+b²)/2] ≥ (a+b)/2 ≥ √(ab) ≥ 2/(1/a+1/b)（a,b>0）。'},
{n:'柯西不等式',c:'(a₁²+a₂²)(b₁²+b₂²) ≥ (a₁b₁+a₂b₂)²。向量形式：(a·b)²≤|a|²|b|²。'},
{n:'权方和不等式',c:'a²/x+b²/y ≥ (a+b)²/(x+y)（x,y>0）。'},
{n:'三角不等式',c:'|a|-|b| ≤ |a±b| ≤ |a|+|b|。'},
{n:'切线不等式',c:'①lnx ≤ x-1（x>0）；②eˣ ≥ x+1（x∈R）；③eˣ ≥ ex。'},
{n:'对数平均不等式',c:'a,b>0且a≠b时，√(ab) < (a-b)/(lna-lnb) < (a+b)/2。'}
]);

addItems('函数与导数',[
{n:'切线放缩',c:'①eˣ≥x+1（当且仅当x=0取等）；②lnx≤x-1（当且仅当x=1取等）。'},
{n:'常用放缩',c:'①eˣ≥1+x+x²/2（x≥0）；②lnx≥1-1/x（x>0）；③ln(1+x)≤x（x>-1）。'},
{n:'函数对称中心',c:'若f(x)+f(2a-x)=2b，则f(x)关于点(a,b)中心对称。'},
{n:'函数对称轴',c:'若f(a+x)=f(a-x)，则f(x)关于x=a对称。'},
{n:'极值点偏移',c:'f(x)在x₀处有极值，f(x₁)=f(x₂)（x₁≠x₂），可用g(x)=f(x)-f(2x₀-x)判断x₁+x₂与2x₀的大小。'},
{n:'洛必达法则',c:'lim f(x)/g(x)在"0/0"或"∞/∞"型时=lim f′(x)/g′(x)。用于极限型问题。'}
]);

addItems('立体几何',[
{n:'三角形面积公式',c:'S=½ah=½ab·sinC=√[p(p-a)(p-b)(p-c)]（海伦公式，p=(a+b+c)/2）。'},
{n:'中线长公式',c:'AD为BC边中线，AD²=(2AB²+2AC²-BC²)/4。'},
{n:'角平分线定理',c:'AD平分∠A交BC于D，则 BD/DC=AB/AC。'},
{n:'射影定理',c:'直角三角形CD⊥AB于D，则 CD²=AD·BD，AC²=AD·AB，BC²=BD·AB。'}
]);
})();
