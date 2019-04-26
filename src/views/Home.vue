<template>
  <div id="home">
    <banner/>
    <usps/>
    <workList/>
    <!-- <posts/> -->
    <members :teamSelection="teamSelection"/>
    <teamSelection :teamSelection="teamSelection"/>
  </div>
</template>

<script>
  import Posts from '@/components/posts.vue'
  import Members from '@/components/members.vue'
  import Usps from '@/components/usps.vue'
  import Banner from '@/components/banner.vue'
  import WorkList from '@/sections/work/work-list.vue'
  import TeamSelection from '@/components/team-selection.vue'

  export default {
    name: 'home',

    props: {
      teamSelection: null
    },

    components: {
      Posts,
      Members,
      Usps,
      Banner,
      WorkList,
      TeamSelection
    }
  }
</script>

<style lang="scss">

</style>
