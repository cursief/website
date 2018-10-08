<template>
  <div class="cta">
    <div class="container">
      <h2 class="section-heading">What we do, who we are</h2>
      <div class="group">
        <div class="cta__column">
          <h3>We are a collective</h3>
          <p>We are a pool of web/creative talent based in the Netherlands.</p>
          <p>Providing the best of technical and creative conpetence, members of our team have worked both for and with a wide range of clients ranging from start up businesses through to enterprise and govermental organisations.</p>
          <a href="#">More about our collective</a>
        </div>
        <div class="cta__column">
          <h3>Custom team</h3>
          <p>We work with a range of clients based in the Netherlands and across Europe on cutting edge digital projects.</p>
          <p>We are also equally suited to small, agile projects for leaner and start up businesses.</p>
          <a href="#">Select your team</a>
        </div>
        <div class="cta__column">
          <h3>Our services</h3>
          <p>Uspendisse quis consequat nisl. Integer posuere ante neque.</p>
          <p>Donec ornare vel odio nec viverra. Phasellus semper tellus justo, pulvinar ornare nisi bibendum tempus. Ut commodo tellus mattis orci auctor, ut bibendum ipsum pretium. Aenean porttitor id nisi vitae porttitor.</p>
          <a href="#">Check our services</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cta'
  }

</script>

<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';

  .cta {
    z-index: 200;
    position: relative;
    margin-top: -500px;
    width: 100%;
    height: 1120px;
    padding-top: 350px;
    padding-bottom: 150px;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='1440' height='1119' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient x1='24.96%25' y1='7.07%25' x2='37.03%25' y2='69.16%25' id='a'%3E%3Cstop stop-color='%237A69ED' offset='0%25'/%3E%3Cstop stop-color='%236A58BC' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M1441 546c.67 302 .67 631 0 987-60.64-7.86-184.3.48-371 25-236 31-331 98-624 106-134.84 3.68-283.5-25.99-446-89V778c183 20 342 20 599 0s609-103 842-232z' transform='translate(0 -546)' fill='url(%23a)' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
  }

  .cta__column {
    float: left;
    width: 25%;
    margin: 0 4.167%;
  }

  h2 {
    margin-bottom: 70px;
    font-size: 28px;
    text-align: center;
  }

  h3 {
    margin-bottom: 30px;
    font-size: 22px;
  }

  p {
    line-height: 24px;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    padding-bottom: 5px;
    color: $cl-primary;
    font-weight: 500;
    text-decoration: none;
    border-bottom: 2px dashed $cl-primary;
    transition: {
      property: opacity;
      duration: 300ms;
    }

    &:hover,
    &:focus {
      opacity: .6;
    }
  }

</style>
