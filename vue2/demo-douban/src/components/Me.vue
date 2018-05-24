<template>
  <div>
    <p>This is my page</p>
    <app-movie-list :list="localMovies"></app-movie-list>  
  </div>

</template>


<script>
  import MovieList from './MovieList.vue';
  export default {
    data() {
      return {
        localMovies: {}        
      }

    },
    components: {
      'app-movie-list': MovieList
    },
    methods:{
      getLocalData() {
        return localStorage.getItem('localMovies') || {};
      }
    },
    mounted() {
      this.localMovies = this.getLocalData();
    }

}
</script>
