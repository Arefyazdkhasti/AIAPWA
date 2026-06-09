((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,G,H,D,E,I,C={
cw9(d){return new C.ub(d,null)},
ub:function ub(d,e){this.c=d
this.a=e},
a3q:function a3q(){this.c=this.a=null},
bH1:function bH1(d){this.a=d}},F
B=c[0]
A=c[2]
G=c[50]
H=c[74]
D=c[55]
E=c[44]
I=c[43]
C=a.updateHolder(c[19],C)
F=c[77]
C.ub.prototype={
R(){return new C.a3q()}}
C.a3q.prototype={
yN(){$.kW().pe("p")
var x=this.a.c
if(x.d===A.oN)B.ee(x.b===A.i7?B.v(["organizationId",x.e],y.g,y.f):null,A.ae,A.ax,"chat")
else new B.uP().Cu("aia://aiaplus.com/chat")},
B(d){var x=null
return B.yw(x,A.z,x,!0,x,x,B.y("payment_status"),x,x,new C.bH1(this),x,x,x,!0,x,!1,!1,!0,!1,x,!1,x,x,x)},
gaCo(){var x,w=this,v=null,u=w.c
u.toString
x=B.b3(u)===A.aj?80:60
switch(w.a.c.b){case A.i7:w.c.toString
return B.bd(A.f4,(B.bQ($.aX()).ax.a===A.A?A.a3:A.a2).b,v,x,v)
case A.jw:w.c.toString
return B.bd(H.tH,(B.bQ($.aX()).ax.a===A.A?A.a3:A.a2).as,v,x,v)
case A.oX:w.c.toString
return B.bd(F.a5U,(B.bQ($.aX()).ax.a===A.A?A.a3:A.a2).fx,v,x,v)
case null:case void 0:return A.z}},
gbnx(){var x,w,v,u,t=this,s=null,r=t.c
r.toString
r=B.b3(r)
x=t.a.c.b
if(x===A.i7){t.c.toString
w=(B.bQ($.aX()).ax.a===A.A?A.a3:A.a2).b}else{v=t.c
if(x===A.jw){v.toString
x=(B.bQ($.aX()).ax.a===A.A?A.a3:A.a2).as
w=x}else{v.toString
x=(B.bQ($.aX()).ax.a===A.A?A.a3:A.a2).fx
w=x}}x=t.c
if(r===A.aj){x.toString
r=B.e(x).ok.r
u=r==null?s:r.W(w)}else{x.toString
r=B.e(x).ok.w
u=r==null?s:r.W(w)}switch(t.a.c.b){case A.i7:return B.J(B.y("payment_success"),s,s,s,s,s,u,A.ag,s)
case A.jw:return B.J(B.y("payment_failed"),s,s,s,s,s,u,A.ag,s)
case A.oX:return B.J(B.y("payment_waiting"),s,s,s,s,s,u,A.ag,s)
case null:case void 0:return A.z}},
gbnw(){var x,w,v=null,u=this.c
u.toString
u=B.e(u).ok.y
if(u==null)x=v
else{w=this.c
w.toString
x=u.xB(B.e(w).ax.k3,2)}switch(this.a.c.b){case A.i7:return B.J(B.y("payment_message_success"),v,v,v,v,v,x,A.ag,v)
case A.jw:return B.J(B.y("payment_message_failed"),v,v,v,v,v,x,A.ag,v)
case A.oX:return B.J(B.y("payment_message_waiting"),v,v,v,v,v,x,A.ag,v)
case null:case void 0:return A.z}}}
var z=a.updateTypes(["~()"])
C.bH1.prototype={
$1(d){var x,w,v=null,u=A.r.v(0,4),t=A.r.v(0,6),s=this.a,r=s.gaCo(),q=s.gbnx(),p=y.h,o=B.aw(d,v,p).w,n=$.am().v(0,2),m=s.a.c.b
if(m===A.i7){m=(B.bQ($.aX()).ax.a===A.A?A.a3:A.a2).d
m=m==null?v:m.aZ(0.3)}else if(m===A.jw)m=(B.bQ($.aX()).ax.a===A.A?A.a3:A.a2).z
else m=(B.bQ($.aX()).ax.a===A.A?A.a3:A.a2).dy
x=A.M.v(0,4)
w=y.e
o=B.b([A.lZ,r,A.C,q,A.wA,B.a4(v,s.gbnw(),A.i,v,v,new B.ae(m,v,v,n,v,v,A.m),v,v,v,v,x,v,v,o.a.a),A.wA],w)
if(s.a.c.c!=null){r=B.y("payment_date_time")
q=s.a.c.c
q.toString
q=B.bF(I.SH(new B.bq(B.pe(A.d.dr(q),0,!0),0,!0).K_(),!0))
n=B.e(d).ok.y
A.b.u(o,B.b([E.fV(!1,!1,!0,r,v,B.J(q,v,v,v,v,v,n==null?v:n.W(B.e(d).ax.k3),v,v)),A.C],w))}if(s.a.c.a!=null){r=B.y("payment_tracking_code")
q=s.a.c.a
q=q==null?v:B.bF(q)
if(q==null)q=""
n=B.e(d).ok.y
A.b.u(o,B.b([E.fV(!1,!1,!0,r,v,B.J(q,v,v,v,v,v,n==null?v:n.W(B.e(d).ax.k3),v,v))],w))}o.push(D.h5)
r=B.aw(d,v,p).w
q=$.ey()
o.push(new B.ax(r.a.a,v,B.fw(B.J(B.y("payment_back_to_aia"),v,v,v,v,v,v,v,v),s.gblA(),q),v))
o.push(D.h5)
return B.eq(B.b([B.c5(B.a4(v,B.a5(o,A.h,A.e,A.f,0,v),A.i,v,G.cd,v,v,v,v,v,t,v,v,v),v,v)],w),v,u,A.de,A.E,!1)},
$S:169};(function installTearOffs(){var x=a._instance_0u
x(C.a3q.prototype,"gblA","yN",0)})();(function inheritance(){var x=a.inherit
x(C.ub,B.L)
x(C.a3q,B.O)
x(C.bH1,B.eN)})()
B.eu(b.typeUniverse,JSON.parse('{"ub":{"L":[],"f":[],"j":[]},"a3q":{"O":["ub"]}}'))
var y={e:B.X("B<f>"),h:B.X("jg"),g:B.X("h"),f:B.X("h?")};(function constants(){F.a5U=new B.b2(60847,"IconSax",null,!1)})()};
(a=>{a["NeH1f/BRoOuTMD8b09ZDvVh/Si0="]=a.current})($__dart_deferred_initializers__);