import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import City from './views/City.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/city',
      name:'City',
      component: City
    },{
      // 引入 :id 参数实现动态路由
      path:'/detail/:id',
      name:'Detail',
      component: Detail
    }
  ]
})
