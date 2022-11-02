<template>
  <div id="app">
    <nav>
      <router-link to="/">测试</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/home">home</router-link> |
      <router-link to="/this">this指向</router-link> |
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
 
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
</style>
