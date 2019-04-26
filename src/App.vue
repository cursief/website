<template>
  <div id="home">
    <header-primary/>
    <router-view :teamSelection="teamSelection"/>
    <footer-primary/>
  </div>
</template>

<script>
	import { EventBus } from '@/event-bus.js';
  import HeaderPrimary from '@/components/header-primary.vue'
  import FooterPrimary from '@/components/footer-primary.vue'

  export default {
    name: 'app',

    components: {
      HeaderPrimary,
      FooterPrimary
    },

    data() {
      return {
        teamSelection: null
      }
    },

    mounted() {
    	EventBus.$on('addToStack', (memberId) => {
				this.teamSelection = memberId
			});
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700');

  @import 'src/assets/scss/variables.scss';
  @import 'src/assets/scss/typography.scss';
  @import 'src/assets/scss/layout/grid.scss';
  @import 'src/assets/scss/button.scss';

  html,
  body,
  #home {
    padding: 0;
    margin: 0;
    min-height: 100%;
    color: $cl-white;
    background-color: $cl-secondary;
  }

  body {
    font-family: $font-primary;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  #home {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3 {
    font-family: $font-secondary;
  }

  .section-heading {
    position: relative;
    padding-bottom: 20px;
    font-size: 28px;
    text-align: center;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: calc(50% - 20px);
      display: block;
      width: 40px;
      height: 3px;
      background-color: $cl-primary;
    }
  }

</style>
