<template>
  <b-card style="max-width: 20rem;" class="m-3"

  @click="hover = true"

  tag="article"
  v-if="show == true"

  >
  <b-card-title   title-tag="h5"
  @mouseover="hover = true"
  @mouseleave="hover = false"
  >{{n.title}}</b-card-title>
  <b-card-sub-title v-if="options.includes('description') || hover">
    {{n.text}}
  </b-card-sub-title>
  <footer v-if="n.url != undefined && n.url!= null && n.url.length > 0">
    <b-link :href="n.url" target="_blank">{{n.url}}</b-link>
    <div v-if="options.includes('tags') || hover">
      <hr v-if="n.tags.length>0">
      <TagButton v-for="t,i in n.tags" :key="i" :t="t" @updateTag="updateTag" />
    </div>
  </footer>

  <!-- <b-card-footer>This is a footer</b-card-footer> -->


  <template v-if="hover" >
    <!-- <h6 class="mb-0">Header Slot</h6> -->
    <b-button-toolbar key-nav aria-label="Toolbar with button groups">
      <b-button-group class="mx-1">
        <b-button size="sm" variant="light" @click="edit">
          <b-icon-pen></b-icon-pen>
        </b-button>
        <b-button size="sm" variant="light" @click="trash">
          <b-icon-trash></b-icon-trash>
        </b-button>
      </b-button-group>
      <!-- <b-button-group class="mx-1">
      <b-button>Edit</b-button>
      <b-button>Undo</b-button>
      <b-button>Redo</b-button>
    </b-button-group>
    <b-button-group class="mx-1">
    <b-button>&rsaquo;</b-button>
    <b-button>&raquo;</b-button>
  </b-button-group> -->
</b-button-toolbar>
</template>

<b-card-img v-if="n.url != undefined && n.url!= null && n.url.length > 0 && (options.includes('image') || hover)" :src="img_url"  width="20px" bottom></b-card-img>


</b-card>
</template>

<script>
export default {
  name: 'Note',
  props: ['bm', 'options'],
  components: {
    'TagButton': () => import('@/components/note/TagButton'),
  },
  data(){
    return{
      n: {},
      hover: false,
      img_url: "",
      show : true
    }
  },
  async created(){
    this.n = await this.$getResource(this.bm)
    //  console.log(this.n)
    if (this.n.url != undefined && this.n.url != null && this.n.url.length > 0){
      this.img_url = "http://image.thum.io/get/width/400/"+this.n.url
    }
  },
  methods: {
    updateTag(t){

      this.updateFiltered()
      let ind = this.n.tags.findIndex(x => x.url == t.url)
      Object.assign(this.n.tags[ind], t);
    },
    updateFiltered(){
    //  console.log(this.filters, this.n.tags)

      if (this.filters.length > 0){
        this.show = false
      this.n.tags.forEach((t) => {
        if(this.filters.includes(t.text)){
          this.show = true
        }
      });
    }else{
      this.show = true
    }


    },
    edit(){
      //alert("todo edit")
      this.$store.commit('booklice/setCurrentNote', this.n)
    },
    trash(){
      console.log("trash", this.n)
      var txt;
      var r = confirm("Es-tu certain.e de vouloir supprimer ce booklice ? Tu ne pourras pas revenir en arrière !");
      if (r == true) {
        txt = "You pressed OK!";
        this.$remove(this.n)
      } else {
        txt = "You pressed Cancel!";
      }
      console.log(txt)
    }
    // mouseOver(){
    //
    //   this.active = !this.active;
    //
    // }

  },
  watch:{
    filters(){
      this.show = false
      this.updateFiltered()
    }
  },
  computed:{
    filters:{
      get() { return this.$store.state.booklice.filters},
      set(/*notes*/) {/*this.$store.commit('booklice/setNotes', notes)*/}
    },
  }

}
</script>

<style>

</style>
