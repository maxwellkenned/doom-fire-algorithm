(this["webpackJsonpdoom-fire-algorithm"]=this["webpackJsonpdoom-fire-algorithm"]||[]).push([[0],{22:function(n,e,t){"use strict";t.r(e);var r,c,o,a,i,b,u=t(0),l=t.n(u),s=t(11),f=t.n(s),j=t(7),d=t(4),O=["7, 7, 7","31, 7, 7","47, 15, 7","71, 15, 7","87, 23, 7","103, 31, 7","119, 31, 7","143, 39, 7","159, 47, 7","175, 63, 7","191, 71, 7","199, 71, 7","223, 79, 7","223, 87, 7","223, 87, 7","215, 95, 7","215, 95, 7","215, 103, 15","207, 111, 15","207, 119, 15","207, 127, 15","207, 135, 23","199, 135, 23","199, 143, 23","199, 151, 31","191, 159, 31","191, 159, 31","191, 167, 39","191, 167, 39","191, 175, 47","183, 175, 47","183, 183, 47","183, 183, 55","207, 207, 111","223, 223, 159","239, 239, 199","255, 255, 255"],h=t(2),p=t(3),x=p.b.section(r||(r=Object(h.a)(["\n  display: flex;\n  flex: 1;\n  min-height: 100vh;\n  justify-content: center;\n  align-items: center;\n"]))),g=p.b.table(c||(c=Object(h.a)(["\n  border-collapse: collapse;\n  /* border: 1px solid #000; */\n\n  box-shadow: 0 2px 20px -10px rgba(0, 0, 0, 1);\n"]))),v=p.b.td(o||(o=Object(h.a)(["\n  width: 50px;\n  height: 50px;\n  border: 1px solid #000;\n  text-align: center;\n  vertical-align: middle;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 18px;\n  position: relative;\n"]))),m=Object(p.b)(v)(a||(a=Object(h.a)(["\n  background-color: rgb(",");\n  width: 4px;\n  height: 4px;\n  border: 0;\n"])),(function(n){return n.bg})),y=p.b.span(i||(i=Object(h.a)(["\n  font-size: 10px;\n  display: inline-block;\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  color: #999;\n"]))),k=t(1),S=function(n){var e=n.fireWidth,t=void 0===e?80:e,r=n.fireHeight,c=void 0===r?45:r,o=n.debug,a=void 0!==o&&o,i=function(){var n=Object(u.useState)(0),e=Object(d.a)(n,2),t=e[0],r=e[1];return{increment:function(){r((function(n){return n+1}))},count:t}}().increment,b=Object(u.useState)((function(){return Array.from({length:t*c},(function(){return 0}))})),l=Object(d.a)(b,2),s=l[0],f=l[1],h=Object(u.useState)((function(){return Array.from({length:t},(function(n,e){return e}))})),p=Object(d.a)(h,2),S=p[0],w=(p[1],Object(u.useState)((function(){return Array.from({length:c},(function(n,e){return e}))}))),C=Object(d.a)(w,2),M=C[0],I=(C[1],Object(u.useCallback)((function(n){var e=n+t;if(!(e>=c*t)){var r=Math.floor(5*Math.random());if(s[e]-r<0)return f((function(e){var t=e;return t[n]=0,t}));f((function(t){var c=t;return c[n-r]=s[e]-r,c}))}}),[t,c,s])),U=Object(u.useCallback)((function(){var n,e=Object(j.a)(S);try{for(e.s();!(n=e.n()).done;){var r,c=n.value,o=Object(j.a)(M);try{for(o.s();!(r=o.n()).done;){var a=r.value;I(c+t*a)}}catch(b){o.e(b)}finally{o.f()}}}catch(b){e.e(b)}finally{e.f()}i()}),[i,t,S,M,I]),z=Object(u.useCallback)((function(){var n,e=t*c,r=Object(j.a)(S);try{var o=function(){var r=n.value,c=e-t+r;f((function(n){var e=n;return e[c]=36,e}))};for(r.s();!(n=r.n()).done;)o()}catch(a){r.e(a)}finally{r.f()}}),[t,c,S]),A=M.map((function(n){var e=S.map((function(e){var r=e+t*n,c=s[r];if(a)return Object(k.jsxs)(v,{children:[Object(k.jsx)(y,{children:r}),c]},"column-".concat(e));var o=O[c];return Object(k.jsx)(m,{bg:o},"column-".concat(e))}));return Object(k.jsx)("tr",{children:e},"row-".concat(n))})),B=Object(u.useCallback)((function(){z(),setInterval((function(){U()}),1e3)}),[z,U]);return Object(u.useEffect)((function(){B()}),[B]),Object(k.jsx)(x,{children:Object(k.jsx)(g,{children:Object(k.jsx)("tbody",{children:A})})})},w=Object(p.a)(b||(b=Object(h.a)(["\n  * {\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    border: 0;\n    text-decoration: none;\n  }\n\n  html, body, #root {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    height: 100%;\n  }\n\n  body {\n    background-color: #282a36;\n  }\n"]))),C=function(){return Object(k.jsxs)("main",{children:[Object(k.jsx)(w,{}),Object(k.jsx)(S,{})]})};f.a.render(Object(k.jsx)(l.a.StrictMode,{children:Object(k.jsx)(C,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.fb5946c5.chunk.js.map