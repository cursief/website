<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id">
      {{post.title.rendered}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'posts',
    data: function() {
      return {
        posts: null
      }
    },
    mounted: function() {
      // debugger
      // if(!this.$store.state.posts.length) {
        this.$http.get('https://cursief.co/wp-json/wp/v2/posts').then(response => {
          this.$store.commit('addPosts', response.body)
          this.posts = response.body
        });
      // } else {
      //   this.posts = this.$store.state.posts
      // }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
