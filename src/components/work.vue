<template>
  <li class="work__item" :key="work.id">
    <a href="#">
      <h3>{{work.title.rendered}}</h3>
      <div class="work__labels" v-if="work.tags.length">
        <workTag v-for="tag in work.tags" :key="tag" :tagId="tag"/>
      </div>
      <div class="work__media">
        <workMedia :media="mediaObject" />
      </div>
    </a>
  </li>
</template>

<script>
  import workMedia from '@/components/work-media.vue'
  import workTag from '@/components/work-tag.vue'

  export default {
    name: 'work',
    components: {
      workMedia,
      workTag
    },
    props: {
      work: {},
      media: {}
    },
    data() {

      return {
        mediaObject: []
      }
    },
    mounted() {
      this.mediaObject = this.media.find(media => media.id === this.work.featured_media);
    }
  }

</script>

<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';

  .work__item {
    position: relative;
    width: 50%;
    height: 520px;

    &:hover,
    &:focus {

      .work__media img {
        transform: translate3d(-50%, 0, 0) scale(1.1);
      }
    }

    h3 {
      z-index: 200;
      position: relative;
      margin-bottom: 20px;
      font-size: 28px;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: $cl-white;
      text-decoration: none;
    }
  }

  .work__labels {
    z-index: 200;
    position: relative;
  }

  .work__media {
    z-index: 100;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;

    &:after {
      content: '';
      z-index: 200;
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(#4735E2, .5);
    }

    img {
      z-index: 100;
      position: relative;
      min-width: 100%;
      margin-left: 50%;
      transform: translate3d(-50%, 0, 0);
      transition: transform 500ms;
    }
  }

</style>
