import Vue from 'vue'
import VueRouter from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
// TODO: Import new component

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Rhymesaurus',
    component: Rhymesaurus
  }
  // TODO: Add new route definition here
]

const router = new VueRouter({
  routes
})

export default router
