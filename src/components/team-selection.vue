<template>
  <transition name="fade-up" appear>
  	<div class="team-selection" v-if="teamSelection">
      <div class="container">
      	<ul class="team-selection__members">
      		<li class="team-selection__member">
      			<img src="https://cursief.co/wordpress/wp-content/uploads/0.jpeg" alt="">
      		</li>
      		<li class="team-selection__member">
      			<img src="https://cursief.co/wordpress/wp-content/uploads/11893877_999305533445484_5172442191890195981_o.jpg" alt="">
      		</li>
      	</ul>
      	<ul class="tags">
      		<li class="tag front-end-development">
      			<span>Front-end development</span>
      		</li>
      		<li class="tag back-end-development">
      			<span>Back-end development</span>
      		</li>
      		<li class="tag consultancy">
      			<span>Consultancy</span>
      		</li>
      	</ul>
      </div>
  	</div>
  </transition>
</template>

<script>
	export default {
	  name: 'FooterPrimary',

	  props: {
	  	teamSelection: null
	  }
	}
</script>

<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';
  @import 'src/assets/scss/animations.scss';
  @import 'src/assets/scss/tags.scss';

  .team-selection {
  	z-index: 1000;
  	position: sticky;
  	bottom: 0;
  	left: 0;
    width: 100%;
    padding: 0;
    background-color: $cl-primary;
    
    .container {
    	display: flex;
    	align-items: center;
    }
  }

  .team-selection__members {
  	display: flex;
  	padding: 0;
  	margin: 0;
  	list-style: none;
  	transform: translate3d(0, -2rem, 0);
  }

  .team-selection__member {
  	overflow: hidden;
  	display: block;
  	width: 5rem;
  	height: 5rem;
  	border-radius: 50%;
  	border: .3rem solid $cl-white;
  	
  	&:not(:first-child) {
			transform: translate3d(-1rem, 0, 0);
  	}
  	
  	img {
  		width: 100%;
  		height: auto;
  	}
  }

  .tags {
  	margin: 1rem 0;
  }

</style>
