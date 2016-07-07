!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Simpla",t):e.Simpla=t()}(this,function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports,W),t.exports}function t(){te=!1,$.length?ee=$.concat(ee):ne=-1,ee.length&&n()}function n(){if(!te){var e=setTimeout(t);te=!0;for(var n=ee.length;n;){for($=ee,ee=[];++ne<n;)$&&$[ne].run();ne=-1,n=ee.length}$=null,te=!1,clearTimeout(e)}}function r(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];ee.push(new o(e,t)),1!==ee.length||te||setTimeout(n,0)}function o(e,t){this.fun=e,this.array=t}function i(){}function u(e){throw new Error("process.binding is not supported")}function s(){return"/"}function a(e){throw new Error("process.chdir is not supported")}function f(){return 0}function c(e){var t=.001*ge.call(we),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],r-=e[1],r<0&&(n--,r+=1e9)),[n,r]}function d(){var e=new Date,t=e-Ee;return t/1e3}function p(e){return Te(Object(e))}function l(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}function h(e){return!!e&&"object"==("undefined"==typeof e?"undefined":Z["typeof"](e))}function y(e){if(!h(e)||_e.call(e)!=xe||l(e))return!1;var t=p(e);if(null===t)return!0;var n=Se.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Pe.call(n)==ke}function m(e,t,n){function r(){l===p&&(l=p.slice())}function o(){return d}function i(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return r(),l.push(e),function(){if(t){t=!1,r();var n=l.indexOf(e);l.splice(n,1)}}}function u(e){if(!y(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(h)throw new Error("Reducers may not dispatch actions.");try{h=!0,d=c(d,e)}finally{h=!1}for(var t=p=l,n=0;n<t.length;n++)t[n]();return e}function s(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,u({type:De.INIT})}function a(){var e,t=i;return e={subscribe:function(e){function n(){e.next&&e.next(o())}if("object"!==("undefined"==typeof e?"undefined":Z["typeof"](e)))throw new TypeError("Expected the observer to be an object.");n();var r=t(n);return{unsubscribe:r}}},e[Ne]=function(){return this},e}var f;if("function"==typeof t&&"undefined"==typeof n&&(n=t,t=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(m)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,d=t,p=[],l=p,h=!1;return u({type:De.INIT}),f={dispatch:u,subscribe:i,getState:o,replaceReducer:s},f[Ne]=a,f}function b(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}function v(e,t){var n=t&&t.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function w(e,t,n){var r=Object.keys(t),o=n&&n.type===De.INIT?"initialState argument passed to createStore":"previous state received by the reducer";if(0===r.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!y(e))return"The "+o+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+r.join('", "')+'"');var i=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)});return i.length>0?"Unexpected "+(i.length>1?"keys":"key")+" "+('"'+i.join('", "')+'" found in '+o+". ")+"Expected to find one of the known reducer keys instead: "+('"'+r.join('", "')+'". Unexpected keys will be ignored.'):void 0}function g(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:De.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+De.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function E(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];"function"==typeof e[o]&&(n[o]=e[o])}var i,u=Object.keys(n);try{g(n)}catch(s){i=s}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(i)throw i;if("production"!==Oe.env.NODE_ENV){var r=w(e,n,t);r&&b(r)}for(var o=!1,s={},a=0;a<u.length;a++){var f=u[a],c=n[f],d=e[f],p=c(d,t);if("undefined"==typeof p){var l=v(f,t);throw new Error(l)}s[f]=p,o=o||p!==d}return o?s:e}}function O(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};var r=function(){var e=t[t.length-1],n=t.slice(0,-1);return{v:function(){return n.reduceRight(function(e,t){return t(e)},e.apply(void 0,arguments))}}}();return"object"===("undefined"==typeof r?"undefined":Z["typeof"](r))?r.v:void 0}function T(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n,r,o){var i=e(n,r,o),u=i.dispatch,s=[],a={getState:i.getState,dispatch:function(e){return u(e)}};return s=t.map(function(e){return e(a)}),u=O.apply(void 0,s)(i.dispatch),Be({},i,{dispatch:u})}}}function x(){}function j(e){return{type:Ce,prop:"authEndpoint",value:e}}function P(e){return{type:Ce,prop:"dataEndpoint",value:e}}function S(e){return{type:Ue,href:e}}function k(e,t){return{type:Le,href:e}}function _(e){return{type:Fe,href:e}}function A(e){return function(t,n){var r=n(),o=r.imports,i=void 0;if(i=document.createElement("link"),i.href=e,i.rel="import",i.async=!0,!o[i.href]||"failed"===o[i.href].status)return t(S(i.href)),new Promise(function(e,t){i.onload=e,i.onerror=t,document.head.appendChild(i)}).then(function(){return t(_(i.href))},function(){return t(k(i.href))})}}function I(e){return e.ok?e:new Promise(function(t,n){var r=e.body,o="";r.on("data",function(e){return o+=e.toString()}),r.on("error",n),r.on("end",function(){var t=new Error(o);try{t=JSON.parse(o)}catch(r){t.code=e.status}t.response=e,n(t)})})}function R(e){var t=Object.assign({},e);return t.headers=Object.assign({Accept:"application/json","Content-Type":"application/json"},t.headers),e.body&&(t.body=JSON.stringify(e.body)),fetch(e.url,t).then(I).then(function(e){return e.json()})}function N(e){var t=e.token;return t&&(e.headers=Object.assign({Authorization:"Bearer "+t},e.headers)),R(e)}function D(e){var t=e.email,n=e.password;return{type:He,email:t,password:n}}function B(e){return{type:qe,token:e}}function U(e){return{type:ze,error:e}}function F(e){var t=e.email,n=e.password;return function(e,r){var o=r().options.authEndpoint;return e(D({email:t,password:n})),et.post(o+"/login",{body:{email:t,password:n}}).then(function(t){return e(B(t.token))},function(t){return e(U(t))})}}function L(){return{type:Ge}}function C(){return function(e){return e(L()),Promise.resolve()}}function H(e){if("undefined"!=typeof e&&""===e)return"Invalid UID: Empty string is not a valid UID"}function q(e){var t=e.uid,n=e.endpoint,r=e.token,o=e.method,i=e.body,u=n+"/"+t,s=H(t);return s?Promise.reject(new Error(s)):et[o](u,{body:i,token:r})}function z(e){return[function(t,n){return{type:e[0],uid:t,data:n}},function(t,n){return{type:e[1],uid:t,response:n}},function(t,n){return{type:e[2],uid:t,error:n}}]}function G(e,t){var n=z(t),r=Z.slicedToArray(n,3),o=r[0],i=r[1],u=r[2];return function(t,n){return function(r,s){var a=s(),f=a.options,c=a.authentication,d=c.token,p=f.dataEndpoint;return r(o(t,n)),q({method:e,uid:t,body:n,endpoint:p,token:d}).then(function(e){return r(i(t,e))},function(e){return r(u(t,e))})}}}function M(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}function J(){var e=arguments.length<=0||void 0===arguments[0]?ft:arguments[0],t=arguments[1];switch(t.type){case qe:return Object.assign({},e,{token:t.token,authenticated:!0});case Ge:return Object.assign({},e,{token:null,authenticated:!1});default:return e}}function V(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case Ce:return Object.assign({},e,Z.defineProperty({},t.prop,t.value));default:return e}}function X(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case Ue:return Object.assign({},e,{status:"loading"});case Le:return Object.assign({},e,{status:"failed"});case Fe:return Object.assign({},e,{status:"loaded"});default:return e}}function Y(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case Ue:case Le:case Fe:return Object.assign({},e,Z.defineProperty({},t.href,X(e[t.href],t)));default:return e}}function K(){var e=arguments.length<=0||void 0===arguments[0]?ct:arguments[0],t=arguments[1];switch(t.type){default:return e}}var W="undefined"!=typeof window?window:"undefined"!=typeof global?global:this,Z={};Z["typeof"]="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},Z.defineProperty=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Z.slicedToArray=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var u,s=e[Symbol.iterator]();!(r=(u=s.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{!r&&s["return"]&&s["return"]()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Z.toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};var $,Q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ee=[],te=!1,ne=-1;o.prototype.run=function(){this.fun.apply(null,this.array)};var re="browser",oe="browser",ie=!0,ue={},se=[],ae="",fe={},ce={},de={},pe=i,le=i,he=i,ye=i,me=i,be=i,ve=i,we=Q.performance||{},ge=we.now||we.mozNow||we.msNow||we.oNow||we.webkitNow||function(){return(new Date).getTime()},Ee=new Date,Oe={nextTick:r,title:re,browser:ie,env:ue,argv:se,version:ae,versions:fe,on:pe,addListener:le,once:he,off:ye,removeListener:me,removeAllListeners:be,emit:ve,binding:u,cwd:s,chdir:a,umask:f,hrtime:c,platform:oe,release:ce,config:de,uptime:d},Te=Object.getPrototypeOf,xe="[object Object]",je=Object.prototype,Pe=Function.prototype.toString,Se=je.hasOwnProperty,ke=Pe.call(Object),_e=je.toString,Ae=e(function(e){e.exports=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}}),Ie=Ae&&"object"===("undefined"==typeof Ae?"undefined":Z["typeof"](Ae))&&"default"in Ae?Ae["default"]:Ae,Re=e(function(e,t,n){e.exports=Ie(n||window||W)}),Ne=Re&&"object"===("undefined"==typeof Re?"undefined":Z["typeof"](Re))&&"default"in Re?Re["default"]:Re,De={INIT:"@@redux/INIT"},Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};"production"!==Oe.env.NODE_ENV&&"string"==typeof x.name&&"isCrushed"!==x.name&&b("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.");var Ue="import-element",Fe="import-element-success",Le="import-element-failed",Ce="set-option",He="login",qe="login-successful",ze="login-failed",Ge="logout",Me="get-data",Je="get-data-success",Ve="get-data-failed",Xe="set-data",Ye="set-data-success",Ke="set-data-failed",We="remove-data",Ze="remove-data-success",$e="remove-data-failed";!function(e){function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return y.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function u(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function s(e){var t=new FileReader;return t.readAsArrayBuffer(e),u(t)}function a(e){var t=new FileReader;return t.readAsText(e),u(t)}function f(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,"string"==typeof e)this._bodyText=e;else if(y.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(y.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(e){if(!y.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob?(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(s)},this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return a(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var e=i(this);return e?e:Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function c(e){var t=e.toUpperCase();return m.indexOf(t)>-1?t:e}function d(e,t){t=t||{};var n=t.body;if(d.prototype.isPrototypeOf(e)){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,n||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=e;if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=c(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function l(e){var t=new o,n=(e.getAllResponseHeaders()||"").trim().split("\n");return n.forEach(function(e){var n=e.trim().split(":"),r=n.shift().trim(),o=n.join(":").trim();t.append(r,o)}),t}function h(e,t){t||(t={}),this.type="default",this.status=t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText,this.headers=t.headers instanceof o?t.headers:new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var y={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};o.prototype.append=function(e,r){e=t(e),r=n(r);var o=this.map[e];o||(o=[],this.map[e]=o),o.push(r)},o.prototype["delete"]=function(e){delete this.map[t(e)]},o.prototype.get=function(e){var n=this.map[t(e)];return n?n[0]:null},o.prototype.getAll=function(e){return this.map[t(e)]||[]},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,r){this.map[t(e)]=[n(r)]},o.prototype.forEach=function(e,t){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(r){e.call(t,r,n,this)},this)},this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},y.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this)},f.call(d.prototype),f.call(h.prototype),h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},h.error=function(){var e=new h(null,{status:0,statusText:""});return e.type="error",e};var b=[301,302,303,307,308];h.redirect=function(e,t){if(b.indexOf(t)===-1)throw new RangeError("Invalid status code");return new h(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=d,e.Response=h,e.fetch=function(e,t){return new Promise(function(n,r){function o(){return"responseURL"in u?u.responseURL:/^X-Request-URL:/m.test(u.getAllResponseHeaders())?u.getResponseHeader("X-Request-URL"):void 0}var i;i=d.prototype.isPrototypeOf(e)&&!t?e:new d(e,t);var u=new XMLHttpRequest;u.onload=function(){var e={status:u.status,statusText:u.statusText,headers:l(u),url:o()},t="response"in u?u.response:u.responseText;n(new h(t,e))},u.onerror=function(){r(new TypeError("Network request failed"))},u.ontimeout=function(){r(new TypeError("Network request failed"))},u.open(i.method,i.url,!0),"include"===i.credentials&&(u.withCredentials=!0),"responseType"in u&&y.blob&&(u.responseType="blob"),i.headers.forEach(function(e,t){u.setRequestHeader(t,e)}),u.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this);var Qe=e(function(e){e.exports=self.fetch.bind(self)});Qe&&"object"===("undefined"==typeof Qe?"undefined":Z["typeof"](Qe))&&"default"in Qe?Qe["default"]:Qe;var et={get:function(e,t){return R(Object.assign({method:"GET"},t,{url:e}))},post:function(e,t){return N(Object.assign({method:"POST"},t,{url:e}))},put:function(e,t){return N(Object.assign({method:"PUT"},t,{url:e}))},"delete":function(e,t){return N(Object.assign({method:"DELETE"},t,{url:e}))}},tt=G("get",[Me,Je,Ve]),nt=G("put",[Xe,Ye,Ke]),rt=G("delete",[We,Ze,$e]),ot="https://api.simpla.io",it="https://elements.simpla.io",ut=["simpla-img/simpla-img.html","simpla-text/simpla-text.html","simpla-block/simpla-block.html","sm-admin/sm-admin.html"],st=it+"/",at=M();at.withExtraArgument=M;var ft={token:null,authenticated:!1},ct={},dt=E({authentication:J,options:V,imports:Y,data:K}),pt=m(dt,T(at)),lt=function ht(e){ht._store=ht._store||pt;var t=void 0,n="",r=void 0,o=void 0,i=[];r=ot,ht._store.dispatch(j(r)),t="string"==typeof e?e:e.project,o=ot+"/projects/"+t+"/items",ht._store.dispatch(P(o)),"undefined"==typeof e.elements?(i=ut,n=st):e.elements instanceof Array?i=e.elements:e.elements&&(i=e.elements.paths||ut,n=e.elements.base||st),i.forEach(function(e){return ht._store.dispatch(A(""+n+e))})};return Object.assign(lt,{login:function(){return pt.dispatch(F.apply(void 0,arguments))},logout:function(){return pt.dispatch(C.apply(void 0,arguments))},get:function(){return pt.dispatch(tt.apply(void 0,arguments)).then(function(e){return e.response})},set:function(){return pt.dispatch(nt.apply(void 0,arguments)).then(function(e){return e.response})},remove:function(){return pt.dispatch(rt.apply(void 0,arguments)).then(function(e){return e.response})}}),lt});