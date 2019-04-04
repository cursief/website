<template>
	<transition name="fade" mode="out-in" v-if="mediaObject" appear>
		<li class="work__item" :key="workCase.id">
			<a href="#">
				<h3>{{workCase.title.rendered}}</h3>
				<div class="work__labels" v-if="workCase.tags">
					<workTag v-for="tag in workCase.tags" :key="tag.id" :tagId="tag"/>
				</div>
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
	@import './src/assets/scss/animations.scss';

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

		&:nth-child(1),
		&:nth-child(2) {
			padding-top: 6rem;
		}

		&:nth-last-of-type(-n+2) {
			padding-bottom: 13rem;
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
			background-color: rgba(#183992, .8);
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
