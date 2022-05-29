<template>
  <nav class="main-nav" aria-label="Navigation">
    <ul class="main-nav__list">
      <li class="main-nav__item">
        <a href="#" class="main-nav__link">Home</a>
      </li>
      <li class="main-nav__item">
        <a href="#" class="main-nav__link">Work</a>
      </li>
      <li class="main-nav__item">
        <a href="#" class="main-nav__link">About us</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style lang="scss" scoped>
/* Base */
.main-nav{
  margin:0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>