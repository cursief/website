<template>
  <header class="header header--primary">
    <transition name="fade" appear>
      <div class="container">
        <img class="logo" src="images/logo.svg" alt="">
        <nav class="navigation">
          <router-link to="/">About us</router-link>
          <router-link to="/about">Our work</router-link>
          <router-link to="/contact">Contact</router-link>
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
    padding: 40px 0;

    a {
      font-weight: bold;
      color: $cl-white;

      &.router-link-exact-active {
        opacity: .6;
      }
    }
  }

  .navigation {
    float: right;

    a {
      margin-left: 70px;
      font-family: $font-secondary;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      text-transform: uppercase;
      text-shadow: 0 2px 4px rgba(62,54,132,0.50);
      transition: opacity 300ms;

      &:hover,
      &:focus {
        opacity: .6;
      }
    }
  }

</style>
