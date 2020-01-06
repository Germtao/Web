<template>
  <div>
    <h2>我是用户页面</h2>
    <p>我是用户相关信息，嘻嘻嘻嘻</p>
    <h3>{{userId}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'User',
    computed: {
      userId() {
        return this.$route.params.userId
      }
    },
    created() {
      console.log('user created')
    },
    destroyed() {
      console.log('user destroyed')
    },
    activated() {
      console.log('user activated')
    },
    deactivated() {
      console.log('user deactivated')
    }
  }
</script>

<style>
</style>
