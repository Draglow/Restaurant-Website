/*! For license information please see diffuser.js.LICENSE.txt */
!function(e){
var t={
};function __webpack_require__(r){
if(t[r])return t[r].exports;var n=t[r]={
i:r,l:!1,exports:{
}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){
__webpack_require__.o(e,t)||Object.defineProperty(e,t,{
enumerable:!0,get:r})},__webpack_require__.r=function(e){
"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{
value:"Module"}),Object.defineProperty(e,"__esModule",{
value:!0})},__webpack_require__.t=function(e,t){
if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{
enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){
return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){
var t=e&&e.__esModule?function getDefault(){
return e.default}:function getModuleExports(){
return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){
return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=46)}([function(e,t,r){
(function(t){
var check=function(e){
return e&&e.Math==Math&&e};e.exports=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof t&&t)||function(){
return this}()||Function("return this")()}).call(this,r(28))},function(e,t){
e.exports={
conversations:{
domain:"conversations.app-us1.com"},diffuser:{
domain:"prism.app-us1.com"},tracking:{
domain:"trackcmp.net"},webpersonalization:{
domain:"wp-ui.app-us1.com"},cdnDomain:"diffuser-cdn.app-us1.com"}},function(e,t,r){
var n=r(3);e.exports=!n((function(){
return 7!=Object.defineProperty({
},1,{
get:function(){
return 7}})[1]}))},function(e,t){
e.exports=function(e){
try{
return!!e()}catch(e){
return!0}}},function(e,t,r){
var n=r(11),o=n.all;e.exports=n.IS_HTMLDDA?function(e){
return"function"==typeof e||e===o}:function(e){
return"function"==typeof e}},function(e,t,r){
var n=r(9),o=Function.prototype,i=o.call,a=n&&o.bind.bind(i,i);e.exports=n?a:function(e){
return function(){
return i.apply(e,arguments)}}},function(e,t,r){
var n=r(4),o=r(11),i=o.all;e.exports=o.IS_HTMLDDA?function(e){
return"object"==typeof e?null!==e:n(e)||e===i}:function(e){
return"object"==typeof e?null!==e:n(e)}},function(e,t,r){
e.exports=r(17)},function(e,t,r){
var n=r(5),o=r(23),i=n({
}.hasOwnProperty);e.exports=Object.hasOwn||function hasOwn(e,t){
return i(o(e),t)}},function(e,t,r){
var n=r(3);e.exports=!n((function(){
var e=function(){
}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},function(e,t){
e.exports=function(e){
return null==e}},function(e,t){
var r="object"==typeof document&&document.all,n=void 0===r&&void 0!==r;e.exports={
all:r,IS_HTMLDDA:n}},function(e,t,r){
var n=r(9),o=Function.prototype.call;e.exports=n?o.bind(o):function(){
return o.apply(o,arguments)}},function(e,t,r){
var n=r(14),o=r(4),i=r(33),a=r(15),c=Object;e.exports=a?function(e){
return"symbol"==typeof e}:function(e){
var t=n("Symbol");return o(t)&&i(t.prototype,c(e))}},function(e,t,r){
var n=r(0),o=r(4),aFunction=function(e){
return o(e)?e:void 0};e.exports=function(e,t){
return arguments.length<2?aFunction(n[e]):n[e]&&n[e][t]}},function(e,t,r){
var n=r(16);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,r){
var n=r(34),o=r(3);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){
var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},function(e,t,r){
var n=r(18);e.exports=n},function(e,t,r){
var n=r(19);e.exports=n},function(e,t,r){
var n=r(20);e.exports=n},function(e,t,r){
r(21)},function(e,t,r){
var n=r(2),o=r(22).EXISTS,i=r(5),a=r(25).f,c=Function.prototype,u=i(c.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=i(s.exec);n&&!o&&a(c,"name",{
configurable:!0,get:function(){
try{
return f(s,u(this))[1]}catch(e){
return""}}})},function(e,t,r){
var n=r(2),o=r(8),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function something(){
}.name,s=c&&(!n||n&&a(i,"name").configurable);e.exports={
EXISTS:c,PROPER:u,CONFIGURABLE:s}},function(e,t,r){
var n=r(24),o=Object;e.exports=function(e){
return o(n(e))}},function(e,t,r){
var n=r(10),o=TypeError;e.exports=function(e){
if(n(e))throw o("Can't call method on "+e);return e}},function(e,t,r){
var n=r(2),o=r(26),i=r(29),a=r(30),c=r(31),u=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor;t.f=n?i?function defineProperty(e,t,r){
if(a(e),t=c(t),a(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable){
var n=f(e,t);n&&n.writable&&(e[t]=r.value,r={
configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return s(e,t,r)}:s:function defineProperty(e,t,r){
if(a(e),t=c(t),a(r),o)try{
return s(e,t,r)}catch(e){
}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){
var n=r(2),o=r(3),i=r(27);e.exports=!n&&!o((function(){
return 7!=Object.defineProperty(i("div"),"a",{
get:function(){
return 7}}).a}))},function(e,t,r){
var n=r(0),o=r(6),i=n.document,a=o(i)&&o(i.createElement);e.exports=function(e){
return a?i.createElement(e):{
}}},function(e,t){
var r;r=function(){
return this}();try{
r=r||new Function("return this")()}catch(e){
"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){
var n=r(2),o=r(3);e.exports=n&&o((function(){
return 42!=Object.defineProperty((function(){
}),"prototype",{
value:42,writable:!1}).prototype}))},function(e,t,r){
var n=r(6),o=String,i=TypeError;e.exports=function(e){
if(n(e))return e;throw i(o(e)+" is not an object")}},function(e,t,r){
var n=r(32),o=r(13);e.exports=function(e){
var t=n(e,"string");return o(t)?t:t+""}},function(e,t,r){
var n=r(12),o=r(6),i=r(13),a=r(36),c=r(39),u=r(40),s=TypeError,f=u("toPrimitive");e.exports=function(e,t){
if(!o(e)||i(e))return e;var r,u=a(e,f);if(u){
if(void 0===t&&(t="default"),r=n(u,e,t),!o(r)||i(r))return r;throw s("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},function(e,t,r){
var n=r(5);e.exports=n({
}.isPrototypeOf)},function(e,t,r){
var n,o,i=r(0),a=r(35),c=i.process,u=i.Deno,s=c&&c.versions||u&&u.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),e.exports=o},function(e,t,r){
var n=r(14);e.exports=n("navigator","userAgent")||""},function(e,t,r){
var n=r(37),o=r(10);e.exports=function(e,t){
var r=e[t];return o(r)?void 0:n(r)}},function(e,t,r){
var n=r(4),o=r(38),i=TypeError;e.exports=function(e){
if(n(e))return e;throw i(o(e)+" is not a function")}},function(e,t){
var r=String;e.exports=function(e){
try{
return r(e)}catch(e){
return"Object"}}},function(e,t,r){
var n=r(12),o=r(4),i=r(6),a=TypeError;e.exports=function(e,t){
var r,c;if("string"===t&&o(r=e.toString)&&!i(c=n(r,e)))return c;if(o(r=e.valueOf)&&!i(c=n(r,e)))return c;if("string"!==t&&o(r=e.toString)&&!i(c=n(r,e)))return c;throw a("Can't convert object to primitive value")}},function(e,t,r){
var n=r(0),o=r(41),i=r(8),a=r(45),c=r(16),u=r(15),s=o("wks"),f=n.Symbol,l=f&&f.for,p=u?f:f&&f.withoutSetter||a;e.exports=function(e){
if(!i(s,e)||!c&&"string"!=typeof s[e]){
var t="Symbol."+e;c&&i(f,e)?s[e]=f[e]:s[e]=u&&l?l(t):p(t)}return s[e]}},function(e,t,r){
var n=r(42),o=r(43);(e.exports=function(e,t){
return o[e]||(o[e]=void 0!==t?t:{
})})("versions",[]).push({
version:"3.26.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},function(e,t){
e.exports=!1},function(e,t,r){
var n=r(0),o=r(44),i=n["__core-js_shared__"]||o("__core-js_shared__",{
});e.exports=i},function(e,t,r){
var n=r(0),o=Object.defineProperty;e.exports=function(e,t){
try{
o(n,e,{
value:t,configurable:!0,writable:!0})}catch(r){
n[e]=t}return t}},function(e,t,r){
var n=r(5),o=0,i=Math.random(),a=n(1..toString);e.exports=function(e){
return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},function(e,t,r){
"use strict";r.r(t);r(7);var n={
loadScript:function loadScript(e,t){
var r=document.querySelector("head"),n=document.createElement("script"),o=!1;n.type="text/javascript",n.charset="utf-8",n.src=e,n.async=!0,t&&(n.onload=n.onreadystatechange=function(){
o||this.readyState&&"complete"!==this.readyState||(o=!0,t())}),r.appendChild(n)},buildQueryParams:function buildQueryParams(e){
return Object.keys(e).filter((function(t){
return e[t]})).map((function(t){
return t+"="+encodeURIComponent(e[t])})).join("&")},getQueryParam:function getQueryParam(e){
e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))},getLocation:function getLocation(){
return this.removeVgoParam(window.location.href)},getPathname:function getPathname(){
return this.removeVgoParam(window.location.pathname+window.location.search+window.location.hash)},removeVgoParam:function removeVgoParam(e){
var t="";return e.split("#").length>1&&(t="#".concat(e.split("#").pop())),(e=e.replace(t,"")).replace(/vgo_ee=[^\&]+&?/,"").replace(/[?&]$/,"")+t},getReferrer:function getReferrer(){
return document.referrer},async:function async(e,t){
setTimeout(e,t)}},o=r(1),i=r.n(o);function _defineProperties(e,t){
for(var r=0;r<t.length;r++){
var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){
function Service(e,t){
!function _classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Service),this._visitor=e,this._settings=t||{
}}return function _createClass(e,t,r){
return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{
writable:!1}),e}(Service,[{
key:"settings",get:function get(){
return this._settings}},{
key:"visitor",get:function get(){
return this._visitor}},{
key:"domain",get:function get(){
var e=this.constructor.name.toLowerCase();return i.a[e].domain}},{
key:"connect",value:function connect(){
}},{
key:"update",value:function update(){
}}]),Service}();function _typeof(e){
return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
return typeof e}:function(e){
return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function conversations_defineProperties(e,t){
for(var r=0;r<t.length;r++){
var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _get(){
return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(e,t,r){
var n=_superPropBase(e,t);if(n){
var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function _superPropBase(e,t){
for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _setPrototypeOf(e,t){
return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){
return e.__proto__=t,e})(e,t)}function _createSuper(e){
var t=function _isNativeReflectConstruct(){
if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){
}))),!0}catch(e){
return!1}}();return function _createSuperInternal(){
var r,n=_getPrototypeOf(e);if(t){
var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){
if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _getPrototypeOf(e){
return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){
return e.__proto__||Object.getPrototypeOf(e)})(e)}function tracking_typeof(e){
return(tracking_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
return typeof e}:function(e){
return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,t,r){
return t in e?Object.defineProperty(e,t,{
value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function tracking_classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tracking_defineProperties(e,t){
for(var r=0;r<t.length;r++){
var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function tracking_get(){
return(tracking_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(e,t,r){
var n=tracking_superPropBase(e,t);if(n){
var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function tracking_superPropBase(e,t){
for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=tracking_getPrototypeOf(e)););return e}function tracking_setPrototypeOf(e,t){
return(tracking_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){
return e.__proto__=t,e})(e,t)}function tracking_createSuper(e){
var t=function tracking_isNativeReflectConstruct(){
if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){
}))),!0}catch(e){
return!1}}();return function _createSuperInternal(){
var r,n=tracking_getPrototypeOf(e);if(t){
var o=tracking_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return tracking_possibleConstructorReturn(this,r)}}function tracking_possibleConstructorReturn(e,t){
if(t&&("object"===tracking_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function tracking_assertThisInitialized(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function tracking_getPrototypeOf(e){
return(tracking_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){
return e.__proto__||Object.getPrototypeOf(e)})(e)}var c="trackid",u="prismid",s="url",f="email";function web_personalization_typeof(e){
return(web_personalization_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
return typeof e}:function(e){
return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function web_personalization_defineProperties(e,t){
for(var r=0;r<t.length;r++){
var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function web_personalization_get(){
return(web_personalization_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(e,t,r){
var n=web_personalization_superPropBase(e,t);if(n){
var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function web_personalization_superPropBase(e,t){
for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=web_personalization_getPrototypeOf(e)););return e}function web_personalization_setPrototypeOf(e,t){
return(web_personalization_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){
return e.__proto__=t,e})(e,t)}function web_personalization_createSuper(e){
var t=function web_personalization_isNativeReflectConstruct(){
if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){
}))),!0}catch(e){
return!1}}();return function _createSuperInternal(){
var r,n=web_personalization_getPrototypeOf(e);if(t){
var o=web_personalization_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return web_personalization_possibleConstructorReturn(this,r)}}function web_personalization_possibleConstructorReturn(e,t){
if(t&&("object"===web_personalization_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function web_personalization_assertThisInitialized(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function web_personalization_getPrototypeOf(e){
return(web_personalization_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){
return e.__proto__||Object.getPrototypeOf(e)})(e)}var l={
conversations:function(e){
!function _inherits(e,t){
if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{
constructor:{
value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{
writable:!1}),t&&_setPrototypeOf(e,t)}(Conversations,e);var t=_createSuper(Conversations);function Conversations(e,r){
var n;return function conversations_classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Conversations),(n=t.call(this,e,r))._updateQueue=[],n}return function conversations_createClass(e,t,r){
return t&&conversations_defineProperties(e.prototype,t),r&&conversations_defineProperties(e,r),Object.defineProperty(e,"prototype",{
writable:!1}),e}(Conversations,[{
key:"connect",value:function connect(){
var e=this;_get(_getPrototypeOf(Conversations.prototype),"connect",this).call(this);var t="https://".concat(i.a.cdnDomain,"/conversations/").concat("","widget.js");n.async((function(){
n.loadScript(t,(function(){
window.conversationsGlobalObject.accountId=e._visitor.accountId,window.conversationsGlobalObject.visitorId=e._visitor.id,e.visitor.email&&(window.conversationsGlobalObject.email=e._visitor.email),n.async((function(){
return window.conversationsGlobalObject.connect()}),1),e._processUpdateQueue()}))}),this.settings.delay?1e3*+this.settings.delay:1)}},{
key:"_queueUpdate",value:function _queueUpdate(e){
this._updateQueue.push(e)}},{
key:"_processUpdateQueue",value:function _processUpdateQueue(){
var e=this;this._updateQueue.forEach((function(t){
return e.update(t)}))}},{
key:"update",value:function update(e){
window.conversationsGlobalObject?window.conversationsGlobalObject.update(e):this._queueUpdate(e)}}]),Conversations}(a),tracking:function(e){
!function tracking_inherits(e,t){
if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{
constructor:{
value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{
writable:!1}),t&&tracking_setPrototypeOf(e,t)}(Tracking,e);var t=tracking_createSuper(Tracking);function Tracking(){
return tracking_classCallCheck(this,Tracking),t.apply(this,arguments)}return function tracking_createClass(e,t,r){
return t&&tracking_defineProperties(e.prototype,t),r&&tracking_defineProperties(e,r),Object.defineProperty(e,"prototype",{
writable:!1}),e}(Tracking,[{
key:"connect",value:function connect(){
var e;tracking_get(tracking_getPrototypeOf(Tracking.prototype),"connect",this).call(this);var t=(_defineProperty(e={
},c,this.visitor.accountId),_defineProperty(e,u,this.visitor.id),_defineProperty(e,s,this.visitor.url),e);this.visitor.email&&(t[f]=this.visitor.email);var r=n.buildQueryParams(t),o="https://".concat(this.domain,"/t_prism_sitemessages.php?").concat(r);n.loadScript(o)}}]),Tracking}(a),wp:function(e){
!function web_personalization_inherits(e,t){
if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{
constructor:{
value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{
writable:!1}),t&&web_personalization_setPrototypeOf(e,t)}(WebPersonalization,e);var t=web_personalization_createSuper(WebPersonalization);function WebPersonalization(e){
var r;return function web_personalization_classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WebPersonalization),(r=t.call(this,e))._updateQueue=[],r}return function web_personalization_createClass(e,t,r){
return t&&web_personalization_defineProperties(e.prototype,t),r&&web_personalization_defineProperties(e,r),Object.defineProperty(e,"prototype",{
writable:!1}),e}(WebPersonalization,[{
key:"connect",value:function connect(){
var e=this;web_personalization_get(web_personalization_getPrototypeOf(WebPersonalization.prototype),"connect",this).call(this);var t="https://".concat(this.domain,"/wp-controller.js");n.loadScript(t,(function(){
window.wpGlobalObject&&(window.wpGlobalObject.accountId=e.visitor.accountId,window.wpGlobalObject.visitorId=e.visitor.id,window.wpGlobalObject.url=e.visitor.url,e.visitor.email&&(window.wpGlobalObject.email=e.visitor.email),window.wpGlobalObject.connect(),e._processUpdateQueue())}))}},{
key:"_queueUpdate",value:function _queueUpdate(e){
this._updateQueue.push(e)}},{
key:"_processUpdateQueue",value:function _processUpdateQueue(){
var e=this;this._updateQueue.forEach((function(t){
return e.update(t)}))}},{
key:"update",value:function update(e){
window.wpGlobalObject?window.wpGlobalObject.update(e):this._queueUpdate(e)}}]),WebPersonalization}(a)};function visitor_defineProperties(e,t){
for(var r=0;r<t.length;r++){
var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=function(){
function Visitor(e){
!function visitor_classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Visitor),this._id=null,this._accountId=e,this._email=null,this._referrer=n.getReferrer(),this._url=n.getLocation(),this._hasWhitelistedServices=!1,this._whitelistedServices=[],this._addedServices=[],this._processedServices={
},this._trackByDefault=!1,this._siteAllowParameter=!0}return function visitor_createClass(e,t,r){
return t&&visitor_defineProperties(e.prototype,t),r&&visitor_defineProperties(e,r),Object.defineProperty(e,"prototype",{
writable:!1}),e}(Visitor,[{
key:"id",get:function get(){
return this._id},set:function set(e){
this._id=e}},{
key:"email",get:function get(){
return this._email},set:function set(e){
this._email=e}},{
key:"referrer",get:function get(){
return this._referrer},set:function set(e){
this._referrer=e}},{
key:"accountId",get:function get(){
return this._accountId}},{
key:"url",get:function get(){
return this._url},set:function set(e){
this._url=e}},{
key:"trackByDefault",get:function get(){
return this._trackByDefault},set:function set(e){
var t=e;switch(e){
case"true":t=!0;break;case"false":t=!1}this._trackByDefault=t}},{
key:"siteAllowParameter",get:function get(){
return this._siteAllowParameter},set:function set(e){
var t=e;switch(e){
case"true":t=!0;break;case"false":t=!1}this._siteAllowParameter=t}},{
key:"whitelistedServices",get:function get(){
return this._whitelistedServices},set:function set(e){
this._whitelistedServices=e}},{
key:"addedServices",get:function get(){
return this._addedServices}},{
key:"processedServices",get:function get(){
return this._processedServices}},{
key:"hasWhitelistedServices",get:function get(){
return this._hasWhitelistedServices},set:function set(e){
this._hasWhitelistedServices=!!e}},{
key:"hasProcessedService",value:function hasProcessedService(e){
return void 0!==this.processedServices[e]}},{
key:"registerProcessedService",value:function registerProcessedService(e,t){
this.processedServices[e]=t}},{
key:"setWhitelistedServices",value:function setWhitelistedServices(e){
var t=this;this.hasWhitelistedServices=!0,e&&("string"==typeof e&&(e=e.split(",")),e.forEach((function(e){
void 0!==l[e]&&-1===t.whitelistedServices.indexOf(e)&&t.whitelistedServices.push(e)})))}},{
key:"updateUrl",value:function updateUrl(e){
this.url=e||n.getLocation()}}]),Visitor}();function getDiffuserCookieName(e){
return"".concat("prism_").concat(e)}function getDiffuserCookieExpiration(){
return new Date((new Date).getTime()+2592e6)}function getTempCookieExpiration(){
return new Date((new Date).getTime()+5e3)}function getCookies(){
return document.cookie.split("; ").reduce((function(e,t){
var r=t.split("=");return e[r[0]]=r[1],e}),{
})}function setDiffuserCookie(e,t){
var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=getDiffuserCookieName(e),o=getDiffuserCookieExpiration(),i="."+window.location.hostname.split(".").slice(-2-r).join(".");if(document.cookie="".concat(n,"=").concat(t,";domain=").concat(i,";path=/;expires=").concat(o.toUTCString()),e){
var a=getDiffuserCookie(e);if(!a&&r<10)return setDiffuserCookie(e,t,r+1)}}function getDiffuserCookie(e){
if(!e)throw"No account id";return getCookies()[getDiffuserCookieName(e)]||""}function getTempEeCookie(){
return getCookies().temp_ee||""}function diffuser_typeof(e){
return(diffuser_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
return typeof e}:function(e){
return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _regeneratorRuntime(){
_regeneratorRuntime=function _regeneratorRuntime(){
return e};var e={
},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){
e[t]=r.value},o="function"==typeof Symbol?Symbol:{
},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function define(e,t,r){
return Object.defineProperty(e,t,{
value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{
define({
},"")}catch(e){
define=function define(e,t,r){
return e[t]=r}}function wrap(e,t,r,o){
var i=t&&t.prototype instanceof Generator?t:Generator,a=Object.create(i.prototype),c=new Context(o||[]);return n(a,"_invoke",{
value:makeInvokeMethod(e,r,c)}),a}function tryCatch(e,t,r){
try{
return{
type:"normal",arg:e.call(t,r)}}catch(e){
return{
type:"throw",arg:e}}}e.wrap=wrap;var u={
};function Generator(){
}function GeneratorFunction(){
}function GeneratorFunctionPrototype(){
}var s={
};define(s,i,(function(){
return this}));var f=Object.getPrototypeOf,l=f&&f(f(values([])));l&&l!==t&&r.call(l,i)&&(s=l);var p=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(s);function defineIteratorMethods(e){
["next","throw","return"].forEach((function(t){
define(e,t,(function(e){
return this._invoke(t,e)}))}))}function AsyncIterator(e,t){
var o;n(this,"_invoke",{
value:function value(n,i){
function callInvokeWithMethodAndArg(){
return new t((function(o,a){
!function invoke(n,o,i,a){
var c=tryCatch(e[n],e,o);if("throw"!==c.type){
var u=c.arg,s=u.value;return s&&"object"==diffuser_typeof(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){
invoke("next",e,i,a)}),(function(e){
invoke("throw",e,i,a)})):t.resolve(s).then((function(e){
u.value=e,i(u)}),(function(e){
return invoke("throw",e,i,a)}))}a(c.arg)}(n,i,o,a)}))}return o=o?o.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,t,r){
var n="suspendedStart";return function(o,i){
if("executing"===n)throw new Error("Generator is already running");if("completed"===n){
if("throw"===o)throw i;return doneResult()}for(r.method=o,r.arg=i;;){
var a=r.delegate;if(a){
var c=maybeInvokeDelegate(a,r);if(c){
if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){
if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=tryCatch(e,t,r);if("normal"===s.type){
if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{
value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function maybeInvokeDelegate(e,t){
var r=e.iterator[t.method];if(void 0===r){
if(t.delegate=null,"throw"===t.method){
if(e.iterator.return&&(t.method="return",t.arg=void 0,maybeInvokeDelegate(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=tryCatch(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function pushTryEntry(e){
var t={
tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function resetTryEntry(e){
var t=e.completion||{
};t.type="normal",delete t.arg,e.completion=t}function Context(e){
this.tryEntries=[{
tryLoc:"root"}],e.forEach(pushTryEntry,this),this.reset(!0)}function values(e){
if(e){
var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){
var n=-1,o=function next(){
for(;++n<e.length;)if(r.call(e,n))return next.value=e[n],next.done=!1,next;return next.value=void 0,next.done=!0,next};return o.next=o}}return{
next:doneResult}}function doneResult(){
return{
value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,n(p,"constructor",{
value:GeneratorFunctionPrototype,configurable:!0}),n(GeneratorFunctionPrototype,"constructor",{
value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){
var t="function"==typeof e&&e.constructor;return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){
return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,define(e,c,"GeneratorFunction")),e.prototype=Object.create(p),e},e.awrap=function(e){
return{
__await:e}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,a,(function(){
return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){
void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){
return e.done?e.value:a.next()}))},defineIteratorMethods(p),define(p,c,"Generator"),define(p,i,(function(){
return this})),define(p,"toString",(function(){
return"[object Generator]"})),e.keys=function(e){
var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function next(){
for(;r.length;){
var e=r.pop();if(e in t)return next.value=e,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={
constructor:Context,reset:function reset(e){
if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function stop(){
this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function dispatchException(e){
if(this.done)throw e;var t=this;function handle(r,n){
return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){
var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return handle("end");if(o.tryLoc<=this.prev){
var a=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(a&&c){
if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(a){
if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{
if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function abrupt(e,t){
for(var n=this.tryEntries.length-1;n>=0;--n){
var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){
var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{
};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function complete(e,t){
if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function finish(e){
for(var t=this.tryEntries.length-1;t>=0;--t){
var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),u}},catch:function _catch(e){
for(var t=this.tryEntries.length-1;t>=0;--t){
var r=this.tryEntries[t];if(r.tryLoc===e){
var n=r.completion;if("throw"===n.type){
var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,t,r){
return this.delegate={
iterator:values(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}function asyncGeneratorStep(e,t,r,n,o,i,a){
try{
var c=e[i](a),u=c.value}catch(e){
return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(e){
return function(){
var t=this,r=arguments;return new Promise((function(n,o){
var i=e.apply(t,r);function _next(e){
asyncGeneratorStep(i,n,o,_next,_throw,"next",e)}function _throw(e){
asyncGeneratorStep(i,n,o,_next,_throw,"throw",e)}_next(void 0)}))}}function diffuser_defineProperty(e,t,r){
return t in e?Object.defineProperty(e,t,{
value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function diffuser_defineProperties(e,t){
for(var r=0;r<t.length;r++){
var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d="a",h="e",y="r",v="t",_="u",b="ee",g=function(){
function Diffuser(e){
if(function diffuser_classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Diffuser),this.visitorGlobalObjectAlias=e,this._visitors={
},this._accountId=null,this._settings={
},this.initialized=!1,this.updateQueue=[],void 0===window[e])throw"Embed code is not configured";this._hasProcessedSingleton={
conversations:!1},this._queue=window[e].q}var e;return function diffuser_createClass(e,t,r){
return t&&diffuser_defineProperties(e.prototype,t),r&&diffuser_defineProperties(e,r),Object.defineProperty(e,"prototype",{
writable:!1}),e}(Diffuser,[{
key:"settings",get:function get(){
return this._settings},set:function set(e){
this._settings=e}},{
key:"accountId",get:function get(){
return this._accountId}},{
key:"visitorGlobalObjectAlias",get:function get(){
return this._visitorGlobalObjectAlias},set:function set(e){
this._visitorGlobalObjectAlias=e}},{
key:"queue",get:function get(){
return this._queue},set:function set(e){
this._queue=e}},{
key:"domain",get:function get(){
var e=this.constructor.name.toLowerCase();return i.a[e].domain}},{
key:"setVisitorId",value:function setVisitorId(e){
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=this._getVisitor(t);r.id=e,setDiffuserCookie(t,e)}},{
key:"setEmail",value:function setEmail(e){
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=this._getVisitor(t);r.email=e}},{
key:"setWhitelistedServices",value:function setWhitelistedServices(e){
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=this._getVisitor(t);r.setWhitelistedServices(e)}},{
key:"connect",value:function connect(){
this._processQueue(),this._replaceVisitorGlobalObject()}},{
key:"_getVisitor",value:function _getVisitor(e){
if(!e&&!this._accountId)throw"Account id is not set";return this._visitors[e||this._accountId]}},{
key:"_processQueue",value:function _processQueue(){
var e=this;this.queue.forEach((function(t){
e._processJob.apply(e,t)}))}},{
key:"_replaceVisitorGlobalObject",value:function _replaceVisitorGlobalObject(){
window[this.visitorGlobalObjectAlias]=this._processJob.bind(this)}},{
key:"_getMethodNameFromJobName",value:function _getMethodNameFromJobName(e){
return e=e.charAt(0).toUpperCase()+e.slice(1),"".concat("_execute").concat(e)}},{
key:"_processJob",value:function _processJob(){
var e=Array.prototype.slice.call(arguments),t=e.shift(),r=this._getMethodNameFromJobName(t);if(void 0===this[r])throw"Invalid method";this[r].apply(this,e)}},{
key:"_getServicesToProcess",value:function _getServicesToProcess(e){
return e.addedServices.length?e.addedServices:e.hasWhitelistedServices?e.whitelistedServices:Object.keys(l)}},{
key:"_connectToNewService",value:function _connectToNewService(e,t){
if(void 0!==this._hasProcessedSingleton[t]){
if(this._hasProcessedSingleton[t])return;this._hasProcessedSingleton[t]=!0}var r=new l[t](e,this.settings[t]);e.registerProcessedService(t,r),r.connect()}},{
key:"_setInitialized",value:function _setInitialized(){
this.initialized=!0,this._processUpdateQueue()}},{
key:"_processServices",value:function _processServices(e){
var t=this;if(!e||!e.id)return this._setInitialized(),!1;this._getServicesToProcess(e).forEach((function(r){
e.hasProcessedService(r)||t._connectToNewService(e,r)})),this._setInitialized()}},{
key:"_executeSetAccount",value:function _executeSetAccount(e){
this._visitors[e]||(this._visitors[e]=new p(e)),this._accountId=e}},{
key:"_executeSetTrackByDefault",value:function _executeSetTrackByDefault(e){
this._getVisitor().trackByDefault=e}},{
key:"_executeSetSiteAllowParameter",value:function _executeSetSiteAllowParameter(e){
this._getVisitor().siteAllowParameter=e,this._visitors.siteAllowParameter=e}},{
key:"_executeSetEmail",value:function _executeSetEmail(e){
this._getVisitor().email=e}},{
key:"_executeAddService",value:function _executeAddService(e){
var t=this._getVisitor();void 0!==l[e]&&-1===t.addedServices.indexOf(e)&&t.addedServices.push(e)}},{
key:"_executeProcess",value:function _executeProcess(e){
var t=this,r=this._getVisitor();!1===r.trackByDefault&&"allowTracking"!==e||n.async((function(){
t._makeRequestToDiffuser(r,t._processServices.bind(t,r))}),1)}},{
key:"_makeRequestToDiffuser",value:function _makeRequestToDiffuser(e,t){
var r,o=(diffuser_defineProperty(r={
},d,e.accountId),diffuser_defineProperty(r,h,e.email),diffuser_defineProperty(r,b,n.getQueryParam("vgo_ee")),diffuser_defineProperty(r,_,e.url),diffuser_defineProperty(r,y,e.referrer),diffuser_defineProperty(r,v,getDiffuserCookie(e.accountId)),r);this._removeQueryParam(e.siteAllowParameter),this._checkQueryParam(e.accountId)&&""===o[b]&&(o[b]=atob(getTempEeCookie()));var i=n.buildQueryParams(o),a="https://".concat(this.domain,"?").concat(i);n.loadScript(a,t)}},{
key:"_queueUpdate",value:function _queueUpdate(e){
this.updateQueue.push(e)}},{
key:"_processUpdateQueue",value:function _processUpdateQueue(){
var e=this;this.updateQueue.forEach((function(t){
return e._executeUpdate(t)})),this.updateQueue=[]}},{
key:"_executeUpdate",value:function _executeUpdate(e){
var t=this;e||this.initialized?Object.values(this._visitors).map((function(r){
return t._updateVisitor(r,e)})):this._queueUpdate(n.getLocation())}},{
key:"_updateVisitor",value:function _updateVisitor(e,t){
var r=this;e.whitelistedServices=[],e.updateUrl(t);var n=e.processedServices;this._makeRequestToDiffuser(e,(function(){
if(!e||!e.id)return r._setInitialized(),!1;var t=r._getServicesToProcess(e),o=Object.keys(n);t.concat(o.filter((function(e){
return t.indexOf(e)<0}))).forEach((function(i){
if(-1===o.indexOf(i))r._connectToNewService(e,i);else{
var a=-1!==t.indexOf(i);n[i].update(a)}}))}))}},{
key:"_removeQueryParam",value:function _removeQueryParam(e){
if(-1!==window.location.href.indexOf("vgo_ee")){
var t=this._checkResponseStatusExists(window.performance.getEntriesByName(window.location.href),e);!function setTempEeCookie(e){
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=getTempCookieExpiration(),n="."+window.location.hostname.split(".").slice(-2-t).join(".");document.cookie="".concat("temp_ee","=").concat(e,";domain=").concat(n,";path=/;expires=").concat(r.toUTCString());var o=getTempEeCookie();if(!o&&t<10)return setTempEeCookie(e,t+1)}(btoa(n.getQueryParam("vgo_ee"))),window.history.replaceState(window.history.state,document.title,n.getPathname()),t&&window.location.replace(window.location.href)}}},{
key:"_checkResponseStatusExists",value:function _checkResponseStatusExists(e,t){
var r=this;if(1===e.length&&void 0!==e[0].responseStatus)return 404===e[0].responseStatus;if(!1===t){
var n=!1;return function(){
var e=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(){
return _regeneratorRuntime().wrap((function _callee$(e){
for(;;)switch(e.prev=e.next){
case 0:return e.next=2,r._fetchResponseCode();case 2:n=e.sent;case 3:case"end":return e.stop()}}),_callee)})));return function fetchResponseCode(){
return e.apply(this,arguments)}}()(),n}return!1}},{
key:"_checkQueryParam",value:function _checkQueryParam(e){
return""===getDiffuserCookie(e)&&""!==getTempEeCookie()}},{
key:"_executeSettings",value:function _executeSettings(e){
this.settings=e}},{
key:"_fetchResponseCode",value:(e=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(){
var e;return _regeneratorRuntime().wrap((function _callee2$(t){
for(;;)switch(t.prev=t.next){
case 0:return e={
method:"GET",redirect:"follow"},t.next=3,fetch(window.location.href,e).then((function(e){
return 404===e.status}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),_callee2)}))),function _fetchResponseCode(){
return e.apply(this,arguments)})}]),Diffuser}();!window.prismGlobalObjectAlias&&window.visitorGlobalObjectAlias&&(window.prismGlobalObjectAlias=window.visitorGlobalObjectAlias),window.prismGlobalObjectAlias&&!window.visitorGlobalObjectAlias&&(window.visitorGlobalObjectAlias=window.prismGlobalObjectAlias),window.pgo&&(window[window.visitorGlobalObjectAlias]=window.pgo),window.visitorGlobalObject||(window.visitorGlobalObject=new g(window.visitorGlobalObjectAlias),window.visitorGlobalObject.connect())}]);