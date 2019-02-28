<template>
	<div class="member">
		<div class="container">
			<div class="member__box">
				<div class="member__title">{{member.title.rendered}}</div>
				<div class="member__labels" v-if="member.tags">
					<work-tag v-for="tag in member.tags" :key="tag.id" :tagName="tag.name" :tagSlug="tag.slug" />
				</div>
				<div class="member__description" v-html="member.biography"></div>
				<div class="member__meta">
					<a href="#" class="button button--secondary">
						<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M3.939 6.994l.783.784L7.5 5 4.722 2.222l-.783.784 1.433 1.438H0v1.112h5.372L3.94 6.994zM8.889 0H1.11C.494 0 0 .5 0 1.111v2.222h1.111V1.111H8.89V8.89H1.11V6.667H0v2.222A1.11 1.11 0 0 0 1.111 10H8.89C9.5 10 10 9.5 10 8.889V1.11C10 .5 9.5 0 8.889 0z" fill="#FFF" fill-rule="nonzero"/></svg>
						<span>Visit portfolio</span>
					</a>
					<a href="#" class="button button--primary">
						<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M10 5.714H5.714V10H4.286V5.714H0V4.286h4.286V0h1.428v4.286H10z" fill="#256F3F" fill-rule="nonzero"/></svg>
						<span>Add to stack</span>
					</a>
				</div>
				<members-media :mediaId="member.featured_media" v-if="member.featured_media"/>
			</div>
		</div>
	</div>
</template>

<script>
	import WorkTag from '@/sections/work/work-tag.vue';
	import MembersMedia from '@/sections/members/members-media.vue';

	export default {
		name: 'member',

		components: {
			WorkTag,
			MembersMedia
		},

		props: {
			member: Object
		}
	}
	
</script>

<style lang="scss" scoped>
	@import './src/assets/scss/animations.scss';
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

		&:nth-child(3) .member__media {
			mask-image: url("data:image/svg+xml,%3Csvg width='462' height='546' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath d='M425.902344 545.210937C584.684209 545.210937 584 460.296584 584 304S370.179688-65.9765625 296.5 21C222.820312 107.976562-50.3710938 146.371094 9 304c59.3710937 157.628906 258.120478 241.210937 416.902344 241.210937z' id='a'/%3E%3C/defs%3E%3Cuse fill='%23D8D8D8' xlink:href='%23a' fill-rule='evenodd'/%3E%3C/svg%3E");
		}

		&:nth-child(2) {
			z-index: 100;
			padding: 10rem 0;
			background-color: #F0EDFF;
			
			&:before {
				top: -13rem;
				height: 13rem;
				background: {
					position: center top;
					image: url("data:image/svg+xml,%3Csvg width='1440' height='162' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1555.312 162H0v-.69C290.242 30.28 595.236-20.925 914.98 7.695 1215.598 34.604 1429.042 86.039 1555.312 162z' fill='%23F0EDFF' fill-rule='evenodd'/%3E%3C/svg%3E");
				}
			}
		}

		&:nth-child(3) {
			z-index: 200;
			padding: 15rem 0;
			background-color: #DEDAFF;
			
			&:before {
				top: 0;
				height: 10rem;
				background: {
					size: 100% 100%;
					image: url("data:image/svg+xml,%3Csvg width='1440' height='233' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1475.047 0L1440 172.068c-100.779 85.84-216.755 80.982-347.93-14.574C895.31 14.16 763.102 14.16 505.488 14.16 333.746 14.16 165.25 66.796 0 172.068V0h1475.047z' fill='%23F0EDFF' fill-rule='evenodd'/%3E%3C/svg%3E");
				}
			}
		}

		.container {
			z-index: 100;
			display: flex;
		}
	}

	.member__box {
		max-width: 60%;

		.member:nth-child(even) & {
			margin-left: auto;
		}

		.member:nth-child(odd) & {

			.member__media {
				left: auto;
				right: 0;
			}
		}
	}

	.member__title {
		margin-bottom: 1rem;
		font-family: $font-secondary;
		font-size: 2.8rem;
		font-weight: 600;
	}

	.member__labels {
		margin-bottom: 3rem;
	}

	.member__description {
		
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
		
		.member:nth-child(odd) & {
			justify-content: flex-end;
		}
		
		.button {
			margin: 0 1rem 0 0;
			
			.member:nth-child(odd) & {
				
				margin: 0 0 0 1rem;
			}
		}
	}
</style>