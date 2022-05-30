<template>
  <nav class="main-nav" aria-label="Navigation">
    <ul class="main-nav__list">
      <li class="main-nav__item" v-for="(item,i) in links" :key="i">
        <a :href="item.to" class="main-nav__link">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    links: [
      {
        to: '#',
        name: 'Space'
      },
      {
        to: '#',
        name: 'Dinosaurs'
      },
      {
        to: '#',
        name: 'Wildlife'
      },
      {
        to: '#',
        name: 'Oceans'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
@use '../assets/_variables.scss';

.main-nav {
  &__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: variables.$main-nav__list-color;
  }

  &__item {
    float: left;
  }

  &__link {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  &__link:hover {
    background-color: variables.$main-nav__link-hover-color;
  }
}


</style>