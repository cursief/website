<template>
  <div class="home">
    <banner/>
    <!-- <hello-world msg="Welcome to Your Vue.js App"/> -->
<!--     <button class="button button--secondary">Visit portfolio</button>
    <button class="button button--primary">Add to team</button> -->
    <cta/>
    <work/>
    <posts/>
    <members/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/hello-world.vue'
import Posts from '@/components/posts.vue'
import Members from '@/components/members.vue'
import Cta from '@/components/cta.vue'
import Banner from '@/components/banner.vue'
import Work from '@/components/work.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Posts,
    Members,
    Cta,
    Banner,
    Work
  }
}
</script>

<style lang="scss">

</style>