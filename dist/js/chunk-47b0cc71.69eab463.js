(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47b0cc71"],{3760:function(e,t,n){},"38b4":function(e,t,n){},"81f3":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.bms.length>0?n("b-button",{on:{click:e.toggleNetwork}},[e._v("ToogleNetwork")]):e._e(),e.show?n("div",{staticClass:"wrapper"},[e.filterActive?n("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Filter"}},[n("b-form-input",{model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"outline-success"},on:{click:e.clean_search}},[e._v("X")])],1)],1):n("div",[e._v(" Waiting for loading to show filter "+e._s(e.counter)+" / "+e._s(e.bms.length)+" . ")]),n("network",{ref:"network",staticClass:"network",attrs:{id:"network",nodes:e.network.nodes,edges:e.network.edges,options:e.network.options},on:{"select-node":e.selectNodeEvent}})],1):e._e()],1)},o=[];n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("fb6a"),n("b0c0"),n("a630");function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function i(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=s(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n["return"]||n["return"]()}finally{if(c)throw a}}}}var c=n("1da1"),u=(n("96cf"),n("ac1f"),n("841c"),n("c740"),n("99af"),n("159b"),n("caad"),n("2532"),n("38b4"),{name:"VisNetwork",props:["bms","options"],data:function(){return{show:!1,filterActive:!1,search:"",counter:0,hidden:[],network:{nodes:[],edges:[],options:{interaction:{navigationButtons:!0,tooltipDelay:200},manipulation:!0,nodes:{font:{color:"black"}},edges:{arrows:"to"}}}}},created:function(){this.init()},methods:{clean_search:function(){this.search=""},toggleNetwork:function(){this.show=!this.show},init:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.counter=e.bms.length,e.filterActive=!1,e.network.nodes=[],e.network.edges=[],n=i(e.bms),t.prev=5,o=regeneratorRuntime.mark((function t(){var n,o,a,s,c,u,l,d,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=r.value,t.next=3,e.$getResource(n);case 3:o=t.sent,a={},a.id=o.path,a.label=o.title,a.title=o.text,s=e.network.nodes.findIndex((function(e){return e.id==o.url})),-1===s&&(c={id:o.url,label:"-> "+o.url,color:"#FFF5B2",shape:"box"},e.network.nodes.push(c)),u={from:a.id,to:o.url,label:"url"},e.network.edges.push(u),l=i(o.tags),t.prev=13,f=regeneratorRuntime.mark((function t(){var n,r,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=d.value,void 0==n.url){t.next=16;break}if(r=e.network.nodes.findIndex((function(e){return e.id==n.url})),-1!==r){t.next=11;break}return o={id:n.url,shape:"box",color:"#CFCFCD"},e.network.nodes.push(o),t.next=8,e.$wikidataLabel(n.url);case 8:o.label=t.sent,t.next=12;break;case 11:console.log("tagNode exist");case 12:s={from:a.id,to:n.url,label:"tag"},e.network.edges.push(s),t.next=17;break;case 16:console.warn("todo, tag",n);case 17:case"end":return t.stop()}}),t)})),l.s();case 16:if((d=l.n()).done){t.next=20;break}return t.delegateYield(f(),"t0",18);case 18:t.next=16;break;case 20:t.next=25;break;case 22:t.prev=22,t.t1=t["catch"](13),l.e(t.t1);case 25:return t.prev=25,l.f(),t.finish(25);case 28:e.network.nodes.push(a),e.counter--;case 30:case"end":return t.stop()}}),t,null,[[13,22,25,28]])})),n.s();case 8:if((r=n.n()).done){t.next=12;break}return t.delegateYield(o(),"t0",10);case 10:t.next=8;break;case 12:t.next=17;break;case 14:t.prev=14,t.t1=t["catch"](5),n.e(t.t1);case 17:return t.prev=17,n.f(),t.finish(17);case 20:e.filterActive=!0;case 21:case"end":return t.stop()}}),t,null,[[5,14,17,20]])})))()},selectNodeEvent:function(e){console.log(e.nodes);var t=e.nodes[0];console.log(t),window.open(t,"_blank").focus()}},watch:{bms:function(){this.init()},search:function(){var e=this;console.log(this.search);var t=this.network.nodes.concat(this.hidden);if(this.network.nodes=[],this.hidden=[],this.search.length>0){console.warn("todo show the edges & connection using edges instad of nodes");var n=[],r=[];t.forEach((function(t){void 0!=t.label&&t.label.toLowerCase().includes(e.search.toLowerCase())?n.push(t):r.push(t)})),this.network.nodes=n,this.hidden=r}else this.network.nodes=t,this.hidden=[];console.log("network",this.network.nodes.length),console.log("hidden",this.hidden.length)}},computed:{}}),l=u,d=(n("aa4a"),n("2877")),f=Object(d["a"])(l,r,o,!1,null,null,null);t["default"]=f.exports},a630:function(e,t,n){var r=n("23e7"),o=n("4df4"),a=n("1c7e"),s=!a((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:s},{from:o})},aa4a:function(e,t,n){"use strict";n("3760")},c740:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").findIndex,a=n("44d2"),s="findIndex",i=!0;s in[]&&Array(1)[s]((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a(s)}}]);
//# sourceMappingURL=chunk-47b0cc71.69eab463.js.map