<template>
  <div class="news-box">
    <div class="news-box__icon">
      NEWS!
      <font-awesome-icon class="" icon="fa-solid fa-bell"/>
    </div>
    <div class="news-box__body">
      <div v-if="news.title">
        {{ news.title }}
      </div>
      <br>
      <div v-if="news.date">
        {{ news.date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpacePageNewsBox",
  props: {
    news: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.news-box {
  border: solid #ff0808;
  border-radius: 26px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;

  &__icon {
    color: #ff0808;
    display: block;
    flex-grow: 0;
    margin: 0.5rem;
    padding: 0.5rem;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: flex-start;
    order: 0;
  }

  &__body {
    display: block;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: stretch;

    order: 0;
  }

}
</style>