(window.webpackJsonprostelekom=window.webpackJsonprostelekom||[]).push([[0],{16:function(e,n,t){},30:function(e,n,t){e.exports=t(41)},41:function(e,n,t){"use strict";t.r(n);var a,i,l,d=t(0),r=t.n(d),s=t(12),o=t.n(s),c=t(9),m=t(14),_=t(10),A=t(7),g=(t(16),Object(A.b)((function(e){return{apps:e.apps,accessRights:e.accessRights}}))((function(e){var n=e.label,t=e.apps,a=e.handleSelect,i=e.handleDelete,l=e.accessRights,d=e.canShowBacketwaste,s=e.onDragStart,o=e.onDragOver,c=e.onDragEnd;return r.a.createElement("div",null,n&&r.a.createElement("div",{onClick:a,className:"card",onDragStart:s,onDragOver:o,onDragEnd:c},r.a.createElement("svg",{width:"100",height:"100"},r.a.createElement("image",{className:"card__img",href:"".concat("/Corporate-Portal","/SVG/").concat(n,".svg")})),l.status&&"Admin"===l.status.slice(0,5)&&!d&&r.a.createElement("span",{onClick:i,className:"card__cross"},"\u274c"),t[n]&&t[n].isSelected&&r.a.createElement("span",{className:"card__check"},"\u2713"),l.status&&"Admin"===l.status.slice(0,5)&&l.level>0&&d&&r.a.createElement("span",{className:"card__basketwaste",onClick:i},"\u2612"),t[n]&&Object.values(t[n].pinnedBy).some((function(e){return!0===e}))&&r.a.createElement("span",{className:"card__pin "+Object.keys(t[n].pinnedBy).filter((function(e){return!0===t[n].pinnedBy[e]})).join(" ")},"\ud83d\udccc"),r.a.createElement("h1",{className:"card__title"},n[0].toUpperCase()+n.slice(1))))})));!function(e){e.TOGGLE_SELECT="TOGGLE_SELECT",e.DELETE_FROM_SELECTED="DELETE_FROM_SELECTED",e.CHANGE_ACCESS_RIGHTS="CHANGE_ACCESS_RIGHTS",e.DELETE_FROM_CATALOG="DELETE_FROM_CATALOG",e.TOGGLE_PIN="TOGGLE_PIN",e.DRAG="DRAG"}(a||(a={})),function(e){e.Admin_System="Admin_System",e.Admin_MRF="Admin_MRF",e.Admin_RF="Admin_RF"}(i||(i={})),function(e){e.User="User"}(l||(l={}));var u=function(e){var n=e.label,t=e.accessRights;return{type:a.TOGGLE_PIN,payload:{label:n,accessRights:t}}},p=function(e){var n=e.idx,t=e.draggedIdx;return{type:a.DRAG,payload:{idx:n,draggedIdx:t}}};function S(e,n){return Math.floor(Math.abs(e)/Math.pow(10,n))%10}function y(e,n,t){for(var a=function(e){for(var n,t=0,a=0;a<e.length;a++)t=Math.max(t,0===(n=e[a])?1:Math.floor(Math.log10(Math.abs(n)))+1);return t}(e.map((function(e){return e[n]||0}))),i=function(a){for(var i=Array.from({length:10},(function(){return[]})),l=0;l<e.length;l++){var d=S(e[l][n]||0,a);i[d].push(e[l])}!function(){e=[];var n=function(n,t){return e=n.concat(t)};"ASC"===t?i.reduce(n):i.reduceRight(n)}()},l=0;l<a;l++)i(l);return e}var R=Object(A.b)((function(e){return{apps:e.apps}}),{deleteFromSelected:function(e){return{type:a.DELETE_FROM_SELECTED,payload:e}},togglePin:u,handleDrag:p})((function(e){var n=e.apps,t=e.deleteFromSelected;return r.a.createElement("div",{className:"card-container"},y(Object.values(n),"order","ASC").map((function(e,n){var a=e.label,i=e.isSelected,l=e.pinnedBy;if(i||Object.values(l).some((function(e){return!0===e})))return r.a.createElement(g,{key:a,label:a,isSelected:Boolean(i),handleDelete:function(){return t(a)}})})))})),v=t(23),F=t(24),E=t(28),b=t(25),C=t(29),f=function(e){function n(e,t,a){var i;return Object(v.a)(this,n),(i=Object(E.a)(this,Object(b.a)(n).call(this,e))).draggedIdx=t,i.draggedOverIdx=a,i.onDragStart=function(e,n){var t=i.props.accessRights.status;t&&"Admin"===t.slice(0,5)&&(i.draggedIdx=n,e.dataTransfer.effectAllowed="grabbing",e.dataTransfer.setDragImage(e.target.parentNode,50,50))},i.onDragOver=function(e){var n=i.props,t=n.accessRights,a=(n.apps,n.handleDrag);if(t.status&&"Admin"===t.status.slice(0,5)){if(i.draggedOverIdx=e,i.draggedIdx===i.draggedOverIdx)return;a({idx:e,draggedIdx:i.draggedIdx})}},i.onDragEnd=function(){var e=i.props.accessRights;e.status&&"Admin"===e.status.slice(0,5)&&(i.draggedIdx=null)},i}return Object(C.a)(n,e),Object(F.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.accessRights,a=n.apps,i=n.selectFromCatalog,l=n.deleteFromCatalog,d=n.togglePin;return r.a.createElement("div",{className:"card-container"},y(Object.values(a),"order","ASC").map((function(n){var a=n.isInCatalog,s=n.label;return a&&r.a.createElement(g,{onDragStart:function(n){return e.onDragStart(n,s)},onDragOver:function(){return e.onDragOver(s)},onDragEnd:e.onDragEnd,label:s,key:s,canShowBacketwaste:!0,handleSelect:function(e){return e.stopPropagation(),t&&t.status&&"Admin"===t.status.slice(0,5)?d({label:s,accessRights:t}):i(s)},handleDelete:function(e){return e.stopPropagation(),l(s)}})})))}}]),n}(r.a.Component),h=Object(A.b)((function(e){return{accessRights:e.accessRights,apps:e.apps}}),{selectFromCatalog:function(e){return{type:a.TOGGLE_SELECT,payload:e}},deleteFromCatalog:function(e){return{type:a.DELETE_FROM_CATALOG,payload:e}},togglePin:u,handleDrag:p})(f),I={User:{status:l.User,level:0},Admin_System:{status:i.Admin_System,level:1},Admin_MRF:{status:i.Admin_MRF,level:2},Admin_RF:{status:i.Admin_RF,level:3}},M=Object(A.b)(null,{accessRightsChange:function(e){return{type:a.CHANGE_ACCESS_RIGHTS,payload:e}}})((function(e){var n=e.accessRightsChange;return r.a.createElement("div",{className:"access-control__select"},r.a.createElement("select",{name:"access",id:"access",onChange:function(e){return n(I[e.target.value])}},Object.values(I).map((function(e){var n=e.status;return r.a.createElement("option",{key:n},n)}))))})),B=function(){return r.a.createElement(m.a,{basename:"/"},r.a.createElement("nav",{className:"navigation__nav"},r.a.createElement(m.b,{to:"/"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),r.a.createElement(m.b,{to:"/catalog"},"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"),r.a.createElement(M,null)),r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/",exact:!0,component:R}),r.a.createElement(_.a,{path:"/catalog",exact:!0,component:h})))},O=t(27),D={react:{order:0,label:"react",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},"vue-dot-js":{order:1,label:"vue-dot-js",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},angular:{order:2,label:"angular",isSelected:!0,pinnedBy:{Admin_System:!1,Admin_RF:!0,Admin_MRF:!1,level:3},isInCatalog:!0},bitcoin:{order:3,label:"bitcoin",isSelected:!0,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},css3:{order:4,label:"css3",isSelected:!0,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},docker:{order:5,label:"docker",isSelected:!0,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},"dot-net":{order:6,label:"dot-net",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},electron:{order:7,label:"electron",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},github:{order:8,label:"github",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},gmail:{order:9,label:"gmail",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},googlechrome:{order:10,label:"googlechrome",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},graphql:{order:11,label:"graphql",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},html5:{order:12,label:"html5",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},huawei:{order:13,label:"huawei",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},instagram:{order:14,label:"instagram",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},java:{order:15,label:"java",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},linux:{order:16,label:"linux",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftaccess:{order:17,label:"microsoftaccess",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftexcel:{order:18,label:"microsoftexcel",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftonedrive:{order:19,label:"microsoftonedrive",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftonenote:{order:20,label:"microsoftonenote",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftoutlook:{order:21,label:"microsoftoutlook",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftpowerpoint:{order:22,label:"microsoftpowerpoint",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftword:{order:23,label:"microsoftword",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},mongodb:{order:24,label:"mongodb",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},nvidia:{order:25,label:"nvidia",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},php:{order:26,label:"php",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},python:{order:27,label:"python",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},r:{order:28,label:"r",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},youtube:{order:29,label:"youtube",isSelected:!1,pinnedBy:{Admin_System:!0,Admin_MRF:!1,Admin_RF:!1,level:1},isInCatalog:!0},redux:{order:30,label:"redux",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},skype:{order:31,label:"skype",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},twitter:{order:32,label:"twitter",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},visa:{order:33,label:"visa",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},visualstudiocode:{order:34,label:"visualstudiocode",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},vk:{order:35,label:"vk",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},vlcmediaplayer:{order:36,label:"vlcmediaplayer",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},apple:{order:37,label:"apple",isSelected:!0,pinnedBy:{Admin_System:!1,Admin_MRF:!0,Admin_RF:!1,level:2},isInCatalog:!0},wikipedia:{order:38,label:"wikipedia",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},yandex:{order:39,label:"yandex",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0}},T=Object(O.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0,t=n.type,i=n.payload;switch(t){case a.DRAG:var l=i,d=l.idx,r=l.draggedIdx,s=[e[r].order,e[d].order];return e[d].order=s[0],e[r].order=s[1],e;case a.DELETE_FROM_SELECTED:return e[i].isSelected=!1,e[i].pinnedBy={Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},e;case a.DELETE_FROM_CATALOG:return e[i].isSelected=!1,e[i].isInCatalog=!1,e[i].pinnedBy={Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},e;case a.TOGGLE_SELECT:return e[i].isSelected=!e[i].isSelected,e;case a.TOGGLE_PIN:var o=i,c=o.label,m=o.accessRights,_=m.status,A=m.level,g=e[c].pinnedBy.level;return e[c].pinnedBy[_]=!e[c].pinnedBy[_],e[c].pinnedBy.level=A>g?A:g,e;default:return e}})),G={status:l.User,level:0},L=Object(c.b)({apps:T,accessRights:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.CHANGE_ACCESS_RIGHTS:return n.payload;default:return e}}}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.c;o.a.render(r.a.createElement((function(e){var n=e.children,t=e.initialState,a=void 0===t?{}:t,i=e.enhancer,l=Object(c.d)(L,a,i);return r.a.createElement(A.a,{store:l},n)}),{enhancer:w()},r.a.createElement(B,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.acc1feb3.chunk.js.map