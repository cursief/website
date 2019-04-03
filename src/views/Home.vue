<template>
  <div class="home">
    <banner/>
    <cta/>
    <workList/>
    <!-- <posts/> -->
    <members/>
  </div>
</template>

<script>
  import Posts from '@/components/posts.vue'
  import Members from '@/components/members.vue'
  import Cta from '@/components/cta.vue'
  import Banner from '@/components/banner.vue'
  import WorkList from '@/sections/work/work-list.vue'

  export default {
    name: 'home',
    components: {
      Posts,
      Members,
      Cta,
      Banner,
      WorkList
    }
  }
</script>

<style lang="scss">

</style>
