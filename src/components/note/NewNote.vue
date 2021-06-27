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
      this.note.title = q.title
      this.note.text = q.text
      this.note.url = q.url
      //  this.query  = this.$route.query
      //  this.params = this.$route.params
      //  this.fullPath =  this.$route.fullPath
      this.note.title != undefined || this.note.text != undefined || this.note.url != undefined ? this.cardActive = true : ""
      //  console.log(this.$route)
      if(this.note.url == undefined && this.note.text.startsWith('http')){
        this.note.url = this.note.text
        this.note.text = ""
      }
      // this.title == undefined ? this.title = "no-title" : ""
      this.topic == undefined ? this.topic = "default" : ""
    }
  },
  watch:{
    '$route' (to) {
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
