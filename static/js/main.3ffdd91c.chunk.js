(this["webpackJsonpstudio-ghibli-database"]=this["webpackJsonpstudio-ghibli-database"]||[]).push([[0],{110:function(e,t,c){},134:function(e,t,c){"use strict";c.r(t);var i=c(0),a=c.n(i),n=c(34),s=c.n(n),r=c(38),l=c(24),o=c(8),j=c(172),b=c(173),d=c(174),h=c(168),u=c(78),m=c.n(u),O=c(158),x=c(162),f=c(1);var v=function(e){return Object(f.jsxs)(O.a,{children:[Object(f.jsx)("div",{className:"film-list1",children:Object(f.jsxs)(j.a,{cols:1,sx:{width:350,height:500},children:[Object(f.jsx)(b.a,{cols:1},"Subheader"),e.filmList.map((function(t){return Object(f.jsx)(r.b,{to:"/film/"+t.title,children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(x.a,{onClick:function(){e.handleFilmClick(t.id)},src:"".concat(t.movie_banner,"?w=248&fit=crop&auto=format"),srcSet:"".concat(t.movie_banner,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:t.title,fluid:!0}),Object(f.jsx)(d.a,{title:t.title,subtitle:t.director,actionIcon:Object(f.jsx)(h.a,{sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),children:Object(f.jsx)(m.a,{})})})]},t.id)})}))]})},"film-list1"),Object(f.jsx)("div",{className:"film-list2",children:Object(f.jsxs)(j.a,{cols:2,sx:{width:1200,height:1e3},children:[Object(f.jsx)(b.a,{cols:2},"Subheader"),e.filmList.map((function(t){return Object(f.jsx)(r.b,{to:"/film/"+t.title,children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)("img",{onClick:function(){e.handleFilmClick(t.id)},src:"".concat(t.movie_banner,"?w=248&fit=crop&auto=format"),srcSet:"".concat(t.movie_banner,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:t.title}),Object(f.jsx)(d.a,{title:t.title,subtitle:t.director,actionIcon:Object(f.jsx)(h.a,{sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),children:Object(f.jsx)(m.a,{})})},"")]},t.img)})}))]})},"film-list2")]})},p=c(166),g=c(167);var F=function(){return Object(f.jsxs)(p.a,{bg:"light",variant:"light",children:[Object(f.jsx)(p.a.Brand,{to:"/",children:Object(f.jsx)("img",{src:"https://res.cloudinary.com/orawee/image/upload/v1636054581/StudioGhibli/pngwing.com_1_vszazb.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"})}),Object(f.jsxs)(g.a,{className:"me-auto",children:[Object(f.jsx)(r.b,{className:"nav-link",to:"/",children:"Home"}),Object(f.jsx)(r.b,{className:"nav-link",to:"/myFavorites",children:"Favorites"})]})]})},S=c(18),k=c(169),N=c(176),w=c(175),C=c(171),_=c(64);var y=function(e){var t=e.favorites.map((function(t,c){return Object(f.jsx)("div",{className:"favoritesList",children:Object(f.jsxs)(k.a,{sx:{maxWidth:345},children:[Object(f.jsx)(w.a,{component:"img",alt:t.title,height:"240",image:t.movie_banner}),Object(f.jsxs)(N.a,{children:[Object(f.jsx)(C.a,{gutterBottom:!0,variant:"h5",component:"div",children:t.title}),Object(f.jsx)(_.a,{onClick:function(){return e.removeFilm(c)},children:"Remove from Favorites"})]})]})},c)}));return Object(f.jsx)("div",{className:"MyFavorites",children:t})},I=c(163);var L=function(e){var t=Object(i.useState)({}),c=Object(o.a)(t,2),a=c[0],n=c[1];Object(i.useEffect)((function(){fetch("https://ghibliapi.herokuapp.com/films/".concat(e.filmId)).then((function(e){return e.json()})).then((function(e){n(e)}))}),[e.filmId]);var s="";return a.title&&(s=Object(f.jsx)("div",{className:"singleFilm",children:Object(f.jsxs)(I.a,{className:"singleFilm",children:[Object(f.jsx)(O.a,{xs:12,sm:12,md:6,children:Object(f.jsx)(x.a,{src:a.image,fluid:!0})}),Object(f.jsxs)(O.a,{className:"filmDetails",xs:12,sm:12,md:6,children:[Object(f.jsx)("h3",{children:a.title}),Object(f.jsxs)("p",{children:["Directed by: ",a.director]}),Object(f.jsxs)("p",{children:["Produced by: ",a.producer]}),Object(f.jsxs)("p",{children:["Release Date: ",a.release_date]}),Object(f.jsx)("p",{children:a.description}),Object(f.jsx)(O.a,{className:"AddtoFavoritesBtn",children:Object(f.jsx)(_.a,{variant:"primary",onClick:function(){return e.addToFavorites(a)},children:"Add to Favorites"})})]})]})})),Object(f.jsx)("div",{className:"singleFilm",children:s})},B=c(164);var A=function(e){var t=function(){e.searchKeyword(c.current.value)},c=Object(i.useRef)("");return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(O.a,{xs:12,sm:12,md:12,children:[Object(f.jsx)("div",{className:"banner",children:Object(f.jsx)(x.a,{src:"https://res.cloudinary.com/orawee/image/upload/v1635965664/StudioGhibli/Screen_Shot_2021-11-03_at_11.52.20_AM_ycxuua.png",fluid:!0})}),Object(f.jsxs)("div",{className:"searchForm",children:[Object(f.jsx)("input",{ref:c,type:"text",placeholder:"Search Films",className:"prompt",value:e.term,onChange:t}),Object(f.jsx)("button",{onClick:function(){e.handleClearClick({getSearchTerm:t})},children:Object(f.jsx)(B.a,{})})]})]})})},R=c(165);c(110);var T=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(""),s=Object(o.a)(n,2),r=s[0],j=s[1],b=Object(i.useState)([]),d=Object(o.a)(b,2),h=d[0],u=d[1],m=Object(i.useState)(""),x=Object(o.a)(m,2),p=x[0],g=x[1],k=Object(i.useState)([]),N=Object(o.a)(k,2),w=N[0],C=N[1],_=Object(i.useState)(""),B=Object(o.a)(_,2),T=B[0],D=B[1];Object(i.useEffect)((function(){fetch("https://ghibliapi.herokuapp.com/films").then((function(e){return e.json()})).then((function(e){a(e)}))}),[T]);var E=function(e){C([].concat(Object(l.a)(w),[e]))},M=function(e){var t=w.filter((function(t,c){return c!==e}));C(t)};return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(R.a,{children:Object(f.jsx)(I.a,{children:Object(f.jsxs)(O.a,{children:[Object(f.jsx)(F,{}),Object(f.jsxs)(S.c,{children:[Object(f.jsxs)(S.a,{exact:!0,path:"/",children:[" ",Object(f.jsx)(A,{handleClearClick:function(){D(0),j(""),u(c)},term:r,searchKeyword:function(e){if(j(e),""!==e){var t=c.filter((function(t){return Object.values(t).join("").toLowerCase().includes(e.toLowerCase())}));u(t)}else u(c)}}),Object(f.jsx)(v,{filmList:r.length<1?c:h,handleFilmClick:function(e){g(e)}})," "]}),Object(f.jsx)(S.a,{exact:!0,path:"/myFavorites",render:function(){return Object(f.jsx)(y,{removeFilm:M,favorites:w})}}),Object(f.jsx)(S.a,{exact:!0,path:"/film/:filmTitle",render:function(){return Object(f.jsx)(L,{addToFavorites:E,filmId:p})}})]})]})})})})};c(111),c(112);s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(r.a,{children:Object(f.jsx)(T,{})})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.3ffdd91c.chunk.js.map