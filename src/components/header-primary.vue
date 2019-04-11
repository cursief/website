<template>
  <header class="header header--primary" :class="{'is-scrolled' : scrolled}">
    <transition name="fade" appear>
      <div class="container">
        <router-link to="/" class="logo">
          <img src="images/logo.svg" alt="">
        </router-link>
        <nav class="navigation">
          <router-link to="/usps">Introduction</router-link>
          <router-link to="/cases">Cases</router-link>
          <router-link to="/members">Members</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link class="button button--primary button--header" to="/contact">Build your team</router-link>
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
    },
    
    data() {
      return {
        scrolled: false
      }
    },
    
    methods: {
      
      handleScroll() {
        if(window.scrollY > 60) {
          this.scrolled = true;
        } else {
          this.scrolled = false;
        }
      }
    },

    created() {
      window.addEventListener('scroll', this.handleScroll);
    },

    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
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
    display: flex;
    float: left;
  }

  .header {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 7rem 0;
    transition: {
      property: background-color, padding;
      duration: 600ms;
    }
    
    &.is-scrolled {
      padding: 2rem 0;
      background-color: $cl-primary;
    }

    a:not(.button) {
      font-weight: bold;
      color: $cl-white;

      &.router-link-exact-active {
        color: rgba($cl-white, .9);
      }
    }

    .container {
      display: flex;
      width: 100%;
      padding: 0 2rem;
    }
  }

  .navigation {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: auto;
    
    a {
      margin-left: 5rem;
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
