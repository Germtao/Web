<template>
  <div id="app">
    <router-link to="/home" tag="button" replace="">首页</router-link>
    <router-link to="/about" tag="button" replace="">关于</router-link>
    <!-- <button @click="homeClick">首页</button> -->
    <!-- <button @click="aboutClick">关于</button> -->

    <router-link :to="'/user/'+userId" tag="button" replace="">用户</router-link>
    <!-- <router-link :to="{path: '/profile', query: {name: 'Kobe', age: 40, height: 1.98}}" tag="button" replace="">档案</router-link> -->
    <button @click="profileClick">档案</button>

    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    // homeClick() {
    //   // this.$router.push('/home')
    //   this.$router.replace('/home')
    // },
    // aboutClick() {
    //   // this.$router.push('/about')
    //   this.$router.replace('/about')
    // }

    profileClick() {
      this.$router.replace({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 40,
          height: 1.98
        }
      })
    }
  }
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
