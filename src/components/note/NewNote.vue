<template>
  <b-container>
    <!-- {{ currentNote }} -->

    <b-card>
      <b-form-input
      v-if="cardActive"
      v-model="note.title"
      placeholder="Titre"
      ></b-form-input>

      <b-form-input
      ref="text"
      v-model="note.text"
      :placeholder="text_placeholder"
      @click="inputFocus=true"
      @blur="inputFocus=false"
      ></b-form-input>

      <b-form-input
      v-if="cardActive"
      v-model="note.url"
      placeholder="Url"
      ></b-form-input>
      <b-button v-if="cardActive" size="sm" @click="add">Ajouter</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'NewNote',
  data(){
    return{
      note: {title: "", text: "", url: ""},
      inputFocus: false,
      cardActive: false,
      text_placeholder: "Créer une note"
    }
  },
  created() {
    console.log("New Note, query", this.$route.query)
    this.initForm(this.$route.query)

  },
  methods:{
    add(){
      if (this.pod != undefined && this.pod.webId != null){
        console.log(this.note)
        let n = this.note
        this.$store.dispatch('booklice/add', n)
        this.note = {title: "", text: "", url: ""}
        this.cardActive = false
        this.text_placeholder= "Créer une note"
      }else{
        alert("Tu devrais te connecter en selectionnant un fournisseur de PODs, pour enregistrer un Booklice sur ton Pod")
        let path = "/?title="+this.note.title+"&text="+this.note.text+"&url="+this.note.url
        this.$router.push({path: path})

      }
    },
    initForm(q){
      console.log("init",q)

      if (q.title != undefined || q.text != undefined || q.url != undefined){
        let n = {title: q.title || "",
        text: q.text || "",
        url: q.url|| ""}
        //  this.query  = this.$route.query
        //  this.params = this.$route.params
        //  this.fullPath =  this.$route.fullPath
        this.cardActive = true
        //  console.log(this.$route)
        if(n.url == undefined && n.text.startsWith('http')){
          n.url = n.text
          n.text = ""
        }
        this.note = n
        console.log("note init",this.note)
        // this.title == undefined ? this.title = "no-title" : ""
        this.topic == undefined ? this.topic = "default" : ""
      }
    }
  },
  watch:{
    '$route' (to) {
      console.log("New Note, to",to)
      //  '$route' (to, from) {
      this.initForm(to.query)
    },
    inputFocus(){
      if (this.inputFocus == true){
        this.cardActive = true
        this.text_placeholder = "note"
      }

      // else{
      //   this.add()
      // }
    },
    currentNote(){
      console.log("currentNote",this.currentNote)
      this.note = this.currentNote
      this.cardActive = true
      this.$refs.text.focus()
    }
  },
  computed:{
    pod(){
      return this.$store.state.solid.pod
    },
    currentNote:{
      get() { return this.$store.state.booklice.currentNote},
      set(note) {this.$store.commit('booklice/setCurrentNote', note)}
    },
  }
}
</script>

<style>

</style>
