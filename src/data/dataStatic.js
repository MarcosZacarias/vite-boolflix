const api = {
  apiKey: "016503a4ed3bd0ddaa9fdea6b416405b",
  listApi: {
    apiUriMovie: "https://api.themoviedb.org/3/search/movie",
    apiUriSeries: "https://api.themoviedb.org/3/search/tv",
  },
};

const languages = ["it", "en"];

const poster = {
  baseUrl: "https://image.tmdb.org/t/p",
  size: "/w342",
};

export { api, languages, poster };
