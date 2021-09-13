<template>
  <div>

    <b-button @click="toggleNetwork" v-if="bms.length > 0">ToogleNetwork</b-button>

    <div class="wrapper" v-if="show">
      <b-input-group prepend="Filter" class="mt-3" v-if="filterActive">
        <b-form-input v-model="search"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-success" @click="clean_search">X</b-button>

        </b-input-group-append>
      </b-input-group>
      <div v-else>
        Waiting for loading to show filter {{ counter }} / {{ bms.length}} .
      </div>


      <network
      id="network"
      class="network"
      ref="network"
      :nodes="network.nodes"
      :edges="network.edges"
      :options="network.options"
      @select-node="selectNodeEvent"



      ></network>
      <!--
      @nodes-add="addNodeEvent"
      @edges-add="addEdgeEvent"
      @select-node="selectNodeEvent"

      @click="networkClickEvent"
    -->
  </div>

  <!-- bms : {{ bms}}
  <hr>
  options: {{ options }} -->

</div>
</template>

<script>
import "vue-vis-network/node_modules/vis-network/dist/vis-network.css";
export default {
  name: "VisNetwork",
  props: ["bms", "options"],
  data(){
    return{
      show : false,
      filterActive : false,
      search: "",
      counter : 0,
      //updates: [],
      hidden: [],
      network: {
        nodes: [],
        edges: [],
        // optionsBUGCHROME: {
        //   locale: navigator.language,
        //   nodes: {
        //     //  shape: "dot",
        //     scaling: {
        //       min: 10,
        //       max: 30,
        //     },
        //     font: {
        //       size: 12,
        //       face: "Tahoma",
        //     },
        //   },
        //   edges: {
        //     arrows: 'to',
        //     width: 0.15,
        //     color: { inherit: "from" },
        //     font: {
        //       align: 'top'
        //     },
        //     smooth: {
        //       type: "continuous",
        //     },
        //   },
        //   physics: {
        //     stabilization: {onlyDynamicEdges: true},
        //     barnesHut: {
        //       gravitationalConstant: -8000, //-8000
        //       springConstant: 0.03, //0.001 //0.01
        //       springLength: 100, //200
        //     },
        //   },
        //   interaction: {
        //     navigationButtons: true,
        //     //  tooltipDelay: 200,
        //     //  hideEdgesOnDrag: true,
        //   },
        // },
        options: {
          interaction: {
            navigationButtons: true,
            tooltipDelay: 200,
            //  hideEdgesOnDrag: true,
          },
          manipulation: true,
          nodes: {
            // shape: "circle",
            // size:24,
            // color: {
            //   background: '#D2E5FF',
            //   border: '#2B7CE9',
            //   highlight: {
            //     border: 'black',
            //     background: 'white'
            //   },
            // hover: {
            //   border: 'orange',
            //   background: 'grey'
            // }
            //  },
            font:{color:'black'},
            // shapeProperties: {
            //   useBorderWithImage:true
            // }
          },
          edges: {
            arrows: 'to',
            //  color: 'lightgray'
          },
        }
      }
    }
  },
  created(){
    //  let app = this
    //  console.log(this.network)
    //this.network.options.locale =  navigator.language,
    // this.network.options.manipulation = {
    //   initiallyActive: true,
    //   addNode: async (node, callback) => { node.label = "" ; app.editNode(node, callback) },
    //   editNode: async (node, callback) => { app.editNode(node, callback) },
    //   addEdge: async (edge, callback) => { app.addEdge(edge, callback) },
    //   editEdge: { editWithoutDrag: async (edge, callback) => {app.editWithoutDrag(edge, callback)} },
    //   deleteNode: async (objects, callback) => { app.deleteNode(objects, callback) },
    //   deleteEdge: async (objects, callback) => { app.deleteEdge(objects, callback) },
    //   controlNodeStyle: {
    //     shape:'dot',
    //     size:6,
    //     color: {
    //       background: '#ff0000',
    //       border: '#3c3c3c',
    //       highlight: {
    //         background: '#07f968',
    //         border: '#3c3c3c'
    //       }
    //     },
    //     borderWidth: 2,
    //     borderWidthSelected: 2
    //   }
    //
    // }
    this.init()
  },
  methods:{
    clean_search(){
      this.search = ""
    },
    toggleNetwork(){
      this.show = !this.show
    },
    async init(){
      this.counter = this.bms.length
      this.filterActive = false
      this.network.nodes = []
      this.network.edges = []
      for (const bm of this.bms){
        let r = await this.$getResource(bm)
        //    console.log(r)
        let n = {}
        n.id = r.path
        n.label = r.title
        n.title = r.text
        //  n.url = r.url


        let indexN = this.network.nodes.findIndex(n => n.id==r.url);
        if (indexN === -1){
          let urlNode = {id : r.url, label: "-> "+r.url, color: "#FFF5B2", shape: "box"}
          this.network.nodes.push(urlNode)
        }

        let eUrl = {from: n.id, to : r.url, label: "url" }
        this.network.edges.push(eUrl)

        for (const t of r.tags){
          //    console.log(t)
          if (t.url != undefined){

            let indexN = this.network.nodes.findIndex(n => n.id==t.url);
            if (indexN === -1){
              let tagNode = {id:t.url,  shape: "box", color: "#CFCFCD"}
              this.network.nodes.push(tagNode) //: Object.assign(this.network.nodes[indexN], n)
              tagNode.label= await this.$wikidataLabel(t.url)
            }else{
              console.log("tagNode exist")
            }

            let edge = {from: n.id, to: t.url , label: "tag"}
            this.network.edges.push(edge)
          }else {
            console.warn("todo, tag", t)
          }


        }
        this.network.nodes.push(n)
        this.counter --
      }
      this.filterActive = true
    },
    selectNodeEvent(e){
      console.log(e.nodes)
      let url = e.nodes[0]
      console.log(url)
      window.open(url, '_blank').focus();
    }
    // editNode(node, callback){
    //   //    this.node = node
    //   node.color == undefined ? node.color =  {  background: '#D2E5FF', border: '#2B7CE9'} : ""
    //   node.shape == undefined ? node.shape = 'ellipse': ""
    //   //  this.$bvModal.show("node-popup")
    //   let action = {action: 'editNode', node: node}
    //   this.$store.commit('ipgs/setAction', action)
    //   callback()
    // },
    // addEdge(edge, callback){
    //   //  this.edge = edge
    //   if (edge.from == edge.to) {
    //     var r = confirm("Do you want to connect the node to itself?");
    //     if (r != true) { callback(null); return; }
    //   }
    //   this.editWithoutDrag(edge, callback);
    // },
    // //  editEdge(edge, callback){ this.editWithoutDrag(edge, callback); },
    // editWithoutDrag(edge, callback){
    //   //  this.edge = edge
    //   console.log(edge)
    //   let bugEdge = edge
    //   bugEdge.from = edge.from.id != undefined ? edge.from.id : edge.from
    //   bugEdge.to  = edge.to.id != undefined ? edge.to.id : edge.to
    //   let action = {action: 'editEdge', edge: bugEdge}
    //   this.$store.commit('ipgs/setAction', action)
    //   //  this.$bvModal.show("edge-popup")
    //   callback()
    // },
    // deleteNode(objects, callback){
    //   let action = {action: 'deleteNode', objects: objects}
    //   this.$store.commit('ipgs/setAction', action)
    //   callback()
    // },
    // deleteEdge(objects, callback){
    //   let action = {action: 'deleteEdge', objects: objects}
    //   this.$store.commit('ipgs/setAction', action)
    //   callback()
    // },
    // addNodeEvent(n){
    //   console.log("addNode",n)
    // },
    // addEdgeEvent(e){
    //   console.log("addEdge",e)
    // },
    // processUpdates(){
    //   this.updates.forEach((u) => {
    //     console.log(u)
    //     let indexN, indexE, n, e
    //     switch (u.action) {
    //       case "addNode":
    //       case "updateNode":
    //       n = u.node
    //       delete n.x
    //       delete n.y
    //       indexN = this.network.nodes.findIndex(x => x.id==n.id);
    //       indexN === -1 ? this.network.nodes.push(n) : Object.assign(this.network.nodes[indexN], n)
    //       break;
    //       case "addEdge":
    //       case "updateEdge":
    //       e = u.edge
    //       indexE = this.network.edges.findIndex(x => x.id==e.id);
    //       indexE === -1 ? this.network.edges.push(e) : Object.assign(this.network.edges[indexE], e)
    //       break;
    //       default:
    //       console.log("todo",u)
    //     }
    //   });
    // }
    // process(u){
    //   console.log("UUU",u)
    //   try{
    //     let u2 = JSON.parse(u)
    //     console.log("uu",u2)
    //   }catch(e){
    //     console.log("err",e)
    //     console.log("u string",u)
    //   }
    // }
  },
  watch:{
    bms(){
      this.init()
    },
    search(){
      console.log(this.search)
      let nodes = this.network.nodes.concat(this.hidden)
      this.network.nodes = []
      this.hidden = []
      if(this.search.length > 0){

        console.warn("todo show the edges & connection using edges instad of nodes")
        let networkNodes = [], hidden = []
        nodes.forEach(n => {
          //  console.log(n)
          n.label!= undefined && n.label.toLowerCase().includes(this.search.toLowerCase()) ? networkNodes.push(n) : hidden.push(n)

        })

        this.network.nodes = networkNodes
        this.hidden = hidden
      }else{
        this.network.nodes = nodes
        this.hidden = []
      }

      console.log("network",this.network.nodes.length)
      console.log("hidden", this.hidden.length)


    }
    // game(){
    //   console.log("game", this.game)
    //   if (this.networkUrl != null && this.game != null && this.game.url == this.networkUrl.url){
    //     console.log("Game Update", this.game)
    //     this.network = this.game.network
    //   }
    // },
    // gameV1(){
    //   console.log("game", this.game)
    //   if (this.game != null && this.game.url == this.networkUrl.url){
    //     console.log("Game Update", this.game)
    //     this.updates = this.game.updates.map(u => {return JSON.parse(u)})
    //     this.processUpdates()
    //     // this.updates = this.game.updates
    //     // this.network.nodes = this.updates.map(u => {return {label: u}})
    //     // this.game.updates.forEach((u) => {
    //     //   this.process(u)
    //     // });
    //   }
    // }
  },
  computed: {
    // networkUrl:{
    //   get () { return this.$store.state.gamesync.networkUrl },
    //   set (/*value*/) { /*this.updateTodo(value)*/ }
    // },
    // game:{
    //   get () { return this.$store.state.gamesync.game },
    //   set (/*value*/) { /*this.$store.commit('gamesync/setGame', value)*/ }
    // },
  }
}
</script>

<style>
/* * {
font-family: sans-serif;
} */
/* .wrapper {
padding: 20px 50px;
text-align: center;
} */
/* .events {
text-align: left;
height: 70px;
} */
.network{
  min-height:55vh;/* 95vh;*/
  border: 1px solid black;
  background: linear-gradient(to bottom, rgba(215, 215, 255), rgba(250, 250, 170));
  padding: 10px;
  height: 95vh;
}
.vis-label{
  color: black;
}
/* @media only screen and (max-width: 600px) {
.vis-label {
display: none;
}
.vis-button:after {
content:"°°"
}
} */
</style>
