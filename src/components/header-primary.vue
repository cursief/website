<template>
  <header class="header header--primary">
    <transition name="fade" appear>
      <div class="container">
        <img class="logo" src="images/logo.svg" alt="">
        <nav class="navigation">
          <router-link to="/">Introduction</router-link>
          <router-link to="/cases">Cases</router-link>
          <router-link to="/talent">About us</router-link>
          <router-link class="button button--header" to="/contact">Contact</router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'HeaderPrimary',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';
  @import 'src/assets/scss/button.scss';

  .fade-enter-active,
  .fade-leave-active {
    transition: all 800ms ease 400ms;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .logo {
    float: left;
  }

  .header {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 7rem 0;

    a:not(.button) {
      font-weight: bold;
      color: $cl-white;

      &.router-link-exact-active {
        opacity: .6;
      }
    }

    .container {
      display: flex;
      width: 100%;
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    margin-left: auto;
    
    a {
      margin-left: 7rem;
    }

    a:not(.button) {
      font-family: $font-secondary;
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: .1rem;
      text-decoration: none;
      text-transform: uppercase;
      text-shadow: 0 .2rem .4rem rgba(62,54,132,0.50);
      transition: opacity 300ms;

      &:hover,
      &:focus {
        opacity: .6;
      }
    }
  }

</style>
