<template>
  <transition name="fade" v-if="cases">
    <div class="work">
      <h2 class="section-heading">What we do, who we are</h2>
      <ul class="work__list">
        <work v-if="$store.state.media.length" v-for="workCase in cases" :workCase="workCase" :key="workCase.id"/>
      </ul>
    </div>
  </transition>
</template>

<script>
  import { mapState } from 'vuex';
  import work from '@/components/work.vue'

  export default {
    name: 'work-list',

    components: {
      work
    },

    mounted () {
      this.$store.dispatch('loadCases')
      this.$store.dispatch('loadTags')
      this.$store.dispatch('loadMedia')
    },

    computed: mapState([
      'cases',
      'tags',
      'media'
    ]),
  }

</script>

<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';
  @import 'src/assets/scss/layout/grid.scss';

  .fade-enter-active,
  .fade-leave-active {
    opacity: 0;
  }

  .fade-leave-to {
    opacity: 1;
  }

  .section-heading {
    z-index: 1000;
    position: relative;
    text-align: center;
  }

  .work {
    margin-top: -170px;
    transition: opacity 500ms;
  }

  .work__list {
    display: flex;
    flex-wrap: wrap;
    padding: 100px 0 0 0;
    margin-top: -170px;
    text-align: center;
    list-style: none;
  }
</style>
