((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={bj7:function bj7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},bj8:function bj8(){},bj9:function bj9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},bj6:function bj6(){},ald:function ald(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},MD:function MD(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.v_$=d
_.cH$=e
_.aH$=f
_.a=null},aiY:function aiY(d,e,f,g,h,i,j){var _=this
_.dL=d
_.y1=e
_.y2=f
_.cZ$=g
_.ab$=h
_.d_$=i
_.b=_.dy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
c6D(d,e,f,g,h,i){var x=null
return new A.adt(d,new B.AD(e,f,!0,!0,!0,B.bWd(),x),g,C.E,!1,x,x,h,x,!0,x,0,x,x,f,C.h6,C.a0,x,x,C.L,C.br,x)},
adt:function adt(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
_.to=d
_.x1=e
_.dx=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q
_.at=r
_.ax=s
_.ay=t
_.ch=u
_.CW=v
_.cx=w
_.cy=x
_.a=a0},
alc:function alc(d,e,f){this.f=d
this.d=e
this.a=f}}
B=c[0]
C=c[2]
A=a.updateHolder(c[31],A)
A.bj7.prototype={
ay8(d){var x=this.c
return d.Bf(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.b.bj(B.b(["scrollOffset: "+B.u(x.a),"crossAxisOffset: "+B.u(x.b),"mainAxisExtent: "+B.u(x.c),"crossAxisExtent: "+B.u(x.d)],y.x),", ")+")"}}
A.bj8.prototype={}
A.bj9.prototype={
ayI(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.jc(d/x)-1)
return 0},
aRc(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
UI(d){var x=this,w=x.a,v=C.j.b4(d,w)
return new A.bj7(C.j.jB(d,w)*x.b,x.aRc(v*x.c),x.d,x.e)},
ao0(d){var x
if(d===0)return 0
x=this.b
return x*(C.j.jB(d-1,this.a)+1)-(x-this.d)}}
A.bj6.prototype={}
A.ald.prototype={
a7c(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.bj9(v,t+x.b,u+w,t,u,B.HB(d.x))}}
A.MD.prototype={
j(d){return"crossAxisOffset="+B.u(this.w)+"; "+this.a9J(0)}}
A.aiY.prototype={
fE(d){if(!(d.b instanceof A.MD))d.b=new A.MD(!1,null,null)},
sV2(d){var x,w,v=this
if(v.dL===d)return
x=!0
if(B.P(d)===B.P(v.dL)){w=v.dL
if(w.a===d.a)if(w.b===d.b)if(w.c===d.c)x=w.d!==d.d}if(x)v.ad()
v.dL=d},
xt(d){var x=d.b
x.toString
x=y.t.a(x).w
x.toString
return x},
bQ(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.z.a(B.N.prototype.gZ.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.dL.a7c(a8)
t=u.b
s=t>1e-10?u.a*C.d.jB(w,t):0
r=isFinite(v)?u.ayI(v):a7
if(a6.ab$!=null){q=a6.anr(s)
a6.mq(q,r!=null?a6.ans(r):0)}else a6.mq(0,0)
p=u.UI(s)
if(a6.ab$==null)if(!a6.P1(s,p.a)){o=u.ao0(a9.gBq())
a6.dy=B.kf(a7,!1,a7,a7,o,0,0,0,o,a7)
a9.pS()
return}n=p.a
m=n+p.c
t=a6.ab$
t.toString
t=t.b
t.toString
l=y.c
t=l.a(t).b
t.toString
k=t-1
t=y.t
j=a7
for(;k>=s;--k){i=u.UI(k)
h=i.c
g=a6.arD(a8.Bf(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.ab$
h.toString
h.hJ(p.ay8(a8))
j=a6.ab$
h=j.b
h.toString
t.a(h)
h.a=n
h.w=p.b}h=j.b
h.toString
h=l.a(h).b
h.toString
k=h+1
h=B.z(a6).h("aN.1")
f=r!=null
for(;;){if(!(!f||k<=r)){d=!1
break}i=u.UI(k)
e=i.c
a0=a8.Bf(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).aH$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.arC(a0,j)
if(g==null){d=!0
break}}else g.hJ(a0)
a1=g.b
a1.toString
t.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
m=Math.max(m,a2+e);++k
j=g}t=a6.d_$
t.toString
t=t.b
t.toString
t=l.a(t).b
t.toString
a3=d?m:a9.QN(a8,s,t,n,m)
a4=a6.xm(a8,Math.min(x,n),m)
a5=a6.Bl(a8,n,m)
a6.dy=B.kf(a5,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7)
if(a3===m)a9.R8=!0
a9.pS()}}
A.adt.prototype={
Pv(d){return new A.alc(this.to,this.x1,null)}}
A.alc.prototype={
b_(d){var x=new A.aiY(this.f,y.v.a(d),B.w(y.e,y.g),0,null,null,B.aK(y.d))
x.aY()
return x},
b5(d,e){e.sV2(this.f)},
a39(d,e,f,g,h){var x,w
this.aFi(d,e,f,g,h)
x=this.f.a7c(d)
w=this.d.gBQ()
w.toString
w=x.ao0(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.bj7,A.bj8,A.bj6])
w(A.bj9,A.bj8)
w(A.ald,A.bj6)
w(A.MD,B.i3)
w(A.aiY,B.ow)
w(A.adt,B.Ct)
w(A.alc,B.lS)})()
B.eu(b.typeUniverse,JSON.parse('{"MD":{"i3":[],"uy":[],"hH":["U"],"po":[],"eF":[]},"aiY":{"ow":[],"eG":[],"aN":["U","i3"],"N":[],"j":[],"b_":[],"aN.1":"i3","aN.0":"U"},"adt":{"ac":[],"f":[],"j":[]},"alc":{"lS":[],"b1":[],"f":[],"j":[]}}'))
var y={d:B.X("hg"),x:B.X("B<h>"),g:B.X("U"),z:B.X("pO"),t:B.X("MD"),v:B.X("AE"),c:B.X("i3"),e:B.X("i")}};
(a=>{a["njO4JVzHDc4P9Ni9FEZlSAS//d8="]=a.current})($__dart_deferred_initializers__);