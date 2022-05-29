<template>
  <div>
    <div class="museum-highlight" :style="cssVars">
      <div class="museum-highlight__header">
        <h2 class="museum-highlight__title">
          {{ data.name }}
        </h2>
        <div class="museum-highlight__icon">
          <slot name="museum-highlight__icon"/>
        </div>
      </div>
      <div class="museum-highlight__body">
        <div class="museum-highlight__image">
          <img v-show="!data.image" :src="fallbackImage" alt="">
          <img v-show="data.image" :src="data.image" alt="">
        </div>
        <div style="height: 20px"></div>
        <slot name="museum-highlight__body-prepend"/>
        {{ data.description }}
        <slot name="museum-highlight__body-append"/>
      </div>
      <div class="museum-highlight__footer">
        {{ data.date }}
        <div class="museum-highlight__actions">
          <slot name="museum-highlight__actions"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import variables from '../assets/_variables.scss'

export default {
  name: 'MuseumHighlight',
  components: {},
  mixins: [],
  props: {
    data: {
      type: Object,
      required: false,
    },
    backgroundColor: {
      type: String,
      required: false,
      default: variables.defaultMuseumHighlightColor
    },
    fallbackImage:{
      type:String,
      required:true,
    }

  },
  data() {
    return {};
  },
  computed: {
    newsDate() {
      // Highlight's news item date
    },
    cssVars() {
      return {
        '--bg-color': this.$props.backgroundColor,
      }
    },
  },
  methods: {

  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
@use '../assets/_variables.scss';
.museum-highlight {
  padding: 0.7em; // only for desktop
  margin: 1em; // only for desktop
  min-height: 250px;
  //flex-basis: calc(50% - 20px);
  border-radius: 26px;
  border: 2px solid variables.$museum-highlight-border-color;
  display: block;
  position: relative;
  right: 0px;
  top: 0px;
  background-color: var(--bg-color);
  transition: all 0.3s ease-out;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transition: all 0.3s ease-out;
    box-shadow: 0px 8px 16px variables.$museum-highlight__hover-box-shadow;
    right: 10px;
    top: -10px;
    border: 1px solid variables.$museum-highlight__hover-border;
    background-color: variables.$museum-highlight__hover-background-color;
  }

  &:hover:before {
    transform: scale(2.15);
  }

  &__header {
    display: flex;
    height: 52px;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
  }

  &__body {
    flex: 1 0 auto;
  }

  &__footer {
    align-self: flex-end;
  }


}


</style>
