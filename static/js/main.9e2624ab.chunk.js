(this["webpackJsonpstudio-ghibli-database"]=this["webpackJsonpstudio-ghibli-database"]||[]).push([[0],{108:function(e,t,c){},132:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),r=c(33),a=c.n(r),s=c(39),o=c(23),j=c(7),l=c(157),b=c(158),u=c(159),d=c(155),h=c(82),O=c.n(h),m=c(1);function f(e){return Object(m.jsxs)(l.a,{sx:{width:1200,height:1e3},children:[Object(m.jsx)(b.a,{cols:2},"Subheader"),e.filmList.map((function(t){return Object(m.jsx)(s.b,{to:"/film/"+t.title,children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)("img",{onClick:function(){e.handleFilmClick(t.id)},src:"".concat(t.movie_banner,"?w=248&fit=crop&auto=format"),srcSet:"".concat(t.image,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:t.title}),Object(m.jsx)(u.a,{title:t.title,subtitle:t.director,actionIcon:Object(m.jsx)(d.a,{sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),children:Object(m.jsx)(O.a,{})})})]},t.img)})}))]})}var x=c(153),v=c(154);var p=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(x.a,{bg:"light",variant:"light",children:[Object(m.jsx)(x.a.Brand,{href:"/",children:"Studio Ghibli"}),Object(m.jsxs)(v.a,{className:"me-auto",children:[Object(m.jsx)(s.b,{className:"nav-link",to:"/",children:"Home"}),Object(m.jsx)(s.b,{className:"nav-link",to:"/myFavorites",children:"My Favorites"})]})]})})},g=c(14);var F=function(e){console.log(e);var t=e.favorites.map((function(t,c){return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:t.title}),Object(m.jsx)("img",{src:t.image,alt:t.title}),Object(m.jsx)("button",{onClick:function(){return e.removeFilm(c)},children:"Remove from Favorites"})]},c)}));return Object(m.jsxs)("div",{className:"MyFavorites",children:[t,"favorites"]})},S=c(84);var y=function(e){console.log(e);var t=Object(i.useState)({}),c=Object(j.a)(t,2),n=c[0],r=c[1];Object(i.useEffect)((function(){fetch("https://ghibliapi.herokuapp.com/films/".concat(e.filmId)).then((function(e){return e.json()})).then((function(e){r(e)}))}),[e.filmId]);var a="";return n.title&&(a=Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:n.title}),Object(m.jsx)("img",{src:n.image,alt:n.title}),Object(m.jsxs)("p",{children:["Directed by: ",n.director]}),Object(m.jsxs)("p",{children:["Produced by: ",n.producer]}),Object(m.jsx)("p",{children:n.description}),Object(m.jsx)(S.a,{variant:"primary",onClick:function(){return e.addToFavorites(n)},children:"Add to Favorites"})]})),Object(m.jsx)("div",{className:"singleFilm",children:a})};var k=function(e){var t=Object(i.useRef)("");return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"banner",children:Object(m.jsx)("img",{src:"https://res.cloudinary.com/orawee/image/upload/v1635965664/StudioGhibli/Screen_Shot_2021-11-03_at_11.52.20_AM_ycxuua.png",alt:""})}),Object(m.jsx)("div",{className:"searchForm",children:Object(m.jsxs)("div",{className:"icon input",children:[Object(m.jsx)("input",{ref:t,type:"text",placeholder:"Search Films",className:"prompt",value:e.term,onChange:function(){e.searchKeyword(t.current.value)}}),Object(m.jsx)("i",{className:"search icon"})]})})]})},N=c(151),w=c(152);c(108);var C=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)(""),a=Object(j.a)(r,2),s=a[0],l=a[1],b=Object(i.useState)([]),u=Object(j.a)(b,2),d=u[0],h=u[1],O=Object(i.useState)(""),x=Object(j.a)(O,2),v=x[0],S=x[1],C=Object(i.useState)([]),_=Object(j.a)(C,2),I=_[0],L=_[1];Object(i.useEffect)((function(){fetch("https://ghibliapi.herokuapp.com/films").then((function(e){return e.json()})).then((function(e){n(e)}))}),[]);var M=function(e){L([].concat(Object(o.a)(I),[e]))},A=function(e){var t=I.filter((function(t,c){return c!==e}));L(t)};return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(N.a,{children:Object(m.jsxs)(w.a,{children:[Object(m.jsx)(p,{}),Object(m.jsxs)(g.c,{children:[Object(m.jsxs)(g.a,{exact:!0,path:"/",children:[" ",Object(m.jsx)(k,{term:s,searchKeyword:function(e){if(l(e),""!==e){var t=c.filter((function(t){return Object.values(t).join("").toLowerCase().includes(e.toLowerCase())}));h(t)}else h(c)}}),Object(m.jsx)(f,{filmList:s.length<1?c:d,handleFilmClick:function(e){console.log(e),S(e)}})," "]}),Object(m.jsx)(g.a,{exact:!0,path:"/myFavorites",render:function(){return Object(m.jsx)(F,{removeFilm:A,favorites:I})}}),Object(m.jsx)(g.a,{exact:!0,path:"/film/:filmTitle",render:function(){return Object(m.jsx)(y,{addToFavorites:M,filmId:v})}})]})]})})})};c(109),c(110);a.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(s.a,{children:Object(m.jsx)(C,{})})}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.9e2624ab.chunk.js.map