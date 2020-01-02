<template>
  <div id="app">
    <router-link to="/home" tag="button" replace="">首页</router-link>
    <router-link to="/about" tag="button" replace="">关于</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /* .router-link-active {
    color: #FF0000;
  } */
  .active {
    color: #FF0000;
  }
</style>
