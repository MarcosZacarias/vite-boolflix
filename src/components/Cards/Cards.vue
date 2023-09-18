<script>
// import MyComponent from "./components/MyComponent.vue";
import { poster } from "../../data/dataStatic";

export default {
  data() {
    return {
      voteStars: [],
    };
  },

  props: {
    card: Object,
    key: String,
  },

  // components: {
  //   MyComponent,
  // },
  methods: {
    printStars(n) {
      return n < this.card.vote_average
        ? `fa-solid fa-star`
        : `fa-regular fa-star`;
    },
  },

  computed: {
    posterSrc() {
      if (!this.card.poster_path)
        return `../../../public/img/poster/no-poster.png`;
      return `${poster.baseUrl}${poster.size}${this.card.poster_path}`;
    },
  },
};
</script>

<template>
  <div>
    <div class="card-film">
      <ul class="card-media">
        <li class="film-poster">
          <img :src="posterSrc" alt="" />
        </li>
      </ul>
      <ul class="card-text">
        <li><strong>Titolo: </strong>{{ card.title }}</li>
        <li><strong>Titolo Originale: </strong> {{ card.original_title }}</li>
        <li v-if="card.original_language">
          <span><strong>Lingua: </strong> </span>
          <img :src="card.original_language" alt="" class="flag-language" />
        </li>
        <li>
          <strong>Voto: </strong>
          <span class="full-star">
            <font-awesome-icon v-for="n in 5" :icon="printStars(n)" />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-film {
  position: relative;
  cursor: pointer;
  &:hover .card-text {
    display: inline-block;
  }
  .card-media {
    width: 100%;
    padding: 0;

    .film-poster {
      width: 100%;
      height: 513px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .card-text {
    display: none;

    padding: 15px;

    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;

    background-color: rgba($color: #747474, $alpha: 0.8);
  }
}
.flag-language {
  width: 2rem;
  height: 1rem;
}
</style>
