<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容，嘿嘿嘿嘿</p>
  </div>
</template>

<script>
  export default {
    name: 'About',
    created() {
      console.log('about created')
    },
    destroyed() {
      console.log('about destroyed')
    },
    activated() {
      console.log('about activated')
    },
    deactivated() {
      console.log('about deactivated')
    }
  }
</script>

<style>
</style>
