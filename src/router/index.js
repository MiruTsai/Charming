import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Encyclopedia from '@/components/Encyclopedia'
import Info from '@/components/Info'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/encyclopedia',
      name: 'encyclopedia',
      component: Encyclopedia
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})
