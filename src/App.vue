<script>
import axios from "axios";
import { store } from "../src/data/store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    fetchCards(endoPoint) {
      axios.get(store.listApi.apiUriMovie + endoPoint).then((response) => {
        console.log(response.data.results);
        const cardsData = response.data.results.map((card) => {
          const { original_title, title, original_language, vote_average } =
            card;
          return { original_title, title, original_language, vote_average };
        });

        console.log(cardsData);
        store.movies = cardsData;
      });
    },
  },
};
</script>

<template>
  <AppHeader @form-submit="fetchCards" />
  <AppMain />
</template>

<style lang="scss" scoped></style>
