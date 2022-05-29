<template>
  <div id="app">
    <nav-bar></nav-bar>
    <space-page>

    </space-page>

  </div>
</template>

<script>

import SpacePage from "./SpacePage";
import NavBar from "./components/NavBar";

export default {
  name: 'App',
  components: {
    SpacePage,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
}
body{
  margin: 0;

}
</style>
