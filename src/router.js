import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/usps',
      name: 'usps',
      component: Home
    },
    {
      path: '/cases',
      name: 'cases',
      component: Home
    },
    {
      path: '/members',
      name: 'members',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      name: '404',
      component: Home
    }
  ],
  scrollBehavior (to, from, savedPosition) {

  	if(savedPosition) {
	    return window.scrollTo({ 
	      top: savedPosition.y,
	      behavior: 'smooth' 
	    })
  	} else {
	
	  	if(to.name) {
		    return window.scrollTo({ 
		      top: document.querySelector('#' + to.name).offsetTop, 
		      behavior: 'smooth' 
		    })
	  	} else {
	  		return { x: 0, y: 0 }
	  	}
  	}
  }
})
