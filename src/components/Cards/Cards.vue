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
  <ul>
    <li><img :src="card.poster_path" alt="" /></li>
    <li>Titolo: {{ card.title }}</li>
    <li>Titolo Originale: {{ card.original_title }}</li>
    <li>
      <span>Lingua: </span>
      <img
        v-if="card.original_language"
        :src="card.original_language"
        alt=""
        class="flag-language"
      />
      <span v-else>not found</span>
    </li>
    <li>
      Voto: Stelle
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
</template>

<style lang="scss" scoped>
.flag-language {
  width: 2rem;
  height: 1rem;
}
</style>
