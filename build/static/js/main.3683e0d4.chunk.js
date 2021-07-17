(this.webpackJsonpsofkastudents=this.webpackJsonpsofkastudents||[]).push([[0],{22:function(t,e,A){},43:function(t,e,A){"use strict";A.r(e);var n=A(1),c=A.n(n),s=A(16),r=A.n(s),i=(A(22),A(17)),a=A(4);var o=function(t,e){var A=t.students,n=t.ranking;switch(e.type){case"update-students":return A.list=e.students,A.item={},Object(a.a)(Object(a.a)({},t),{},{students:A});case"update-ranking":return n.list=e.ranking.orderedStudents,console.log(n.list),n.item={},Object(a.a)(Object(a.a)({},t),{},{ranking:n});default:return t}},l=A(0),d={students:{list:[]},ranking:{list:[]}},j=Object(n.createContext)(d),u=function(t){var e=t.children,A=Object(n.useReducer)(o,d),c=Object(i.a)(A,2),s=c[0],r=c[1];return Object(l.jsx)(j.Provider,{value:{state:s,dispatch:r},children:e})},E=j,h=A(3),B=A.n(h),b=A(6),O=A(7),x=A.n(O),Q={HOST_API:"https://sofkau-students.herokuapp.com"}.HOST_API,p={getAll:function(){var t=Object(b.a)(B.a.mark((function t(){var e;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("".concat(Q,"/api/sofkau/students"));case 2:return e=t.sent,console.log(e.data.data),t.abrupt("return",e.data.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),voteById:function(){var t=Object(b.a)(B.a.mark((function t(e){var A;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.patch("".concat(Q,"/api/sofkau/students/").concat(e));case 2:return A=t.sent,t.abrupt("return",A.data.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(t){var e=t.studentData,A=Object(n.useContext)(E).dispatch;return Object(l.jsxs)("tr",{className:"table-light",children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.lastName}),Object(l.jsx)("td",{children:e.cellphone}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.speciality}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(t){return function(t,e){t.preventDefault(),p.voteById(e).then((function(t){A({type:"update-ranking",ranking:t})}))}(t,e._id)},children:"\xa1Vota aqui!"})})]},t.key)},f={title:{margin:40,textAlign:"center"}},v=function(){var t=Object(n.useContext)(E),e=t.dispatch,A=t.state.students.list;return Object(n.useEffect)((function(){p.getAll().then((function(t){console.log(t),e({type:"update-students",students:t})}))}),[e]),Object(l.jsxs)("div",{className:"container ",children:[Object(l.jsx)("h2",{style:f.title,children:"ESTUDIANTES SOFKAU..."}),Object(l.jsxs)("table",{className:"table table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"NOMBRES "}),Object(l.jsx)("th",{scope:"col",children:"APELLIDOS "}),Object(l.jsx)("th",{scope:"col",children:"CELULAR "}),Object(l.jsx)("th",{scope:"col",children:"EMAIL "}),Object(l.jsx)("th",{scope:"col",children:"ESPECIALIDAD "}),Object(l.jsx)("th",{scope:"col",children:"TU FAVORITO "})]})}),Object(l.jsx)("tbody",{children:A.map((function(t){return Object(l.jsx)(g,{studentData:t},t.id)}))})]})]})},C=function(t){var e=t.positionData;return Object(l.jsxs)("tr",{className:"table-light",children:[Object(l.jsx)("td",{children:"".concat(e.name," ").concat(e.lastName)}),Object(l.jsx)("td",{children:e.votes})]},t.key)},I={title:{margin:40,textAlign:"center"}},m=function(){var t=Object(n.useContext)(E),e=(t.dispatch,t.state.ranking.list);return Object(n.useEffect)((function(){})),Object(l.jsxs)("div",{className:"container ",children:[Object(l.jsx)("div",{style:{backgroundColor:"#d36600",height:5},children:" "}),Object(l.jsx)("h2",{style:I.title,children:"RANKING DE POPULARIDAD..."}),!e.length>0?Object(l.jsx)("p",{className:"alert-warning text-center",children:"Por favor realiza tu voto"}):Object(l.jsxs)("table",{className:"table table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Nombres "}),Object(l.jsx)("th",{scope:"col",children:"Votos "})]})}),Object(l.jsx)("tbody",{children:e.map((function(t){return Object(l.jsx)(C,{positionData:t},t.id)}))})]})]})},D=function(t){return Object(l.jsxs)("div",{className:"container ",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"User Avatar",className:"img-size-200"})}),t.children]})};var P=function(){return Object(l.jsx)(u,{children:Object(l.jsxs)(D,{children:[Object(l.jsx)(m,{}),Object(l.jsx)(v,{})]})})},k=function(t){t&&t instanceof Function&&A.e(3).then(A.bind(null,44)).then((function(e){var A=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;A(t),n(t),c(t),s(t),r(t)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root")),k()}},[[43,1,2]]]);
//# sourceMappingURL=main.3683e0d4.chunk.js.map