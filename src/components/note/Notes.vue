<template>
  <b-container>
    <b-row>
      <!-- voir https://bootstrap-vue.org/docs/components/form-checkbox -->
      <b-form-checkbox
      v-model="with_pic"> avec images
    </b-form-checkbox>
    <b-form-checkbox
    v-model="with_desc"> avec description
  </b-form-checkbox>
  <b-form-checkbox
  v-model="with_tags"> avec tags
</b-form-checkbox>
</b-row>
<b-row>
  <Note v-for="bm in bms" :key="bm" :bm="bm" :with_pic="with_pic" :with_desc="with_desc" :with_tags="with_tags" />
</b-row>
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
      bms: [],
      with_pic: false,
      with_desc: true,
      with_tags: true
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
