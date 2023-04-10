"use strict";(self["webpackChunkhome"]=self["webpackChunkhome"]||[]).push([[990],{8990:(e,t,n)=>{n.r(t),n.d(t,{createSwipeBackGesture:()=>a});var r=n(6587),o=n(545),s=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=(e,t,n,a,c)=>{const i=e.ownerDocument.defaultView;let h=(0,o.i)(e);const u=e=>{const t=50,{startX:n}=e;return h?n>=i.innerWidth-t:n<=t},l=e=>h?-e.deltaX:e.deltaX,d=e=>h?-e.velocityX:e.velocityX,k=n=>(h=(0,o.i)(e),u(n)&&t()),w=e=>{const t=l(e),n=t/i.innerWidth;a(n)},m=e=>{const t=l(e),n=i.innerWidth,o=t/n,s=d(e),a=n/2,h=s>=0&&(s>.2||t>a),u=h?1-o:o,k=u*n;let w=0;if(k>5){const e=k/Math.abs(s);w=Math.min(e,540)}c(h,o<=0?.01:(0,r.h)(0,o,.9999),w)};return(0,s.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:k,onStart:n,onMove:w,onEnd:m})}}}]);
//# sourceMappingURL=990-legacy.7cc99172.js.map