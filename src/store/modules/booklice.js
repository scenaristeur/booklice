const state = () => ({
  // //pod
  // //  podStorage : null,
  //
  // //Local
  // pathsep: '/', //  ... / for linux, \\ for Windows
  // users: [],
  // localResources : [],
  // //  podResources: {},
  // netWork: {},
  // user: null,
  // chatMessages : [],
  // file: {},
  // //  webId: null,
  // storage: null,
  // input: '',
  // resourceToTag: null,
  // networkAdds: {}
})

const actions = {
  // processMetaFile(context,file){
  //   try{
  //     let graph = JSON.parse(file.content)
  //     graph.path = file.path
  //     context.commit('addToNetwork', graph)
  //   }catch(e){
  //     console.log(file, "->", e)
  //     alert(e+" in "+file.path)
  //   }
  // }
}

const mutations = {
  // setInput(state, i){
  //   state.input = i
  // },
  // setPodStorage(state,s){
  //   state.podStorage = s
  // },
  //
  // setUser(state, u){
  //   console.log(u)
  //   state.user = u
  // },
  // setUsers(state, u){
  //   state.users = u
  // },
  // updatepathSep(state, p){
  //   state.pathsep = p
  // },
  // updateLocalResources(state, r){
  //   state.localResources = r
  // },
  // addChatMessage(state, m){
  //   state.chatMessages.push(m)
  // },
  // setFile(state, f){
  //   state.file = f
  // },
  // setResourceToTag(state, r){
  //   state.resourceToTag = r
  // },
  // addToNetwork(state,n){
  //   console.log("addToNetwork", n)
  //   state.networkAdds = n
  // }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
