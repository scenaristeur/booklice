<template>
  <div class="login">

    <div v-if="!isLoggedIn" class="d-flex align-items-center">
      <b-form-group>
        <b-form-select v-model="issuer" :options="issuers" @change="login"></b-form-select>

        <div v-if="issuer == 'other'">
          <b-form-group
          id="fieldset-1"
          description= "ex: `https://solidcommunity.net`"
          label="Entrez l'url de votre fournissuer de POD"
          label-for="input-1"
          valid-feedback="Merci!"
          :invalid-feedback="invalidFeedback"
          :state="state"
          >
          <!-- <b-form-input v-model="other" placeholder="Indiquez votre provider" @input="onInput" ></b-form-input> -->

          <b-form-input id="input-1" v-model="other" :state="state" @change="onChange" trim></b-form-input>
        </b-form-group>

        <b-button size="sm" variant="info">Login / connexion</b-button>
      </div>
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
        { value: null, text: 'Login / Connexion', disabled: true},
        { value: "https://broker.pod.inrupt.com", text: 'Broker Pod Inrupt (Entreprise Solid Server)' },
        { value: "https://inrupt.net", text: 'Inrupt.net' },
        { value: "https://dev.inrupt.net", text: 'dev.inrupt.net' },
        { value: "https://solidcommunity.net", text: 'SolidCommunity.net' },
        { value: "https://solidweb.org", text: 'Solidweb.org' },
        { value: "other", text: 'Autre / Other' },

      ],
      issuer: null,
      restore: true,
      other: ""
    }
  },
  created(){
    this.$checkSessions({restore: this.restore})
  },
  methods:{
    onInput(){
      console.log("input", this.other)
    },
    onChange(){
      console.log("change", this.other)
      if (this.other != undefined && this.other.length != undefined)  {
        this.issuer = this.other
        this.login()
      }
    },
    login(){
      if (this.issuer != null && this.issuer != "other"){
        console.log(this.issuer)
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
    state() {
      return this.other.startsWith('http')
    },
    invalidFeedback() {
      if (this.other.length> 0 && !this.other.startsWith('http')) {
        return "L'url de ton fournisseur devrait commencer par `http`"
      }
      return "l'url de ton fournisseur/provider, pas celle de ton webId"
    }
  }
}
</script>

<style>
.login{
  text-align: left;
}

</style>
