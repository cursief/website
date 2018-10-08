<template>
  <div class="members">
    <div v-for="member in members" :key="member.id">
      {{member.title.rendered}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'members',
    data: function() {
      return {
        members: null
      }
    },
    mounted: function() {
      if(!this.$store.state.posts.length) {
        this.$http.get('https://cursief.co/wordpress/wp-json/wp/v2/members').then(response => {
          this.$store.commit('addMember', response.body)
          this.members = response.body
        });
      } else {
        this.posts = this.$store.state.posts
      }
    }
  }

</script>

<style scoped lang="scss">

</style>
