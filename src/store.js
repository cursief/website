import Vue from 'vue'
import Vuex from 'vuex'
// https://forum.vuejs.org/t/vuex-not-working-for-me-solved/13588/6

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		posts: {},
		media: {},
		members: {},
		cases: {},
		tags: []
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
		},

		addCases (state, cases) {
			this.state.cases = cases
		},

		addTags (state, tags) {
			this.state.tags = tags;
		}
	},

	getters: {

		getMediaList: state => state.media,

		getMediaById: (state) => (id) => {
			return state.media.find(media => media.id === id)
		},

		getTagById: (state) => (id) => {
			return state.tags.find(tag => tag.id === id)
		}
	}
})
