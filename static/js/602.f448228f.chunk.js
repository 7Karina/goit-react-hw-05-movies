"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[602],{615:function(n,t,e){e.d(t,{Z:function(){return h}});var r,a,o,u=e(689),i=e(766),c=e(686),s=e(87),p=c.Z.ul(r||(r=(0,i.Z)(["\n  list-style-type: none;\n"]))),f=c.Z.li(a||(a=(0,i.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),d=(0,c.Z)(s.rU)(o||(o=(0,i.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),l=e(184),h=function(n){var t=n.films,e=(0,u.TH)();return(0,l.jsx)(p,{children:t.map((function(n){return(0,l.jsx)(f,{children:(0,l.jsx)(d,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},602:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,o,u=e(439),i=e(791),c=e(940),s=e(615),p=e(766),f=e(686),d=f.Z.form(r||(r=(0,p.Z)(["\n  display: flex;\n  align-item: center;\n"]))),l=f.Z.input(a||(a=(0,p.Z)(["\n  padding: 12px 14px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  margin-right: 10px;\n  border-radius: 4px 8px;\n  outline: none;\n\n  &hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"]))),h=f.Z.button(o||(o=(0,p.Z)(["\n  padding: 12px 12px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px 8px;\n\n  &hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"]))),x=e(184),v=function(n){var t=n.searchMovies,e=(0,i.useState)(""),r=(0,u.Z)(e,2),a=r[0],o=r[1];return(0,x.jsxs)(d,{onSubmit:function(n){n.preventDefault(),t(a.toLowerCase())},children:[(0,x.jsx)(l,{type:"text",name:"query",autoFocus:!0,value:a,onChange:function(n){o(n.target.value)}}),(0,x.jsx)(h,{type:"submit",children:"Search"})]})},g=e(975),m=function(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,i.useState)(!1),o=(0,u.Z)(a,2),p=o[0],f=o[1],d=(0,i.useState)(!1),l=(0,u.Z)(d,2),h=l[0],m=l[1];return(0,x.jsxs)("main",{children:[(0,x.jsx)(v,{searchMovies:function(n){f(!0),(0,g.Ml)(n).then((function(n){r(n),m(0===n.length)})).catch((function(n){console.log(n)})).finally((function(){f(!1)}))}}),p&&(0,x.jsx)(c.Z,{}),h&&(0,x.jsx)("p",{children:"There is no movies with this request. Please, try again"}),e&&(0,x.jsx)(s.Z,{films:e})]})}},975:function(n,t,e){e.d(t,{Bt:function(){return d},Ml:function(){return s},Tg:function(){return c},Y5:function(){return p},wL:function(){return f}});var r=e(861),a=e(687),o=e.n(a),u=e(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="328b76eb4c7a284a4c0c5fe7091e02d0",c=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.f448228f.chunk.js.map