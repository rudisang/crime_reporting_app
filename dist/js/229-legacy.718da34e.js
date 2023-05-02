(self["webpackChunkhome"]=self["webpackChunkhome"]||[]).push([[229],{1817:(e,t,i)=>{"use strict";var o=i(2109),n=i(9781),a=i(7854),r=i(1702),s=i(2597),l=i(614),c=i(7976),u=i(1340),d=i(7045),p=i(9920),m=a.Symbol,f=m&&m.prototype;if(n&&l(m)&&(!("description"in f)||void 0!==m().description)){var E={},_=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),t=c(f,this)?new m(e):void 0===e?m():m(e);return""===e&&(E[t]=!0),t};p(_,m),_.prototype=f,f.constructor=_;var g="Symbol(test)"==String(m("test")),I=r(f.valueOf),h=r(f.toString),L=/^Symbol\((.*)\)[^)]+$/,w=r("".replace),v=r("".slice);d(f,"description",{configurable:!0,get:function(){var e=I(this);if(s(E,e))return"";var t=h(e),i=g?v(t,7,-1):w(t,L,"$1");return""===i?void 0:i}}),o({global:!0,constructor:!0,forced:!0},{Symbol:_})}},8515:function(e){
/*!
 * FilePondPluginFileEncode 2.1.10
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
(function(t,i){e.exports=i()})(0,(function(){"use strict";var e=function(){self.onmessage=function(t){e(t.data.message,(function(e){self.postMessage({id:t.data.id,message:e})}))};var e=function(e,t){var i=e.file,o=new FileReader;o.onloadend=function(){t(o.result.replace("data:","").replace(/^.+,/,""))},o.readAsDataURL(i)}},t=function(t){var i=t.addFilter,o=t.utils,n=o.Type,a=o.createWorker,r=o.createRoute,s=o.isFile,l=function(t){var i=t.name,o=t.file;return new Promise((function(t){var n=a(e);n.post({file:o},(function(e){t({name:i,data:e}),n.terminate()}))}))},c=[];return i("DID_CREATE_ITEM",(function(e,t){var i=t.query;i("GET_ALLOW_FILE_ENCODE")&&(e.extend("getFileEncodeBase64String",(function(){return c[e.id]&&c[e.id].data})),e.extend("getFileEncodeDataURL",(function(){return"data:".concat(e.fileType,";base64,").concat(c[e.id].data)})))})),i("SHOULD_PREPARE_OUTPUT",(function(e,t){var i=t.query;return new Promise((function(e){e(i("GET_ALLOW_FILE_ENCODE"))}))})),i("COMPLETE_PREPARE_OUTPUT",(function(e,t){var i=t.item,o=t.query;return new Promise((function(t){if(!o("GET_ALLOW_FILE_ENCODE")||!s(e)&&!Array.isArray(e))return t(e);c[i.id]={metadata:i.getMetadata(),data:null},Promise.all((e instanceof Blob?[{name:null,file:e}]:e).map(l)).then((function(o){c[i.id].data=e instanceof Blob?o[0].data:o,t(e)}))}))})),i("CREATE_VIEW",(function(e){var t=e.is,i=e.view,o=e.query;t("file-wrapper")&&o("GET_ALLOW_FILE_ENCODE")&&i.registerWriter(r({DID_PREPARE_OUTPUT:function(e){var t=e.root,i=e.action;if(!o("IS_ASYNC")){var n=o("GET_ITEM",i.id);if(n){var a=c[n.id],r=a.metadata,s=a.data,l=JSON.stringify({id:n.id,name:n.file.name,type:n.file.type,size:n.file.size,metadata:r,data:s});t.ref.data?t.ref.data.value=l:t.dispatch("DID_DEFINE_VALUE",{id:n.id,value:l})}}},DID_REMOVE_ITEM:function(e){var t=e.action,i=o("GET_ITEM",t.id);i&&delete c[i.id]}}))})),{options:{allowFileEncode:[!0,n.BOOLEAN]}}},i="undefined"!==typeof window&&"undefined"!==typeof window.document;return i&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:t})),t}))},8236:function(e){
/*!
 * FilePondPluginFileValidateSize 2.2.8
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
(function(t,i){e.exports=i()})(0,(function(){"use strict";var e=function(e){var t=e.addFilter,i=e.utils,o=i.Type,n=i.replaceInString,a=i.toNaturalFileSize;return t("ALLOW_HOPPER_ITEM",(function(e,t){var i=t.query;if(!i("GET_ALLOW_FILE_SIZE_VALIDATION"))return!0;var o=i("GET_MAX_FILE_SIZE");if(null!==o&&e.size>o)return!1;var n=i("GET_MIN_FILE_SIZE");return!(null!==n&&e.size<n)})),t("LOAD_FILE",(function(e,t){var i=t.query;return new Promise((function(t,o){if(!i("GET_ALLOW_FILE_SIZE_VALIDATION"))return t(e);var r=i("GET_FILE_VALIDATE_SIZE_FILTER");if(r&&!r(e))return t(e);var s=i("GET_MAX_FILE_SIZE");if(null!==s&&e.size>s)o({status:{main:i("GET_LABEL_MAX_FILE_SIZE_EXCEEDED"),sub:n(i("GET_LABEL_MAX_FILE_SIZE"),{filesize:a(s,".",i("GET_FILE_SIZE_BASE"),i("GET_FILE_SIZE_LABELS",i))})}});else{var l=i("GET_MIN_FILE_SIZE");if(null!==l&&e.size<l)o({status:{main:i("GET_LABEL_MIN_FILE_SIZE_EXCEEDED"),sub:n(i("GET_LABEL_MIN_FILE_SIZE"),{filesize:a(l,".",i("GET_FILE_SIZE_BASE"),i("GET_FILE_SIZE_LABELS",i))})}});else{var c=i("GET_MAX_TOTAL_FILE_SIZE");if(null!==c){var u=i("GET_ACTIVE_ITEMS").reduce((function(e,t){return e+t.fileSize}),0);if(u>c)return void o({status:{main:i("GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED"),sub:n(i("GET_LABEL_MAX_TOTAL_FILE_SIZE"),{filesize:a(c,".",i("GET_FILE_SIZE_BASE"),i("GET_FILE_SIZE_LABELS",i))})}})}t(e)}}}))})),{options:{allowFileSizeValidation:[!0,o.BOOLEAN],maxFileSize:[null,o.INT],minFileSize:[null,o.INT],maxTotalFileSize:[null,o.INT],fileValidateSizeFilter:[null,o.FUNCTION],labelMinFileSizeExceeded:["File is too small",o.STRING],labelMinFileSize:["Minimum file size is {filesize}",o.STRING],labelMaxFileSizeExceeded:["File is too large",o.STRING],labelMaxFileSize:["Maximum file size is {filesize}",o.STRING],labelMaxTotalFileSizeExceeded:["Maximum total size exceeded",o.STRING],labelMaxTotalFileSize:["Maximum total file size is {filesize}",o.STRING]}}},t="undefined"!==typeof window&&"undefined"!==typeof window.document;return t&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:e})),e}))},2010:(e,t,i)=>{"use strict";i.d(t,{o:()=>r});var o=i(9876),n=i(9895);const a=(0,n.fo)("Geolocation",{web:()=>i.e(642).then(i.bind(i,6642)).then((e=>new e.GeolocationWeb))}),r=(0,o.Q_)("location",{state:()=>({permission:"",location:null}),getters:{isPermitted:e=>!!e.location},actions:{async initLocation(){await this.checkLocationPermission()},getLocation(){return new Promise(((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(this.successCallback,this.errorCallback):(this.permission="denied",console.log("Geolocation is not supported by this browser."))}))},async checkLocationPermission(){const e=await a.checkPermissions();this.permission=e,"denied"===e.location?console.log("Location permission denied."):"granted"===e.location?(console.log("Location permission granted."),this.getCurrentLocation()):(console.log("Location permission not requested. Requesting permission now."),this.requestLocationPermission()),this.getCurrentLocation()},async requestLocationPermission(){const e=await a.requestPermissions();this.permission=e,"granted"===e.location?(console.log("Location permission granted."),this.getCurrentLocation()):console.log("Location permission denied.")},async getCurrentLocation(){const e=await a.getCurrentPosition();this.location=e},async successCallback(e){const t=e.coords.latitude,i=e.coords.longitude,o={coords:{latitude:t,longitude:i}};this.location=o,console.log("Latitude: "+t+" Longitude: "+i)},async errorCallback(e){this.permission="denied",console.log("Unable to retrieve your location due to "+e.code+": "+e.message)}}})},9229:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>N});i(1817);var o=i(6252),n=i(3577),a=i(6501);const r=e=>((0,o.dD)("data-v-76682724"),e=e(),(0,o.Cn)(),e),s={style:{width:"98%",margin:"0 auto"}},l={key:0,class:"error-container"},c=r((()=>(0,o._)("img",{src:a,style:{display:"block",margin:"0 auto",width:"90px","border-radius":"14px"},alt:"image here"},null,-1))),u=r((()=>(0,o._)("h4",{style:{"font-weight":"900","text-align":"center","margin-bottom":"10px"}},"Incident Report Dashboard",-1))),d={key:0,class:"error-container"},p={key:1,class:"success-container"},m={class:"mt-2"},f={class:"mt-2"},E={class:"mt-2"},_=r((()=>(0,o._)("label",{class:"fw-bold"},[(0,o.Uk)("Pictures "),(0,o._)("span",{style:{color:"red"}},"*")],-1))),g=r((()=>(0,o._)("br",null,null,-1)));function I(e,t,i,a,r,I){const h=(0,o.up)("ion-menu-button"),L=(0,o.up)("ion-buttons"),w=(0,o.up)("ion-title"),v=(0,o.up)("ion-toolbar"),T=(0,o.up)("ion-header"),b=(0,o.up)("ion-button"),y=(0,o.up)("router-link"),S=(0,o.up)("ion-card-header"),F=(0,o.up)("ion-label"),A=(0,o.up)("ion-textarea"),k=(0,o.up)("ion-select-option"),C=(0,o.up)("ion-select"),G=(0,o.up)("file-pond"),z=(0,o.up)("ion-card-content"),D=(0,o.up)("ion-card"),P=(0,o.up)("ion-content"),O=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,{translucent:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Wm)(L,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{style:{color:"#1ca5df"}})])),_:1}),(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Report Crime")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(P,{fullscreen:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{collapse:"condense"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{size:"large"},{default:(0,o.w5)((()=>[(0,o.Uk)("Report Crime")])),_:1})])),_:1})])),_:1}),(0,o._)("div",s,[(0,o.Wm)(b,{"router-link":"/report/select-address",fill:"clear",color:"#1ca5df",style:{"margin-top":"15px"}},{default:(0,o.w5)((()=>[(0,o.Uk)("back")])),_:1}),a.authStore.user.area?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",l,[(0,o.Uk)(" you need to update your address first before you can report a crime. "),(0,o.Wm)(y,{to:"/user/profile"},{default:(0,o.w5)((()=>[(0,o.Uk)("click here to update your profile")])),_:1})])),(0,o.Wm)(D,{style:{"border-radius":"15px","box-shadow":"none",width:"93%"},color:"light"},{default:(0,o.w5)((()=>[(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[c])),_:1}),(0,o.Wm)(z,null,{default:(0,o.w5)((()=>[u,a.error?((0,o.wg)(),(0,o.iD)("div",d,(0,n.zw)(a.error),1)):(0,o.kq)("",!0),a.success?((0,o.wg)(),(0,o.iD)("div",p,(0,n.zw)(a.success),1)):(0,o.kq)("",!0),(0,o._)("div",m,[(0,o.Wm)(F,{class:"fw-bold dark-text"},{default:(0,o.w5)((()=>[(0,o.Uk)("Description")])),_:1}),(0,o.Wm)(A,{type:"text",modelValue:a.form.description,"onUpdate:modelValue":t[0]||(t[0]=e=>a.form.description=e),class:"form-control",color:"dark",placeholder:"Enter your statement"},null,8,["modelValue"])]),(0,o._)("div",f,[(0,o.Wm)(F,{class:"fw-bold dark-text"},{default:(0,o.w5)((()=>[(0,o.Uk)("Select Category")])),_:1}),(0,o.Wm)(C,{modelValue:a.form.category,"onUpdate:modelValue":t[1]||(t[1]=e=>a.form.category=e),class:"form-control","aria-label":"Fruit",interface:"action-sheet",placeholder:"Choose..."},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.categories,(e=>((0,o.wg)(),(0,o.j4)(k,{key:e.id,value:e.id},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.category),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"])]),(0,o._)("div",E,[_,(0,o.Wm)(G,{onChange:t[2]||(t[2]=e=>I.setImages(e)),name:"test",ref:"pond","label-idle":"Drop images here Or Click To Upload...","allow-multiple":!0,"accepted-file-types":"image/jpeg, image/png, image/jpg",files:e.myFiles,"allow-file-size-validation":!0,"allow-file-encode":!0,"max-file-size":"2mb","min-file-size":"11kb","max-files":"2",onRemovefile:t[3]||(t[3]=e=>I.remove(e)),onInit:I.handleFilePondInit},null,8,["files","onInit"])]),g,(0,o.Wm)(b,{disabled:!a.authStore.user.area,onClick:t[4]||(t[4]=e=>I.submit()),class:"red-btn",style:{margin:"0 auto",display:"block",width:"70%","--box-shadow":"none"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Report")])),_:1},8,["disabled"])])),_:1})])),_:1})])])),_:1})])),_:1})}i(7658),i(8862);var h=i(8587),L=i(1658),w=i.n(L),v=i(521),T=i.n(v),b=i(2965),y=i.n(b),S=i(8236),F=i.n(S),A=i(8515),k=i.n(A),C=i(9865),G=i(6154),z=i(2010),D=i(2262),P=i(2201);const O=w()(T(),y(),F(),k()),x={name:"make-report",data:function(){return{myFiles:[]}},setup(){const e=(0,C.t)(),t=(0,z.o)(),i=(0,P.yj)(),n=(0,P.tv)(),a=(0,D.iH)(i.params.id),r=(0,D.iH)(null),s=(0,D.iH)(null),l=(0,D.iH)([]);let c=null;(0,o.bv)((async()=>{a.value=i.params.id;const e=await h.G0.create({message:"Fetching Categories...",spinner:"bubbles"});await e.present(),await G.Z.get("/api/v1/report/get-categories").then((async t=>{l.value=t.data.categories,console.log(t.data.categories),e.dismiss()})).catch((async t=>{r.value=t.response.data.error,console.log(t.response.data),e.dismiss(),c=await h.Cl.create({header:"Error",message:t.response.data.message,buttons:["OK"]}),await c.present()}))}));const u=(0,D.qj)({category:"",preference:a.value,location:"address"==a.value?e.user.area:t.location,description:"",pictures:[]});return{location_preference:a,authStore:e,form:u,success:s,error:r,categories:l,router:n}},methods:{handleFilePondInit(){console.log("FilePond has initialized")},remove(){this.form.pictures=[],0==this.$refs.pond.getFiles().length?this.form.pictures=[]:this.$refs.pond.getFiles().forEach((e=>{this.form.pictures.push(e.file)}))},setImages(e){1==e.target.files.length?this.form.pictures.push(e.target.files[0]):this.form.pictures=e.target.files,console.log(this.form.pictures)},async submit(){const e=new FormData;e.append("category",this.form.category),e.append("preference",this.form.preference),"address"==this.form.preference?e.append("location",this.form.location):e.append("location",JSON.stringify(this.form.location)),e.append("description",this.form.description),this.form.pictures.length>0&&(e.append("pic_one",this.form.pictures[0],"picture_"+Date.now()),this.form.pictures[1]&&e.append("pic_two",this.form.pictures[1],"picture_"+Date.now()));const t=await h.G0.create({message:"Sending Report...",spinner:"bubbles"});await t.present(),await G.Z.post("/api/v1/report/make",e,{headers:{Authorization:`Bearer ${this.authStore.token}`}}).then((e=>{console.log(e.data),this.success=e.data.message,t.dismiss(),setTimeout((()=>{this.router.push("/")}),3e3)})).catch((e=>{this.submissionError=!0,this.error=e.response.data.message,t.dismiss()}))}},components:{IonButtons:h.Sm,IonContent:h.W2,IonHeader:h.Gu,IonMenuButton:h.fG,IonPage:h._i,IonTitle:h.wd,IonToolbar:h.sr,IonTextarea:h.g2,IonCard:h.PM,IonCardHeader:h.Zi,IonCardContent:h.FN,IonButton:h.YG,IonLabel:h.Q$,FilePond:O,IonSelect:h.t9,IonSelectOption:h.n0}};var M=i(3744);const W=(0,M.Z)(x,[["render",I],["__scopeId","data-v-76682724"]]),N=W},6501:(e,t,i)=>{"use strict";e.exports=i.p+"img/referee.9b5d8202.png"}}]);
//# sourceMappingURL=229-legacy.718da34e.js.map