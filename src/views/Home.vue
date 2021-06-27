<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Login />
    <ShareButton />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    'Login': () => import('@/components/solid/Login'),
    'HelloWorld' : () => import('@/components/HelloWorld'),
    //  'BookmarksList': () => import('@/components/bookmarks/BookmarksList'),
    'ShareButton': () => import('@/components/share/ShareButton')
  },
}
</script>
