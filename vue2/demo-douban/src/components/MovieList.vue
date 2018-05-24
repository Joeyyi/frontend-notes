<template>
  <div>
      <p>{{ list.title }}</p>
      <ul>
        <li v-for="movie in list.subjects" @click="showDetail(movie)">
          <img :src="movie.images.small" alt="image">
          <p>{{ movie.title }}  <span>({{ movie.rating.average }}/10)</span></p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: {}
    }
  },
  methods: {
    showDetail(movie) {
      this.$store.commit('setMovieDetail', movie);
      this.$store.commit('setVisibility', true);
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
    display: inline-block;
    width: 25%;
  }

  img {
    width: 80%;
    height: 80%;
  }
</style>
