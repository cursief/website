<template>
  <div class="posts">
    <div class="container">
      <div v-for="post in posts" :key="post.id">
        {{post.title.rendered}}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'posts',

    mounted () {
      this.$store.dispatch('loadPosts')
    },

    computed: mapState([
      'posts'
    ])
  }

</script>

<style scoped lang="scss">

</style>
