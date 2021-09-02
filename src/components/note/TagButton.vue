<template>
  <b-button size="sm" variant="light" @click="filter">{{text}}</b-button>
</template>

<script>
export default {
  name: 'TagButton',
  props:['t'],
  data(){
    return{
      text: ".."
    }
  },
  async created(){
    if (this.t.text != undefined){
      this.text = this.t.text
    }else if (this.t.text == undefined && this.t.url != undefined){
      this.text = await this.$wikidataLabel(this.t.url)
      this.$emit('updateTag', { text: this.text, url: this.t.url})
    }
  },
  methods:{
    filter(){
      console.log(this.text)
        this.$store.commit('booklice/filter', this.text)
    }
  }

}
</script>

<style>

</style>
