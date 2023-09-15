import { reactive } from "vue";

export const store = reactive({
  apiKey: "016503a4ed3bd0ddaa9fdea6b416405b",
  listApi: {
    apiUriMovie: "https://api.themoviedb.org/3/search/movie",
  },
  movies: [],
});
