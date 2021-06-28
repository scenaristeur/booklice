<template>
  <b-card style="max-width: 20rem;" class="m-3"
  @mouseover="hover = true"
  @click="hover = true"
  @mouseleave="hover = false"
  >
  <b-card-title>{{n.title}}</b-card-title>
  <b-card-text>
    {{n.text}}

  </b-card-text>
  <footer>
    <a :href="n.url" target="_blank">{{n.url}}</a>
  </footer>

  <!-- <b-card-footer>This is a footer</b-card-footer> -->


  <template v-if="hover" >
    <!-- <h6 class="mb-0">Header Slot</h6> -->
    <b-button-toolbar key-nav aria-label="Toolbar with button groups">
      <b-button-group class="mx-1">
        <b-button size="sm" variant="light">
          <b-icon-pen></b-icon-pen>
        </b-button>
        <b-button size="sm" variant="light">
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


<b-card-img v-if="n.url.length > 0" :src="img_url"  width="20px" bottom></b-card-img>


</b-card>
</template>

<script>
export default {
  name: 'Note',
  props: ['note'],
  data(){
    return{
      n: {},
      hover: false,
      img_url: ""
    }
  },
  created(){
    this.n = this.note
    this.img_url = "http://image.thum.io/get/width/400/"+this.n.url
  },
  methods: {

    // mouseOver(){
    //
    //   this.active = !this.active;
    //
    // }

  }

}
</script>

<style>

</style>
