// 配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')

// 1. 使用 Vue.use(插件), 安装插件
Vue.use(Router)

// 2. 创建Router对象 并导出
export default new Router({
  // 配置路由和组件的映射关系
  routes: [
    {
      path: '/',
      // 重定向
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:userId',
      component: User
    }
  ],
  // hash改成history
  mode: 'history',
  linkActiveClass: 'active'
})

// 3. 将Router对象传入到Vue实例中 main.js
