(this.webpackJsonpaviasales=this.webpackJsonpaviasales||[]).push([[0],{12:function(t,e,n){t.exports={container:"filter-item_container__2FQyE",filterItem:"filter-item_filterItem__2dHbE",contentContainer:"filter-item_contentContainer__3TAHc",checkInput:"filter-item_checkInput__2IDI1",checkBox:"filter-item_checkBox__1-iE1"}},20:function(t,e,n){t.exports={filterContainer:"filter_filterContainer__1hksp",filterTitle:"filter_filterTitle__2qJ0w",filterList:"filter_filterList__9tqaK"}},21:function(t,e,n){t.exports={container:"app_container__190db",logoContainer:"app_logoContainer__215p8",logo:"app_logo__1sv3J"}},26:function(t,e,n){t.exports={list:"results-list_list__3_SbO",buttonMore:"results-list_buttonMore__2P63V"}},4:function(t,e,n){t.exports={container:"results-item_container__EVNe5",header:"results-item_header__1S4wN",price:"results-item_price__Tq8-j",descriptionRow:"results-item_descriptionRow__TYKje",descriptionColumn:"results-item_descriptionColumn__3fa8d",titleInfo:"results-item_titleInfo__346SW",info:"results-item_info__hPqaM"}},59:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);n(0);var c=n(16),a=n.n(c),s=n(6),r=n(7),i=n(42),o=n(33),l=n(30),u=n(17),j=n(5),b={ALL:!1,"0_TRANS":!1,"1_TRANS":!1,"2_TRANS":!1,"3_TRANS":!1};var h=Object(s.combineReducers)({filter:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0,c=Object(j.a)({},e);switch(n.type){case"CHANGE_FILTER":return c=Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},n.change,!e[n.change])),t=Object.values(c).slice(1).includes(!1),Object(j.a)(Object(j.a)({},c),{},{ALL:!t});case"CHANGE_FILTER_ALL":for(var a in c)c[a]=!e.ALL;return c;default:return e}},sort:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"CHEAP",e=arguments.length>1?arguments[1]:void 0;return"CHANGE_SORT"===e.type?e.change:t},tickets:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return"RECEIVE_TICKETS"===e.type?[].concat(Object(l.a)(t),Object(l.a)(e.tickets)):t}}),f=h,_=n(64),d=n(66),p=n(12),m=n.n(p),O=n(15),x=n.n(O),v=n(25),N=n(34),g=n(65),A=function t(){Object(N.a)(this,t),this.getSearchId=Object(v.a)(x.a.mark((function t(){var e,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://front-test.beta.aviasales.ru/search");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.searchId);case 7:case"end":return t.stop()}}),t)}))),this.getTicketsPack=function(){var t=Object(v.a)(x.a.mark((function t(e){var n,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://front-test.beta.aviasales.ru/tickets?searchId=".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return(c=t.sent).tickets.forEach((function(t){return t.id=Object(g.a)()})),t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=new A,C=function(t){return{type:"CHANGE_FILTER",change:t}},k=function(){return{type:"CHANGE_FILTER_ALL"}},I=function(t){return{type:"CHANGE_SORT",change:t}},E=n(1);var L=Object(r.b)((function(t){return{filter:t.filter}}),(function(t){return Object(s.bindActionCreators)({changeFilterAll:k,changeFilter:C},t)}))((function(t){var e=t.name,n=t.filter,c=t.changeFilter,a=t.changeFilterAll;return Object(E.jsx)("li",{className:m.a.container,children:Object(E.jsx)("label",{className:m.a.filterItem,children:Object(E.jsxs)("div",{className:m.a.contentContainer,children:[Object(E.jsx)("input",{name:e,onChange:function(){"ALL"===e?a():c(e)},className:m.a.checkInput,type:"checkbox",checked:n[e]}),Object(E.jsx)("span",{className:m.a.checkBox}),{ALL:"\u0412\u0441\u0435","0_TRANS":"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a","1_TRANS":"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430","2_TRANS":"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438","3_TRANS":"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"}[e]]})})})})),S=n(20),R=n.n(S);var y=function(){return Object(E.jsxs)("div",{className:R.a.filterContainer,children:[Object(E.jsx)("span",{className:R.a.filterTitle,children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}),Object(E.jsxs)("ul",{className:R.a.filterList,children:[Object(E.jsx)(L,{name:"ALL"}),Object(E.jsx)(L,{name:"0_TRANS"}),Object(E.jsx)(L,{name:"1_TRANS"}),Object(E.jsx)(L,{name:"2_TRANS"}),Object(E.jsx)(L,{name:"3_TRANS"})]})]})},w=n.p+"static/media/Logo.ba7ff9c5.svg",H=n(21),M=n.n(H),F=n(8),P=n.n(F);var G=Object(r.b)((function(t){return{sort:t.sort}}),(function(t){return Object(s.bindActionCreators)({changeSort:I},t)}))((function(t){var e=t.sort,n=t.changeSort;return Object(E.jsxs)("div",{className:P.a.container,children:[Object(E.jsx)("button",{className:"".concat(P.a.item," ").concat("CHEAP"===e?P.a.active:null),onClick:function(){return n("CHEAP")},type:"button",children:"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0451\u0432\u044b\u0439"}),Object(E.jsx)("button",{className:"".concat(P.a.item," ").concat("FAST"===e?P.a.active:null),onClick:function(){return n("FAST")},type:"button",children:"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439"}),Object(E.jsx)("button",{className:"".concat(P.a.item," ").concat("OPTIMAL"===e?P.a.active:null),onClick:function(){return n("OPTIMAL")},type:"button",children:"\u041e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439"})]})})),q=n(4),J=n.n(q),B=n(29);function K(t){var e=t.origin,n=t.destination,c=t.date,a=t.stops,s=t.duration,r=s/60>=24?"".concat(Math.floor(s/1440),"\u0434 ").concat(Math.floor(s/60)%24,"\u0447 ").concat(s%60,"\u043c"):"".concat(Math.floor(s/60),"\u0447 ").concat(s%60,"\u043c"),i=new Date(c),o=Object(B.a)(i,"HH:mm"),l=Object(B.a)(i.setMinutes(i.getMinutes()+s),"HH:mm"),u="".concat(a.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a");return 1===a.length&&(u="".concat(a.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430")),2!==a.length&&3!==a.length||(u="".concat(a.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438")),Object(E.jsxs)("div",{className:J.a.descriptionRow,children:[Object(E.jsxs)("div",{className:J.a.descriptionColumn,children:[Object(E.jsxs)("span",{className:J.a.titleInfo,children:[e," \u2013 ",n]}),Object(E.jsxs)("span",{className:J.a.info,children:[o," \u2013 ",l]})]}),Object(E.jsxs)("div",{className:J.a.descriptionColumn,children:[Object(E.jsx)("span",{className:J.a.titleInfo,children:"\u0412 \u043f\u0443\u0442\u0438"}),Object(E.jsx)("span",{className:J.a.info,children:r})]}),Object(E.jsxs)("div",{className:J.a.descriptionColumn,children:[Object(E.jsx)("span",{className:J.a.titleInfo,children:u}),Object(E.jsx)("span",{className:J.a.info,children:a.join(", ")})]})]})}var V=function(t){var e=t.price,n=t.carrier,c=t.segments,a="https://pics.avs.io/99/36/".concat(n,".png");return Object(E.jsxs)("li",{className:J.a.container,tabIndex:"0",children:[Object(E.jsxs)("header",{className:J.a.header,children:[Object(E.jsxs)("span",{className:J.a.price,children:[e," P"]}),Object(E.jsx)("img",{src:a,alt:"aircraft logo"})]}),Object(E.jsx)(K,Object(j.a)({},c[0])),Object(E.jsx)(K,Object(j.a)({},c[1]))]})},D=n(26),U=n.n(D);var W=Object(r.b)((function(t){return{tickets:t.tickets}}))((function(t){var e=t.tickets.map((function(t){return Object(E.jsx)(V,Object(j.a)({},t),t.id)}));return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("ul",{className:U.a.list,children:e}),Object(E.jsx)("button",{className:U.a.buttonMore,type:"button",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451 5 \u0431\u0438\u043b\u0435\u0442\u043e\u0432!"})]})})),Q=W;var Y=function(){return Object(E.jsxs)("div",{className:M.a.container,children:[Object(E.jsx)("div",{className:M.a.logoContainer,children:Object(E.jsx)("img",{src:w,alt:"logo",className:M.a.logo})}),Object(E.jsxs)(_.a,{gutter:{xs:0,md:24},children:[Object(E.jsx)(d.a,{xs:{span:24},md:{span:8},children:Object(E.jsx)(y,{})}),Object(E.jsxs)(d.a,{xs:{span:24},md:{span:16},children:[Object(E.jsx)(G,{}),Object(E.jsx)(Q,{})]})]})]})},z=(n(58),n(59),Object(s.createStore)(f,Object(o.composeWithDevTools)(Object(s.applyMiddleware)(i.a))));a.a.render(Object(E.jsx)(r.a,{store:z,children:Object(E.jsx)(Y,{})}),document.getElementById("root")),z.dispatch((function(t){return T.getSearchId().then((function(t){return T.getTicketsPack(t)})).then((function(e){return t({type:"RECEIVE_TICKETS",tickets:e.tickets})}))}))},8:function(t,e,n){t.exports={container:"results-sort_container__2c3ja",item:"results-sort_item__1oJUM",active:"results-sort_active__2qUpf"}}},[[60,1,2]]]);
//# sourceMappingURL=main.334fa913.chunk.js.map