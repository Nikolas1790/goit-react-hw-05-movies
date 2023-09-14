/*! For license information please see 415.6908324f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{436:function(t,r,n){n.d(r,{a:function(){return u}});var e,o=n(430),i=n(168),a=n(867).ZP.div(e||(e=(0,i.Z)(["\ndisplay: block;\nmargin: 0 auto;\n"]))),c=n(184),u=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(o.iT,{height:20,width:20,color:"#404040",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#393939",strokeWidth:2,strokeWidthSecondary:2})})}},415:function(t,r,n){n.r(r);var e=n(861),o=n(439),i=n(791),a=n(689),c=n(87),u=n(635),s=n(436),f=n(353),l=n(184);function h(){h=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,n){return t[r]=n}}function f(t,r,n,e){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new S(e||[]);return o(a,"_invoke",{value:_(t,n,c)}),a}function l(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",d="executing",y="completed",v={};function g(){}function x(){}function m(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==n&&e.call(L,a)&&(w=L);var E=m.prototype=g.prototype=Object.create(w);function Z(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function _(r,n,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=j(c,e);if(u){if(u===v)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var s=l(r,n,e);if("normal"===s.type){if(o=e.done?y:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=y,e.method="throw",e.arg=s.arg)}}}function j(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,j(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var i=l(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(r){if(r||""===r){var n=r[a];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return x.prototype=m,o(E,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:x,configurable:!0}),x.displayName=s(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},Z(k.prototype),s(k.prototype,c,(function(){return this})),r.AsyncIterator=k,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new k(f(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},Z(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=N,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:N(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),v}},r}r.default=function(){var t=(0,i.useState)(null),r=(0,o.Z)(t,2),n=r[0],p=r[1],d=(0,i.useState)(!1),y=(0,o.Z)(d,2),v=y[0],g=y[1],x=(0,a.TH)();return(0,i.useEffect)((function(){var t;g(!0);!function(){(t=t||(0,e.Z)(h().mark((function t(){var r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.u3)();case 3:r=t.sent,p(r.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",t.t0);case 10:return t.prev=10,g(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))).apply(this,arguments)}()}),[]),(0,l.jsxs)(f.PA,{children:[(0,l.jsx)(f.rg,{children:(0,l.jsx)(f.eA,{children:"Trending today"})}),v&&(0,l.jsx)(s.a,{}),null===n||void 0===n?void 0:n.map((function(t){var r=t.id,n=t.title;return(0,l.jsxs)("li",{children:[" ",(0,l.jsx)(c.rU,{style:{textDecoration:"none"},to:"movies/".concat(r),state:{form:x},children:n})]},r)}))]})}},353:function(t,r,n){n.d(r,{Ol:function(){return O},PA:function(){return Z},Pl:function(){return j},QH:function(){return S},VR:function(){return G},ai:function(){return F},dp:function(){return T},eA:function(){return k},kN:function(){return b},oh:function(){return N},qB:function(){return L},rg:function(){return E},tU:function(){return P},zu:function(){return _}});var e,o,i,a,c,u,s,f,l,h,p,d,y,v,g,x,m=n(168),w=n(867),b=w.ZP.div(e||(e=(0,m.Z)(["\n\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nlist-style: none;\nmargin-bottom: 40px;\n\n"]))),L=w.ZP.div(o||(o=(0,m.Z)(["\npadding: 20px;\n\n\n"]))),E=w.ZP.div(i||(i=(0,m.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]))),Z=w.ZP.div(a||(a=(0,m.Z)(["\npadding: 0 20px;\n\n"]))),k=w.ZP.h1(c||(c=(0,m.Z)(["\nfont-size:28px;\n  color: #333;\n  margin-bottom: 10px;\n"]))),_=w.ZP.div(u||(u=(0,m.Z)(["  \n  padding: 8px 16px;  \n  \n  \n"]))),j=(w.ZP.button(s||(s=(0,m.Z)(["\n  background-color: #007bff;  \n  color: #fff;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  \n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n\n    transition: background-color 250ms linear, box-shadow 250ms linear ;\n    &:hover {\n    background-color: blue;\n    \n    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);\n    }\n"]))),w.ZP.img(f||(f=(0,m.Z)(["\nborder-radius:8px;\nbox-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);\n"])))),P=w.ZP.div(l||(l=(0,m.Z)(["\n display: flex;\n gap:8px;\n margin-top: 8px;\n margin-bottom: 16px;\n border-bottom: 1px solid gray;\n padding: 8px;\n box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);\n border-radius: 4px;\n"]))),O=w.ZP.div(h||(h=(0,m.Z)(["\nbackground-color: rgb(240, 240, 240);;\n border-bottom: 1px solid gray;\n padding: 8px;\n box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);\n margin-bottom: 20px;\n border-radius: 4px;\n"]))),S=w.ZP.div(p||(p=(0,m.Z)(["\n  /* text-align: center; */\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n background-color: #f4f4f4;\n"]))),N=w.ZP.h2(d||(d=(0,m.Z)(["\nfont-size:24px;\n  color: #333;\n  margin-bottom: 10px;\n"]))),G=w.ZP.h3(y||(y=(0,m.Z)(["\n  font-size: 20px;\n  color: #333;\n  margin-top: 20px;\n  margin-bottom: 10px;\n"]))),T=w.ZP.p(v||(v=(0,m.Z)(["\n  font-size: 16px;\n  color: #666;\n"]))),F=(w.ZP.h2(g||(g=(0,m.Z)(["\n  font-size: 18px;\n  color: #555;\n"]))),w.ZP.h2(x||(x=(0,m.Z)(["\n  font-size: 18px;\n  color: #555;\n"]))))},635:function(t,r,n){n.d(r,{ED:function(){return d},Rq:function(){return y},cK:function(){return v},fy:function(){return g},u3:function(){return p}});var e,o,i,a,c,u=n(861),s=n(243);function f(){f=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,n){return t[r]=n}}function l(t,r,n,e){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new S(e||[]);return o(a,"_invoke",{value:_(t,n,c)}),a}function h(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",d="executing",y="completed",v={};function g(){}function x(){}function m(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==n&&e.call(L,a)&&(w=L);var E=m.prototype=g.prototype=Object.create(w);function Z(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function n(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function _(r,n,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=j(c,e);if(u){if(u===v)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var s=h(r,n,e);if("normal"===s.type){if(o=e.done?y:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=y,e.method="throw",e.arg=s.arg)}}}function j(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,j(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var i=h(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(r){if(r||""===r){var n=r[a];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return x.prototype=m,o(E,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:x,configurable:!0}),x.displayName=s(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},Z(k.prototype),s(k.prototype,c,(function(){return this})),r.AsyncIterator=k,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new k(l(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},Z(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=N,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:N(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),v}},r}var l="https://api.themoviedb.org/3",h="537b9a5585a30e006c200a33f280f965";function p(){return(e=e||(0,u.Z)(f().mark((function t(){var r,n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(l,"/trending/movie/day?api_key=").concat(h,"&language=en-US"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return(o=o||(0,u.Z)(f().mark((function t(r){var n,e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(l,"/movie/").concat(r,"?api_key=").concat(h,"&language=en-US"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return(i=i||(0,u.Z)(f().mark((function t(r){var n,e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(l,"/movie/").concat(r,"/credits?api_key=").concat(h,"&language=en-US"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return(a=a||(0,u.Z)(f().mark((function t(r){var n,e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(l,"/movie/").concat(r,"/reviews?api_key=").concat(h,"&language=en-US&page=1"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return(c=c||(0,u.Z)(f().mark((function t(r){var n,e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(l,"/search/movie?api_key=").concat(h,"&include_adult=false&language=en-US&page=1&query=").concat(r));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=415.6908324f.chunk.js.map