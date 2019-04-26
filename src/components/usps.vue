<template>
  <div class="usps" id="usps">
    <div class="container">
      <transition-group class="group" name="fade-up-2" tag="div" appear>
        <div class="usps__column" key="1">
          <h3 class="usps__heading">
            <img svg-inline class="usps__icon" src="../assets/usp-1.svg" alt="">
            <span>We are a collective</span>
          </h3>
          <p>We are a pool of web/creative talent based in the Netherlands.</p>
          <p>Providing the best of technical and creative conpetence, members of our team have worked both for and with a wide range of clients ranging from start up businesses through to enterprise and govermental organisations.</p>
          <a class="button button--primary" href="#">More about our collective</a>
        </div>
        <div class="usps__column" key="2">
          <h3 class="usps__heading">
            <img svg-inline class="usps__icon" src="../assets/usp-2.svg" alt="">
            <span>Custom team</span>
          </h3>
          <p>We work with a range of clients based in the Netherlands and across Europe on cutting edge digital projects.</p>
          <p>We are also equally suited to small, agile projects for leaner and start up businesses.</p>
          <p>Since you probably won't need a whole team, you can select only what you need.</p>
          <a class="button button--primary" href="#">Select your team</a>
        </div>
        <div class="usps__column" key="3">
          <h3 class="usps__heading">
            <img svg-inline class="usps__icon" src="../assets/usp-3.svg" alt="">
            <span>Our services</span>
          </h3>
          <p>Uspendisse quis consequat nisl. Integer posuere ante neque.</p>
          <p>Donec ornare vel odio nec viverra. Phasellus semper tellus justo, pulvinar ornare nisi bibendum tempus. Ut commodo tellus mattis orci auctor, ut bibendum ipsum pretium. Aenean porttitor id nisi vitae porttitor.</p>
          <a class="button button--primary" href="#">Check our services</a>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'usps'
  }

</script>

<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';
  @import 'src/assets/scss/layout/grid.scss';
  @import 'src/assets/scss/animations.scss';

  .usps {
    z-index: 200;
    position: relative;
    margin-top: -50rem;
    width: 100%;
    padding: 35rem 1.5rem 15rem;
    background-size: auto 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='1440' height='1119' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient x1='24.958%25' y1='24.16%25' x2='51.909%25' y2='78.361%25' id='a'%3E%3Cstop stop-color='%235948FF' offset='0%25'/%3E%3Cstop stop-color='%234C2FCC' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M1440 549c.667 302 .667 631 0 987-60.635-7.857-184.302.476-371 25-236 31-331 98-624 106-134.838 3.682-283.504-25.985-446-89V781c183 20 342 20 599 0s609-103 842-232z' transform='translate(0 -549)' fill='url(%23a)' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    
    @include md('+') {
      height: 102rem;
      padding: 35rem 3rem 15rem;
      background-size: 100% 100%;
    }
  }

  .group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .usps__column {
    margin-bottom: 3rem;

    @include md('+') {
      width: 25%;
      margin-bottom: 0;
    }
  }

  .usps__heading {
    display: flex;
    align-items: center;
  }

  .usps__icon {
    flex-shrink: 0;
    margin-right: 2rem;
  }

  h2 {
    margin-bottom: 7rem;
    font-size: 2.8rem;
    text-align: center;
  }

  h3 {
    margin-bottom: 3rem;
    font-size: 2.2rem;
  }

  p {
    line-height: 2.4rem;
  }

  .button {
    float: left;
    margin-top: 3rem;
  }
</style>
