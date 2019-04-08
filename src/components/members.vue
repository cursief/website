<template>
  <div class="members" id="members">
    <transition name="fade" v-if="members.length" mode="out-in" appear>
      <div class="container">
        <!-- <h2 class="section-heading">The Talent</h2> -->
      </div>
    </transition>
    <transition-group class="group" name="fade" tag="div" appear>
      <Member v-for="(member, index) in members" :member="member" :index="index" :key="member.id"/>
    </transition-group>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Member from '@/sections/members/member.vue';

  export default {
    name: 'members',

    components: {
      Member
    },

    mounted() {
      this.$store.dispatch('loadMembers')
    },

    computed: mapState([
      'members'
    ])
  }

</script>

<style scoped lang="scss">
  @import './src/assets/scss/animations.scss';
  @import './src/assets/scss/variables.scss';

  .members {
  	// overflow: hidden;
    position: relative;
    
    .section-heading {
      z-index: 200;
    }
  }

  .section-heading {
    padding-top: 10rem;
    color: $cl-primary;
  }

</style>
