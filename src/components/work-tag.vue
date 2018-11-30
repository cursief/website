<template>
  <span v-if="tag" :class="tag.slug">{{tag.name}}</span>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'work-tag',

    props: {
      tagId: 0
    },

    computed: {
      // mount getters to top-level computed properties in this component
      ...mapGetters([
        'getTagById'
      ])
    },

    data: function() {

      return {
        tag: {}
      }
    },

    mounted: function() {
      this.tag = this.getTagById(this.tagId)
    }
  }

</script>

<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';

  span {
    margin: 0 2px;
    padding: 5px 10px;
    font-size: 12px;
    background-color: blue;
    border-radius: 10px;
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

  .consultancy {
    background-color: $cl-tag-consultancy;
  }

</style>
