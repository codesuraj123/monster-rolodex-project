(this["webpackJsonpmonster-rolodex-project"]=this["webpackJsonpmonster-rolodex-project"]||[]).push([[0],{29:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n(0),s=n.n(r),o=n(8),a=n.n(o),i=(n(59),n(30)),j=n(10),h=n(23),l=n(98),u=(n(29),n(94)),d=n(100),b=n(31),O=n.n(b),m=function(e){var t=new O.a(window.location.hash);return Object.entries(e).forEach((function(e){var n=Object(h.a)(e,2),c=n[0],r=n[1];return t.set(c,r)})),console.log(t.toString()),t.toString()},f=function(e){var t=Object(j.f)();return Object(c.jsxs)(u.a,{container:!0,className:"card-container",children:[Object(c.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(c.jsx)("h3",{children:e.monster.name}),Object(c.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){return t.push("".concat("/details","?").concat(m({monsterid:e.monster.id})))},children:"Details"})]})},x=function(e){return console.log(e),Object(c.jsx)("div",{className:"card-list",children:e.monsterData.map((function(e){return Object(c.jsx)(f,{monster:e},e.id)}))})},p=n(99),g=function(e){var t=e.handleChange;return Object(c.jsx)("div",{children:Object(c.jsx)(p.a,{id:"monster-id",label:"Search Monster",type:"search",variant:"outlined",onChange:t})})},v=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),a=Object(h.a)(o,2),i=a[0],j=a[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]);var u=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)(l.a,{className:"search",children:[Object(c.jsx)("h1",{children:"The Monster Rolodex Project"}),Object(c.jsx)(g,{handleChange:function(e){return j(e.target.value)}})]}),Object(c.jsx)(x,{monsterData:u})]})},w=function(){var e=Object(j.f)(),t=Object(r.useState)([]),n=Object(h.a)(t,2),s=n[0],o=n[1],a=function(e){var t=new O.a(e.search),n=Number(t.get("monsterid"));return console.log(n),{ScreenId:n}}(window.location).ScreenId;return Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users/".concat(a)).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[a]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("h2",{children:["Hi, ",s.name]}),"            ",Object(c.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(s.id,"?set=set2&size=180x180")}),Object(c.jsxs)("h3",{children:["UserName : ",s.username]}),Object(c.jsx)("h3",{children:"Contact Details - "}),Object(c.jsxs)("h4",{children:["Phone: ",s.phone]}),Object(c.jsxs)("h4",{children:["Email: ",s.email]}),Object(c.jsxs)("h4",{children:["Website: ",s.website]}),Object(c.jsx)(d.a,{color:"primary",variant:"outlined",onClick:function(){return e.push("/")},children:" Back To Main Screen "})]})},C=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(i.a,{children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/",exact:!0,component:v}),Object(c.jsx)(j.a,{path:"/details",component:w})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),S()}},[[65,1,2]]]);
//# sourceMappingURL=main.fc91ae17.chunk.js.map