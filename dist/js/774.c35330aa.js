"use strict";(self["webpackChunkhome"]=self["webpackChunkhome"]||[]).push([[774],{1817:(e,t,o)=>{var n=o(2109),a=o(9781),i=o(7854),s=o(1702),r=o(2597),l=o(614),c=o(7976),d=o(1340),u=o(7045),p=o(9920),g=i.Symbol,m=g&&g.prototype;if(a&&l(g)&&(!("description"in m)||void 0!==g().description)){var w={},h=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),t=c(m,this)?new g(e):void 0===e?g():g(e);return""===e&&(w[t]=!0),t};p(h,g),h.prototype=m,m.constructor=h;var b="Symbol(test)"==String(g("test")),f=s(m.valueOf),y=s(m.toString),_=/^Symbol\((.*)\)[^)]+$/,v=s("".replace),k=s("".slice);u(m,"description",{configurable:!0,get:function(){var e=f(this);if(r(w,e))return"";var t=y(e),o=b?k(t,7,-1):v(t,_,"$1");return""===o?void 0:o}}),n({global:!0,constructor:!0,forced:!0},{Symbol:h})}},2010:(e,t,o)=>{o.d(t,{o:()=>s});var n=o(9876),a=o(9895);const i=(0,a.fo)("Geolocation",{web:()=>o.e(642).then(o.bind(o,6642)).then((e=>new e.GeolocationWeb))}),s=(0,n.Q_)("location",{state:()=>({permission:"",location:null}),getters:{isPermitted:e=>!!e.location},actions:{async initLocation(){await this.checkLocationPermission()},getLocation(){return new Promise(((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(this.successCallback,this.errorCallback):(this.permission="denied",console.log("Geolocation is not supported by this browser."))}))},async checkLocationPermission(){const e=await i.checkPermissions();this.permission=e,"denied"===e.location?console.log("Location permission denied."):"granted"===e.location?(console.log("Location permission granted."),this.getCurrentLocation()):(console.log("Location permission not requested. Requesting permission now."),this.requestLocationPermission()),this.getCurrentLocation()},async requestLocationPermission(){const e=await i.requestPermissions();this.permission=e,"granted"===e.location?(console.log("Location permission granted."),this.getCurrentLocation()):console.log("Location permission denied.")},async getCurrentLocation(){const e=await i.getCurrentPosition();this.location=e},async successCallback(e){const t=e.coords.latitude,o=e.coords.longitude,n={coords:{latitude:t,longitude:o}};this.location=n,console.log("Latitude: "+t+" Longitude: "+o)},async errorCallback(e){this.permission="denied",console.log("Unable to retrieve your location due to "+e.code+": "+e.message)}}})},2457:(e,t,o)=>{o.r(t),o.d(t,{default:()=>P});o(1817);var n=o(6252),a=o(3577);const i=o.p+"img/panicbutton.0c25e0f5.png",s=e=>((0,n.dD)("data-v-13e596a5"),e=e(),(0,n.Cn)(),e),r={style:{width:"100%",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column",height:"35vh"}},l=s((()=>(0,n._)("img",{src:i,style:{display:"block",margin:"0 auto",width:"220px","border-radius":"14px"},alt:"image here"},null,-1))),c={style:{width:"100%"}},d=s((()=>(0,n._)("h3",{style:{"font-weight":"900"}},"MY REPORTS",-1))),u={style:{"font-size":"10px",background:"#00000031",padding:"5px","border-radius":"8px","font-weight":"900",color:"#000"}},p={style:{"margin-left":"10px","font-size":"10px",background:"#e1f3fb",padding:"5px","border-radius":"8px","font-weight":"900",color:"#1ca5df"}},g={style:{"margin-top":"10px","text-transform":"capitalize"}},m={key:0},w=["src"],h={style:{"margin-top":"10px",display:"flex","align-items":"center"}},b=s((()=>(0,n._)("span",{style:{color:"grey"}},"No Reports Found",-1)));function f(e,t,o,i,s,f){const y=(0,n.up)("ion-menu-button"),_=(0,n.up)("ion-buttons"),v=(0,n.up)("ion-title"),k=(0,n.up)("ion-toolbar"),C=(0,n.up)("ion-header"),x=(0,n.up)("ion-card-header"),L=(0,n.up)("ion-card"),W=(0,n.up)("ion-icon"),I=(0,n.up)("ion-label"),P=(0,n.up)("ion-item"),S=(0,n.up)("ion-list"),z=(0,n.up)("ion-card-content"),H=(0,n.up)("ion-content"),q=(0,n.up)("ion-page");return(0,n.wg)(),(0,n.j4)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(C,{translucent:!0},{default:(0,n.w5)((()=>[(0,n.Wm)(k,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,{slot:"start"},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{color:"danger"})])),_:1}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1})])),_:1})])),_:1}),(0,n.Wm)(H,{fullscreen:!0},{default:(0,n.w5)((()=>[(0,n.Wm)(C,{collapse:"condense"},{default:(0,n.w5)((()=>[(0,n.Wm)(k,null,{default:(0,n.w5)((()=>[(0,n.Wm)(v,{size:"large"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1})])),_:1})])),_:1}),(0,n._)("div",r,[(0,n.Wm)(L,{style:{"border-radius":"15px","box-shadow":"none",width:"93%"},onClick:i.panic},{default:(0,n.w5)((()=>[(0,n.Wm)(x,null,{default:(0,n.w5)((()=>[l])),_:1})])),_:1},8,["onClick"])]),(0,n._)("div",c,[(0,n.Wm)(L,{style:{"border-radius":"15px","box-shadow":"none",width:"93%"}},{default:(0,n.w5)((()=>[(0,n.Wm)(x),(0,n.Wm)(z,null,{default:(0,n.w5)((()=>[d,(0,n.Wm)(S,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.reports,(e=>((0,n.wg)(),(0,n.j4)(P,{key:e.id},{default:(0,n.w5)((()=>[(0,n.Wm)(I,null,{default:(0,n.w5)((()=>[(0,n._)("span",u,(0,a.zw)(e.category.category),1),(0,n._)("span",p,(0,a.zw)(new Date(e.created_at).toLocaleDateString()+" | "+new Date(e.created_at).toLocaleTimeString()),1),(0,n._)("p",g,(0,a.zw)(e.description),1),e.images.length>0?((0,n.wg)(),(0,n.iD)("div",m,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.images,(e=>((0,n.wg)(),(0,n.iD)("img",{style:{margin:"10px",width:"100px","border-radius":"20px"},key:e.id,src:i.authStore.base_url+e.image,alt:""},null,8,w)))),128))])):(0,n.kq)("",!0),(0,n._)("p",h,[(0,n.Wm)(W,{icon:i.locationIcon},null,8,["icon"]),(0,n.Uk)((0,a.zw)(e.location),1)])])),_:2},1024)])),_:2},1024)))),128)),0==i.reports.length?((0,n.wg)(),(0,n.j4)(P,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(I,null,{default:(0,n.w5)((()=>[b])),_:1})])),_:1})):(0,n.kq)("",!0)])),_:1})])),_:1})])),_:1})])])),_:1})])),_:1})}var y=o(8587),_=o(8903),v=o(2262),k=o(9865),C=o(2010),x=o(6154);o(9642),o(4571);const L={name:"app",data:function(){return{myFiles:[]}},setup(){const e=(0,k.t)(),t=(0,C.o)(),o=(0,v.iH)(""),a=(0,v.iH)(null),i=(0,v.iH)(!1),s=(0,v.iH)([]);let r=null;const l=(0,v.qj)({location:location.value});(0,n.bv)((async()=>{const o=await y.G0.create({message:"Updating My Reports...",spinner:"bubbles"});await o.present(),t.isPermitted||t.initLocation(),await x.Z.get("/api/v1/report/my-reports",{headers:{Authorization:`Bearer ${e.token}`}}).then((async e=>{s.value=e.data.reports,console.log(e.data.reports),o.dismiss()})).catch((async e=>{a.value=e.response.data.error,console.log(e.response.data),o.dismiss(),r=await y.Cl.create({header:"Error",message:e.response.data.message,buttons:["OK"]}),await r.present()}))}));const c=async()=>{const n=await y.G0.create({message:"Sending Panic Alert...",spinner:"bubbles"});await n.present(),o.value=t.permission,"denied"==o.value?(r=await y.Cl.create({header:"Location Permission Denied",message:"Please enable location permission to use this feature.",buttons:["OK"]}),await r.present()):await x.Z.post("/api/v1/report/panic_mode",{location:t.location},{headers:{Authorization:`Bearer ${e.token}`}}).then((async e=>{console.log(e.data),l.location="",i.value=!0,n.dismiss(),r=await y.Cl.create({header:"Panic Alert Sent ✅",message:"Your distress signal has been sent to the nearest police station. Please wait for assistance.",buttons:["OK"]}),await r.present()})).catch((async e=>{a.value=e.response.data.error,console.log(e.response.data),n.dismiss(),r=await y.Cl.create({header:"Failed Panic Alert",message:e.response.data.message,buttons:["OK"]}),await r.present()})),n.dismiss()};return{panic:c,reports:s,locationIcon:_.xhW,authStore:e}},methods:{},components:{IonButtons:y.Sm,IonContent:y.W2,IonHeader:y.Gu,IonMenuButton:y.fG,IonPage:y._i,IonTitle:y.wd,IonToolbar:y.sr,IonCard:y.PM,IonCardHeader:y.Zi,IonCardContent:y.FN,IonItem:y.Ie,IonLabel:y.Q$,IonList:y.q_,IonIcon:y.gu}};var W=o(3744);const I=(0,W.Z)(L,[["render",f],["__scopeId","data-v-13e596a5"]]),P=I}}]);
//# sourceMappingURL=774.c35330aa.js.map