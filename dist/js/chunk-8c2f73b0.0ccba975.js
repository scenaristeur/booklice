(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c2f73b0"],{"2a9a":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[t.isLoggedIn?s("div",{staticClass:"d-flex align-items-center"},[s("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:t.logout}},[t._v("Logout")])],1):s("div",{staticClass:"d-flex align-items-center"},[s("b-form-group",[s("b-form-select",{attrs:{options:t.issuers},on:{change:t.login},model:{value:t.issuer,callback:function(e){t.issuer=e},expression:"issuer"}}),"other"==t.issuer?s("div",[s("b-form-group",{attrs:{id:"fieldset-1",description:"ex: `https://solidcommunity.net`",label:"Entrez l'url de votre fournissuer de POD","label-for":"input-1","valid-feedback":"Merci!","invalid-feedback":t.invalidFeedback,state:t.state}},[s("b-form-input",{attrs:{id:"input-1",state:t.state,trim:""},on:{change:t.onChange},model:{value:t.other,callback:function(e){t.other=e},expression:"other"}})],1),s("b-button",{attrs:{size:"sm",variant:"info"}},[t._v("Login / connexion")])],1):t._e(),s("b-form-checkbox",{attrs:{id:"checkbox-1",name:"checkbox-1"},model:{value:t.restore,callback:function(e){t.restore=e},expression:"restore"}},[t._v(" restore session ")])],1)],1)])},n=[],o=(s("2ca0"),{name:"Login",data:function(){return{issuers:[{value:null,text:"Login / Connexion",disabled:!0},{value:"https://broker.pod.inrupt.com",text:"Broker Pod Inrupt (Entreprise Solid Server)"},{value:"https://inrupt.net",text:"Inrupt.net"},{value:"https://dev.inrupt.net",text:"dev.inrupt.net"},{value:"https://solidcommunity.net",text:"SolidCommunity.net"},{value:"https://solidweb.org",text:"Solidweb.org"},{value:"other",text:"Autre / Other"}],issuer:null,restore:!0,other:""}},created:function(){this.$checkSessions({restore:this.restore})},methods:{onInput:function(){console.log("input",this.other)},onChange:function(){console.log("change",this.other),void 0!=this.other&&void 0!=this.other.length&&(this.issuer=this.other,this.login())},login:function(){null!=this.issuer&&"other"!=this.issuer&&(console.log(this.issuer),this.$login(this.issuer))},logout:function(){this.$logout({restore:this.restore})}},computed:{isLoggedIn:{get:function(){return null!=this.$store.state.solid.session&&this.$store.state.solid.session.info.isLoggedIn},set:function(){}},state:function(){return this.other.startsWith("http")},invalidFeedback:function(){return this.other.length>0&&!this.other.startsWith("http")?"L'url de ton fournisseur devrait commencer par `http`":"l'url de ton fournisseur/provider, pas celle de ton webId"}}}),r=o,u=(s("ceb7"),s("2877")),l=Object(u["a"])(r,i,n,!1,null,null,null);e["default"]=l.exports},"2ca0":function(t,e,s){"use strict";var i=s("23e7"),n=s("06cf").f,o=s("50c4"),r=s("5a34"),u=s("1d80"),l=s("ab13"),a=s("c430"),c="".startsWith,h=Math.min,d=l("startsWith"),f=!a&&!d&&!!function(){var t=n(String.prototype,"startsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!f&&!d},{startsWith:function(t){var e=String(u(this));r(t);var s=o(h(arguments.length>1?arguments[1]:void 0,e.length)),i=String(t);return c?c.call(e,i,s):e.slice(s,s+i.length)===i}})},"7f21":function(t,e,s){},ceb7:function(t,e,s){"use strict";s("7f21")}}]);
//# sourceMappingURL=chunk-8c2f73b0.0ccba975.js.map