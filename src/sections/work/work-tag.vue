<template>
  <span :class="tag.slug">{{tag.name}}</span>
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

  span {
    margin: 0 .5rem;
    padding: .5rem 1rem;
    font-size: 1.2rem;
    color: $cl-white;
    border-radius: .4rem;
  }

  .webdesign {
    background-color: $cl-tag-webdesign;
  }

  .copywriting {
    background-color: $cl-tag-copywriting;
  }

  .marketing {
    background-color: $cl-tag-marketing;
  }

  .front-end-development {
    background-color: $cl-tag-front;
  }

  .back-end-development {
    background-color: $cl-tag-back;
  }

  .consultancy {
    background-color: $cl-tag-consultancy;
  }

</style>
