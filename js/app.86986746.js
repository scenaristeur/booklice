(function(e){function t(t){for(var r,o,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function s(e){return i.p+"js/"+({about:"about",bookmarks:"bookmarks"}[e]||e)+"."+{about:"3d2fd98b",bookmarks:"9ba6598b","chunk-2d0d9fc1":"2782bf09","chunk-2d21ed65":"ae308320","chunk-8c2f73b0":"0ccba975","chunk-a9e2d498":"9dabf16f","chunk-e592fad4":"2c5f0625","chunk-392ccdba":"bb8d0196","chunk-452d915a":"9ba4fbbf","chunk-2d217c19":"64453a92","chunk-2d0e5782":"ade316b2"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-8c2f73b0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",bookmarks:"bookmarks"}[e]||e)+"."+{about:"31d6cfe0",bookmarks:"31d6cfe0","chunk-2d0d9fc1":"31d6cfe0","chunk-2d21ed65":"31d6cfe0","chunk-8c2f73b0":"4ac5b8f9","chunk-a9e2d498":"31d6cfe0","chunk-e592fad4":"31d6cfe0","chunk-392ccdba":"31d6cfe0","chunk-452d915a":"31d6cfe0","chunk-2d217c19":"31d6cfe0","chunk-2d0e5782":"31d6cfe0"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/booklice/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2f63":function(e,t,n){},"452c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Booklice")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("A propos")]),n("Login")],1),n("router-view"),e._m(0),e._v(" -- ")],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Booklice te permet d'enregistrer tes liens favoris sur ton POD.")]),n("li",[e._v("dans le dossier /public/bookmarks comme "),n("a",{attrs:{href:"https://spoggy-test13.solidcommunity.net/public/bookmarks/",target:"_blank"}},[e._v("celui-ci")])]),n("li",[e._v(" te permettant ensuite de le partager avec le paramètre "),n("b",[e._v("?source=")])]),n("li",[e._v(" ce qui donne par exemple "),n("a",{attrs:{href:"https://scenaristeur.github.io/booklice?source=https://spoggy-test13.solidcommunity.net/public/bookmarks/",target:"_blank"}},[e._v(" https://scenaristeur.github.io/booklice?source=https://spoggy-test13.solidcommunity.net/public/bookmarks/ ")])]),n("li",[e._v(" Et tu peux même, si tu le souhaites autoriser tes amis à ajouter des booklices et/ou les editer... ")])])}],a=(n("d3b7"),n("3ca3"),n("ddb0"),{name:"App",components:{Login:function(){return n.e("chunk-8c2f73b0").then(n.bind(null,"2a9a"))}}}),s=a,i=(n("7b00"),n("b0a0"),n("2877")),u=Object(i["a"])(s,o,c,!1,null,"6a641c16",null),l=u.exports,d=n("9483");Object(d["a"])("".concat("/booklice/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("Booklice a été mis à jour, STP ferme l'appli et réouvre-la pour en profiter.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var p=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("NewNote"),n("Notes"),n("ShareButton")],1)},h=[],b={name:"Home",components:{NewNote:function(){return n.e("chunk-a9e2d498").then(n.bind(null,"54fc"))},Notes:function(){return n.e("chunk-2d21ed65").then(n.bind(null,"d6eb"))},ShareButton:function(){return n.e("chunk-2d0d9fc1").then(n.bind(null,"6a55"))}}},g=b,m=Object(i["a"])(g,f,h,!1,null,null,null),v=m.exports;r["default"].use(p["a"]);var k=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/bookmarks",name:"Bookmarks",component:function(){return n.e("bookmarks").then(n.bind(null,"b51b"))}},{path:"/test",name:"Test",component:function(){return n.e("about").then(n.bind(null,"78c1"))}}],w=new p["a"]({mode:"history",base:"/booklice/",routes:k}),j=w,x=n("2f62"),O=n("5530"),y=n("d11f"),S=n("a719"),R=n("dbc7"),A=function(){return{session:null,pod:null,currentRemoteUrl:"",remoteResources:[],things:[],vocabs:Object(O["a"])(Object(O["a"])(Object(O["a"])({},y),S),R),tags:{}}},$={uploadLocalToPod:function(e,t){try{console.log(t),r["default"].prototype.$uploadLocalToPod(t)}catch(n){console.log(t,"->",n),alert(n+" in "+t.path)}},addBookmark:function(e,t){console.log(t),r["default"].prototype.$addBookmark(t)}},P={setPod:function(e,t){e.pod=t},setSession:function(e,t){e.session=t},setCurrentRemoteUrl:function(e,t){e.currentRemoteUrl=t},setRemoteResources:function(e,t){e.remoteResources=t},setThings:function(e,t){e.things=t}},_={namespaced:!0,state:A,actions:$,mutations:P},T=(n("fb6a"),function(){return{path:"",notes:[],currentNote:null,resources:[]}}),F={add:function(e,t){console.log("todo add to pod",t),e.commit("add",t),void 0==t.path&&(t.path=e.state.path),e.dispatch("solid/addBookmark",t,{root:!0})}},N={add:function(e,t){e.notes.push(t)},setPath:function(e,t){e.path=t},setNotes:function(e,t){e.notes=t},setCurrentNote:function(e,t){console.log(t),e.currentNote=t},setResources:function(e,t){e.resources=t.slice().reverse()}},I={namespaced:!0,state:T,actions:F,mutations:N};r["default"].use(x["a"]);var E=new x["a"].Store({state:{},mutations:{},actions:{},modules:{solid:_,booklice:I}}),C=n("1da1"),B=(n("ac1f"),n("1276"),n("99af"),n("b0c0"),n("d81d"),n("159b"),n("8a79"),n("96cf"),n("93ef")),D=n("8522"),L={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;e.prototype.$login=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D["login"]({oidcIssuer:t,redirectUrl:window.location.href,clientName:"Booklice"});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),alert("$login "+e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$logout=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=D["getDefaultSession"](),console.log(t),e.next=5,r.logout();case 5:n.commit("solid/setSession",r),n.commit("solid/setPod",{}),n.commit("booklice/setPath",""),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),alert("$logout "+e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$checkSessions=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var r,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("params",t),console.log("window.location.href",window.location.href),r=D["getDefaultSession"](),console.log("session",r),D["onSessionRestore"]((function(e){console.log("restore",e);var t=e.split("?")[1];console.log("query",t),j.push({path:"?"+t}),n.commit("solid/setSession",r),o.$getPodInfosFromSession(r)})),e.prev=5,e.next=8,D["handleIncomingRedirect"]({restorePreviousSession:t.restore,url:window.location.href}).then((function(e){console.log(e)}));case 8:n.commit("solid/setSession",r),this.$getPodInfosFromSession(r),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](5),alert("$checkSessions "+e.t0);case 15:case"end":return e.stop()}}),e,this,[[5,12]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getPodInfosFromSession=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,r={},r.logged=t.info.isLoggedIn,!r.logged){e.next=12;break}return r.webId=t.info.webId,e.next=7,this.$getPodInfos(r);case 7:r=e.sent,n.commit("solid/setPod",r),null!=r.storage&&(this.$setCurrentThingUrl(r.storage),n.commit("booklice/setPath",r.storage+"public/bookmarks/")),e.next=14;break;case 12:n.commit("solid/setPod",null),n.commit("solid/setThings",[]);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](0),alert("$getPodInfosFromSession "+e.t0);case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$setCurrentThingUrl=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var r,o,c,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(B["h"])(t,{fetch:D["fetch"]});case 3:if(r=e.sent,console.log("Fetched a ".concat(Object(B["g"])(r)," file from ").concat(Object(B["j"])(r),".")),console.log("The file is ".concat(Object(B["q"])(r)?"not ":"","a dataset.")),n.commit("solid/setCurrentRemoteUrl",t),!Object(B["q"])(r)){e.next=14;break}console.log("todo raw data",r),o=new FileReader,o.addEventListener("loadend",(function(){console.log(o),n.commit("vatch/setFile",{path:Object(B["j"])(r),content:o.result,type:{mime:Object(B["g"])(r)}},{root:!0})})),o.readAsText(r),e.next=30;break;case 14:return e.next=16,Object(B["i"])(t,{fetch:D["fetch"]});case 16:return c=e.sent,console.log(c),e.next=20,Object(B["f"])(c,{fetch:D["fetch"]});case 20:if(a=e.sent,console.log("Resources",a),!(a.length>0)){e.next=26;break}n.commit("solid/setRemoteResources",a),e.next=30;break;case 26:return e.next=28,Object(B["n"])(c,t);case 28:s=e.sent,n.commit("solid/setThings",s);case 30:e.next=35;break;case 32:e.prev=32,e.t0=e["catch"](0),alert("$setCurrentThingUrl "+e.t0);case 35:case"end":return e.stop()}}),e,null,[[0,32]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getPodInfos=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(B["i"])(t.webId,{fetch:D["fetch"]});case 3:return n=e.sent,console.log("DATASET",n),e.next=7,Object(B["m"])(n,t.webId);case 7:return r=e.sent,e.next=10,Object(B["k"])(r,y["FOAF"].name);case 10:return t.name=e.sent,e.next=13,Object(B["p"])(r,y["FOAF"].knows).map((function(e){return{webId:e}}));case 13:return t.friends=e.sent,e.next=16,Object(B["o"])(r,R["WS"].storage);case 16:return t.storage=e.sent,e.next=19,Object(B["o"])(r,y["VCARD"].hasPhoto);case 19:t.photo=e.sent,console.log("getpodinfos",t),e.next=26;break;case 23:e.prev=23,e.t0=e["catch"](0),console.log("erreur",e.t0,t);case 26:return e.next=28,t;case 28:return e.abrupt("return",e.sent);case 29:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getResources=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("reading",t),e.next=3,Object(B["i"])(t,{fetch:D["fetch"]});case 3:return r=e.sent,console.log(r),e.next=7,Object(B["f"])(r,{fetch:D["fetch"]});case 7:o=e.sent,console.log("Resources",o),n.commit("booklice/setResources",o);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getResource=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,c,a,s,i,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(B["i"])(t,{fetch:D["fetch"]});case 2:return n=e.sent,e.next=5,Object(B["n"])(n);case 5:return r=e.sent,o=r[0],e.next=9,Object(B["k"])(o,y["AS"].name);case 9:return c=e.sent,e.next=12,Object(B["k"])(o,y["AS"].content);case 12:return a=e.sent,e.next=15,Object(B["o"])(o,y["AS"].url);case 15:return s=e.sent,e.next=18,Object(B["p"])(o,y["AS"].tag).map((function(e){return{url:e}}));case 18:return i=e.sent,e.next=21,Object(B["l"])(o,y["AS"].tag).map((function(e){return{text:e}}));case 21:return u=e.sent,l=i.concat(u),e.abrupt("return",{path:t,thing:o,title:c,text:a,url:s,tags:l});case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$wikidataLabel=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,c,a,s,i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="http://www.wikidata.org/entity/",r="https://www.wikidata.org/w/api.php?action=wbgetentities&origin=*&format=json",o=navigator.language.split("-")[0]||"en",o+="|en",c=t.split(n)[1],a=r+"&ids="+c+"&props=labels&languages="+o,e.next=8,fetch(a);case 8:return s=e.sent,e.next=11,s.json();case 11:i=e.sent;try{u=void 0!=i.entities[c].labels[o]?i.entities[c].labels[o].value:i.entities[c].labels.en.value}catch(l){console.log(l,i.entities)}return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$addBookmark=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var r,o,c,a,s,i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t),o=new Date,c=Date.now(),void 0==t.thing){e.next=21;break}return e.next=6,Object(B["i"])(t.path,{fetch:D["fetch"]});case 6:return r=e.sent,c=t.thing.url.split("#")[1],console.log("get thing",c),e.next=11,Object(B["m"])(r,t.thing.url);case 11:a=e.sent,console.log("replace",a),a=Object(B["x"])(a,y["RDF"].type,y["AS"].Note),a=Object(B["v"])(a,y["AS"].name,t.title),a=Object(B["v"])(a,y["AS"].content,t.text),void 0!=t.url&&(a=Object(B["x"])(a,y["AS"].url,t.url)),a=Object(B["v"])(a,y["AS"].updated,o.toISOString()),a=Object(B["s"])(a,y["AS"].tag),e.next=34;break;case 21:return e.next=23,Object(B["c"])();case 23:return r=e.sent,e.next=26,Object(B["d"])({name:c});case 26:a=e.sent,console.log("create",a),a=Object(B["b"])(a,y["RDF"].type,y["AS"].Note),a=Object(B["a"])(a,y["AS"].name,t.title),a=Object(B["a"])(a,y["AS"].content,t.text),void 0!=t.url&&(a=Object(B["b"])(a,y["AS"].url,t.url)),a=Object(B["b"])(a,y["AS"].actor,n.state.solid.pod.webId),a=Object(B["a"])(a,y["AS"].published,o.toISOString());case 34:if(t.tags.forEach((function(e){console.log("tag",e),a=void 0!=e.url&&e.url.length>0?Object(B["b"])(a,y["AS"].tag,e.url):Object(B["a"])(a,y["AS"].tag,e.text)})),console.log("todo : use setDatetime, addDatetime"),console.log(r),s=Object(B["w"])(r,a),void 0==t.thing){e.next=46;break}return console.log("replace",a),e.next=42,Object(B["u"])(t.path,s,{fetch:D["fetch"]});case 42:i=e.sent,u=t.path.substr(0,t.path.lastIndexOf("/")+1),e.next=51;break;case 46:return console.log("new",a),e.next=49,Object(B["u"])(t.path+c+".ttl",s,{fetch:D["fetch"]});case 49:i=e.sent,u=t.path;case 51:return console.log(a),console.log("File saved",i),console.log("container",u),e.next=56,this.$getResources(u);case 56:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$addTags=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(B["i"])(t.tagFile,{fetch:D["fetch"]});case 3:n=e.sent,console.log("DATASET",n),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:return(void 0==n||null==n)&&(n=Object(B["c"])()),t.tags.forEach((function(e){console.log("add",e.subject,e.predicate.value,e.object.concepturi),(void 0==r||null==r)&&(r=Object(B["m"])(n,e.subject)),null==r&&(r=Object(B["d"])({url:e.subject})),r=Object(B["b"])(r,e.predicate.value,e.object.concepturi)})),o=Object(B["w"])(n,r),e.next=14,Object(B["u"])(t.tagFile,o,{fetch:D["fetch"]});case 14:c=e.sent,console.log("File saved",c);case 16:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$uploadLocalToPod=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var r,o,c,a,s,i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(t),void 0!=t.dest){e.next=5;break}return alert("Please select a destination"),e.abrupt("return");case 5:if(r=t.type&&t.type.mime||"plain/text",o=t.dest.endsWith("/"),c="addDir"==t.event,!c){e.next=12;break}console.info("todo src is directory"),e.next=28;break;case 12:if(!o){e.next=22;break}return void 0==t.parts&&(t.parts=t.path.split(n.state.vatch.pathsep)),a=encodeURIComponent(t.parts.pop()),e.next=17,Object(B["t"])(t.dest,new Blob([t.content],{type:r}),{slug:a,fetch:D["fetch"]});case 17:s=e.sent,console.log("File saved at ".concat(Object(B["j"])(s))),this.$setCurrentThingUrl(t.dest),e.next=28;break;case 22:if(i=confirm("Are you sure you want to replace "+t.dest),1!=i){e.next=28;break}return e.next=26,Object(B["r"])(t.dest,new Blob([t.content],{type:r}),{fetch:D["fetch"]});case 26:u=e.sent,console.log("File saved!",u);case 28:e.next=33;break;case 30:e.prev=30,e.t0=e["catch"](0),alert("$uploadLocalToPod "+e.t0);case 33:case"end":return e.stop()}}),e,this,[[0,30]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$remove=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("N",t),e.prev=1,e.next=4,Object(B["e"])(t.path,{fetch:D["fetch"]});case 4:return console.log(" deleted !",t.path),n=t.path.substr(0,t.path.lastIndexOf("/")+1),e.next=8,this.$getResources(n);case 8:e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0),alert("$remove "+e.t0);case 14:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(L);var U=L,q={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;console.log(n)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(q);var V=q,M=n("5f5b"),H=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(U,{store:E}),r["default"].use(V,{store:E}),r["default"].use(M["a"]),r["default"].use(H["a"]),r["default"].config.productionTip=!1,new r["default"]({router:j,store:E,render:function(e){return e(l)}}).$mount("#app")},"7b00":function(e,t,n){"use strict";n("2f63")},b0a0:function(e,t,n){"use strict";n("452c")}});
//# sourceMappingURL=app.86986746.js.map