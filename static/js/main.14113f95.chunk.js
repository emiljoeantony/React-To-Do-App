(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),o=a.n(l),s=(a(13),a(7)),r=a(1),i=(a(14),function(e){var t=e.onNewTask,a=Object(n.useState)(""),l=Object(r.a)(a,2),o=l[0],s=l[1];return c.a.createElement("form",{onSubmit:function(e){""===o?(alert("please enter a task"),e.preventDefault()):(t({text:o,completed:!1,id:1e3*Math.random()}),s(""))}},c.a.createElement("div",{className:"input-bar"},c.a.createElement("input",{value:o,onChange:function(e){s(e.target.value)},type:"text",className:"todo-input",placeholder:"Enter your task here...",autofocus:!0}),c.a.createElement("button",{className:"todo-button",type:"submit"},c.a.createElement("span",{className:"fas fa-plus-square"}))))}),m=a(3),u=function(e){var t=e.todo,a=e.onEditTask,l=e.onDeleteTask,o=Object(n.useState)(!1),s=Object(r.a)(o,2),i=s[0],u=s[1],d=Object(n.useState)(t.text),f=Object(r.a)(d,2),E=f[0],p=f[1],b=Object(n.useState)(!1),N=Object(r.a)(b,2),v=N[0],g=N[1],k=c.a.createElement("div",{className:"todo"},c.a.createElement("label",{className:"todo-label"},"Are you sure"),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{onClick:function(){return l(t)},className:"confirm-delete-btn"},c.a.createElement("i",{className:"fas fa-check"}),c.a.createElement("span",{className:"visually-hidden"},E)),c.a.createElement("button",{type:"button",className:"cancel-delete-btn",onClick:function(){return g(!1)}},c.a.createElement("span",{className:"visually-hidden"},E),c.a.createElement("i",{class:"fas fa-window-close"})))),h=c.a.createElement("form",{onSubmit:function(e){console.log("save"),e.preventDefault(),a(Object(m.a)(Object(m.a)({},t),{},{text:E})),u(!1)},className:"stack-small"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"todo-label",htmlFor:t.id},"Edit Task"),c.a.createElement("input",{onChange:function(e){return p(e.target.value)},id:t.id,className:"todo-text",type:"text",value:E,autofocus:!0})),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"todo-cancel",onClick:function(){return u(!1)}},c.a.createElement("span",{className:"visually-hidden"},E),c.a.createElement("i",{class:"fas fa-window-close"})),c.a.createElement("button",{type:"submit",className:"todo-edit"},c.a.createElement("span",{className:"visually-hidden"},E),c.a.createElement("i",{class:"fas fa-save"})))),O=c.a.createElement("div",{className:"todo"},c.a.createElement("li",{className:"todo-item ".concat(t.completed?"completed-status":"")},E),c.a.createElement("button",{onClick:function(){return u(!0)},className:"edit-btn"},c.a.createElement("i",{class:"fas fa-edit"})),c.a.createElement("button",{onClick:function(){return a(Object(m.a)(Object(m.a)({},t),{},{completed:!t.completed}))},className:"complete-btn"},c.a.createElement("i",{className:"fas fa-check"})),c.a.createElement("button",{onClick:function(){g((function(e){return{isOpen:!e.isOpen}}))},className:"trash-btn"},c.a.createElement("i",{className:"fas fa-trash"})));return c.a.createElement("li",{className:"edit-todo"},i?h:O&&v?k:O)},d=function(e){var t=e.filteredTodos,a=e.onEditTask,n=e.onDeleteTask;return c.a.createElement("div",{className:"todo-container"},c.a.createElement("div",null,c.a.createElement("h1",null,"Todays Task")),c.a.createElement("ul",{className:"todo-list"},t.map((function(e){return c.a.createElement(u,{key:e.id,todo:e,onEditTask:a,onDeleteTask:n})}))))},f=function(){var e=new Date;return c.a.createElement("div",{className:"calendar-info"},c.a.createElement("div",{className:"day"},e.toLocaleString("en-us",{weekday:"long"}).toUpperCase()),c.a.createElement("div",{className:"date"},e.getDate(),"-",e.toLocaleString("en-us",{month:"short"}).toUpperCase(),"-",e.getFullYear()))},E=function(e){var t=e.todos;return c.a.createElement("div",{className:"widgets"},c.a.createElement("div",{className:"total-widget"},c.a.createElement("p",{className:"count"},t.length),c.a.createElement("p",{className:"tasks"},"Total Tasks")),c.a.createElement("div",{className:"total-widget"},c.a.createElement("p",{className:"count"},t.filter((function(e){return e.completed})).length),c.a.createElement("p",{className:"tasks_done"},"Completed")),c.a.createElement("div",{className:"total-widget"},c.a.createElement("p",{className:"count"},t.filter((function(e){return!e.completed})).length),c.a.createElement("p",{className:"remaining_tasks"},"Remaining")),c.a.createElement(f,null))};var p=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)("all"),m=Object(r.a)(o,2),u=m[0],f=(m[1],Object(n.useState)([])),p=Object(r.a)(f,2),b=p[0],N=p[1],v=Object(n.useState)(""),g=Object(r.a)(v,2);g[0],g[1],Object(n.useEffect)((function(){O()}),[]),Object(n.useEffect)((function(){k(),h()}),[a,u]);var k=function(){switch(u){case"completed":N(a.filter((function(e){return!0===e.completed})));break;case"pending":N(a.filter((function(e){return!1===e.completed})));break;default:N(a)}},h=function(){localStorage.setItem("todos",JSON.stringify(a))},O=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));l(e)}};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"app-name"},"To-Do"),c.a.createElement(i,{onNewTask:function(e){l((function(t){return[].concat(Object(s.a)(t),[e])}))}}),c.a.createElement(d,{setTodos:l,onDeleteTask:function(e){l((function(t){return t.filter((function(t){return e.id!==t.id}))}))},onEditTask:function(e){var t=e.id;l((function(a){return a.map((function(a){var n=a.id;return t===n?e:a}))}))},filteredTodos:b}),c.a.createElement("div",{className:"Footer"},c.a.createElement("h1",null,"Overview")),c.a.createElement(E,{todos:a,filteredTodos:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.14113f95.chunk.js.map