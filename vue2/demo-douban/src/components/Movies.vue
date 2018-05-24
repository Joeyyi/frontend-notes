<template>
  <div>
      <ul>
        <li><button @click="getMovieList('in_theaters')">Now in Theaters</button></li>
        <li><button @click="getMovieList('coming_soon')">Coming Soon</button></li>
        <li><button @click="getMovieList('top250')">Top 250</button></li>
      </ul>
      <app-movie-list :list="list"></app-movie-list>
  </div>
</template>

  <script>
  import jsonp from 'jsonp'
  import MovieList from './MovieList.vue'
  export default {
    data() {
      return {
        list: {}
      }
    },
    components: {
      'app-movie-list': MovieList
    },
    methods: {
      getMovieList(title) {
        var url = 'https://api.douban.com/v2/movie/' + title;
        var param = 'handleResponse';
        jsonp(url, param, (err, res) => {
          if(!err) {
            this.list = res;
            console.log(res);
          } else {
            console.log(err);
          }
        });
      }
    },
    mounted() {
      this.getMovieList('in_theaters');
    }
    
  }
</script>

<style scoped>
  li {
    display:inline;
    list-style: none;
  }
</style>
