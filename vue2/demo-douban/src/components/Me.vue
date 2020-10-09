<template>
  <div>
    <app-movie-list :list="localData"></app-movie-list>  
  </div>

</template>


<script>
  import MovieList from './MovieList.vue';

  export default {
    computed: {
      localData() {
        let listData = {
          title: '我收藏的电影',
          subjects: this.$store.state.localData
        };
        return listData
      }
    },
    components: {
      'app-movie-list': MovieList
    }

}
</script>


