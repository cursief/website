<template>
  <div class="home">
    <banner/>
    <usps/>
    <workList/>
    <!-- <posts/> -->
    <members/>
  </div>
</template>

<script>
  import Posts from '@/components/posts.vue'
  import Members from '@/components/members.vue'
  import Usps from '@/components/usps.vue'
  import Banner from '@/components/banner.vue'
  import WorkList from '@/sections/work/work-list.vue'

  export default {
    name: 'home',
    components: {
      Posts,
      Members,
      Usps,
      Banner,
      WorkList
    }
  }
</script>

<style lang="scss">

</style>
