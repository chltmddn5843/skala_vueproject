import { createRouter, createWebHistory } from 'vue-router'
import WeatherHomeView from '@/views/weather/WeatherHomeView.vue'

const routes = [
  {
    path: '/',
    name: 'WeatherHome',
    component: WeatherHomeView,
  },
  {
    path: '/about',
    name: 'WeatherAbout',
    component: () => import('@/views/weather/WeatherAboutView.vue'),
  },
  {
    path: '/weather/:cityId',
    name: 'WeatherDetail',
    component: () => import('@/views/weather/WeatherDetailView.vue'),
  },
  {
    path: '/mockup',
    name: 'WeatherMockup',
    component: () => import('@/views/examples/WeatherMockup.vue'),
  },
  {
    path: '/composition',
    name: 'WeatherComposition',
    component: () => import('@/views/examples/WeatherComposition.vue'),
  },
  {
    path: '/components',
    name: 'WeatherComponents',
    component: () => import('@/views/examples/WeatherParent.vue'),
  },
  {
    path: '/regions',
    name: 'WeatherRegions',
    component: () => import('@/views/examples/WeatherRegionHover.vue'),
  },
  {
    path: '/weather-api',
    name: 'AxiosWeather',
    component: () => import('@/views/examples/AxiosWeather.vue'),
  },
  {
    path: '/crud',
    name: 'Crud',
    component: () => import('@/views/examples/AxiosJson.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
