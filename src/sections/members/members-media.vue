<template>
	<div class="member__media" v-if="media.source_url" :style="{ backgroundImage: 'url(' + media.source_url + ')' }"></div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'members-media',

		props: {
			mediaId: Number
		},

		data() {
			return {
				media: {
					alt_text: '',
					media_details: {
						sizes: {
							full: {},
							large: {},
							medium: {}
						}
					},
					source_url: ''
				}
			}
		},

		mounted() {
			if(!Object.entries(this.$store.state.media).length) {
				this.$http.get('https://cursief.co/wordpress/wp-json/wp/v2/media').then(response => {
					this.$store.commit('setMedia', response.data)
					this.media = this.$store.state.media.find(media => media.id == this.mediaId)
				});
			} else {
				debugger
				this.media = this.$store.state.media.find(media => media.id == this.mediaId)
			}
		}
	}
	
</script>

<style lang="scss" scoped>

	.member__media {
		width: 42.4rem;
		height: 55rem;
	}

</style>