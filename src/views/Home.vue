<template>
  <div class="home">
    <img src="../assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js App"/>
    <posts/>
    <members/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/hello-world.vue'
import Posts from '@/components/posts.vue'
import Members from '@/components/members.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Posts,
    Members
  }
}
</script>
