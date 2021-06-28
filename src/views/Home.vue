<template>
  <div class="home">
    <Login />
    <NewNote />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->


    <Notes />

    <!-- <ShareTarget /> -->
    <ShareButton />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    'Login': () => import('@/components/solid/Login'),
    // 'HelloWorld' : () => import('@/components/HelloWorld'),
    // 'ShareTarget': () => import('@/components/share/ShareTarget'),
    'NewNote': () => import('@/components/note/NewNote'),
    'Notes': () => import('@/components/note/Notes'),
    //  'BookmarksList': () => import('@/components/bookmarks/BookmarksList'),
    'ShareButton': () => import('@/components/share/ShareButton')
  },
}
</script>
