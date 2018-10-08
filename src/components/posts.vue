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
  import axios from 'axios';

  export default {
    name: 'posts',
    data: function() {
      return {
        posts: null
      }
    },
    mounted: function() {
      axios.get('https://cursief.co/wordpress/wp-json/wp/v2/posts').then(response => {
        this.$store.commit('addPosts', response.data)
        this.posts = response.data
      });
    }
  }

</script>

<style scoped lang="scss">

</style>
