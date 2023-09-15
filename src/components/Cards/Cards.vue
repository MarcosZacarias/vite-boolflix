<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
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
    <li>Voto: {{ card.vote_average }}</li>
  </ul>
</template>

<style lang="scss" scoped>
.flag-language {
  width: 2rem;
  height: 1rem;
}
</style>
