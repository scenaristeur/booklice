(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ed65"],{d6eb:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",[o("b-form-group",{attrs:{label:"Options d'affichage:"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.ariaDescribedby;return[o("b-form-checkbox-group",{attrs:{id:"checkbox-group-1",options:e.options_def,"aria-describedby":n,name:"options_affichage",inline:""},model:{value:e.options,callback:function(t){e.options=t},expression:"options"}})]}}])}),o("b-form-group",{attrs:{label:"Individual inline checkboxes"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.ariaDescribedby;return e._l(e.options_def,(function(t){return o("b-form-checkbox",{key:t.value,attrs:{value:t.value,"aria-describedby":n,name:"flavour-4a",inline:""},model:{value:e.options,callback:function(t){e.options=t},expression:"options"}},[e._v(" "+e._s(t.text)+" ")])}))}}])}),o("b-row",e._l(e.bms,(function(t){return o("Note",{key:t,attrs:{bm:t,options:e.options}})})),1)],1)},r=[],s=o("1da1"),i=(o("96cf"),o("d3b7"),o("3ca3"),o("ddb0"),{name:"Notes",components:{Note:function(){return o.e("chunk-452d915a").then(o.bind(null,"d6a5"))}},data:function(){return{bms:[],options:[],options_def:[{text:"Tags",value:"tags"},{text:"Description",value:"description"},{text:"Image",value:"image"}]}},created:function(){void 0!=this.$route.query.source&&(this.path=this.$route.query.source)},watch:{path:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$getResources(e.path);case 1:case"end":return t.stop()}}),t)})))()},resources:function(){this.bms=[],this.bms=this.resources}},computed:{resources:{get:function(){return this.$store.state.booklice.resources},set:function(){}},path:{get:function(){return this.$store.state.booklice.path},set:function(e){this.$store.commit("booklice/setPath",e)}}}}),a=i,c=o("2877"),u=Object(c["a"])(a,n,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d21ed65.ae308320.js.map