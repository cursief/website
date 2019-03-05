import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
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

	actions: {

		loadPosts ({ commit }) {
			Vue.http.get('https://cursief.co/wordpress/wp-json/wp/v2/posts').then(r => r.data).then(posts => {
				commit('setPosts', posts)
			})
		},

		loadMembers ({ commit }) {
			Vue.http.get('https://cursief.co/wordpress/wp-json/wp/v2/members').then(r => r.data).then(members => {
				commit('setMembers', members)
			})
		},

		loadCases ({ commit }) {
			Vue.http.get('https://cursief.co/wordpress/wp-json/wp/v2/cases').then(r => r.data).then(cases => {
				commit('setCases', cases)
			})
		},

		loadTags ({ commit }) {
			Vue.http.get('https://cursief.co/wordpress/wp-json/wp/v2/tags').then(r => r.data).then(tags => {
				commit('setTags', tags)
			})
		},

		loadMedia ({ commit }) {
			Vue.http.get('https://cursief.co/wordpress/wp-json/wp/v2/media').then(r => r.data).then(media => {
				commit('setMedia', media)
			})
		}
	},

	mutations: {

		setPosts (state, posts) {
			this.state.posts = posts
		},

		setMedia (state, media) {
			this.state.media = media
		},

		setMembers (state, members) {
			this.state.members = members
		},

		setCases (state, cases) {
			this.state.cases = cases
		},

		setTags (state, tags) {
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
