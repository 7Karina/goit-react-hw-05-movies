"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{257:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,i,o,c,s=t(439),u=t(791),l=t(689),p=t(87),d=t(975),f=t(940),h=t(766),x=t(686),v=x.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n  margin: 24px;\n  gap: 24px;\n"]))),g=x.Z.ul(a||(a=(0,h.Z)(["\n  display: inline-flex;\n  gap: 12px;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),m=x.Z.ul(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),j=(0,x.Z)(p.rU)(o||(o=(0,h.Z)(["\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 18px;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),w=x.Z.button(c||(c=(0,h.Z)(["\n  padding: 8px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px 8px;\n\n  &hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"]))),Z=t(184),y=function(){var n,e,t=(0,l.UO)().movieId,r=(0,u.useState)(null),a=(0,s.Z)(r,2),i=a[0],o=a[1],c=(0,u.useState)(!1),h=(0,s.Z)(c,2),x=h[0],y=h[1],b=(0,l.TH)(),_=(0,u.useRef)(null!==(n=null===(e=b.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,u.useEffect)((function(){y(!0),(0,d.Y5)(t).then((function(n){o(n)})).catch((function(n){console.log(n)})).finally((function(){y(!1)}))}),[t]);var k=i||{},U=k.title,S=k.release_date,C=k.popularity,R=k.overview,z=k.genres,A=k.poster_path,G=k.original_title;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(p.rU,{to:_.current,children:(0,Z.jsx)(w,{type:"button",children:"Go back"})}),x&&(0,Z.jsx)(f.Z,{}),i&&(0,Z.jsxs)(v,{children:[(0,Z.jsx)("img",{width:"300px",src:A?"https://image.tmdb.org/t/p/w500".concat(A):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:G}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("h1",{children:[U," (",S.slice(0,4),")"]}),(0,Z.jsxs)("p",{children:["User score: ",C]}),(0,Z.jsx)("h2",{children:"Overview"}),(0,Z.jsx)("p",{children:R}),(0,Z.jsx)("h2",{children:"Genres"}),(0,Z.jsx)(g,{children:z.map((function(n){return(0,Z.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,Z.jsx)("hr",{}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h3",{children:"Additional information"}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(j,{to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(j,{to:"reviews",children:"Reviews"})})]}),(0,Z.jsx)("hr",{}),(0,Z.jsx)(l.j3,{})]})]})}},975:function(n,e,t){t.d(e,{Bt:function(){return d},Ml:function(){return u},Tg:function(){return s},Y5:function(){return l},wL:function(){return p}});var r=t(861),a=t(687),i=t.n(a),o=t(294);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="328b76eb4c7a284a4c0c5fe7091e02d0",s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.a7a8865c.chunk.js.map