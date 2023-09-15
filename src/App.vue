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
    fetchCards(textSearch) {
      this.fetchCardsMovie(textSearch);
      this.fetchCardsSeries(textSearch);
    },

    fetchCardsMovie(queryString) {
      axios
        .get(store.listApi.apiUriMovie, {
          params: {
            query: queryString,
            api_key: store.apiKey,
          },
        })
        .then((response) => {
          console.log(response.data.results);
          store.movies = response.data.results.map((card) => {
            const {
              id,
              original_title,
              title,
              original_language,
              vote_average,
            } = card;

            return {
              id,
              original_title,
              title,
              original_language: this.flags(original_language),
              vote_average,
            };
          });
        });
    },

    fetchCardsSeries(queryString) {
      axios
        .get(store.listApi.apiUriSeries, {
          params: {
            query: queryString,
            api_key: store.apiKey,
          },
        })
        .then((response) => {
          console.log(response.data.results);
          store.series = response.data.results.map((card) => {
            const { id, original_name, name, original_language, vote_average } =
              card;

            return {
              id,
              original_title: original_name,
              title: name,
              original_language: this.flags(original_language),
              vote_average,
            };
          });
        });
    },

    flags(language) {
      let flag;
      if (language == "it" || language == "en") {
        flag = "../public/img/flags/" + language + ".png";
      } else {
        flag = false;
      }
      return flag;
    },
  },
};
</script>

<template>
  <AppHeader @form-submit="fetchCards" />
  <AppMain />
</template>

<style lang="scss" scoped></style>
