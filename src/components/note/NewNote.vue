<template>
  <b-container>
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


      <vue-tags-input
      v-if="cardActive"
      v-model="tag"
      :tags="tags"
      :autocomplete-items="autocompleteItems"
      @tags-changed="update"
      />


      <!-- <b-form-input
      v-if="cardActive"
      v-model="note.tags"
      placeholder="Tags séparés par une virgule"
      ></b-form-input> -->

      <b-button v-if="cardActive" size="sm" variant="info" @click="add">Enregistrer</b-button>
      <b-button v-if="cardActive" size="sm" variant="light" @click="clean">Annuler</b-button>

      <b-form-checkbox v-model="share" name="check-button" v-if="cardActive">
        Partager sur
        <a href=" https://scenaristeur.github.io/booklice?source=https://booklice.solidweb.org/public/bookmarks/"
        target="_blank">Booklice Pod</a>
      </b-form-checkbox>

    </b-card>
  </b-container>
</template>

<script>
import _ from 'underscore'
const API_URL = 'https://www.wikidata.org/w/api.php?action=wbsearchentities&origin=*&format=json'

export default {
  name: 'NewNote',
  components: {
    'VueTagsInput': () => import('@johmun/vue-tags-input'),
  },
  data(){
    return{
      tag: '',
      tags: [],
      autocompleteItems: [],
      debounce: null,
      note: {title: "", text: "", url: "", tags: ""},
      inputFocus: false,
      cardActive: false,
      text_placeholder: "Créer une note",
      share: true,
      checked1: true,
    }
  },
  created() {
    this.language = navigator.language.split("-")[0] || 'en'
    this.initForm(this.$route.query)
  },
  methods:{
    add(){
      if (this.pod != undefined && this.pod.webId != null){
        let n = this.note
        n.share = this.share
        this.$store.dispatch('booklice/add', n)
        this.clean()
      }else{
        alert("Tu devrais te connecter en selectionnant un fournisseur de PODs, pour enregistrer un Booklice sur ton Pod")
        let path = "/?title="+this.note.title+"&text="+this.note.text+"&url="+this.note.url+"&tags="+JSON.stringify(this.note.tags)
        this.$router.push({path: path})
      }
    },
    clean(){
      this.note = {title: "", text: "", url: "", tags: ""}
      this.currentNote = {title: "", text: "", url: "", tags: ""}
      this.cardActive = false
      this.text_placeholder= "Créer une note"
      this.tags = []
    },
    initForm(q){
        console.log("init",q)
      if (q.title != undefined || q.text != undefined || q.url != undefined){
        let n = {title: q.title || "",
        text: q.text || "",
        url: q.url || "",
        }
        this.tags = q.tags != undefined ? JSON.parse(q.tags) : ""
        this.cardActive = true
        if(n.url.length == 0 && n.text.startsWith('http')){
          n.url = n.text
          n.text = ""
          this.text_placeholder = "Ajoutez une description"
        }
        this.note = n
        console.log("note init",this.note)
        this.topic == undefined ? this.topic = "default" : ""
      }
    },
    update(newTags) {
      this.autocompleteItems = [];
      this.tags = newTags;
    },
    // initItems() {
    //   if (this.tag.length < 2) return;
    //   const url = `https://itunes.apple.com/search?term=
    //   ${this.tag}&entity=allArtist&attribute=allArtistTerm&limit=6`;
    //
    //   clearTimeout(this.debounce);
    //   this.debounce = setTimeout(() => {
    //     axios.get(url).then(response => {
    //       this.autocompleteItems = response.data.results.map(a => {
    //         return { text: a.artistName };
    //       });
    //     }).catch(() => console.warn('Oh. Something went wrong'));
    //   }, 600);
    // },
    async getItems(query) {
      //  this.conceptUri = ""
      if(query.length>0){
        this.loading = true
        let search_url = API_URL+"&language="+this.language+"&search="+query
        console.log(search_url)
        try{
          const res = await fetch(search_url)
          const suggestions = await res.json()
          console.log(suggestions)
          this.items = suggestions.search
          console.log(this.items)
          this.autocompleteItems = suggestions.search.map(a => {
            return { text: a.match.text+" ("+a.description+")", url: a.concepturi };
          });
        }catch(e){
          alert(e)
        }
        this.loading = false
      }
    },
  },
  watch:{
    'tag': _.debounce(function(item) { this.getItems(item) }, 500),
    tags(){
      console.log(this.tags)
      this.note.tags = this.tags//.map(t => t.text.trim())
    },
    '$route' (to) {
      //  console.log("New Note, to",to)
      this.initForm(to.query)
    },
    inputFocus(){
      if (this.inputFocus == true){
        this.cardActive = true
        this.text_placeholder = "Note"
        this.$refs.text.focus()
      }
    },
    currentNote(){
      //console.log("currentNote",this.currentNote)
      this.note = this.currentNote
      this.tags = this.currentNote.tags//.map(t => {return {text:t}})
      this.cardActive = true
      this.$refs.text.focus()
      //  console.log(this.$refs.text)
    }
  },
  computed:{
    pod(){
      return this.$store.state.solid.pod
    },
    currentNote:{
      get() { return this.$store.state.booklice.currentNote},
      set(/*note*/) {/*this.$store.commit('booklice/setCurrentNote', note)*/}
    },
  }
}
</script>
