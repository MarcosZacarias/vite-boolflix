<script>
// import MyComponent from "./components/MyComponent.vue";

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
    printHello() {
      console.log("ciao");
    },
  },
};
</script>

<template>
  <div>
    <div class="card-film">
      <ul class="card-media">
        <li class="film-poster">
          <img :src="card.poster_path" alt="" />
        </li>
      </ul>
      <ul class="card-text">
        <li><strong>Titolo: </strong>{{ card.title }}</li>
        <li><strong>Titolo Originale: </strong> {{ card.original_title }}</li>
        <li>
          <span><strong>Lingua: </strong> </span>
          <img
            v-if="card.original_language"
            :src="card.original_language"
            alt=""
            class="flag-language"
          />
          <span v-else>not found</span>
        </li>
        <li>
          <strong>Voto: </strong>
          <span class="full-star">
            <font-awesome-icon
              v-for="n in card.vote_average"
              icon="fa-solid fa-star"
              inverse
            />
          </span>
          <span class="void-star">
            <font-awesome-icon
              v-for="n in 5 - card.vote_average"
              icon="fa-regular fa-star"
            />
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
