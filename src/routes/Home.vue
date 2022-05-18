<template>
  <div>
    <SearchBar />
    <Movies />
    <!-- <RouterView /> -->
  </div>
</template>

<script>
import Movies from "~/components/Movies";
import SearchBar from "~/components/SearchBar";

export default {
  components: {
    Movies,
    SearchBar,
  },
};
</script>
