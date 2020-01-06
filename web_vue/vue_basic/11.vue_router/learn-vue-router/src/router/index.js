// 配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessages = () => import('../components/HomeMessages')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1. 使用 Vue.use(插件), 安装插件
Vue.use(Router)

// 2. 创建Router对象 并导出
const routes = [
    {
      path: '/',
      // 重定向
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        // {
        //   path: '',
        //   redirect: 'news'
        // },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'messages',
          component: HomeMessages
        }
      ]
    },
    {
      path: '/about',
      meta: {
        title: '关于'
      },
      component: About
    },
    {
      path: '/user/:userId',
      meta: {
        title: '用户'
      },
      component: User
    },
    {
      path: '/profile',
      meta: {
        title: '档案'
      },
      component: Profile
    }
  ]

 const router = new Router({
  // 配置路由和组件的映射关系
  routes,
  // hash改成history
  mode: 'history',
  linkActiveClass: 'active'
})

// 前置守卫(guard)
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  next()
})

// 后置钩子(hook)
router.afterEach((to, from) => {
  // ...
})

// 3. 将Router对象传入到Vue实例中 main.js
export default router
