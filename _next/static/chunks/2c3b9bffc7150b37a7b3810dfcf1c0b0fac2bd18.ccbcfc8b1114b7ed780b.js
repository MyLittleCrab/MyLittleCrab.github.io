(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,o=void 0!==i&&i;return n||a&&o}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),u=n("FYa8"),s=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var u=0,s=f.length;u<s;u++){var c=f[u];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var l=a.props[c],d=r[c]||new Set;d.has(l)?i=!1:(d.add(l),r[c]=d)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var g=m;t.default=g},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("q1tI"),a=n.n(r),i=n("vUxr"),o=(n("YSmr"),a.a.createElement);function u(){return o("footer",{className:"bg-accent-1 border-t border-accent-2"},o(i.a,null))}var s=n("8Kt/"),c=n.n(s),l=a.a.createElement;function d(){return l(c.a,null,l("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),l("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),l("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),l("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),l("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),l("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),l("meta",{name:"msapplication-TileColor",content:"#000000"}),l("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),l("meta",{name:"theme-color",content:"#000"}),l("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),l("meta",{name:"description",content:"Nosoff.info \u2014 personal blog"}))}var f=a.a.createElement;function h(e){e.preview;var t=e.children;return f(a.a.Fragment,null,f(d,null),f("div",{className:"min-h-screen"},f("main",null,t)),f(u,null))}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||i(e)||o()}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),i=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),u=n("a1gu"),s=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){o(n,e);var t=c(n);function n(e){var i;return a(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},YSmr:function(e,t,n){"use strict"},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var i,o=a(n("q1tI")),u=n("elyg"),s=n("nOHt"),c=new Map,l=window.IntersectionObserver,d={};var f=function(e,t){var n=i||(l?i=new l((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),c.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function h(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=o.default.useState(),a=r(n,2),i=a[0],c=a[1],m=(0,s.useRouter)(),g=m&&m.pathname||"/",v=o.default.useMemo((function(){var t=(0,u.resolveHref)(g,e.href);return{href:t,as:e.as?(0,u.resolveHref)(g,e.as):t}}),[g,e.href,e.as]),p=v.href,w=v.as;o.default.useEffect((function(){if(t&&l&&i&&i.tagName&&(0,u.isLocalURL)(p)&&!d[p+"%"+w])return f(i,(function(){h(m,p,w)}))}),[t,i,p,w,m]);var y=e.children,b=e.replace,M=e.shallow,T=e.scroll;"string"===typeof y&&(y=o.default.createElement("a",null,y));var C=o.Children.only(y),x={ref:function(e){e&&c(e),C&&"object"===typeof C&&C.ref&&("function"===typeof C.ref?C.ref(e):"object"===typeof C.ref&&(C.ref.current=e))},onClick:function(e){C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:i}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,p,w,b,M,T)}};return t&&(x.onMouseEnter=function(e){(0,u.isLocalURL)(p)&&(C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),h(m,p,w,{priority:!0}))}),(e.passHref||"a"===C.type&&!("href"in C.props))&&(x.href=(0,u.addBasePath)(w)),o.default.cloneElement(C,x)};t.default=m},i2FJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r).a.createElement;function i(e){var t=e.name,n=e.picture;return a("div",{className:"flex items-center"},a("img",{src:n,className:"w-12 h-12 rounded-full mr-4",alt:t}),a("div",{className:"text-xl font-bold"},t))}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},m662:function(e,t,n){"use strict";n.d(t,"a",(function(){return fe}));var r=n("q1tI"),a=n.n(r);function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function o(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+t.getTime()%6e4}function u(e,t){if(t.length<e)throw new TypeError(e+" argument"+e>1?"s":" required, but only "+t.length+" present")}var s={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},c=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,d=/^([+-])(\d{2})(?::?(\d{2}))?$/;function f(e){var t,n={},r=e.split(s.dateTimeDelimiter);if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],s.timeZoneDelimiter.test(n.date)&&(n.date=e.split(s.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=s.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function h(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function m(e,t){if(null===t)return null;var n=e.match(c);if(!n)return null;var r=!!n[4],a=g(n[1]),i=g(n[2])-1,o=g(n[3]),u=g(n[4]),s=g(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,i=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(t,u,s):new Date(NaN);var l=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(y[t]||(b(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(b(e)?366:365)}(t,a)?(l.setUTCFullYear(t,i,Math.max(a,o)),l):new Date(NaN)}function g(e){return e?parseInt(e):1}function v(e){var t=e.match(l);if(!t)return null;var n=p(t[1]),r=p(t[2]),a=p(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?36e5*n+6e4*r+1e3*a:NaN}function p(e){return e&&parseFloat(e.replace(",","."))||0}function w(e){if("Z"===e)return 0;var t=e.match(d);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(36e5*r+6e4*a):NaN}var y=[31,null,31,30,31,30,31,31,30,31,30,31];function b(e){return e%400===0||e%4===0&&e%100}function M(e){u(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function T(e){u(1,arguments);var t=M(e);return!isNaN(t)}var C={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function x(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var D={date:x({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:x({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:x({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},S={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function P(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function k(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(l,(function(e){return e.test(r)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(l,(function(e){return e.test(r)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var N,U={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"===typeof C[e]?C[e]:1===t?C[e].one:C[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:D,formatRelative:function(e,t,n,r){return S[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:P({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:P({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:P({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:P({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:P({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(N={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(N.matchPattern);if(!a)return null;var i=a[0],o=n.match(N.parsePattern);if(!o)return null;var u=N.valueCallback?N.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:k({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:k({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:k({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:k({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function E(e,t){u(2,arguments);var n=M(e).getTime(),r=i(t);return new Date(n+r)}function O(e,t){u(2,arguments);var n=i(t);return E(e,-n)}function W(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var Y={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return W("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):W(n+1,2)},d:function(e,t){return W(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return W(e.getUTCHours()%12||12,t.length)},H:function(e,t){return W(e.getUTCHours(),t.length)},m:function(e,t){return W(e.getUTCMinutes(),t.length)},s:function(e,t){return W(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return W(Math.floor(r*Math.pow(10,n-3)),t.length)}};function q(e){u(1,arguments);var t=1,n=M(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function j(e){u(1,arguments);var t=M(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=q(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=q(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function H(e){u(1,arguments);var t=j(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=q(n);return r}function A(e,t){u(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:i(a),s=null==n.weekStartsOn?o:i(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=M(e),l=c.getUTCDay(),d=(l<s?7:0)+l-s;return c.setUTCDate(c.getUTCDate()-d),c.setUTCHours(0,0,0,0),c}function I(e,t){u(1,arguments);var n=M(e,t),r=n.getUTCFullYear(),a=t||{},o=a.locale,s=o&&o.options&&o.options.firstWeekContainsDate,c=null==s?1:i(s),l=null==a.firstWeekContainsDate?c:i(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(r+1,0,l),d.setUTCHours(0,0,0,0);var f=A(d,t),h=new Date(0);h.setUTCFullYear(r,0,l),h.setUTCHours(0,0,0,0);var m=A(h,t);return n.getTime()>=f.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function z(e,t){u(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:i(a),s=null==n.firstWeekContainsDate?o:i(n.firstWeekContainsDate),c=I(e,t),l=new Date(0);l.setUTCFullYear(c,0,s),l.setUTCHours(0,0,0,0);var d=A(l,t);return d}var L="midnight",_="noon",F="morning",R="afternoon",Q="evening",X="night";function B(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+W(i,2)}function G(e,t){return e%60===0?(e>0?"-":"+")+W(Math.abs(e)/60,2):J(e,t)}function J(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+W(Math.floor(a/60),2)+n+W(a%60,2)}var K={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return Y.y(e,t)},Y:function(e,t,n,r){var a=I(e,r),i=a>0?a:1-a;return"YY"===t?W(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):W(i,t.length)},R:function(e,t){return W(j(e),t.length)},u:function(e,t){return W(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return W(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return W(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return Y.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return W(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){u(1,arguments);var n=M(e),r=A(n,t).getTime()-z(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):W(a,t.length)},I:function(e,t,n){var r=function(e){u(1,arguments);var t=M(e),n=q(t).getTime()-H(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):W(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):Y.d(e,t)},D:function(e,t,n){var r=function(e){u(1,arguments);var t=M(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):W(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return W(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return W(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return W(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?_:0===a?L:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?Q:a>=12?R:a>=4?F:X,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Y.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):Y.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):W(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):W(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):Y.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Y.s(e,t)},S:function(e,t){return Y.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return G(a);case"XXXX":case"XX":return J(a);case"XXXXX":case"XXX":default:return J(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return G(a);case"xxxx":case"xx":return J(a);case"xxxxx":case"xxx":default:return J(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+B(a,":");case"OOOO":default:return"GMT"+J(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+B(a,":");case"zzzz":default:return"GMT"+J(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return W(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return W((r._originalDate||e).getTime(),t.length)}};function Z(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function $(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var V={p:$,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return Z(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",Z(a,t)).replace("{{time}}",$(i,t))}},ee=["D","DD"],te=["YY","YYYY"];function ne(e){return-1!==ee.indexOf(e)}function re(e){return-1!==te.indexOf(e)}function ae(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var ie=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,oe=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ue=/^'([^]*?)'?$/,se=/''/g,ce=/[a-zA-Z]/;function le(e){return e.match(ue)[1].replace(se,"'")}var de=a.a.createElement;function fe(e){var t=e.dateString,n=e.className,r=function(e,t){u(1,arguments);var n=t||{},r=null==n.additionalDigits?2:i(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a,s=f(e);if(s.date){var c=h(s.date,r);a=m(c.restDateString,c.year)}if(isNaN(a)||!a)return new Date(NaN);var l,d=a.getTime(),g=0;if(s.time&&(g=v(s.time),isNaN(g)||null===g))return new Date(NaN);if(s.timezone){if(l=w(s.timezone),isNaN(l))return new Date(NaN)}else{var p=d+g,y=new Date(p);l=o(y);var b=new Date(p);l>0?b.setDate(y.getDate()+1):b.setDate(y.getDate()-1);var M=o(b)-l;M>0&&(l+=M)}return new Date(d+g+l)}(t);return de("time",{dateTime:t,className:n},function(e,t,n){u(2,arguments);var r=String(t),a=n||{},s=a.locale||U,c=s.options&&s.options.firstWeekContainsDate,l=null==c?1:i(c),d=null==a.firstWeekContainsDate?l:i(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=s.options&&s.options.weekStartsOn,h=null==f?0:i(f),m=null==a.weekStartsOn?h:i(a.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var g=M(e);if(!T(g))throw new RangeError("Invalid time value");var v=o(g),p=O(g,v),w={firstWeekContainsDate:d,weekStartsOn:m,locale:s,_originalDate:g};return r.match(oe).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,V[t])(e,s.formatLong,w):e})).join("").match(ie).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return le(e);var n=K[t];if(n)return!a.useAdditionalWeekYearTokens&&re(e)&&ae(e),!a.useAdditionalDayOfYearTokens&&ne(e)&&ae(e),n(p,e,s.localize,w);if(t.match(ce))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("")}(r,"LLLL\td, yyyy"))}},vUxr:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r).a.createElement;function i(e){var t=e.children;return a("div",{className:"container mx-auto px-5"},t)}},zK7a:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),i=n("TSYQ"),o=n.n(i),u=n("YFqc"),s=n.n(u),c=a.a.createElement;function l(e){var t=e.title,n=e.src,r=e.slug,a=c("img",{src:n,alt:"Cover Image for ".concat(t),className:o()("shadow-small",{"hover:shadow-medium transition-shadow duration-200":r})});return c("div",{className:"-mx-5 sm:mx-0"},r?c(s.a,{as:"/posts/".concat(r),href:"/posts/[slug]"},c("a",{"aria-label":t},a)):a)}}}]);