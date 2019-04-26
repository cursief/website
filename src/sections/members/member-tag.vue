<template>
  <span class="tag" :class="tagSlug">{{tagName}}</span>
</template>

<script>
  export default {
    name: 'member-tag',

    props: {
      tagName: '',
      tagSlug: ''
    }
  }

</script>

<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';
  @import 'src/assets/scss/tags.scss';

  span {

    &:first-child {
      margin-left: 0;
    }
  }

</style>
