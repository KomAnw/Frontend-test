!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=102)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(54))},function(t,e,n){var r=n(0),o=n(12),i=n(34),c=n(66),a=r.Symbol,u=o("wks");t.exports=function(t){return u[t]||(u[t]=c&&a[t]||(c?a:i)("Symbol."+t))}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(0),o=n(18).f,i=n(11),c=n(14),a=n(22),u=n(58),s=n(40);t.exports=function(t,e){var n,f,l,p,v,h=t.target,d=t.global,y=t.stat;if(n=d?r:y?r[h]||a(h,{}):(r[h]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(v=o(n,f))&&v.value:n[f],!s(d?f:h+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,f,p,t)}}},function(t,e,n){var r=n(3),o=n(29),i=n(9),c=n(21),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(28),o=n(20);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(3),o=n(6),i=n(19);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(31),o=n(55);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(60),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(0),o=n(12),i=n(11),c=n(8),a=n(22),u=n(32),s=n(33),f=s.get,l=s.enforce,p=String(u).split("toString");o("inspectSource",(function(t){return u.call(t)})),(t.exports=function(t,e,n,o){var u=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,f=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||i(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==r?(u?!f&&t[e]&&(s=!0):delete t[e],s?t[e]=n:i(t,e,n)):s?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u.call(this)}))},function(t,e,n){var r=n(37),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){"use strict";var r=n(5),o=n(41);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){var r=n(3),o=n(27),i=n(19),c=n(10),a=n(21),u=n(8),s=n(29),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=a(e,!0),s)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(0),o=n(11);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(16);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(3),o=n(6).f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},function(t,e,n){var r=n(0),o=n(67),i=n(41),c=n(11);for(var a in o){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e,n){var r=n(5),o=n(3);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:n(6).f})},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(2),o=n(7),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(3),o=n(2),i=n(30);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e){t.exports=!1},function(t,e,n){var r=n(12);t.exports=r("native-function-to-string",Function.toString)},function(t,e,n){var r,o,i,c=n(56),a=n(0),u=n(4),s=n(11),f=n(8),l=n(57),p=n(35),v=a.WeakMap;if(c){var h=new v,d=h.get,y=h.has,m=h.set;r=function(t,e){return m.call(h,t,e),e},o=function(t){return d.call(h,t)||{}},i=function(t){return y.call(h,t)}}else{var g=l("state");p[g]=!0,r=function(t,e){return s(t,g,e),e},o=function(t){return f(t,g)?t[g]:{}},i=function(t){return f(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){var r=n(8),o=n(10),i=n(62).indexOf,c=n(35);t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)!r(c,n)&&r(a,n)&&s.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(37),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(2),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(42).forEach,o=n(44);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){var r=n(23),o=n(28),i=n(64),c=n(15),a=n(65),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(v,h,d,y){for(var m,g,b=i(v),x=o(b),w=r(h,d,3),_=c(x.length),E=0,S=y||a,j=e?S(v,_):n?S(v,0):void 0;_>E;E++)if((p||E in x)&&(g=w(m=x[E],E,b),t))if(e)j[E]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return E;case 2:u.call(j,m)}else if(f)return!1;return l?-1:s||f?f:j}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(7);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),c=[];function a(t){for(var e=-1,n=0;n<c.length;n++)if(c[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],s=n[u]||0,f="".concat(u," ").concat(s);n[u]=s+1;var l=a(f),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(c[l].references++,c[l].updater(p)):c.push({identifier:f,updater:y(p,e),references:1}),r.push(f)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var c=i(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function v(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,d=0;function y(t,e){var n,r,o;if(e.singleton){var i=d++;n=h||(h=s(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=s(e),r=v.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);c[o].references--}for(var i=u(t,e),s=0;s<n.length;s++){var f=a(n[s]);0===c[f].references&&(c[f].updater(),c.splice(f,1))}n=i}}}},function(t,e,n){var r=n(7),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e){t.exports={}},function(t,e,n){var r,o,i,c=n(0),a=n(2),u=n(7),s=n(23),f=n(86),l=n(30),p=n(49),v=c.location,h=c.setImmediate,d=c.clearImmediate,y=c.process,m=c.MessageChannel,g=c.Dispatch,b=0,x={},w=function(t){if(x.hasOwnProperty(t)){var e=x[t];delete x[t],e()}},_=function(t){return function(){w(t)}},E=function(t){w(t.data)},S=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};h&&d||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return x[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(b),b},d=function(t){delete x[t]},"process"==u(y)?r=function(t){y.nextTick(_(t))}:g&&g.now?r=function(t){g.now(_(t))}:m&&!p?(i=(o=new m).port2,o.port1.onmessage=E,r=s(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||a(S)?r="onreadystatechange"in l("script")?function(t){f.appendChild(l("script")).onreadystatechange=function(){f.removeChild(this),w(t)}}:function(t){setTimeout(_(t),0)}:(r=S,c.addEventListener("message",E,!1))),t.exports={set:h,clear:d}},function(t,e,n){var r=n(50);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){var r=n(13);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(16),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){var r,o,i=n(0),c=n(50),a=i.process,u=a&&a.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(0),o=n(22),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(0),o=n(32),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,e,n){var r=n(12),o=n(34),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(8),o=n(59),i=n(18),c=n(6);t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||a(t,f,u(e,f))}}},function(t,e,n){var r=n(13),o=n(61),i=n(63),c=n(9);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){t.exports=n(0)},function(t,e,n){var r=n(36),o=n(39).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(10),o=n(15),i=n(38),c=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),f=i(c,s);if(t&&n!=n){for(;s>f;)if((a=u[f++])!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(20);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4),o=n(43),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){var r=n(45),o=n(69);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){},function(t,e,n){var r=n(45),o=n(71);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){},function(t,e,n){var r=n(14),o=n(73),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,e,n){"use strict";var r=n(46),o={};o[n(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,e,n){"use strict";var r,o,i,c,a=n(5),u=n(31),s=n(0),f=n(13),l=n(75),p=n(14),v=n(76),h=n(12),d=n(77),y=n(78),m=n(4),g=n(16),b=n(79),x=n(7),w=n(80),_=n(84),E=n(85),S=n(48).set,j=n(87),L=n(88),O=n(89),T=n(51),k=n(90),P=n(33),A=n(40),M=n(1),N=n(52),C=M("species"),q="Promise",F=P.get,I=P.set,G=P.getterFor(q),R=l,D=s.TypeError,H=s.document,V=s.process,B=h("inspectSource"),z=f("fetch"),U=T.f,W=U,Y="process"==x(V),K=!!(H&&H.createEvent&&s.dispatchEvent),J=A(q,(function(){var t=B(R)!==String(R);if(66===N)return!0;if(!t&&!Y&&"function"!=typeof PromiseRejectionEvent)return!0;if(u&&!R.prototype.finally)return!0;if(N>=51&&/native code/.test(R))return!1;var e=R.resolve(1),n=function(t){t((function(){}),(function(){}))};return(e.constructor={})[C]=n,!(e.then((function(){}))instanceof n)})),$=J||!_((function(t){R.all(t).catch((function(){}))})),Q=function(t){var e;return!(!m(t)||"function"!=typeof(e=t.then))&&e},X=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;j((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var a,u,s,f=r[c++],l=i?f.ok:f.fail,p=f.resolve,v=f.reject,h=f.domain;try{l?(i||(2===e.rejection&&nt(t,e),e.rejection=1),!0===l?a=o:(h&&h.enter(),a=l(o),h&&(h.exit(),s=!0)),a===f.promise?v(D("Promise-chain cycle")):(u=Q(a))?u.call(a,p,v):p(a)):v(o)}catch(t){h&&!s&&h.exit(),v(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&tt(t,e)}))}},Z=function(t,e,n){var r,o;K?((r=H.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:e,reason:n},(o=s["on"+t])?o(r):"unhandledrejection"===t&&O("Unhandled promise rejection",n)},tt=function(t,e){S.call(s,(function(){var n,r=e.value;if(et(e)&&(n=k((function(){Y?V.emit("unhandledRejection",r,t):Z("unhandledrejection",t,r)})),e.rejection=Y||et(e)?2:1,n.error))throw n.value}))},et=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,e){S.call(s,(function(){Y?V.emit("rejectionHandled",t):Z("rejectionhandled",t,e.value)}))},rt=function(t,e,n,r){return function(o){t(e,n,o,r)}},ot=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,X(t,e,!0))},it=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw D("Promise can't be resolved itself");var o=Q(n);o?j((function(){var r={done:!1};try{o.call(n,rt(it,t,r,e),rt(ot,t,r,e))}catch(n){ot(t,r,n,e)}})):(e.value=n,e.state=1,X(t,e,!1))}catch(n){ot(t,{done:!1},n,e)}}};J&&(R=function(t){b(this,R,q),g(t),r.call(this);var e=F(this);try{t(rt(it,this,e),rt(ot,this,e))}catch(t){ot(this,e,t)}},(r=function(t){I(this,{type:q,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(R.prototype,{then:function(t,e){var n=G(this),r=U(E(this,R));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=Y?V.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&X(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=F(t);this.promise=t,this.resolve=rt(it,t,e),this.reject=rt(ot,t,e)},T.f=U=function(t){return t===R||t===i?new o(t):W(t)},u||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,e){var n=this;return new R((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof z&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return L(R,z.apply(s,arguments))}}))),a({global:!0,wrap:!0,forced:J},{Promise:R}),d(R,q,!1,!0),y(q),i=f(q),a({target:q,stat:!0,forced:J},{reject:function(t){var e=U(this);return e.reject.call(void 0,t),e.promise}}),a({target:q,stat:!0,forced:u||J},{resolve:function(t){return L(u&&this===i?R:this,t)}}),a({target:q,stat:!0,forced:$},{all:function(t){var e=this,n=U(e),r=n.resolve,o=n.reject,i=k((function(){var n=g(e.resolve),i=[],c=0,a=1;w(t,(function(t){var u=c++,s=!1;i.push(void 0),a++,n.call(e,t).then((function(t){s||(s=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=U(e),r=n.reject,o=k((function(){var o=g(e.resolve);w(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(0);t.exports=r.Promise},function(t,e,n){var r=n(14);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){var r=n(6).f,o=n(8),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(13),o=n(6),i=n(1),c=n(3),a=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(9),o=n(81),i=n(15),c=n(23),a=n(82),u=n(83),s=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,f,l){var p,v,h,d,y,m,g,b=c(e,n,f?2:1);if(l)p=t;else{if("function"!=typeof(v=a(t)))throw TypeError("Target is not iterable");if(o(v)){for(h=0,d=i(t.length);d>h;h++)if((y=f?b(r(g=t[h])[0],g[1]):b(t[h]))&&y instanceof s)return y;return new s(!1)}p=v.call(t)}for(m=p.next;!(g=m.call(p)).done;)if("object"==typeof(y=u(p,b,g.value,f))&&y&&y instanceof s)return y;return new s(!1)}).stop=function(t){return new s(!0,t)}},function(t,e,n){var r=n(1),o=n(47),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(46),o=n(47),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(9);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(9),o=n(16),i=n(1)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r=n(13);t.exports=r("document","documentElement")},function(t,e,n){var r,o,i,c,a,u,s,f,l=n(0),p=n(18).f,v=n(7),h=n(48).set,d=n(49),y=l.MutationObserver||l.WebKitMutationObserver,m=l.process,g=l.Promise,b="process"==v(m),x=p(l,"queueMicrotask"),w=x&&x.value;w||(r=function(){var t,e;for(b&&(t=m.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},b?c=function(){m.nextTick(r)}:y&&!d?(a=!0,u=document.createTextNode(""),new y(r).observe(u,{characterData:!0}),c=function(){u.data=a=!a}):g&&g.resolve?(s=g.resolve(void 0),f=s.then,c=function(){f.call(s,r)}):c=function(){h.call(l,r)}),t.exports=w||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(9),o=n(4),i=n(51);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),c=new E(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=x(c,n);if(a){if(a===f)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,c),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function l(){}function p(){}function v(){}var h={};h[o]=function(){return this};var d=Object.getPrototypeOf,y=d&&d(d(S([])));y&&y!==e&&n.call(y,o)&&(h=y);var m=v.prototype=l.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(o,i){function c(){return new e((function(r,c){!function r(o,i,c,a){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,a)}))}a(u.arg)}(o,i,r,c)}))}return r=r?r.then(c,c):c()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=m.constructor=v,v.constructor=p,p.displayName=a(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,a(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new b(u(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(m),a(m,c,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";var r=n(5),o=n(4),i=n(43),c=n(38),a=n(15),u=n(10),s=n(93),f=n(94),l=n(1)("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f("slice")},{slice:function(t,e){var n,r,f,h=u(this),d=a(h.length),y=c(t,d),m=c(void 0===e?d:e,d);if(i(h)&&("function"!=typeof(n=h.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[l])&&(n=void 0):n=void 0,n===Array||void 0===n))return p.call(h,y,m);for(r=new(void 0===n?Array:n)(v(m-y,0)),f=0;y<m;y++,f++)y in h&&s(r,f,h[y]);return r.length=f,r}})},function(t,e,n){"use strict";var r=n(21),o=n(6),i=n(19);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e,n){var r=n(2),o=n(1),i=n(52),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){"use strict";var r=n(5),o=n(96).trim;r({target:"String",proto:!0,forced:n(97)("trim")},{trim:function(){return o(this)}})},function(t,e,n){var r=n(20),o="["+n(53)+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),a=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:a(1),end:a(2),trim:a(3)}},function(t,e,n){var r=n(2),o=n(53);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},function(t,e,n){"use strict";var r=n(5),o=n(42).every;r({target:"Array",proto:!0,forced:n(44)("every")},{every:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(5),o=n(100).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},function(t,e,n){var r=n(3),o=n(101),i=n(10),c=n(27).f,a=function(t){return function(e){for(var n,a=i(e),u=o(a),s=u.length,f=0,l=[];s>f;)n=u[f++],r&&!c.call(a,n)||l.push(t?[n,a[n]]:a[n]);return l}};t.exports={entries:a(!0),values:a(!1)}},function(t,e,n){var r=n(36),o=n(39);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){"use strict";n.r(e);n(17),n(24),n(25),n(68),n(70),n(26),n(72),n(74),n(91);function r(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=e}var e,n,i,c,a;return e=t,(n=[{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getData",value:(c=regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url);case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t,this)})),a=function(){var t=this,e=arguments;return new Promise((function(n,o){var i=c.apply(t,e);function a(t){r(i,n,o,a,u,"next",t)}function u(t){r(i,n,o,a,u,"throw",t)}a(void 0)}))},function(){return a.apply(this,arguments)})}])&&o(e.prototype,n),i&&o(e,i),t}();var c=function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.render=function(t){t.forEach((function(t){return n.container.appendChild(t)}))},this.container=e};n(92),n(95);function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.create=function(){return n.row=n.template(),n.row.querySelector(".colors-table__id").textContent=n.id,n.row.querySelector(".colors-table__name").textContent=n.name,n.row.querySelector(".colors-table__year").textContent=n.year,n.row.querySelector(".colors-table__value").textContent=n.color,n.row.querySelector(".colors-table__img").style.background=n.color,n.row.querySelector(".colors-table__pantone-value").textContent=n.pantoneValue,n.row},this.color=e.color,this.id=e.id,this.name=e.name[0].toUpperCase()+e.name.slice(1),this.pantoneValue=e.pantoneValue,this.year=e.year,this.row=null}var e,n,r;return e=t,(n=[{key:"template",value:function(){var t=document.createElement("div");return t.insertAdjacentHTML("beforeend",'\n\t\t<div class="colors-table__data">\n            <p class="colors-table__text colors-table__id id"></p>\n            <p class="colors-table__text colors-table__name name"></p>\n            <p class="colors-table__text colors-table__year year"></p>\n            <div class="colors-table__text colors-table__container color">\n                <img src="" alt="" class="colors-table__img">\n                <p class="colors-table__value"></p>\n            </div>\n            <p class="colors-table__text colors-table__pantone-value pantone"></p>\n        </div>'.trim()),t.firstChild}}])&&a(e.prototype,n),r&&a(e,r),t}();n(98),n(99);function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(e,n,r){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.removeHandler=function(t){switch(t.target.className){case"colors__checkbox colors__id":o.removeAllElems(o.id,t.target.parentNode.parentNode),o.removeEventListeners(t.target);break;case"colors__checkbox colors__name":o.removeAllElems(o.name,t.target.parentNode.parentNode),o.removeEventListeners(t.target);break;case"colors__checkbox colors__year":o.removeAllElems(o.year,t.target.parentNode.parentNode),o.removeEventListeners(t.target);break;case"colors__checkbox colors__color":o.removeAllElems(o.color,t.target.parentNode.parentNode),o.removeEventListeners(t.target);break;case"colors__checkbox colors__pantone-value":o.removeAllElems(o.pantone,t.target.parentNode.parentNode),o.removeEventListeners(t.target)}o.resetHandler&&(o.reset.classList.add("header__reset_active"),o.listenerOnButton())},this.removeAllElems=function(t,e){t.forEach((function(t){return t.style.display="none"})),e.style.display="none"},this.resetHandler=function(){o.buttons.every((function(t){return t.checked,!1}))},this.resetAllFields=function(){o.buttons.forEach((function(t){t.parentNode.parentNode.style.display="block",t.checked=!0})),Object.values(o.columns).forEach((function(t){t.forEach((function(t){return t.style.display="flex"}))})),o.removelistenerOnButton(),o.reset.classList.remove("header__reset_active")},this.listenerOnButton=function(){o.reset.addEventListener("click",o.resetAllFields)},this.removelistenerOnButton=function(){o.reset.removeEventListener("click",o.resetAllFields),o.addEventListeners()},this.reset=e,this.columns=r,this.id=r.id,this.name=r.name,this.year=r.year,this.color=r.color,this.pantone=r.pantone,this.buttons=n}var e,n,r;return e=t,(n=[{key:"addEventListeners",value:function(){var t=this;this.buttons.forEach((function(e){return e.addEventListener("change",t.removeHandler)}))}},{key:"removeEventListeners",value:function(t){t.removeEventListener("change",this.removeHandler)}}])&&s(e.prototype,n),r&&s(e,r),t}(),l=document.querySelector(".colors-table"),p=document.querySelector(".header__reset"),v=[];new i("https://reqres.in/api/unknown?per_page=12").getData().then((function(t){return function(t){t.data.forEach((function(t){var e={color:t.color,id:t.id,name:t.name,pantoneValue:t.pantone_value,year:t.year},n=new u(e).create();v.push(n)})),new c(l).render(v),e=[],n=document.querySelector(".colors__id"),r=document.querySelector(".colors__name"),o=document.querySelector(".colors__year"),i=document.querySelector(".colors__color"),a=document.querySelector(".colors__pantone-value"),s=document.querySelectorAll(".id"),h=document.querySelectorAll(".name"),d=document.querySelectorAll(".year"),y=document.querySelectorAll(".color"),m=document.querySelectorAll(".pantone"),e.push(n,r,o,i,a),new f(p,e,{id:s,name:h,year:d,color:y,pantone:m}).addEventListeners();var e,n,r,o,i,a,s,h,d,y,m}(t)}))}]);