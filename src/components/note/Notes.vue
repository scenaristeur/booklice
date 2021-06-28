<template>
  <b-container>
    <!-- path : {{ path}}
    N{{notes}}N -->
    <!-- {{bms}} -->
    <b-row>

      <Note v-for="bm,i in bms.slice().reverse()" :key="i" :bm="bm" />
    </b-row>
    <!-- </b-card-group> -->
  </b-container>
</template>

<script>
export default {
  name: 'Notes',
  components: {
    'Note': () => import('@/components/note/Note'),
  },
  data(){
    return{
      bms: []
    }
  },
  created(){
    if(this.$route.query.source != undefined){
      this.path = this.$route.query.source
    }
  },
  watch:{
    async path(){
      this.bms = await this.$getResources(this.path)
      // console.log("bms",bms)
      // this.notes = bms
    }
  },
  computed:{
    // notes:{
    //   get() { return this.$store.state.booklice.notes},
    //   set(notes) {this.$store.commit('booklice/setNotes', notes)}
    // },
    path:{
      get() { return this.$store.state.booklice.path},
      set(path) {this.$store.commit('booklice/setPath', path)}    }
    },
  }
  </script>

  <style>

  </style>
