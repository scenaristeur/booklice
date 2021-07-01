<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Booklice</router-link> |
      <!-- <router-link to="/bookmarks">Bookmarks</router-link> | -->
      <router-link to="/about">A propos</router-link>
      <Login />
    </div>
    <router-view/>

    <ul>
      <li>Booklice te permet d'enregistrer tes liens favoris sur ton POD.</li>
      <li>dans le dossier /public/bookmarks comme
        <a href="https://spoggy-test13.solidcommunity.net/public/bookmarks/"
        target="_blank">celui-ci</a>
      </li>
      <li>
        te permettant ensuite de le partager avec le paramètre <b>?source=</b>
      </li>
      <li>
        ce qui donne par exemple
        <a href="https://scenaristeur.github.io/booklice?source=https://spoggy-test13.solidcommunity.net/public/bookmarks/"
        target="_blank">
        https://scenaristeur.github.io/booklice?source=https://spoggy-test13.solidcommunity.net/public/bookmarks/
      </a>
    </li>
    <li>
      Et tu peux même, si tu le souhaites autoriser tes amis à ajouter des booklices et/ou les editer...
    </li>

  </ul>

  --

</div>
</template>


<script>
// @ is an alias to /src


export default {
  name: 'App',
  components: {
    'Login': () => import('@/components/solid/Login')
  },
}
</script>

/* <style scoped>
#app{
    text-align: center;
}
</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style> */
