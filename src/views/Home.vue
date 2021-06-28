<template>
  <div class="home">

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
    'NewNote': () => import('@/components/note/NewNote'),
    'Notes': () => import('@/components/note/Notes'),
    'ShareButton': () => import('@/components/share/ShareButton')
  },
}
</script>
