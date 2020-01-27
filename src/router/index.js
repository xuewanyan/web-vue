import Vue from 'vue'
import Router from 'vue-router'
import tree from '@/pages/tree/tree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tree',
      component: tree
    }
  ]
})
