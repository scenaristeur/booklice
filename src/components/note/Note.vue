<template>
  <b-card style="max-width: 20rem;" class="m-3" >
    <b-card-title>{{n.title}}</b-card-title>
    <b-card-text>
      {{n.text}}
    </b-card-text>
    <footer>
      <a :href="n.url" target="_blank">{{n.url}}</a>
    </footer>
  </b-card>
</template>

<script>
export default {
  name: 'Note',
  props: ['note'],
  data(){
    return{
      n: {}
    }
  },
  created(){
    this.n = this.note
  }
}
</script>

<style>

</style>
