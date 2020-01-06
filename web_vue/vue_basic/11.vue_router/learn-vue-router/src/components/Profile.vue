<template>
  <div>
    <h2>我是Profile组件</h2>
    <p>名字：{{$route.query.name}}</p>
    <p>年龄：{{$route.query.age}}</p>
    <p>身高：{{$route.query.height}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    created() {
      console.log('profile created')
    },
    destroyed() {
      console.log('profile destroyed')
    },
    activated() {
      console.log('profile activated')
    },
    deactivated() {
      console.log('profile deactivated')
    }
  }
</script>

<style>
</style>
