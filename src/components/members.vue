<template>
  <div class="members">
    <div class="container">
      <h2 class="section-heading">The Talent</h2>
    </div>
    <div v-for="member in members" class="member" :key="member.id">
      <div class="container">
        {{member.title.rendered}}
        <div class="member_labels" v-if="member.tags">
          <workTag v-for="tag in member.tags" :key="tag.id" :tagName="tag.name" :tagSlug="tag.slug" />
        </div>
        <div v-html="member.biography"></div>
        {{member.featured_media}}
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import workTag from '@/components/work-tag.vue'

  export default {
    name: 'members',

    components: {
      workTag
    },

    data: function() {

      return {
        members: null
      }
    },

    mounted: function() {
      axios.get('https://cursief.co/wordpress/wp-json/wp/v2/members').then(response => {
        this.$store.commit('addMember', response.data)
        this.members = response.data
      });
    }
  }

</script>

<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';

  .members {
    z-index: 1000;
    position: relative;
    margin-top: -14rem;
    // padding-top: 10rem;
  }

  .member {
    width: 100%;
    height: 50rem;
    color: $cl-primary;
    background-size: 100%;

    &:nth-child(2) {
      z-index: 100;
      margin-top: -13rem;
      padding-top: 13rem;
      background-image: url("data:image/svg+xml,%3Csvg width='1440' height='917' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 161.3C290.24 30.29 595.24-20.91 914.98 7.7c319.75 28.62 540.87 84.98 663.38 169.1L1440 856.07c-100.78 85.84-216.76 80.98-347.93-14.58C895.31 698.16 763.1 698.16 505.49 698.16c-171.74 0-340.24 52.64-505.49 157.9V161.32z' fill='%23F0EDFF' fill-rule='evenodd'/%3E%3C/svg%3E");
    }

    &:nth-child(3) {
      z-index: 200;
      background-image: url("data:image/svg+xml,%3Csvg width='1440' height='779' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1440v739.63C1353.24 765.88 1137.4 779 792.48 779 447.57 779 183.4 748.31 0 686.93V0z' fill='%23DEDAFF' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
  }

  .section-heading {
    padding-top: 100px;
    color: $cl-primary;
  }

</style>
