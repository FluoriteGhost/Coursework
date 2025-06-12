import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import {createMemoryHistory, createRouter } from 'vue-router'

import mainpage from './components/Mainpage.vue'
import knittingpage from './components/Knittingpage.vue'
import sewingpage from './components/Sewingpage.vue'
import timetable from './components/Timetable.vue'
import whypage from './components/Whypage.vue'

const routes = [
  { path: '/', component: mainpage },
  { path: '/knitting', component: knittingpage },
  { path: '/sewing', component: sewingpage },
  { path: '/timetable', component: timetable },
  { path: '/why', component: whypage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')