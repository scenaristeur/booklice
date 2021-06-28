<template>
  <div>

    <div v-if="!isLoggedIn" class="d-flex align-items-center">
      <b-form-group>
        <b-form-select v-model="issuer" :options="issuers" @change="login"></b-form-select>
        <!-- <b-button  @click="login" :disabled="issuer == null" variant="success" size="sm">Login</b-button> -->
        <b-form-checkbox
        id="checkbox-1"
        v-model="restore"
        name="checkbox-1"
        >
        restore session
      </b-form-checkbox>
    </b-form-group>
  </div>

  <div v-else class="d-flex align-items-center">
    <b-button @click="logout" variant="outline-danger" size="sm">Logout</b-button>

  </div>

</div>
</template>

<script>
export default {
  name:"Login",
  data() {
    return {
      issuers: [
        { value: null, text: 'Selectionnez un fournisseur de Pod', disabled: true},
        { value: "https://broker.pod.inrupt.com", text: 'Broker Pod Inrupt (Entreprise Solid Server)' },
        { value: "https://inrupt.net", text: 'Inrupt.net' },
        { value: "https://solidcommunity.net", text: 'SolidCommunity.net' },
        { value: "https://solidweb.org", text: 'Solidweb.org' }
      ],
      issuer: null,
      restore: true
    }
  },
  created(){
    this.$checkSessions({restore: this.restore})
  },
  methods:{
    login(){
      if (this.issuer != null){
        this.$login(this.issuer)
      }
    },
    logout(){
      this.$logout({restore: this.restore})
    }
  },
  computed:{
    isLoggedIn:{
      get () { return this.$store.state.solid.session != null && this.$store.state.solid.session.info.isLoggedIn },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
