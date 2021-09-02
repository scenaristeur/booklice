<template>
  <b-container>

    <b-form-group label="Options d'affichage:" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
      id="checkbox-group-1"
      v-model="options"
      :options="options_def"
      :aria-describedby="ariaDescribedby"
      name="options_affichage"
      inline
      ></b-form-checkbox-group>
    </b-form-group>
    <Filters />
    <b-card-group columns>
      <Note v-for="bm in bms" :key="bm" :bm="bm"  :options="options" />
    </b-card-group>
  </b-container>
</template>

<script>
export default {
  name: 'Notes',
  components: {
    'Note': () => import('@/components/note/Note'),
    'Filters': () => import('@/components/note/Filters'),
  },
  data(){
    return{
      bms: [],
      // with_pic: true,
      // with_desc: true,
      // with_tags: true,
      options: ["tags"/*, "description", "image"*/], // Must be an array reference!
      options_def: [
        { text: 'Tags', value: 'tags' },
        { text: 'Description', value: 'description' },
        { text: 'Image', value: 'image' }
      ]
    }
  },
  created(){
    if(this.$route.query.source != undefined){
      this.path = this.$route.query.source
    }
  },
  watch:{
    async path(){
      this.$getResources(this.path)
    },
    $route(to){
      if(to.query.source != undefined){
        this.path = to.query.source
      }
    },
    resources(){
      this.bms = []
      this.bms = this.resources
    }
  },
  computed:{
    resources:{
      get() { return this.$store.state.booklice.resources},
      set(/*notes*/) {/*this.$store.commit('booklice/setNotes', notes)*/}
    },
    path:{
      get() { return this.$store.state.booklice.path},
      set(path) {this.$store.commit('booklice/setPath', path)}    }
    },

  }
  </script>
