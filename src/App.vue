<template>
  <div id="app">
    <header-primary/>
    <router-view/>
  </div>
</template>

<script>
  import HeaderPrimary from '@/components/header-primary.vue'

  export default {
    name: 'app',

    components: {
      HeaderPrimary
    },

    data: function() {
      return {
        media: null
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:500');
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:400,500,700');

  @import 'src/assets/scss/variables.scss';
  @import 'src/assets/scss/layout/grid.scss';
  @import 'src/assets/scss/button.scss';

  html,
  body,
  #app {
    padding: 0;
    margin: 0;
    min-height: 100%;
    color: $cl-white;
    background-color: #7A69ED;
  }

  body {
    font-family: $font-primary;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  #app {
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
