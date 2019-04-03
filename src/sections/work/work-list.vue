<template>
  <transition name="fade" v-if="cases.length" mode="out-in" appear>
    <div class="work">
      <h2 class="section-heading">What we do, who we are</h2>
      <ul class="work__list" v-if="$store.state.media.length">
        <work v-for="workCase in cases" :workCase="workCase" :key="workCase.id"/>
      </ul>
    </div>
  </transition>
</template>

<script>
  import { mapState } from 'vuex';
  import work from '@/sections/work/work.vue'

  export default {
    name: 'work-list',

    components: {
      work
    },

    mounted () {
      this.$store.dispatch('loadCases')
    },

    computed: mapState([
      'cases',
      'tags'
    ]),
  }

</script>

<style scoped lang="scss">
  @import './src/assets/scss/animations.scss';
  @import './src/assets/scss/variables.scss';
  @import './src/assets/scss/layout/grid.scss';

  .section-heading {
    z-index: 1000;
    position: relative;
    text-align: center;
  }

  .work {
    margin-top: -17rem;
    transition: opacity 500ms;
  }

  .work__list {
    display: flex;
    flex-wrap: wrap;
    padding: 10rem 0 0 0;
    margin: -17rem 0 0;
    text-align: center;
    list-style: none;
  }
</style>
