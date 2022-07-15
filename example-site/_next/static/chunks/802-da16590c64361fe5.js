"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{4633:function(n,t,r){r.d(t,{Zb:function(){return p},MB:function(){return h},YS:function(){return f},CS:function(){return v}});var e=r(849),o=r(43),i=r(4060),c=r(5581),a=r(7800);function d(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function u(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,e.Z)(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}var l="0 2px 4px rgba(0, 0, 0, 0.3)",s="0 1px 1px rgba(0, 0, 0, 0.3)",p=function(n){var t=n.as,r=n.background,e=void 0===r?"body":r,d=n.children,p=n.shadow,h=n.clickable;return(0,a.tZ)(i.xu,{as:t,display:"block",border:!0,borderColor:"muted",background:e,rounded:!0,css:(0,o.iv)(u(u({position:"relative",overflow:"hidden"},h&&{"&:focus-within":c.lB.outline}),p&&{boxShadow:l,"&:hover":h?{boxShadow:s}:void 0}),"",""),children:d})},h=function(n){var t=n.children;return(0,a.tZ)(i.xu,{padding:1.5,children:t})};function b(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}var f=function(n){var t=(0,c.yF)();return(0,a.tZ)(t,function(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,e.Z)(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}({css:[i.Wf,'display:flex;justify-content:space-between;&:focus{outline:none;}&:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;}',"","",""]},n))},g=r(7378),v=function(n){var t=n.children,r=n.gap,e=void 0===r?1.5:r,o=n.templateColumns,c=m({templateColumns:o,gap:e});return(0,a.tZ)(i.xu,{as:"ul",css:c,children:g.Children.map(t,(function(n){return(0,g.isValidElement)(n)?(0,g.cloneElement)(n,{as:"li"}):n}))})},m=function(n){var t=n.gap,r=n.templateColumns;return(0,c.mq)({display:"grid",gridGap:(0,c.qz)(t,c.XH),gridTemplateColumns:(0,c.qz)(r,(function(n){return"repeat(".concat(n,", 1fr)")}))})}},8708:function(n,t,r){r.d(t,{yo:function(){return g},TZ:function(){return k},Hq:function(){return x},_A:function(){return y},JM:function(){return C},dP:function(){return E},wL:function(){return z},p1:function(){return D}});var e=r(4060),o=r(6297),i=r(43),c=r(5581),a={body:"backgroundBody",bodyAlt:"backgroundBodyAlt"},d=r(7800),u=function(n){var t=n.children,r=n.background,o=a[r];return(0,d.tZ)(e.xu,{display:["none","none","block"],width:"40%",css:(0,i.iv)({position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:"linear-gradient(90deg, ".concat(c._X[o]," 0px, rgba(255, 255, 255, 0.0) 360px)")},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),children:t})};var l={name:"1739oy8",styles:"z-index:1"},s=function(n){var t=n.children,r=n.image,i=n.background;return(0,d.tZ)(o.VY,{children:(0,d.BX)(e.kC,{children:[(0,d.tZ)(e.Kq,{gap:2,width:["100%","100%",r?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:l,children:t}),r?(0,d.tZ)(u,{background:i,children:r}):null]})})};var p={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"},h=function(n){var t=n.children;return(0,d.tZ)(e.xu,{display:{xs:"block",md:"none"},css:p,children:t})};var b={name:"vabva8",styles:"position:relative;overflow:hidden"},f=function(n){var t=n.children,r=n.background;return(0,d.tZ)(e.xu,{as:"section",background:r,css:b,children:t})},g=function(n){var t=n.image,r=n.background,e=void 0===r?"bodyAlt":r,o=n.children;return(0,d.BX)(f,{background:e,children:[t?(0,d.tZ)(h,{children:t}):null,(0,d.tZ)(s,{background:e,image:t,children:o})]})},v=r(6219),m=r(3170),y=function(n){var t=n.children;return(0,d.tZ)(e.Kq,{gap:1.5,children:t})},x=function(n){var t=n.children;return(0,d.tZ)(v.X,{type:"h1",fontSize:"xxxl",children:t})},k=function(n){var t=n.children;return(0,d.tZ)(m.x,{as:"p",fontSize:"md",maxWidth:c.TV.maxWidth.bodyText,children:t})},O=function(n){var t=n.children,r=n.background,o=a[r];return(0,d.tZ)(e.xu,{display:["none","none","block"],width:"40%",css:(0,i.iv)({position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:"linear-gradient(90deg, ".concat(c._X[o]," 0px, rgba(255, 255, 255, 0.0) 360px)")},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),children:t})};var Z={name:"1739oy8",styles:"z-index:1"},w=function(n){var t=n.children,r=n.image,i=n.background;return(0,d.tZ)(o.VY,{children:(0,d.BX)(e.kC,{children:[(0,d.tZ)(e.Kq,{gap:1.5,width:["100%","100%",r?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:Z,children:t}),r?(0,d.tZ)(O,{background:i,children:r}):null]})})};var j={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"},P=function(n){var t=n.children;return(0,d.tZ)(e.xu,{display:{xs:"block",md:"none"},css:j,children:t})};var S={name:"vabva8",styles:"position:relative;overflow:hidden"},B=function(n){var t=n.children,r=n.background;return(0,d.tZ)(e.xu,{as:"section",background:r,css:S,children:t})},C=function(n){var t=n.children,r=n.image,e=n.background,o=void 0===e?"bodyAlt":e;return(0,d.BX)(B,{background:o,children:[r?(0,d.tZ)(P,{children:r}):null,(0,d.tZ)(w,{background:o,image:r,children:t})]})},E=function(n){var t=n.children;return(0,d.tZ)(v.X,{type:"h1",fontSize:"xxl",children:t})},X=function(n){var t=n.children,r=n.background;return(0,d.tZ)(e.xu,{as:"section",background:r,children:t})},q=function(n){var t=n.children;return(0,d.tZ)(o.VY,{children:(0,d.tZ)(e.Kq,{gap:1.5,paddingTop:{xs:2,md:3},paddingBottom:{xs:3,md:3},children:t})})},z=function(n){var t=n.children,r=n.background,e=void 0===r?"bodyAlt":r;return(0,d.tZ)(X,{background:e,children:(0,d.tZ)(q,{children:t})})},D=function(n){var t=n.children;return(0,d.tZ)(v.X,{type:"h1",fontSize:"xxl",children:t})}}}]);