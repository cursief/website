<template>
  <transition name="fade" v-if="workCases">
    <div class="work">
      <h2 class="section-heading">What we do, who we are</h2>
      <ul class="work__list">
        <work v-if="media" v-for="workCase in workCases" :work="workCase" :media="media" :tags="tags" :key="workCase.id"/>
      </ul>
    </div>
  </transition>
</template>

<script>
  import axios from 'axios';
  import work from '@/components/work.vue'

  export default {
    name: 'work-list',

    components: {
      work
    },

    data: function(){

      return {
        workCases: null,
        media: null,
        tags: null
      }
    },

    mounted: function() {

      axios.get('https://cursief.co/wordpress/wp-json/wp/v2/cases').then(response => {
        this.$store.commit('addCases', response.data);
        this.workCases = response.data;
      });

      axios.get('https://cursief.co/wordpress/wp-json/wp/v2/media').then(response => {
        this.$store.commit('addMedia', response.data);
        this.media = response.data;
      });

      axios.get('https://cursief.co/wordpress/wp-json/wp/v2/tags').then(response => {
        this.$store.commit('addTags', response.data);
        this.tags = response.data;
      });
    }
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
