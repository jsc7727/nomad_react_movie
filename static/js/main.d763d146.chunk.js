(this.webpackJsonpnomad_react_movie=this.webpackJsonpnomad_react_movie||[]).push([[0],{33:function(e,t,a){e.exports=a(65)},38:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),s=a.n(o),c=a(7),i=a(6);a(38);var l=function(){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))},m=a(16),u=a.n(m),p=a(10),v=a(11),d=a(13),h=a(12),f=a(14),E=a(30),y=a.n(E);a(57);var g=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,s=e.poster,i=e.genres;return r.a.createElement(c.b,{to:{pathname:"/movie/".concat(t),state:{id:t,year:a,title:n,summary:o,poster:s,genres:i}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"genres "},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},o.slice(0,180),"..."))))},_=(a(63),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=function(){var e,t;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=year"));case 2:e=n.sent,t=e.data.data.movies,a.setState({movies:t,isLoading:!1});case 5:case"end":return n.stop()}}))},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));a(64);var b=function(){return r.a.createElement("nav",{className:"Navigations"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/About"},"About"))},N=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=(e.id,e.location),a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),t}(r.a.Component);var j=function(){return r.a.createElement(c.a,null,r.a.createElement(b,null),r.a.createElement(i.a,{path:"/",exact:!0,component:_}),r.a.createElement(i.a,{path:"/about",component:l}),r.a.createElement(i.a,{path:"/movie/:id",component:N}))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d763d146.chunk.js.map