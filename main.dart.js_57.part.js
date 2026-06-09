((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,E,B={bnN:function bnN(d,e,f){this.a=d
this.b=e
this.c=f},
cvY(){return new B.u4(null)},
u4:function u4(d){this.a=d},
a3f:function a3f(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.x=_.w=!1
_.Q=!0
_.as=!1
_.c=_.a=null},
bFw:function bFw(d){this.a=d},
bFv:function bFv(d,e){this.a=d
this.b=e},
bFx:function bFx(d){this.a=d},
bFu:function bFu(d,e){this.a=d
this.b=e},
bFy:function bFy(d){this.a=d},
bFt:function bFt(d,e){this.a=d
this.b=e},
bFz:function bFz(d){this.a=d},
bFA:function bFA(d){this.a=d},
bFo:function bFo(d){this.a=d},
bFp:function bFp(d,e){this.a=d
this.b=e},
bFq:function bFq(d){this.a=d},
bFk:function bFk(d){this.a=d},
bFl:function bFl(d){this.a=d},
bFs:function bFs(d){this.a=d},
bFr:function bFr(){},
bFn:function bFn(d){this.a=d},
bFm:function bFm(){},
ah2:function ah2(d){this.a=d},
aaP:function aaP(d,e){this.c=d
this.a=e},
aaY:function aaY(){}},D
A=c[0]
C=c[2]
E=c[55]
B=a.updateHolder(c[8],B)
D=c[57]
B.bnN.prototype={
aD(){return A.v(["name",this.a,"email",this.b,"slug",this.c],y.w,y.b)},
ga7(d){return this.a}}
B.u4.prototype={
R(){var x=$.af().$1$0(y.r),w=$.aH()
return new B.a3f(x,new A.ej(C.b8,w),new A.ej(C.b8,w),new A.ej(C.b8,w))}}
B.a3f.prototype={
bpX(){var x=this
x.e.a5(0,new B.bFw(x))
x.f.a5(0,new B.bFx(x))
x.r.a5(0,new B.bFy(x))},
Ke(){var x=0,w=A.r(y.v),v=this,u,t,s,r
var $async$Ke=A.n(function(d,e){if(d===1)return A.o(e,w)
for(;;)switch(x){case 0:t=C.c.al(v.e.a.a)
s=C.c.al(v.f.a.a)
r=v.r.a.a
v.J(new B.bFz(v))
u=v.d
x=2
return A.k(u.Un(new B.bnN(t,s,r)),$async$Ke)
case 2:if(e){t=A.y("success")
A.ep(A.es(A.y("update_successfully_organization"),t,C.fl))
u.ld()}else{t=A.y("error")
A.ep(A.es(u.b,t,C.bA))}v.J(new B.bFA(v))
return A.p(null,w)}})
return A.q($async$Ke,w)},
ld(){var x=0,w=A.r(y.v),v,u=this,t,s,r,q
var $async$ld=A.n(function(d,e){if(d===1)return A.o(e,w)
for(;;)switch(x){case 0:u.J(new B.bFo(u))
t=u.d
x=3
return A.k(t.ld(),$async$ld)
case 3:s=e
if(u.c==null){x=1
break}if(s){t=t.e
if(t.gk(0)!=null){r=u.e
q=t.gk(0)
q=q==null?null:q.b
r.sb7(0,q==null?"":q)
q=u.f
t=t.gk(0)
t=t==null?null:t.f
q.sb7(0,t==null?"":t)
u.x=r.a.a.length!==0
u.y=q.a.a.length!==0
u.z=u.r.a.a.length!==0}}u.J(new B.bFp(u,s))
case 1:return A.p(v,w)}})
return A.q($async$ld,w)},
gafL(){var x=this
return x.alO(x.e.a.a)==null&&x.alN(x.f.a.a)==null},
alO(d){if(C.c.al(d).length===0)return A.y("cant_be_empty")
return null},
alN(d){var x=C.c.al(d)
if(x.length===0)return A.y("cant_be_empty")
return new A.ND().a1l(x)},
a3(){this.ag()
this.bpX()
$.a3.ry$.push(new B.bFq(this))},
n(){var x=this,w=x.e,v=w.T$=$.aH()
w.a1$=0
w=x.f
w.T$=v
w.a1$=0
w=x.r
w.T$=v
w.a1$=0
x.aq()},
B(d){var x=this,w=null,v=C.r.v(0,6),u=A.y("organization_setting_and_information"),t=y.u
u=A.b([new A.kB(new A.lP(C.V,E.h5),w),A.J(u,w,w,w,w,w,A.b3(d)===C.aj?A.e(d).ok.r:A.e(d).ok.w,C.W,w),C.ao],t)
if(x.Q)C.b.u(u,A.b([D.aK1],t))
else if(x.as)C.b.u(u,A.b([new A.fL(210,x.gUG(),!1,w,w)],t))
else C.b.u(u,A.b([A.a5(A.b([x.b_n(),C.aH],t),C.y,C.e,C.v,0,w)],t))
return A.eq(u,w,v,w,C.E,!1)},
b_n(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m="official_organization_name",l="official_organization_email",k="save_setting",j=o.c
j.toString
j=A.b3(j)
x=o.c
x.toString
w=A.b3(x)===C.AU
x=C.M.v(0,4)
v=o.c
v.toString
v=A.e(v).ax
u=v.to
if(u==null){u=v.q
v=u==null?v.k3:u}else v=u
v=A.bX(v,1)
u=$.am().v(0,2)
t=o.c
t.toString
t=A.e(t)
j=j===C.U||w
s=y.u
if(j){j=A.b([A.J(A.y(m),n,n,n,n,n,n,n,n),o.gasU(),A.J(A.y(l),n,n,n,n,n,n,n,n),o.gapG()],s)
if($.af().$1$0(y.n).iu(C.jx)){r=o.w||!o.gafL()?n:new B.bFk(o)
q=$.ey()
if(o.w){p=o.c
p.toString
p=A.hb(A.e(p).ax.b,14)}else p=A.J(A.y(k),n,n,n,n,n,n,n,n)
C.b.u(j,A.b([A.al(A.b([A.aI(A.fw(p,r,q),1)],s),C.h,C.e,C.f,0,n,n)],s))}j=A.a5(j,C.y,C.e,C.f,8,n)}else{j=A.y("edit_organization_information")
r=o.c
r.toString
r=A.b([A.J(j,n,n,n,n,n,A.e(r).ok.w,n,n),A.al(A.b([new A.eD(1,C.aY,A.a5(A.b([A.J(A.y(m),n,n,n,n,n,n,n,n),o.gasU()],s),C.y,C.e,C.f,8,n),n),new A.eD(1,C.aY,A.a5(A.b([A.J(A.y(l),n,n,n,n,n,n,n,n),o.gapG()],s),C.y,C.e,C.f,8,n),n)],s),C.y,C.e,C.f,12,n,n)],s)
if($.af().$1$0(y.n).iu(C.jx)){j=o.w||!o.gafL()?n:new B.bFl(o)
q=$.ey().bbV(new A.bj(D.aPy,y.l))
if(o.w){p=o.c
p.toString
p=A.hb(A.e(p).ax.b,14)}else p=A.J(A.y(k),n,n,n,n,n,n,n,n)
C.b.u(r,A.b([A.al(A.b([A.fw(p,j,q)],s),C.h,C.e,C.f,0,n,n)],s))}j=A.a5(r,C.y,C.e,C.f,12,n)}return A.a4(n,j,C.i,n,n,new A.ae(t.ax.k2,n,v,u,n,n,C.m),n,n,n,n,x,n,n,n)},
gasU(){var x,w,v=this,u=null,t=$.af().$1$0(y.n).iu(C.jx),s=v.c
s.toString
x=v.e
w=A.y("organization_name_controller_hint")
return A.pb(!1,u,x,u,u,t,v.alO(x.a.a),u,u,w,C.c_,u,u,1,new B.bFs(v),u,s,u,u,u)},
gapG(){var x,w=this,v=null,u=$.af().$1$0(y.n).iu(C.jx),t=w.c
t.toString
x=w.f
return A.pb(!1,v,x,v,v,u,w.alN(x.a.a),v,v,"example@example.com",C.m4,v,v,1,new B.bFn(w),v,t,v,v,v)}}
B.ah2.prototype={
B(d){var x=null,w=C.M.v(0,2),v=A.e(d).ax,u=v.d
v=A.bX(u==null?v.b:u,1)
u=$.am().v(0,3)
return new B.aaP(A.a5(A.b([A.a4(x,x,C.i,x,D.Wd,new A.ae(A.e(d).ax.k2,x,v,u,x,x,C.m),x,x,x,w,C.r.v(0,4),x,x,x)],y.u),C.h,C.e,C.v,0,x),x)}}
B.aaP.prototype={}
B.aaY.prototype={
B(d){var x=A.e(d).ax,w=x.RG
x=w==null?x.k2:w
$.aX()
return A.c_M(x,this.c,new A.amu($.cY().a).UT(),!0,A.e(d).ax.k2,C.rI)}}
var z=a.updateTypes(["a6<~>()"])
B.bFw.prototype={
$0(){var x=this.a,w=x.e.a.a.length!==0
if(w!==x.x)x.J(new B.bFv(x,w))},
$S:0}
B.bFv.prototype={
$0(){this.a.x=this.b},
$S:0}
B.bFx.prototype={
$0(){var x=this.a,w=x.f.a.a.length!==0
if(w!==x.y)x.J(new B.bFu(x,w))},
$S:0}
B.bFu.prototype={
$0(){this.a.y=this.b},
$S:0}
B.bFy.prototype={
$0(){var x=this.a,w=x.r.a.a.length!==0
if(w!==x.z)x.J(new B.bFt(x,w))},
$S:0}
B.bFt.prototype={
$0(){this.a.z=this.b},
$S:0}
B.bFz.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bFA.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bFo.prototype={
$0(){var x=this.a
x.Q=!0
x.as=!1},
$S:0}
B.bFp.prototype={
$0(){var x=this.a
x.Q=!1
x.as=!this.b},
$S:0}
B.bFq.prototype={
$1(d){this.a.ld()},
$S:2}
B.bFk.prototype={
$0(){return this.a.Ke()},
$S:0}
B.bFl.prototype={
$0(){return this.a.Ke()},
$S:0}
B.bFs.prototype={
$1(d){return this.a.J(new B.bFr())},
$S:11}
B.bFr.prototype={
$0(){},
$S:0}
B.bFn.prototype={
$1(d){return this.a.J(new B.bFm())},
$S:11}
B.bFm.prototype={
$0(){},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.a3f.prototype,"gUG","ld",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bnN,A.C)
x(B.u4,A.L)
x(B.a3f,A.O)
w(A.fj,[B.bFw,B.bFv,B.bFx,B.bFu,B.bFy,B.bFt,B.bFz,B.bFA,B.bFo,B.bFp,B.bFk,B.bFl,B.bFr,B.bFm])
w(A.eN,[B.bFq,B.bFs,B.bFn])
w(A.ac,[B.ah2,B.aaY])
x(B.aaP,B.aaY)})()
A.eu(b.typeUniverse,JSON.parse('{"u4":{"L":[],"f":[],"j":[]},"a3f":{"O":["u4"]},"ah2":{"ac":[],"f":[],"j":[]},"aaP":{"ac":[],"f":[],"j":[]},"aaY":{"ac":[],"f":[],"j":[]}}'))
var y={u:A.X("B<f>"),r:A.X("r0"),n:A.X("r4"),w:A.X("h"),l:A.X("bj<S?>"),b:A.X("@"),v:A.X("~")};(function constants(){D.Wd=new A.at(0,1/0,219,1/0)
D.aK1=new B.ah2(null)
D.aPy=new A.S(220,48)})()};
(a=>{a["Lbv/zNQVMgAFEVRNp+YL+5FJ5rI="]=a.current})($__dart_deferred_initializers__);