import{importShared as m}from"./__federation_fn_import-CP-zI-ZX.js";import{r as c}from"./__federation_shared_react-CsUMYuEf.js";var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=c,d=Symbol.for("react.element"),_=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,v=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function u(n,e,a){var t,r={},s=null,l=null;a!==void 0&&(s=""+a),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(t in e)x.call(e,t)&&!h.hasOwnProperty(t)&&(r[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps,e)r[t]===void 0&&(r[t]=e[t]);return{$$typeof:d,type:n,key:s,ref:l,props:r,_owner:v.current}}i.Fragment=_;i.jsx=u;i.jsxs=u;p.exports=i;var o=p.exports;const y=await m("react"),{useState:j}=y;function R(){const[n,e]=j(""),a=r=>{r.preventDefault();const s=new CustomEvent("form-submitted",{detail:n});window.dispatchEvent(s)},t=r=>{e(r.target.value)};return o.jsxs("div",{className:"mfe__container",children:[o.jsx("h1",{children:"MY REACT MF1 WORKS!!"}),o.jsxs("form",{onSubmit:a,children:[o.jsxs("label",{children:["Data:",o.jsx("input",{type:"text",value:n,onChange:t})]}),o.jsx("button",{type:"submit",children:"Submit"})]})]})}export{R as default,o as j};
