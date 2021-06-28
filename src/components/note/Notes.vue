<template>
  <b-container>
    <!-- path : {{ path}}
    N{{notes}}N -->
    <b-row>

      <Note v-for="n,i in notes.slice().reverse()" :key="i" :note="n" />
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
  watch:{
    async path(){
      let bms = await this.$getResources(this.path)
      console.log("bms",bms)
      this.notes = bms
    }
  },
  computed:{
    notes:{
      get() { return this.$store.state.booklice.notes},
      set(notes) {this.$store.commit('booklice/setNotes', notes)}

    },
    path(){
      return this.$store.state.booklice.path
    }

  },
}
</script>

<style>

</style>
