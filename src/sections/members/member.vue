<template>
	<div class="member">
		<div class="container">
			<div class="member__box">
				<div class="member__title">{{member.title.rendered}}</div>
				<div class="member__labels" v-if="member.tags">
					<member-tag v-for="tag in member.tags" :key="tag.id" :tagName="tag.name" :tagSlug="tag.slug" />
				</div>
				<div class="member__description" v-html="member.biography"></div>
				<div class="member__meta">
					<a v-bind:href="member.portfolio_url" class="button button--secondary">
						<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M3.939 6.994l.783.784L7.5 5 4.722 2.222l-.783.784 1.433 1.438H0v1.112h5.372L3.94 6.994zM8.889 0H1.11C.494 0 0 .5 0 1.111v2.222h1.111V1.111H8.89V8.89H1.11V6.667H0v2.222A1.11 1.11 0 0 0 1.111 10H8.89C9.5 10 10 9.5 10 8.889V1.11C10 .5 9.5 0 8.889 0z" fill="#FFF" fill-rule="nonzero"/></svg>
						<span>Visit portfolio</span>
					</a>
					<a href="#" class="button button--primary">
						<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M10 5.714H5.714V10H4.286V5.714H0V4.286h4.286V0h1.428v4.286H10z" fill="#FFF" fill-rule="nonzero"/></svg>
						<span>Add to stack</span>
					</a>
				</div>
				<members-media :mediaId="member.featured_media" v-if="member.featured_media"/>
			</div>
		</div>
	</div>
</template>

<script>
	import MemberTag from '@/sections/members/member-tag.vue';
	import MembersMedia from '@/sections/members/members-media.vue';

	export default {
		name: 'member',

		components: {
			MemberTag,
			MembersMedia
		},

		props: {
			member: Object,
			index: Number
		},

		mounted() {
			var delay = this.index ? this.index * 1200 : 600;

			setTimeout(function () {
				this.$el.classList.add('is-visible');
			}.bind(this), delay)
		}
	}

</script>

<style lang="scss" scoped>
	@import './src/assets/scss/variables.scss';

	.member {
		position: relative;
		width: 100%;
		color: $cl-primary;

		&:before {
			content: '';
			position: absolute;
			left: 0;
			display: block;
			width: 100%;
			background: {
				repeat: no-repeat;
				size: 100% 100%;
			};
		}

		&:nth-child(2) .member__media {
			mask-image: url("data:image/svg+xml,%3Csvg width='462' height='546' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath d='M425.902344 545.210937C584.684209 545.210937 584 460.296584 584 304S370.179688-65.9765625 296.5 21C222.820312 107.976562-50.3710938 146.371094 9 304c59.3710937 157.628906 258.120478 241.210937 416.902344 241.210937z' id='a'/%3E%3C/defs%3E%3Cuse fill='%23D8D8D8' xlink:href='%23a' fill-rule='evenodd'/%3E%3C/svg%3E");
		}

		&:nth-child(1) {
			z-index: 100;
			padding: 10rem 0 50rem 0;
			margin-top: -14rem;
			background: {
				image: url("data:image/svg+xml,%3Csvg width='1440' height='917' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient x1='52.511%25' y1='40.976%25' x2='65.054%25' y2='56.708%25' id='a'%3E%3Cstop stop-color='%23AEC7E5' offset='0%25'/%3E%3Cstop stop-color='%2399AEDD' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M282 161.31C572.242 30.28 877.236-20.925 1196.98 7.695c319.745 28.62 540.87 84.987 663.375 169.101L1722 856.068c-100.779 85.84-216.755 80.982-347.93-14.574C1177.31 698.16 1045.102 698.16 787.488 698.16c-171.742 0-340.238 52.636-505.488 157.908V161.31z' transform='translate(-282)' fill='url(%23a)' fill-rule='evenodd'/%3E%3C/svg%3E");
				size: cover;
				repeat: no-repeat;
				position: top center;
			};

			// &:before {
			// 	top: -13rem;
			// 	height: 13rem;
			// 	background: {
			// 		position: center top;
			// 		image: url("data:image/svg+xml,%3Csvg width='1440' height='162' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1555.312 162H0v-.69C290.242 30.28 595.236-20.925 914.98 7.695 1215.598 34.604 1429.042 86.039 1555.312 162z' fill='%23F0EDFF' fill-rule='evenodd'/%3E%3C/svg%3E");
			// 	}
			// }
		}

		&:nth-child(2) {
			z-index: 200;
			padding: 0rem 0 10rem;
			margin-top: -20rem;
			background: {
				color: #D5D0FF;
				// image: url("data:image/svg+xml,%3Csvg width='1440' height='798' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='a'%3E%3Cstop stop-color='%23C7E1FF' offset='0%25'/%3E%3Cstop stop-color='%23D5D0FF' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M1 191.33C0 161.612 186.781 64.758 415.543 19c219.407-43.887 446.925-20.838 756.77 172.33 52.055 32.453 142.284 24.681 270.687-23.314V758.63C1356.242 784.877 1140.404 798 795.484 798 450.565 798 186.404 767.31 3 705.929 2.333 382.675 1.667 211.142 1 191.33z' transform='translate(-3)' fill='url(%23a)' fill-rule='evenodd'/%3E%3C/svg%3E");
				size: cover;
				repeat: no-repeat;
				position: top center;
			};

			&:before {
				top: -19rem;
				height: 20rem;
				background: {
					size: 100% 100%;
					image: url("data:image/svg+xml,%3Csvg width='1440' height='292' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='a'%3E%3Cstop stop-color='%23C7E1FF' offset='0%25'/%3E%3Cstop stop-color='%23D5D0FF' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M1 191.33C0 161.612 186.781 64.758 415.543 19c219.407-43.887 446.925-20.838 756.77 172.33 52.055 32.453 142.284 24.681 270.687-23.314v122.5L3 291.5c-.208-35.778-1.792-93.983-2-100.17z' transform='translate(-3)' fill='url(%23a)' fill-rule='evenodd'/%3E%3C/svg%3E");
				}
			}
		}

		.container {
			z-index: 100;
			display: flex;
		}
	}

	.member__box {
		opacity: 0;
		max-width: 60%;
		transition: opacity 1000ms;

		.member.is-visible & {
			opacity: 1;
		}

		.member:nth-child(odd) & {
			margin-left: auto;
		}

		.member:nth-child(even) & {

			.member__media {
				left: auto;
				right: 0;
			}
		}
	}

	.member__title {
		margin-bottom: 2rem;
		font-family: $font-secondary;
		font-size: 3.8rem;
		font-weight: 700;
	}

	.member__labels {
		margin-bottom: 3rem;
	}

	.member__description {
		line-height: 1.6;
	}

	.member__media {
		position: absolute;
		top: 0;
		left: 0;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		mask-size: contain;
		mask-repeat: no-repeat;
		mask-image: url("data:image/svg+xml,%3Csvg width='412' height='534' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cellipse id='a' cx='398' cy='377' rx='229' ry='325'/%3E%3C/defs%3E%3Cuse fill='%23D8D8D8' transform='rotate(-54 149.0564222 598.72808128)' xlink:href='%23a' fill-rule='evenodd'/%3E%3C/svg%3E");
	}

	.member__meta {
		display: flex;
		margin-top: 3rem;

		.button {
			margin: 0 1rem 0 0;
		}
	}
</style>
