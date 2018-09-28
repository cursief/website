<template>
  <div class="work">
    <ul class="work__list">
      <li class="work__item">
        <a href="#">
          <h3>NS International</h3>
          <div class="work__labels">
            <span>Label</span>
            <span>Label</span>
            <span>Label</span>
            <span>Label</span>
          </div>
          <div class="work__media">
            <img src="images/ns.jpg" alt="">
          </div>
        </a>
      </li>
      <li class="work__item">
        <a href="#">
          <h3>Rijksmuseum</h3>
          <div class="work__labels">
            <span>Label</span>
            <span>Label</span>
            <span>Label</span>
            <span>Label</span>
          </div>
          <div class="work__media">
            <img src="images/rijksmuseum.jpg" alt="">
          </div>
        </a>
      </li>
      <li class="work__item">
        <a href="#">
          <h3>HEMA</h3>
          <div class="work__labels">
            <span>Label</span>
            <span>Label</span>
            <span>Label</span>
            <span>Label</span>
          </div>
          <div class="work__media">
            <img src="images/hema.jpg" alt="">
          </div>
        </a>
      </li>
      <li class="work__item">
        <a href="#">
          <h3>ING Bank</h3>
          <div class="work__labels">
            <span>Label</span>
            <span>Label</span>
            <span>Label</span>
            <span>Label</span>
          </div>
          <div class="work__media">
            <img src="images/ing.jpg" alt="">
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'work'
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';

  .work {
    position: relative;
  }

  .work__list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    text-align: center;
    list-style: none;
  }

  .work__item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 520px;

    &:nth-child(1),
    &:nth-child(2) {
      padding-top: 100px;
      margin-top: -140px;
    }

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
      color: $cl-white;
      text-decoration: none;
    }
  }

  .work__labels {
    z-index: 200;
    position: relative;

    span {
      margin: 0 2px;
      padding: 5px 10px;
      font-size: 12px;
      background-color: blue;
      border-radius: 10px;
    }
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
