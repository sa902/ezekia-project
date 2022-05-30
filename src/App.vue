<template>
  <div id="app">
    <nav-bar></nav-bar>
    <space-page></space-page>
  </div>
</template>

<script>

import NavBar from "./components/NavBar";
import SpacePage from "./SpacePage.vue"
export default {
  name: 'App',
  components: {
    NavBar,
    SpacePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;

}
</style>
