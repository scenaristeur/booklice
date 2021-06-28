import Vue from 'vue';
import * as common from "@inrupt/vocab-common-rdf";
import * as inrupt from "@inrupt/vocab-inrupt-common"
import * as solid from "@inrupt/vocab-solid-common"

const state = () => ({
  session: null,
  pod: null,
  currentRemoteUrl: "",
  remoteResources: [],
  things: [],
  vocabs: {
    ...common,
    ...inrupt,
    ...solid
  },
  tags: {}
})

const actions = {
  uploadLocalToPod(context,file){
    try{
      console.log(file)
      Vue.prototype.$uploadLocalToPod(file)
      // let graph = JSON.parse(file.content)
      // graph.path = file.path
      // context.commit('addToNetwork', graph)
    }catch(e){
      console.log(file, "->", e)
      alert(e+" in "+file.path)
    }
  },
  addBookmark(context, n){
    console.log(n)
    Vue.prototype.$addBookmark(n)
  }
}

const mutations = {
  setPod(state,p){
    state.pod = p
  },
  setSession(state, s){
    state.session = s
  },
  setCurrentRemoteUrl(state, url){
    state.currentRemoteUrl = url
  },
  setRemoteResources(state, r){
    state.remoteResources = r
  },
  setThings(state, things){
    state.things = things
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
