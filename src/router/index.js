import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Encyclopedia from '@/components/Encyclopedia'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Diagnosis from '@/components/Diagnosis'

Vue.use(Router)
export default new Router({
  mode: 'history',
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
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/diagnosis',
      name: 'diagnosis',
      component: Diagnosis
    }
  ]
})
