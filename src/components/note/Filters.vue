<template>
  <div v-if="filters.length > 0">
Filters :
<b-button @click="clear" size="sm" class="mr-3">remove all filters</b-button>
<b-button size="sm" v-for="f in filters" :key="f" @click="remove(f)">{{f}} X </b-button>


  </div>
</template>

<script>
export default {
name: "Filters",
methods:{
  clear(){
    this.$store.commit('booklice/resetFilter')
  },
  remove(f){
  this.$store.commit('booklice/removeFilter',f)
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
