<template>
  <h1>{{ movieDetails.Title }}</h1>
  <div class="movie-info">
    <div class="left">
      <div>
        <img :src="movieDetails.Poster" alt="poster" />
      </div>
      <div>
        개봉 :
        {{ movieDetails.Year !== "N/A" ? movieDetails.Year : "정보없음" }}년
      </div>
      <div>
        상영시간 :
        {{
          movieDetails.Runtime !== "N/A"
            ? `${movieDetails.Runtime.slice(0, -3)}분`
            : "정보없음"
        }}
      </div>
      <div>
        출연 :
        {{ movieDetails.Actors !== "N/A" ? movieDetails.Actors : "정보없음" }}
      </div>
      <div>
        감독 :
        {{
          movieDetails.Director !== "N/A" ? movieDetails.Director : "정보없음"
        }}
      </div>
      <div>
        평점 :
        {{
          movieDetails.imdbRating !== "N/A"
            ? movieDetails.imdbRating
            : "정보없음"
        }}
      </div>
    </div>
    <div class="right">
      <h2>줄거리</h2>
      <span>{{
        movieDetails.Plot !== "N/A" ? movieDetails.Plot : "정보없음"
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movieDetails() {
      return this.$store.getters.movieDetails;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-info {
  display: flex;
  .left {
    margin: 0 20px;
  }
}
img {
  width: 300px;
  height: 400px;
}
</style>
