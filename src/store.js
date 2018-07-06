import Vue from 'vue'
import Vuex from 'vuex'

// https://forum.vuejs.org/t/vuex-not-working-for-me-solved/13588/6

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		posts: {},
		media: {},
		members: {}
	},

	mutations: {

		addPosts (state, posts) {
			this.state.posts = posts
		},

		addMedia (state, media) {
			this.state.media = media
		},

		addMember (state, member) {
			this.state.member = member
		}
	}
})
