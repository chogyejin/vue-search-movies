<template>
  <div v-if="movieList.length !== 0" class="movies-container">
    <div
      v-for="movie in movieList"
      :key="movie.imdbID"
      class="item-container"
      @click="getMovieDetails(movie.imdbID)"
    >
      <div><img :src="movie.Poster" /></div>
      <div>Title : {{ movie.Title }}</div>
      <div>Year : {{ movie.Year }}</div>
    </div>
  </div>
  <div v-else>
    <h2 class="notice">영화를 검색하세요</h2>
  </div>
</template>

<script>
export default {
  computed: {
    movieList() {
      return this.$store.getters.movieList;
    },
  },
  methods: {
    getMovieDetails(movieId) {
      this.$store.dispatch("fetchMovieDetails", movieId);
    },
  },
};
</script>

<style lang="scss" scoped>
.movies-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .item-container {
    width: 200px;
    margin: 10px 30px;
    cursor: pointer;
    img {
      width: 100%;
      height: 300px;
      border-radius: 20px;
    }
  }
}
.notice {
  text-align: center;
  color: rgb(168, 168, 168);
}
</style>
