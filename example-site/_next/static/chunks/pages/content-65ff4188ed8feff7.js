(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{3848:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Q}});var n=r(8038),i=r(3716),o=r(897),a=r(7956),c=r(849),l=r(89),d=r(1670),u=r(181),s=r(7378),h=r(4338),f=r(4060),p=r(3896),g=r(666),b=r(8007);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w="--sideNav-hover",Z={hover:"var(".concat(w,")")},k={background:{xs:"bodyAlt",md:"body"},hover:{xs:"shadeAlt",md:"shade"}},P={background:{xs:"body",md:"bodyAlt"},hover:{xs:"shade",md:"shadeAlt"}},j={light:m({palette:"light"},k),lightAlt:m({palette:"light"},P),dark:m({palette:"dark"},k),darkAlt:m({palette:"dark"},P)},x=r(7800),C=(0,h.animated)(g.J),S=function(e){var t=e.ariaControls,r=e.children,n=e.id,i=e.isOpen,o=e.onClick,a=e.variant,l=(0,p.Tb)(),u=j[a].background,s=(0,h.useSpring)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(".concat(i?180:0,"deg)")},immediate:l});return(0,x.BX)(f.kC,{as:"button","aria-controls":t,"aria-expanded":i,rounded:!0,background:u,color:"action",onClick:o,fontSize:"sm",lineHeight:"heading",id:n,padding:1,width:"100%",justifyContent:"space-between",alignItems:"center",link:!0,focus:!0,css:(0,d.iv)((0,c.Z)({},p.TV.mediaQuery.min.md,{display:"none"}),"",""),children:[r,(0,x.tZ)(C,{icon:"chevronDown",size:1,style:s})]})},X=function(e){var t=e.children,r=e.collapseTitle,n=e.variant,i=e["aria-label"],o=j[n],a=o.palette,l=o.background,g=o.hover,y=(0,p.lP)(!1,!0),m=(0,u.Z)(y,2),v=m[0],O=m[1],Z=(0,s.useRef)(null),k=(0,p.h4)(Z).height,P=function(e){var t=(0,b.M)(e);return{titleId:"".concat(t,"-title"),bodyId:"".concat(t,"-default")}}(),C=P.titleId,X=P.bodyId,D=(0,p.Tb)(),T=(0,h.useSpring)({from:{height:0},to:{height:v?k:0},immediate:D});return(0,x.BX)(f.xu,{as:"aside","aria-label":i,rounded:!0,background:l,palette:a,children:[(0,x.tZ)(S,{isOpen:v,onClick:O,ariaControls:X,variant:n,id:C,children:r}),(0,x.tZ)(h.animated.section,{id:X,"aria-labelledby":C,role:"region",style:T,css:(0,d.iv)((0,c.Z)({overflow:"hidden"},p.TV.mediaQuery.min.md,{overflow:"unset",height:"auto !important"}),"",""),children:(0,x.tZ)(f.xu,{ref:Z,as:"nav",fontFamily:"body",paddingLeft:{xs:1,md:0},paddingRight:{xs:1,md:0},fontSize:"sm",lineHeight:"default",css:(0,p.mq)((0,c.Z)({},w,(0,p.qz)(g,(function(e){return f.Vu[e]})))),children:t})})]})},D=r(3988),T=["children","isCurrentPage"];function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(e){var t=e.children,r=e.isCurrentPage,n=(0,l.Z)(e,T),i=(0,p.yF)();return(0,x.tZ)(f.xu,{as:"h2",children:(0,x.BX)(f.xu,E(E({as:i},n),{},{padding:1,color:"text",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",display:"block",focus:!0,css:(0,d.iv)({borderBottom:"2px solid ".concat(p._X.border),textDecoration:"none","&:hover":{backgroundColor:Z.hover,textDecoration:"underline"}},"",""),children:[t,r?(0,x.tZ)(D.T,{children:" Current page"}):null]}))})},_=(0,s.createContext)(0),H=function(){return(0,s.useContext)(_)},I=function(e){var t=e.children,r=H();return(0,x.tZ)(_.Provider,{value:r+1,children:(0,x.tZ)(f.xu,{as:"ul",children:t})})},z=["active","isCurrentPage","children","label"];function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=function(e){var t=e.active,r=e.isCurrentPage,n=e.children,i=e.label,o=(0,l.Z)(e,z),a=H(),c=(0,p.yF)();return(0,x.BX)(f.xu,{as:"li",fontSize:"sm",lineHeight:"default",borderBottom:1===a,css:1===a?{"&:last-of-type":{border:"none"}}:void 0,children:[(0,x.tZ)(f.xu,{fontWeight:t?"bold":"normal",css:(0,d.iv)({" a":L(L({},(0,p.vY)("xs","default")),{},{color:p._X[t?"foregroundText":"foregroundMuted"],textDecoration:"none",paddingTop:(0,p.XH)(1),paddingBottom:(0,p.XH)(1),paddingLeft:"".concat(a,"rem"),paddingRight:(0,p.XH)(1),display:"block","&:hover":{color:p._X.foregroundText,textDecoration:"underline",textDecorationSkipInk:"auto",backgroundColor:Z.hover},"&:focus":p.lB.outline},a>2&&{"&:before":{content:'" "',width:(0,p.XH)(1),height:(0,p.XH)(1),backgroundSize:(0,p.XH)(1),marginLeft:"-1rem",paddingLeft:(0,p.XH)(.5),display:"block",float:"left",backgroundRepeat:"no-repeat",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='gray' d='M2 10h12v1H2zM2 5h1v5H2z'/%3E%3C/svg%3E\")"}})},"",""),children:(0,x.BX)(c,L(L({},o),{},{children:[i,r?(0,x.tZ)(D.T,{children:" Current page"}):null]}))}),n]})},W=["items"];function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e){var t=e["aria-label"],r=void 0===t?"side navigation":t,n=e.activePath,i=e.collapseTitle,o=e.items,a=e.variant,c=void 0===a?"light":a,l=e.titleLink,d=e.title;return(0,x.BX)(X,{"aria-label":r,variant:c,collapseTitle:i,children:[(0,x.tZ)(A,{isCurrentPage:n===l,href:l,children:d}),(0,x.tZ)(F,{activePath:n,items:o})]})}function F(e){var t=e.activePath,r=e.items,n=function(e,t){if(!t)return"";var r,n="",i=v(e);try{for(i.s();!(r=i.n()).done;){var o=r.value;if(!o.href||o.href===t)return o.href;null!==t&&void 0!==t&&t.startsWith(o.href)&&o.href.length>n.length&&(n=o.href)}}catch(a){i.e(a)}finally{i.f()}return n}(r,t);return(0,x.tZ)(I,{children:r.map((function(e,r){var i=e.items,o=(0,l.Z)(e,W);return(0,x.tZ)(R,V(V({active:o.href===n,isCurrentPage:o.href===t},o),{},{children:null!==i&&void 0!==i&&i.length?(0,x.tZ)(F,{items:i,activePath:t}):null}),r)}))})}var G=r(9219),K=[{href:"#welcome",label:"Welcome"},{href:"#one",label:"Do you need to lodge a tax return?"},{href:"#two",label:"Lodge online",items:[{href:"#three",label:"Pre-filling your online tax return"}]},{href:"#four",label:"What's new for individuals"},{href:"#five",label:"Why you may receive a tax bill"},{href:"#in-detail",label:"In detail",items:[{href:"#in-detail/record-keeping",label:"Record keeping",items:[{href:"#in-detail/record-keeping/tax",label:"Keeping your tax records"},{href:"#in-detail/record-keeping/incorrect-amounts",label:"Incorrect amounts"}]},{href:"#ten",label:"Tax receipt"},{href:"#eleven",label:"Pre-fill availability"}]}],Q=function(){return(0,x.BX)(G.A,{children:[(0,x.BX)(n.default,{children:[(0,x.tZ)("title",{children:"AG Design System | Example site"}),(0,x.tZ)("meta",{name:"description",content:"An example of things that can be made with AG-DS"}),(0,x.tZ)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,x.tZ)(o.V,{children:(0,x.BX)(a.o,{children:[(0,x.tZ)(a.s,{columnSpan:{xs:12,md:4,lg:3},children:(0,x.tZ)(q,{collapseTitle:"In this section",title:"Lodging your tax return",variant:"light",titleLink:"#welcome",activePath:"#in-detail/record-keeping/incorrect-amounts",items:K})}),(0,x.tZ)(a.s,{columnStart:{xs:1,md:5,lg:5},columnEnd:"last",children:(0,x.BX)(i.u,{children:[(0,x.tZ)("h1",{children:"Content page example (h1)"}),(0,x.tZ)("p",{children:"The page heading communicates the main focus of the page. Make your page heading descriptive and keep it succinct."}),(0,x.tZ)("p",{children:"These headings introduce, respectively, sections and subsections within your body copy. As you create these headings, follow the same guidelines that you use when writing section headings: Be succinct, descriptive, and precise."}),(0,x.tZ)("h2",{children:"Subsection heading (h2)"}),(0,x.tZ)("p",{children:"The particulars of your body copy will be determined by the topic of your page. Regardless of topic, it\u2019s a good practice to follow the inverted pyramid structure when writing copy: Begin with the information that\u2019s most important to your users and then present information of less importance."}),(0,x.tZ)("p",{children:"Keep each section and subsection focused \u2014 a good approach is to include one theme (topic) per section."}),(0,x.tZ)("h3",{children:"Subsection heading (h3)"}),(0,x.tZ)("p",{children:"Use the side navigation menu to help your users quickly skip to different sections of your page. The menu is best suited to displaying a hierarchy with 1 to 3 levels and, as we mentioned, to display the sub-navigation of a given page."}),(0,x.BX)("p",{children:["Read more about how to best design and structure your web content using the"," ",(0,x.tZ)("a",{target:"_blank",href:"https://guides.service.gov.au/content-guide/",rel:"noreferrer",children:"content guide"}),"."]}),(0,x.tZ)("code",{children:"hello();"}),(0,x.BX)("dl",{children:[(0,x.tZ)("dt",{children:"Coffee"}),(0,x.tZ)("dd",{children:"Black hot drink"}),(0,x.tZ)("dt",{children:"Milk"}),(0,x.tZ)("dd",{children:"White cold drink"})]}),(0,x.BX)("ol",{children:[(0,x.tZ)("li",{children:"Coffee"}),(0,x.tZ)("li",{children:"Tea"}),(0,x.tZ)("li",{children:"Milk"})]}),(0,x.BX)("ul",{children:[(0,x.tZ)("li",{children:"Coffee"}),(0,x.tZ)("li",{children:"Tea"}),(0,x.tZ)("li",{children:"Milk"})]})]})})]})})]})}},9205:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content",function(){return r(3848)}])}},function(e){e.O(0,[255,338,131,774,888,179],(function(){return t=9205,e(e.s=t);var t}));var t=e.O();_N_E=t}]);