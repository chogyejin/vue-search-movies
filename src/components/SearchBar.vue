<template>
  <header>
    <h1 class="header-title">영화 검색기</h1>
    <form class="searchbar">
      <input v-model="keyword" type="text" />
      <button type="submit" @click.prevent="getMovies">GO</button>
    </form>
  </header>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    getMovies() {
      this.$store.dispatch("fetchMovies", this.keyword);
    },
  },
};
</script>

<style scoped lang="scss">
.header-title {
  text-align: center;
  margin: 20px 0;
  color: skyblue;
}
.searchbar {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 50vw;
    height: 40px;
    border-radius: 10px;
    font-size: 30px;
    outline: none;
    padding: 10px;
  }
  button {
    color: white;
    border: none;
    margin: 20px;
    width: 50px;
    height: 40px;
    border-radius: 10px;
    background: rgb(6, 14, 131);
    background: linear-gradient(
      0deg,
      rgba(6, 14, 131, 1) 0%,
      rgba(12, 25, 180, 1) 100%
    );
    &:hover {
      background: rgb(0, 3, 255);
      background: linear-gradient(
        0deg,
        rgba(0, 3, 255, 1) 0%,
        rgba(2, 126, 251, 1) 100%
      );
    }
  }
}
</style>
