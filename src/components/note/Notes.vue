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

    <b-form-group
  label="Individual inline checkboxes"
  v-slot="{ ariaDescribedby }"
>
  <b-form-checkbox
    v-for="option in options_def"
    v-model="options"
    :key="option.value"
    :value="option.value"
    :aria-describedby="ariaDescribedby"
    name="flavour-4a"
    inline
  >
    {{ option.text }}
  </b-form-checkbox>
</b-form-group>

    <!-- <b-row>
    <b-form-checkbox
    v-model="with_pic"> avec images
  </b-form-checkbox>
  <b-form-checkbox
  v-model="with_desc"> avec description
</b-form-checkbox>
<b-form-checkbox
v-model="with_tags"> avec tags
</b-form-checkbox>
</b-row> -->
<b-row>
  <Note v-for="bm in bms" :key="bm" :bm="bm"  :options="options" />
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
      // with_pic: true,
      // with_desc: true,
      // with_tags: true,
      options: [], // Must be an array reference!
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
