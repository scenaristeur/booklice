(function(e){function t(t){for(var r,o,s=t[0],u=t[1],i=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function s(e){return u.p+"js/"+({about:"about",bookmarks:"bookmarks"}[e]||e)+"."+{about:"229c6b90",bookmarks:"aa00d546","chunk-2d0bceed":"93b618e8","chunk-2d0d9fc1":"262396c9","chunk-4e6e562f":"013d8ad3","chunk-7aaa0545":"d79e945f","chunk-e592fad4":"2c5f0625"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-7aaa0545":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",bookmarks:"bookmarks"}[e]||e)+"."+{about:"31d6cfe0",bookmarks:"31d6cfe0","chunk-2d0bceed":"31d6cfe0","chunk-2d0d9fc1":"31d6cfe0","chunk-4e6e562f":"31d6cfe0","chunk-7aaa0545":"070538e6","chunk-e592fad4":"31d6cfe0"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/booklice/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/bookmarks"}},[e._v("Bookmarks")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),e._v(" Q"+e._s(e.$route.query)+"A "),n("router-view"),e._v(" 404 ")],1)},a=[],c=(n("034f"),n("2877")),s={},u=Object(c["a"])(s,o,a,!1,null,null,null),i=u.exports,l=n("9483");Object(l["a"])("".concat("/booklice/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var d=n("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("Login"),r("ShareTarget"),r("ShareButton"),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],h={name:"Home",components:{Login:function(){return n.e("chunk-2d0bceed").then(n.bind(null,"2a9a"))},HelloWorld:function(){return n.e("chunk-7aaa0545").then(n.bind(null,"fdab"))},ShareTarget:function(){return n.e("chunk-4e6e562f").then(n.bind(null,"d2d9"))},ShareButton:function(){return n.e("chunk-2d0d9fc1").then(n.bind(null,"6a55"))}}},b=h,m=Object(c["a"])(b,f,p,!1,null,null,null),g=m.exports;r["default"].use(d["a"]);var v=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/bookmarks",name:"Bookmarks",component:function(){return n.e("bookmarks").then(n.bind(null,"b51b"))}}],k=new d["a"]({mode:"history",base:"/booklice/",routes:v}),w=k,x=n("2f62"),j=n("5530"),y=n("d11f"),O=n("a719"),R=n("dbc7"),T=function(){return{session:null,pod:null,currentRemoteUrl:"",remoteResources:[],things:[],vocabs:Object(j["a"])(Object(j["a"])(Object(j["a"])({},y),O),R),tags:{}}},S={uploadLocalToPod:function(e,t){try{console.log(t),r["default"].prototype.$uploadLocalToPod(t)}catch(n){console.log(t,"->",n),alert(n+" in "+t.path)}}},P={setPod:function(e,t){e.pod=t},setSession:function(e,t){e.session=t},setCurrentRemoteUrl:function(e,t){e.currentRemoteUrl=t},setRemoteResources:function(e,t){e.remoteResources=t},setThings:function(e,t){e.things=t}},$={namespaced:!0,state:T,actions:S,mutations:P},A=function(){return{}},C={},F={},_={namespaced:!0,state:A,actions:C,mutations:F};r["default"].use(x["a"]);var I=new x["a"].Store({state:{},mutations:{},actions:{},modules:{solid:$,booklice:_}}),E=n("1da1"),U=(n("99af"),n("b0c0"),n("d81d"),n("159b"),n("8a79"),n("ac1f"),n("1276"),n("fb6a"),n("96cf"),n("93ef")),L=n("8522"),B={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;e.prototype.$login=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L["login"]({oidcIssuer:t,redirectUrl:window.location.href,clientName:"Vatch"});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),alert(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$logout=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=L["getDefaultSession"](),console.log(t),e.next=5,r.logout();case 5:n.commit("solid/setSession",r),n.commit("solid/setPod",{}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$checkSessions=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L["handleIncomingRedirect"]({restorePreviousSession:t.restore}).then((function(e){console.log(e)}));case 3:r=L["getDefaultSession"](),L["onSessionRestore"]((function(e){console.log("restore",e)})),n.commit("solid/setSession",r),this.$getPodInfosFromSession(r),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getPodInfosFromSession=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,r={},r.logged=t.info.isLoggedIn,!r.logged){e.next=12;break}return r.webId=t.info.webId,e.next=7,this.$getPodInfos(r);case 7:r=e.sent,n.commit("solid/setPod",r),null!=r.storage&&this.$setCurrentThingUrl(r.storage),e.next=14;break;case 12:n.commit("solid/setPod",null),n.commit("solid/setThings",[]);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](0),alert(e.t0);case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$setCurrentThingUrl=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var r,o,a,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(U["i"])(t,{fetch:L["fetch"]});case 3:if(r=e.sent,console.log("Fetched a ".concat(Object(U["h"])(r)," file from ").concat(Object(U["k"])(r),".")),console.log("The file is ".concat(Object(U["q"])(r)?"not ":"","a dataset.")),n.commit("solid/setCurrentRemoteUrl",t),!Object(U["q"])(r)){e.next=14;break}console.log("todo raw data",r),o=new FileReader,o.addEventListener("loadend",(function(){console.log(o),n.commit("vatch/setFile",{path:Object(U["k"])(r),content:o.result,type:{mime:Object(U["h"])(r)}},{root:!0})})),o.readAsText(r),e.next=30;break;case 14:return e.next=16,Object(U["j"])(t,{fetch:L["fetch"]});case 16:return a=e.sent,console.log(a),e.next=20,Object(U["g"])(a,{fetch:L["fetch"]});case 20:if(c=e.sent,console.log("Resources",c),!(c.length>0)){e.next=26;break}n.commit("solid/setRemoteResources",c),e.next=30;break;case 26:return e.next=28,Object(U["n"])(a,t);case 28:s=e.sent,n.commit("solid/setThings",s);case 30:e.next=35;break;case 32:e.prev=32,e.t0=e["catch"](0),alert(e.t0);case 35:case"end":return e.stop()}}),e,null,[[0,32]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getPodInfos=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(U["j"])(t.webId,{fetch:L["fetch"]});case 3:return n=e.sent,console.log("DATASET",n),e.next=7,Object(U["m"])(n,t.webId);case 7:return r=e.sent,e.next=10,Object(U["l"])(r,y["FOAF"].name);case 10:return t.name=e.sent,e.next=13,Object(U["p"])(r,y["FOAF"].knows).map((function(e){return{webId:e}}));case 13:return t.friends=e.sent,e.next=16,Object(U["o"])(r,R["WS"].storage);case 16:return t.storage=e.sent,e.next=19,Object(U["o"])(r,y["VCARD"].hasPhoto);case 19:t.photo=e.sent,console.log("getpodinfos",t),e.next=26;break;case 23:e.prev=23,e.t0=e["catch"](0),console.log("erreur",e.t0,t);case 26:return e.next=28,t;case 28:return e.abrupt("return",e.sent);case 29:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$addTags=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(U["j"])(t.tagFile,{fetch:L["fetch"]});case 3:n=e.sent,console.log("DATASET",n),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:return(void 0==n||null==n)&&(n=Object(U["c"])()),t.tags.forEach((function(e){console.log("add",e.subject,e.predicate.value,e.object.concepturi),(void 0==r||null==r)&&(r=Object(U["m"])(n,e.subject)),null==r&&(r=Object(U["d"])({url:e.subject})),r=Object(U["a"])(r,e.predicate.value,e.object.concepturi)})),o=Object(U["u"])(n,r),e.next=14,Object(U["t"])(t.tagFile,o,{fetch:L["fetch"]});case 14:a=e.sent,console.log("File saved",a);case 16:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$uploadLocalToPod=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var r,o,a,c,s,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(t),void 0!=t.dest){e.next=5;break}return alert("Please select a destination"),e.abrupt("return");case 5:if(r=t.type&&t.type.mime||"plain/text",o=t.dest.endsWith("/"),a="addDir"==t.event,!a){e.next=12;break}console.info("todo src is directory"),e.next=28;break;case 12:if(!o){e.next=22;break}return void 0==t.parts&&(t.parts=t.path.split(n.state.vatch.pathsep)),c=encodeURIComponent(t.parts.pop()),e.next=17,Object(U["s"])(t.dest,new Blob([t.content],{type:r}),{slug:c,fetch:L["fetch"]});case 17:s=e.sent,console.log("File saved at ".concat(Object(U["k"])(s))),this.$setCurrentThingUrl(t.dest),e.next=28;break;case 22:if(u=confirm("Are you sure you want to replace "+t.dest),1!=u){e.next=28;break}return e.next=26,Object(U["r"])(t.dest,new Blob([t.content],{type:r}),{fetch:L["fetch"]});case 26:i=e.sent,console.log("File saved!",i);case 28:e.next=33;break;case 30:e.prev=30,e.t0=e["catch"](0),alert(e.t0);case 33:case"end":return e.stop()}}),e,this,[[0,30]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$createFile=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.type&&t.type.mime||"plain/text",r=encodeURIComponent(t.filename),e.next=5,Object(U["s"])(t.dest,new Blob([t.content||""],{type:n}),{slug:r,fetch:L["fetch"]});case 5:o=e.sent,console.log("File saved at ".concat(Object(U["k"])(o))),this.$setCurrentThingUrl(t.dest),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),alert(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$createFolder=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.dest+encodeURIComponent(t.foldername),e.next=4,Object(U["b"])(n,{fetch:L["fetch"]});case 4:r=e.sent,console.log("Folder saved at ".concat(Object(U["k"])(r))),this.$setCurrentThingUrl(t.dest),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$deleteOnPod=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!t.endsWith("/")){e.next=6;break}return e.next=4,Object(U["e"])(t,{fetch:L["fetch"]});case 4:e.next=8;break;case 6:return e.next=8,Object(U["f"])(t,{fetch:L["fetch"]});case 8:console.log(" deleted !",t),n=t.slice(0,t.lastIndexOf("/"))+"/",console.log("parent",n),this.$setCurrentThingUrl(n),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),alert(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(B);var N=B,D={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;console.log(n)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(D);var V=D,q=n("5f5b"),H=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(N,{store:I}),r["default"].use(V,{store:I}),r["default"].use(q["a"]),r["default"].use(H["a"]),r["default"].config.productionTip=!1,new r["default"]({router:w,store:I,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.b58a5c0a.js.map