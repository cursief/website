<template>
  <footer class="footer footer--primary">
    <transition name="fade" appear>
      <div class="container">
        <img class="logo" src="images/logo.svg" alt="">
        <nav class="navigation">
          <router-link to="/disclaimer">Disclaimer</router-link>
          <router-link to="/disclaimer">Privacy policy</router-link>
          <router-link to="/disclaimer">Contact</router-link>
        </nav>
        <p>© 2018 Cursief. All rights reserved.</p>
      </div>
    </transition>
  </footer>
</template>

<script>
export default {
  name: 'FooterPrimary'
}
</script>

<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';

  .footer {
    width: 100%;
    padding: 3rem 0;
    background-color: #504A86;

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
    flex-wrap: wrap;
    align-items: center;
    margin-left: auto;
    margin-right: 3rem;

    a {
      margin-left: 3rem;
      font-family: $font-secondary;
      font-size: 1.4rem;
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
