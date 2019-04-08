<template>
  <div class="usps" id="usps">
    <div class="container">
      <transition-group class="group" name="fade-up-2" tag="div" appear>
        <div class="usps__column" key="1">
          <h3 class="usps__heading">
            <svg class="usps__icon" width="50" height="52" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M5 36a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM45 36a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM11 28c0 7.732 6.268 14 14 14s14-6.268 14-14-6.268-14-14-14c-7.728.01-13.99 6.272-14 14zm2.545 0c0-1.023 1.953-2.337 5.254-3.127A31.399 31.399 0 0 0 18.636 28c0 1.042.06 2.093.163 3.127-3.301-.79-5.254-2.104-5.254-3.127zm.834 4.237a18.72 18.72 0 0 0 4.815 1.57c.302 1.667.83 3.287 1.568 4.813a11.483 11.483 0 0 1-6.383-6.383zm4.815-10.043a18.72 18.72 0 0 0-4.815 1.569 11.483 11.483 0 0 1 6.383-6.383 18.723 18.723 0 0 0-1.568 4.814zM25 39.454c-1.022 0-2.337-1.952-3.127-5.253 1.035.104 2.085.163 3.127.163 1.042 0 2.092-.06 3.127-.163-.79 3.301-2.105 5.254-3.127 5.254zM36.455 28c0 1.023-1.953 2.337-5.254 3.127.104-1.034.163-2.085.163-3.127 0-1.042-.06-2.093-.163-3.127 3.301.79 5.254 2.104 5.254 3.127zm-.834-4.237a18.72 18.72 0 0 0-4.815-1.57 18.723 18.723 0 0 0-1.568-4.813 11.483 11.483 0 0 1 6.383 6.383zm-4.815 10.043a18.72 18.72 0 0 0 4.815-1.569 11.483 11.483 0 0 1-6.383 6.383 18.723 18.723 0 0 0 1.568-4.814zM28.818 28a28.925 28.925 0 0 1-.234 3.584 27.507 27.507 0 0 1-7.168 0 27.487 27.487 0 0 1 0-7.168 27.507 27.507 0 0 1 7.168 0c.152 1.189.23 2.386.234 3.584zm-.691-6.2A31.394 31.394 0 0 0 25 21.635c-1.042 0-2.092.06-3.127.163.79-3.301 2.105-5.254 3.127-5.254 1.022 0 2.337 1.953 3.127 5.254zM25 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-7.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.594 33c.074 0 .148-.007.22-.021.663-.127 1.101-.794.98-1.49C1.98 21.39 7.187 11.342 16.248 7.46a1.27 1.27 0 0 0 .742-1.013 1.31 1.31 0 0 0-.464-1.182 1.17 1.17 0 0 0-1.206-.168C5.2 9.44-.619 20.663 1.397 31.952c.107.606.61 1.047 1.197 1.048zM33.773 7.469c9.049 3.88 14.248 13.923 12.436 24.02-.12.696.318 1.363.979 1.49a1.1 1.1 0 0 0 .22.021c.587-.002 1.089-.442 1.196-1.048C50.617 20.667 44.807 9.45 34.7 5.106a1.166 1.166 0 0 0-1.22.154c-.35.28-.53.737-.468 1.195.06.458.352.845.761 1.014zM37.011 45.254a21.102 21.102 0 0 1-25.011 0 1.228 1.228 0 0 0-1.252-.145 1.28 1.28 0 0 0-.742 1.043c-.045.46.154.908.521 1.175a23.242 23.242 0 0 0 27.957 0c.56-.416.683-1.218.277-1.79a1.234 1.234 0 0 0-1.75-.283z"/></g></svg>
            <span>We are a collective</span>
          </h3>
          <p>We are a pool of web/creative talent based in the Netherlands.</p>
          <p>Providing the best of technical and creative conpetence, members of our team have worked both for and with a wide range of clients ranging from start up businesses through to enterprise and govermental organisations.</p>
          <a class="button button--primary" href="#">More about our collective</a>
        </div>
        <div class="usps__column" key="2">
          <h3 class="usps__heading">
            <svg class="usps__icon" width="50" height="50" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M34 18.752v-2.495c-.008-2.614-1.697-4.946-4.23-5.838 2.323-2.495 2.19-6.328-.302-8.666-2.492-2.337-6.445-2.337-8.936 0-2.492 2.338-2.626 6.17-.303 8.666-2.532.892-4.221 3.224-4.229 5.838v2.495c0 .331.135.649.376.883.242.234.569.365.91.365h15.428c.341 0 .668-.131.91-.365.24-.234.376-.552.376-.883zM25 2.534c2.13 0 3.857 1.676 3.857 3.743S27.13 10.019 25 10.019s-3.857-1.675-3.857-3.742C21.145 4.21 22.87 2.537 25 2.534zm6.429 14.97H18.57v-1.247c.003-2.066 1.728-3.74 3.858-3.742h5.142c2.13.002 3.855 1.676 3.858 3.742v1.248zM45.77 40.42c2.324-2.496 2.19-6.33-.302-8.667-2.492-2.337-6.444-2.337-8.936 0s-2.626 6.17-.303 8.666c-2.532.892-4.222 3.224-4.229 5.838v2.495c0 .331.135.649.376.883.242.234.569.365.91.365h15.428c.341 0 .668-.131.91-.365.24-.234.376-.552.376-.883v-2.495c-.007-2.614-1.697-4.946-4.23-5.838zM41 32.533c2.13 0 3.857 1.675 3.857 3.743 0 2.067-1.727 3.742-3.857 3.742s-3.857-1.675-3.857-3.742c.002-2.067 1.728-3.74 3.857-3.743zm6.429 14.97H34.57v-1.247c.003-2.066 1.728-3.74 3.858-3.743h5.142c2.13.003 3.855 1.677 3.858 3.743v1.248zM13.77 40.42c2.324-2.496 2.19-6.33-.302-8.667-2.492-2.337-6.444-2.337-8.936 0s-2.626 6.17-.303 8.666C1.697 41.311.007 43.643 0 46.257v2.495c0 .331.135.649.376.883.242.234.569.365.91.365h15.428c.341 0 .668-.131.91-.365.24-.234.376-.552.376-.883v-2.495c-.007-2.614-1.697-4.946-4.23-5.838zM9 32.533c2.13 0 3.857 1.675 3.857 3.743 0 2.067-1.727 3.742-3.857 3.742s-3.857-1.675-3.857-3.742C5.145 34.21 6.87 32.537 9 32.534zm6.429 14.97H2.57v-1.247c.003-2.066 1.728-3.74 3.858-3.743h5.142c2.13.003 3.855 1.677 3.858 3.743v1.248zM25.8 31.272v-7c0-.702-.582-1.272-1.3-1.272-.718 0-1.3.57-1.3 1.273v7l-4.679 3.435a1.256 1.256 0 0 0-.261 1.782c.43.563 1.245.677 1.82.256L24.5 33.5l4.42 3.246c.372.273.864.33 1.291.151.427-.179.725-.567.78-1.019a1.262 1.262 0 0 0-.512-1.17l-4.68-3.436z"/></g></svg>
            <span>Custom team</span>
          </h3>
          <p>We work with a range of clients based in the Netherlands and across Europe on cutting edge digital projects.</p>
          <p>We are also equally suited to small, agile projects for leaner and start up businesses.</p>
          <p>Since you probably won't need a whole team, you can select only what you need.</p>
          <a class="button button--primary" href="#">Select your team</a>
        </div>
        <div class="usps__column" key="3">
          <h3 class="usps__heading">
            <svg class="usps__icon" width="50" height="45" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M43.75 0H6.25A6.257 6.257 0 0 0 0 6.25v25a6.257 6.257 0 0 0 6.25 6.25h11.177c-.344 3.28-2.014 5-3.677 5a1.25 1.25 0 0 0 0 2.5h22.5a1.25 1.25 0 0 0 0-2.5c-1.663 0-3.333-1.72-3.677-5H43.75A6.257 6.257 0 0 0 50 31.25v-25A6.257 6.257 0 0 0 43.75 0zM6.25 2.5h37.5a3.754 3.754 0 0 1 3.75 3.75V30h-45V6.25A3.754 3.754 0 0 1 6.25 2.5zm25.454 40H18.296a9.94 9.94 0 0 0 1.625-5H30.08a9.94 9.94 0 0 0 1.625 5zM43.75 35H6.25a3.744 3.744 0 0 1-3.52-2.5h44.54a3.744 3.744 0 0 1-3.52 2.5z"/><path d="M17.5 24a7.5 7.5 0 1 0-7.5-7.5 7.508 7.508 0 0 0 7.5 7.5zm4.823-8.75H18.75v-3.573a4.992 4.992 0 0 1 3.573 3.573zm-6.073-3.573V16.5a1.25 1.25 0 0 0 1.25 1.25h4.823a4.99 4.99 0 1 1-6.073-6.073zM31.25 13h7.5c.69 0 1.25-.672 1.25-1.5s-.56-1.5-1.25-1.5h-7.5c-.69 0-1.25.672-1.25 1.5s.56 1.5 1.25 1.5zM31.25 18h7.5c.69 0 1.25-.672 1.25-1.5s-.56-1.5-1.25-1.5h-7.5c-.69 0-1.25.672-1.25 1.5s.56 1.5 1.25 1.5zM31.25 23h7.5c.69 0 1.25-.672 1.25-1.5s-.56-1.5-1.25-1.5h-7.5c-.69 0-1.25.672-1.25 1.5s.56 1.5 1.25 1.5z"/></g></svg>
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
