<template>
  <div class="space-page">

    <h1 class="space-page__title">
      Space
    </h1>

    <div class="space-page__body">
      <museum-highlight
          v-for="(item,i) in orderedSpaceHighlights"
          :background-color="item.external ? externalCardColor : cardColor"
          :data="item"
          :fallback-image=fallbackImage
          :key="i">
        <template #museum-highlight__icon>
          <img :src="star" class="space-page__icon" alt=""/>
        </template>

        <template #museum-highlight__body-prepend v-if="item.news">
          <space-page-news-box :news="item.news"/>
        </template>

        <template #museum-highlight__body-append v-if="item.quiz">
          <br>
          <a :href="item.quiz">view the quiz here</a>
        </template>

      </museum-highlight>


<!--      <museum-highlight background-color="#ff0808" :data="dinoMock">-->
<!--        <template #museum-highlight__icon>-->
<!--          <font-awesome-layers class="fa-3x">-->
<!--            <font-awesome-icon class="" icon="fa-regular fa-circle"/>-->
<!--            <font-awesome-icon class="" style="" transform="shrink-7" icon="fa-solid fa-horse-head "/>-->
<!--          </font-awesome-layers>-->
<!--        </template>-->
<!--      </museum-highlight>-->
<!--      <museum-highlight :data="oceansMock">-->
<!--        <template #museum-highlight__icon>-->
<!--          <font-awesome-icon class="" icon="fa-solid fa-water"/>-->
<!--          <font-awesome-icon class="" style="" transform="shrink-7" icon="fa-solid fa-fish-fins "/>-->
<!--        </template>-->
<!--      </museum-highlight>-->
<!--      <museum-highlight :data="oceansMock"></museum-highlight>-->

    </div>
  </div>
</template>

<script>
import MuseumHighlight from './components/MuseumHighlight';
import star from "./assets/star.png";
import {orderBy} from 'lodash';
import SpacePageNewsBox from "./components/SpacePageNewsBox";
import variables from './assets/space.scss'


export default {
  name: 'SpacePage',
  components: {
    MuseumHighlight,
    SpacePageNewsBox,
  },
  mixins: [],
  props: {},
  data() {
    return {
      star: star,
      cardColor: variables.primaryColor,
      externalCardColor: variables.externalPrimaryColor,
      fallbackImage:"http://picsum.photos/id/1042/300/300",
      combinedSpaceData: [],
      dinoMock: {
        date: '2020-04-20 12:20:00',
        description: 'The T-rex is a very common type of dinosaur',
        id: 9999,
        image: '',
        name: 'T-Rex',
      },
      oceansMock: {
        date: '2020-04-20 12:20:00',
        description: 'The Pacific ocean is located specifically between europe and the USA',
        id: 9998,
        image: '',
        name: 'Pacific',
      },
      spaceHighlights: [
        {
          date: '2020-04-20 12:20:00',
          description: 'Asteroids are minor planets, especially of the inner Solar System. Larger asteroids have also been called planetoids.',
          id: 1,
          image: '',
          name: 'Asteroids',
        },
        {
          date: '2020-05-20 15:50:00',
          description: 'A comet is an icy, small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing.',
          id: 9,
          image: '',
          name: 'Comets',
        },
        {
          date: '2020-05-01 9:22:00',
          description: 'The term planet is ancient, with ties to history, astrology, science, mythology, and religion.',
          id: 7,
          image: '',
          name: 'Planets',
          news: {
            date: '2020-08-18 18:00:00',
            title: 'Attend our talk about Jupiter with Dr. Hogarth',
          },
          quiz: 'https://planetquiz.space',
        },
        {
          date: '2020-07-05 4:10:00',
          description: 'A meteor shower is a celestial event in which a number of meteors are observed to radiate, or originate, from one point in the night sky.',
          id: 12,
          image: '',
          name: 'Meteor showers',
          news: {
            title: 'The Lyrids will peak at on April 21-22 2021, at night',
          },
        },
      ],
      spacePartners: {
        observatory: {
          createdAt: '2020-06-01 11:45:00',
          info: 'The Mauna Kea Observatories (MKO) are a number of independent astronomical research facilities and large telescope observatories that are located at the summit of Mauna Kea on the Big Island of Hawaiʻi, United States.',
          image: '',
          name: 'Mauna Kea Observatories',
        },
      },
    };
  },
  computed: {
    orderedSpaceHighlights() {
      return orderBy(this.combinedSpaceData, ['date'], ['desc'])
    },
  },
  methods: {},
  created() {
    let tempArray = []
    for (const key of Object.keys(this.spacePartners)) {
      let tempObj = {
        date: this.spacePartners[key].createdAt,
        description: this.spacePartners[key].info,
        name: this.spacePartners[key].name,
        image: this.spacePartners[key].image,
        external: true,
      }
      tempArray = [...tempArray, tempObj]
    }
    this.combinedSpaceData = [...this.spaceHighlights, ...tempArray]
  },
};
</script>

<style lang="scss" scoped>
@use 'assets/_variables.scss';

.space-page {
  &__title {
    color: #2c3791;
    font-size: 24px;
    font-weight: 600;
  }

  &__body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    column-gap: 1em;
    row-gap: 1em;

    @media only screen and (min-width:  map-get( variables.$grid-breakpoints, 'md') ) {
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 1em;
      row-gap: 1em;
    }

  }

  .space-page__icon {
    max-height: 48px;
    max-width: 48px;
  }
}
</style>
