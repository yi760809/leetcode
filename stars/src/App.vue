<template>
  <div id="app">
    <div class="temp" v-if="$route.path == '/login'">
      <router-view></router-view>
    </div>
    <div class="temp" v-else>
      <common></common>
    </div>
  </div>
</template>

<script>
import common from './views/common'
export default {
  name: 'App',
  components: {
    common
  }
}
</script>

<style lang="stylus">
@import './assets/css/reset.css';
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width: 100vw;
  height: 100vh;
</style>
