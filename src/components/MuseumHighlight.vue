<template>
  <div>

    <div class="museum-highlight" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @click="mouseClick">
      <div class="museum-highlight__header">
        <div class="museum-highlight__title">
          {{ data.name }}
        </div>
        <div class="museum-highlight__icon">
          <slot name="icon" />
        </div>
      </div>
      <div class="museum-highlight__body">
        {{data.description}}
      </div>
      <div class="museum-highlight__footer">
        <div class="museum-highlight__actions">
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'MuseumHighlight',
  components: {},
  mixins: [],
  props: {
    data: {
      type: Object,
      required: false,
    }

  },
  data() {
    return {
    };
  },
  computed: {
    newsDate() {
      // Highlight's news item date
    },
  },
  methods: {
    mouseEnter() {
      console.log('mouse entered')
    },
    mouseLeave() {
      console.log('mouse leave')
    },
    mouseClick() {
      console.log('we clicked!')
    }
  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
.museum-highlight {
  padding: 0.7em; // only for desktop
  margin: 1em; // only for desktop
  height: 200px;
  //flex-basis: calc(50% - 20px);
  border-radius: 26px;
  border: 2px solid #f2f8f9;
  display: block;
  position: relative;
  right: 0px;
  top: 0px;
  background-color: #f7ffe2;
  transition: all 0.3s ease-out;

  &:hover {
    transition: all 0.3s ease-out;
    box-shadow: 0px 8px 16px rgba(38, 38, 38, 0.2);
    right: 10px;
    top: -10px;
    border: 1px solid #ff0808;
    background-color: white;
  }

  &:hover:before {
    transform: scale(2.15);
  }

  &__header {
    display: flex;
    height: 52px;
    background-color: #42b983;
    justify-content: space-between;
    //align-content: center;
    align-items: center;
  }

  &__title {
  }

  &__star-image {
    max-width: 48px;
    max-height: 48px;
  }


}


</style>
