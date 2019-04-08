<template>
	<transition name="fade" mode="out-in" v-if="mediaObject" appear>
		<li class="work__item" :key="workCase.id">
			<a href="#">
				<div class="work__top">
					<h3>{{workCase.title.rendered}}</h3>
					<div class="work__labels" v-if="workCase.tags">
						<workTag v-for="tag in workCase.tags" :key="tag.id" :tag="tag"/>
					</div>
				</div>
				<span class="button button--ghost work__button">View project</span>
				<div class="work__media" v-if="mediaObject">
					<workMedia :media="mediaObject" />
				</div>
			</a>
		</li>
	</transition>
</template>

<script>
	import workMedia from '@/sections/work/work-media.vue'
	import workTag from '@/sections/work/work-tag.vue'

	export default {
		name: 'work',

		components: {
			workMedia,
			workTag
		},

		props: {
			workCase: {}
		},

		data () {

			return {
				mediaObject: []
			}
		},

		mounted () {
			this.mediaObject = this.$store.getters.getMediaById(this.workCase.featured_media);
		}
	}

</script>

<style scoped lang="scss">
	@import './src/assets/scss/variables.scss';
	@import './src/assets/scss/button.scss';
	@import './src/assets/scss/layout/grid.scss';
	@import './src/assets/scss/animations.scss';
	
	.work__top {
		z-index: 200;
		position: relative;
		transform: translate3d(0, 3rem, 0);
		transition: transform 300ms;
	}

	.work__item {
		position: relative;
		width: 100%;
		height: 40rem;
		
		@include md('+') {
			width: 50%;
			height: 60rem;
		}

		&:hover,
		&:focus {

			.work__top {
				transform: translate3d(0, 0, 0);
			}

			.work__button {
				opacity: 1;
				transform: translate3d(0, 0, 0);
			}

			.work__media {

				&:after {
					background-color: rgba(#0c225d, .9);
				}

				img {
					transform: scale(1.1);
				}
			}
		}

		&:nth-child(1) {
			height: 50rem;
			padding-top: 10rem;

			@include md('+') {
				height: 60rem;
			}
		}

		&:nth-child(1),
		&:nth-child(2) {

			@include md('+') {
				padding-top: 10rem;
			}
		}

		&:nth-last-of-type(-n+2) {

			@include md('+') {
				padding-bottom: 18rem;
			}
		}

		h3 {
			margin-bottom: 2rem;
			font-size: 2.8rem;
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
		display: flex;
		margin-bottom: 3rem;
	}

	.work__button {
		z-index: 200;
		position: relative;
		opacity: 0;
		transform: translate3d(0, 4rem, 0);
		transition: {
			property: opacity, transform;
			duration: 300ms;
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
			background-color: rgba(#183992, .8);
			transition: background-color 300ms;
		}

		img {
			z-index: 100;
			position: relative;
			object-fit: cover;
			min-width: 100%;
			height: 100%;
			transition: transform 500ms;
		}
	}

</style>
