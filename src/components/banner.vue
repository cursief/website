<template>
  <div class="banner" ref="blobsParent">
    <blobs />
    <div class="intro">
      <transition name="fade-up" appear>
        <h1>We make digital products.</h1>
      </transition>

      <transition name="fade" appear>
        <div class="container container--small">
          <p>We design, build and launch products for startups, established companies and ourselves. We help businesses grow through effective design and strategy.<br>
          Let’s make great things together!</p>
        </div>
      </transition>

      <transition name="glow" appear>
        <button class="button button--primary button--big">Scroll down</button>
      </transition>
    </div>
  </div>
</template>

<script>
import Blobs from '@/components/blobs.vue'

  export default {
    name: 'banner',
    data() {
      return {
        rootElement: this.$el
      }
    },
    components: {
      Blobs
    }
  }

</script>

<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';

  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 6rem);
    min-height: 100rem;
    padding-bottom: 20rem;
    background-image: linear-gradient(-168deg, #7B50FF 40%, #7D6FF5 100%);
  }

  h1 {
    margin: 0 0 1rem;
    font-size: 6.4rem;
    color: $cl-white;
    letter-spacing: 0;
    text-align: center;
    text-shadow: 0 0 1.5rem rgba(0,0,0,0.20);
  }

  .intro {
    position: relative;
    z-index: 2;
    font-size: 1.8rem;
    text-align: center;

    p {
      line-height: 2.8rem;
      text-shadow: 0 0 1.5rem rgba(0,0,0,0.50);
    }

    .button {
      margin: 3rem auto 0;
    }
  }

  .fade-up-enter-active,
  .fade-up-leave-active {
    transition: all 800ms ease 400ms;
  }

  .fade-up-enter,
  .fade-up-leave-to {
    opacity: 0;
    transform: translate3d(0, 2rem, 0);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 800ms ease 1000ms;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .glow-enter-active,
  .glow-leave-active {
    transition: all 800ms ease 1000ms;
  }

  .glow-enter,
  .glow-leave-to {
    opacity: 0;
    box-shadow: 0 0px 100px 0 rgba(51, 248, 120, 1), 0 0 100px 0 rgba(51, 248, 120, 1), 0 4px 4px 0 rgba(51, 248, 120, 0.2), 0 2px 2px 0 rgba(51, 248, 120, 0.2), 0 1px 1px 0 rgba(51, 248, 120, 0.2)
  }

</style>
