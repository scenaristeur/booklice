<template>
  <b-container>
    <b-card>
      <b-form-input
      v-if="cardActive"
      v-model="note.title"
      placeholder="Titre"
      ></b-form-input>

      <b-form-input
      v-model="note.text"
      placeholder="Créer une note"
      @click="inputFocus=true"
      @blur="inputFocus=false"
      ></b-form-input>

      <b-form-input
      v-if="cardActive"
      v-model="note.url"
      placeholder="Url"
      ></b-form-input>
      <b-button v-if="cardActive" size="sm" @click="cardActive=false">Fermer</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'NewNote',
  data(){
    return{
      note: {},
      inputFocus: false,
      cardActive: false,
    }
  },
  created() {
    console.log("New Note, query", this.$route.query)
    this.initForm(this.$route.query)

  },
  methods:{
    add(){
      console.log(this.note)
      let n = this.note
      this.$store.dispatch('booklice/add', n)
      this.note = {}
    },
    initForm(q){
      console.log("init",q)
      let n = {title: q.title,
      text: q.text,
      url: q.url}
      //  this.query  = this.$route.query
      //  this.params = this.$route.params
      //  this.fullPath =  this.$route.fullPath
      n.title != undefined || n.text != undefined || n.url != undefined ? this.cardActive = true : ""
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
  },
  watch:{
    '$route' (to) {
      console.log("New Note, to",to)
      //  '$route' (to, from) {
      this.initForm(to.query)
    },
    inputFocus(){
      if (this.inputFocus == true){this.cardActive = true
      }else{
        this.add()
      }
    }
  }
}
</script>

<style>

</style>
