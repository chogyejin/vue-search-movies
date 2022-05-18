import { createStore } from "vuex";
import router from "~/routes";

export default createStore({
  state() {
    return {
      movies: [],
      movieDetails: null,
    };
  },
  getters: {
    movieList(state) {
      return state.movies;
    },
    movieDetails(state) {
      return state.movieDetails;
    },
  },
  mutations: {
    fetchMovies(state, data) {
      if (!data) {
        alert("검색 결과 없음");
        state.movies = [];
        return;
      }
      state.movies = data;
    },
    fetchMovieDetails: (state, details) => {
      state.movieDetails = details;
      router.push({ path: "details" });
    },
  },
  actions: {
    async fetchMovies({ commit }, keyword) {
      const result = await fetch("/.netlify/functions/movies", {
        method: "POST",
        body: JSON.stringify(keyword),
      }).then((res) => res.json());
      commit("fetchMovies", result.Search);
    },

    async fetchMovieDetails({ commit }, movieId) {
      const result = await fetch("/.netlify/functions/details", {
        method: "POST",
        body: JSON.stringify(movieId),
      }).then((res) => res.json());
      commit("fetchMovieDetails", result);
    },
  },
});
