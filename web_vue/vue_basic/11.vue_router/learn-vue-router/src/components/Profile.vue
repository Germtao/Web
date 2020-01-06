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
    name: 'Profile'
  }
</script>

<style>
</style>
