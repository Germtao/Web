<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈哈</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/messages">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        path: '/home/news'
      }
    },
    created() {
      console.log('home created')
    },
    destroyed() {
      console.log('home destroyed')
    },

    // 只在 keep-alive 才调用
    activated() {
      console.log('home activated')
      this.$router.push(this.path)
    },
    deactivated() {
      console.log('home deactivated')
    },
    beforeRouteLeave(to, from, next) {
      console.log(this.$route.path)
      this.path = this.$route.path
      next()
    }
  }
</script>

<style>
</style>
