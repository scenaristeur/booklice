<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Login />
    <ShareTarget />
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
    'ShareTarget': () => import('@/components/share/ShareTarget'),

    //  'BookmarksList': () => import('@/components/bookmarks/BookmarksList'),
    'ShareButton': () => import('@/components/share/ShareButton')
  },
}
</script>
