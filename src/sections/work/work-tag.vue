<template>
  <span class="tag" :class="tag.slug">{{tag.name}}</span>
</template>

<script>
  export default {
    name: 'work-tag',

    props: {
      tag: Object,
    },

    mounted() {
    }
  }

</script>

<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';
  @import 'src/assets/scss/tags.scss';
</style>
