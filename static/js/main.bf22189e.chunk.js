(window.webpackJsonprostelekom=window.webpackJsonprostelekom||[]).push([[0],{16:function(e,a,t){},18:function(e){e.exports=JSON.parse('[{"name":"\u0410\u043a\u0432\u0430\u043c\u0435\u043d","image":"http://www.ramrus.ru/pic/dc/aquaman.jpg"},{"name":"\u0411\u044d\u0442\u043c\u0435\u043d","image":"http://www.ramrus.ru/pic/dc/batman.jpg"},{"name":"\u041a\u0438\u0431\u043e\u0440\u0433","image":"http://www.ramrus.ru/pic/dc/cyborg.jpg"},{"name":"\u0424\u043b\u044d\u0448","image":"http://www.ramrus.ru/pic/dc/flash.jpg"},{"name":"\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u0424\u043e\u043d\u0430\u0440\u044c","image":"http://www.ramrus.ru/pic/dc/greenlantern.jpg"},{"name":"\u0421\u0443\u043f\u0435\u0440\u0433\u0451\u0440\u043b","image":"http://www.ramrus.ru/pic/dc/supergirl.jpg"},{"name":"\u0421\u0443\u043f\u0435\u0440\u043c\u0435\u043d","image":"http://www.ramrus.ru/pic/dc/superman.jpg"},{"name":"\u0427\u0443\u0434\u043e-\u0436\u0435\u043d\u0449\u0438\u043d\u0430","image":"http://www.ramrus.ru/pic/dc/wonderwoman.jpg"},{"name":"\u0427\u0451\u0440\u043d\u0430\u044f \u041f\u0430\u043d\u0442\u0435\u0440\u0430","image":"http://www.ramrus.ru/pic/marvel/blackpanther.jpg"},{"name":"\u041a\u0430\u043f\u0438\u0442\u0430\u043d \u0410\u043c\u0435\u0440\u0438\u043a\u0430","image":"http://www.ramrus.ru/pic/marvel/captainamerica.jpg"},{"name":"\u0421\u043e\u0440\u0432\u0438\u0433\u043e\u043b\u043e\u0432\u0430","image":"http://www.ramrus.ru/pic/marvel/daredevil.jpg"},{"name":"\u0414\u043e\u043a\u0442\u043e\u0440 \u0421\u0442\u0440\u044d\u043d\u0434\u0436","image":"http://www.ramrus.ru/pic/marvel/doctorstrange.jpg"},{"name":"\u0425\u0430\u043b\u043a","image":"http://www.ramrus.ru/pic/marvel/hulk.jpg"},{"name":"\u0416\u0435\u043b\u0435\u0437\u043d\u0439 \u0427\u0435\u043b\u043e\u0432\u0435\u043a","image":"http://www.ramrus.ru/pic/marvel/ironman.jpg"},{"name":"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-\u043f\u0430\u0443\u043a","image":"http://www.ramrus.ru/pic/marvel/spiderman.jpg"},{"name":"\u0422\u043e\u0440","image":"http://www.ramrus.ru/pic/marvel/thor.jpg"}]')},31:function(e,a,t){e.exports=t(42)},42:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(12),s=t.n(i),c=t(7),l=t(10),o=t(14),d=t(9),p=(t(16),t(18)),m=Object(c.b)((function(e){return{cards:e.item,accessRights:e.accessRights}}))((function(e){var a=e.idx,t=e.label,r=e.cards,i=e.handleSelect,s=e.handleDelete,c=e.accessRights,l=e.canShowBacketwaste,o=e.onDragStart,d=e.onDragOver,m=e.onDragEnd;return n.a.createElement("div",null,t.toString()&&n.a.createElement("div",{onClick:i,onDragStart:o,onDragOver:d,onDragEnd:m,className:"card"},n.a.createElement("img",{className:"card__img",src:"".concat(p[t%(p.length-1)].image)}),c.status&&"Admin"===c.status.slice(0,5)&&!l&&n.a.createElement("span",{onClick:s,className:"card__cross"},"\u274c"),r[a]&&r[a].isSelected&&n.a.createElement("span",{className:"card__check"},"\u2713"),c.status&&"Admin"===c.status.slice(0,5)&&c.priority>0&&l&&n.a.createElement("span",{className:"card__basketwaste",onClick:s},"\u2612"),r[a]&&Object.values(r[a].pinnedBy).some((function(e){return!0===e}))&&n.a.createElement("span",{className:"card__pin "+Object.keys(r[a].pinnedBy).filter((function(e){return!0===r[a].pinnedBy[e]})).join(" ")},"\ud83d\udccc"),n.a.createElement("h1",{className:"card__title"},t)))})),u=function(e){return{type:"TOGGLE_SELECT",payload:e}},g=function(e,a){return{type:"TOGGLE_PIN",payload:{data:e,accessRights:a}}},y=function(e){return{type:"DRAG",payload:e}},E=Object(c.b)((function(e){return{cards:e.item}}),{deleteFromSelected:function(e){return{type:"DELETE_FROM_SELECTED",payload:e}},togglePin:g,selectFromCatalog:u,handleDrag:y})((function(e){var a=e.cards,t=e.deleteFromSelected;return n.a.createElement("div",{className:"card-container"},a.map((function(e,a){return(e.isSelected||Object.values(e.pinnedBy).some((function(e){return!0===e})))&&n.a.createElement(m,{key:e.label,label:e.label,isSelected:e.isSelected,handleDelete:function(){return t(a)}})})))})),w=t(24),h=t(25),S=t(29),b=t(26),_=t(30),f=function(e){function a(){var e,t;Object(w.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=Object(S.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(n)))).onDragStart=function(e,a){var r=t.props.accessRights;r.status&&"Admin"===r.status.slice(0,5)&&(t.draggedItem=t.props.cards[a],e.dataTransfer.effectAllowed="grabbing",e.dataTransfer.setData("text/html",e.target.parentNode),e.dataTransfer.setDragImage(e.target.parentNode,50,50))},t.onDragOver=function(e){var a=t.props.accessRights;if(a.status&&"Admin"===a.status.slice(0,5)){var r=t.props.cards[e];if(t.draggedItem===r)return;var n=t.props.cards.filter((function(e){return e!==t.draggedItem}));n.splice(e,0,t.draggedItem),t.props.handleDrag(n)}},t.onDragEnd=function(){var e=t.props.accessRights;e.status&&"Admin"===e.status.slice(0,5)&&(t.draggedIdx=null)},t}return Object(_.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.accessRights,r=a.cards,i=a.selectFromCatalog,s=a.deleteFromCatalog,c=a.togglePin;return n.a.createElement("div",{className:"card-container"},r.map((function(a,r){return a.isInCatalog&&n.a.createElement(m,{onDragStart:function(a){return e.onDragStart(a,r)},onDragOver:function(){return e.onDragOver(r)},onDragEnd:e.onDragEnd,idx:r,label:a.label,key:a.label,canShowBacketwaste:!0,handleSelect:function(e){if(e.stopPropagation(),t.status&&"Admin"===t.status.slice(0,5))return c(r,t);i(r)},handleDelete:function(e){return e.stopPropagation(),s(r)}})})))}}]),a}(n.a.Component),v=Object(c.b)((function(e){return{accessRights:e.accessRights,cards:e.item}}),{selectFromCatalog:u,deleteFromCatalog:function(e){return{type:"DELETE_FROM_CATALOG",payload:e}},togglePin:g,handleDrag:y})(f),C={User:{status:"User",priority:0},Admin_System:{status:"Admin_System",priority:1},Admin_MRF:{status:"Admin_MRF",priority:2},Admin_RF:{status:"Admin_RF",priority:3}},O=Object(c.b)(null,{accessRightsChange:function(e){return{type:"CHANGE_ACCESS_RIGHTS",payload:e}}})((function(e){var a=e.accessRightsChange;return n.a.createElement("div",{className:"access-control__select"},n.a.createElement("select",{name:"access",id:"access",onChange:function(e){return a(C[e.target.value])}},n.a.createElement("option",{value:"User"},"User"),n.a.createElement("option",{value:"Admin_System"},"Admin_System"),n.a.createElement("option",{value:"Admin_MRF"},"Admin_MRF"),n.a.createElement("option",{value:"Admin_RF"},"Admin_RF")))})),A=((0,t(4).createBrowserHistory)(),function(){return n.a.createElement(o.a,{basename:"/"},n.a.createElement("nav",{className:"navigation__nav"},n.a.createElement(o.b,{to:"/"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),n.a.createElement(o.b,{to:"/catalog"},"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"),n.a.createElement(O,null)),n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/",exact:!0,component:E}),n.a.createElement(d.a,{path:"/catalog",exact:!0,component:v})))}),B=t(28),D=[{order:0,label:0,isSelected:!0,pinnedBy:{Admin_RF:!0,priority:3},isInCatalog:!0},{order:1,label:1,isSelected:!0,pinnedBy:{Admin_MRF:!0,priority:2},isInCatalog:!0},{order:2,label:2,isSelected:!0,pinnedBy:{Admin_System:!0,priority:1},isInCatalog:!0},{order:3,label:3,isSelected:!0,pinnedBy:{priority:0},isInCatalog:!0},{order:4,label:4,isSelected:!0,pinnedBy:{priority:0},isInCatalog:!0},{order:5,label:5,isSelected:!0,pinnedBy:{priority:0},isInCatalog:!0},{order:6,label:6,isSelected:!1,pinnedBy:{priority:0},isInCatalog:!0},{order:7,label:7,isSelected:!1,pinnedBy:{priority:0},isInCatalog:!0},{order:8,label:8,isSelected:!1,pinnedBy:{priority:0},isInCatalog:!0},{order:9,label:9,isSelected:!1,pinnedBy:{priority:0},isInCatalog:!0},{order:10,label:10,isSelected:!1,pinnedBy:{priority:0},isInCatalog:!0},{order:11,label:11,isSelected:!1,pinnedBy:{priority:0},isInCatalog:!0},{order:12,label:12,isSelected:!1,pinnedBy:{priority:0},isInCatalog:!0},{order:13,label:13,isSelected:!1,pinnedBy:{priority:0},isInCatalog:!0},{order:14,label:14,isSelected:!1,pinnedBy:{priority:0},isInCatalog:!0},{order:15,label:15,isSelected:!1,pinnedBy:{priority:0},isInCatalog:!0},{order:16,label:16,isSelected:!1,pinnedBy:{priority:0},isInCatalog:!0},{order:17,label:17,isSelected:!1,pinnedBy:{priority:0},isInCatalog:!0},{order:18,label:18,isSelected:!1,pinnedBy:{priority:0},isInCatalog:!0}],I=Object(B.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.payload;switch(t){case"DRAG":return r;case"DELETE_FROM_SELECTED":return e[r].isSelected=!1,e[r].pinnedBy={priority:0},e;case"DELETE_FROM_CATALOG":return e[r].isSelected=!1,e[r].isInCatalog=!1,e[r].pinnedBy={priority:0},e;case"TOGGLE_SELECT":return e[r].isSelected=!e[r].isSelected,e;case"TOGGLE_PIN":var n=r.data,i=r.accessRights,s=i.status,c=i.priority,l=e[n].pinnedBy.priority;return e[n].pinnedBy[s]=!e[n].pinnedBy[s],e[n].pinnedBy.priority=c>l?c:l,e;default:return e}})),R=Object(l.b)({item:I,accessRights:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"User",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_ACCESS_RIGHTS":return a.payload;default:return e}}}),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,F=Object(l.d)(R,j());s.a.render(n.a.createElement(c.a,{store:F},n.a.createElement(A,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.bf22189e.chunk.js.map