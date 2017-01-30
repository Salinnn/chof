import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import Home from './components/Home'
import Top from './components/Top'
import Projects from './components/Projects'

Vue.use(Router)
Vue.use(Resource)

// application routes
const routes = [
  { path: '/', component: Home },
  { path: '/top', component: Top },
  { path: '/projects', component: Projects }
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})