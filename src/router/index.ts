import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const Cesium = () => import('@/views/Cesium/index.vue')
const Three = () => import('@/views/Three/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'cesium',
    component: Cesium
  },
  {
    path: '/three',
    name: 'three',
    component: Three
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
