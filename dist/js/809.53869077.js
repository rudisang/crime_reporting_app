"use strict";(self["webpackChunkhome"]=self["webpackChunkhome"]||[]).push([[809],{9809:(e,l,a)=>{a.r(l),a.d(l,{default:()=>b});a(7658);var s=a(6252),o=a(2262),t=a(3577),d=a(4427),r=a(8587),n=a(6154),m=a(9642);const c=e=>((0,s.dD)("data-v-9c078c9a"),e=e(),(0,s.Cn)(),e),u={class:"row"},i=c((()=>(0,s._)("img",{src:d,width:"300",class:"logo",alt:"image here"},null,-1))),p={key:0,class:"error-container"},w={key:1,class:"error-container"},f={class:"mt-1"},_={class:"mt-1"},U={class:"mt-1"},k={class:"mt-1"},g={class:"mt-1"},v={class:"mt-2"},h={class:"mt-2"},S=(0,s.aZ)({__name:"RegisterPage",setup(e){const l=(0,o.iH)([]),a=(0,o.iH)(""),d=(0,o.qj)({name:"",surname:"",email:"",password:"",password_confirmation:""}),c=(0,o.iH)(!1),S=async()=>{const e=await r.G0.create({message:"Creating Account...",spinner:"bubbles"});e.present(),await n.Z.post("/api/v1/auth/register",d).then((l=>{console.log(l.data),d.name="",d.email="",d.password="",d.password_confirmation="",m.Z.push("/login?success=1"),e.dismiss()})).catch((l=>{a.value=l.response.data.error,console.log(l.response.data),e.dismiss()}))};return(e,n)=>{const m=(0,s.up)("router-link");return(0,s.wg)(),(0,s.j4)((0,o.SU)(r._i),null,{default:(0,s.w5)((()=>[(0,s.Wm)((0,o.SU)(r.W2),{fullscreen:!0,color:"light"},{default:(0,s.w5)((()=>[(0,s._)("div",u,[(0,s.Wm)((0,o.SU)(r.PM),{class:"card",style:{padding:"40px 0px"}},{default:(0,s.w5)((()=>[(0,s.Wm)((0,o.SU)(r.Zi),null,{default:(0,s.w5)((()=>[i])),_:1}),(0,s.Wm)((0,o.SU)(r.FN),null,{default:(0,s.w5)((()=>[l.value.length>0&&c.value?((0,s.wg)(),(0,s.iD)("div",p,[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.value,((e,l)=>((0,s.wg)(),(0,s.iD)("li",{key:l},"Please ensure that the "+(0,t.zw)(e)+" field is filled correctly.",1)))),128))])])):(0,s.kq)("",!0),a.value?((0,s.wg)(),(0,s.iD)("div",w,(0,t.zw)(a.value),1)):(0,s.kq)("",!0),(0,s._)("div",f,[(0,s.Wm)((0,o.SU)(r.Q$),{class:"fw-bold dark-text"},{default:(0,s.w5)((()=>[(0,s.Uk)("Name")])),_:1}),(0,s.Wm)((0,o.SU)(r.pK),{modelValue:d.name,"onUpdate:modelValue":n[0]||(n[0]=e=>d.name=e),type:"text",class:"form-control",placeholder:"Enter Full Names"},null,8,["modelValue"])]),(0,s._)("div",_,[(0,s.Wm)((0,o.SU)(r.Q$),{class:"fw-bold dark-text"},{default:(0,s.w5)((()=>[(0,s.Uk)("Surname")])),_:1}),(0,s.Wm)((0,o.SU)(r.pK),{modelValue:d.surname,"onUpdate:modelValue":n[1]||(n[1]=e=>d.surname=e),type:"text",class:"form-control",placeholder:"Enter Full Names"},null,8,["modelValue"])]),(0,s._)("div",U,[(0,s.Wm)((0,o.SU)(r.Q$),{class:"fw-bold dark-text"},{default:(0,s.w5)((()=>[(0,s.Uk)("Email")])),_:1}),(0,s.Wm)((0,o.SU)(r.pK),{modelValue:d.email,"onUpdate:modelValue":n[2]||(n[2]=e=>d.email=e),type:"email",class:"form-control",placeholder:"Enter Email"},null,8,["modelValue"])]),(0,s._)("div",k,[(0,s.Wm)((0,o.SU)(r.Q$),{class:"fw-bold dark-text"},{default:(0,s.w5)((()=>[(0,s.Uk)("Password")])),_:1}),(0,s.Wm)((0,o.SU)(r.pK),{modelValue:d.password,"onUpdate:modelValue":n[3]||(n[3]=e=>d.password=e),type:"password",class:"form-control",placeholder:"Enter Password"},null,8,["modelValue"])]),(0,s._)("div",g,[(0,s.Wm)((0,o.SU)(r.Q$),{class:"fw-bold dark-text"},{default:(0,s.w5)((()=>[(0,s.Uk)("Confirm Password")])),_:1}),(0,s.Wm)((0,o.SU)(r.pK),{modelValue:d.password_confirmation,"onUpdate:modelValue":n[4]||(n[4]=e=>d.password_confirmation=e),type:"password",class:"form-control",placeholder:"Enter Password"},null,8,["modelValue"])]),(0,s._)("div",v,[(0,s.Wm)((0,o.SU)(r.YG),{size:"large",onClick:S,expand:"block",class:"red-btn"},{default:(0,s.w5)((()=>[(0,s.Uk)("Register")])),_:1})]),(0,s._)("div",h,[(0,s._)("p",null,[(0,s.Uk)("I already have an account "),(0,s.Wm)(m,{to:"/login"},{default:(0,s.w5)((()=>[(0,s.Uk)("Login")])),_:1})])])])),_:1})])),_:1})])])),_:1})])),_:1})}}});var W=a(3744);const V=(0,W.Z)(S,[["__scopeId","data-v-9c078c9a"]]),b=V}}]);
//# sourceMappingURL=809.53869077.js.map