<script>
import axios from "axios";
import { store } from "../src/data/store";
import { api, languages } from "./data/dataStatic";

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
      store.searchFilm = true;
    },

    fetchCardsMovie(queryString) {
      axios
        .get(api.listApi.apiUriMovie, {
          params: {
            query: queryString,
            api_key: api.apiKey,
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
              poster_path,
            } = card;

            return {
              id,
              original_title,
              title,
              original_language: this.flags(original_language),
              vote_average: Math.ceil(vote_average / 2),
              poster_path,
            };
          });
        });
    },

    fetchCardsSeries(queryString) {
      axios
        .get(api.listApi.apiUriSeries, {
          params: {
            query: queryString,
            api_key: api.apiKey,
          },
        })
        .then((response) => {
          console.log(response.data.results);
          store.series = response.data.results.map((card) => {
            const {
              id,
              original_name,
              name,
              original_language,
              vote_average,
              poster_path,
            } = card;

            return {
              id,
              original_title: original_name,
              title: name,
              original_language: this.flags(original_language),
              vote_average: Math.ceil(vote_average / 2),
              poster_path,
            };
          });
        });
    },

    flags(language) {
      let flag;
      if (languages.includes(language)) {
        flag = "../public/img/flags/" + language + ".png";
      } else {
        flag = false;
      }
      return flag;
    },

    posterPath() {},
  },
};
</script>

<template>
  <AppHeader @form-submit="fetchCards" />
  <AppMain />
</template>

<style lang="scss" scoped></style>
