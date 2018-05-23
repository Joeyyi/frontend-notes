<template>
  <div>
      <p>This is movies component</p>
      <ul>
        <li><button @click="getMovieList('in_theaters')">Now in Theaters</button></li>
        <li><button @click="getMovieList('coming_soon')">Coming Soon</button></li>
        <li><button @click="getMovieList('top250')">Top 250</button></li>
      </ul>
  </div>
</template>

<script>
import jsonp from 'jsonp'
export default {
  methods: {

    getMovieList(title) {
      var url = 'https://api.douban.com/v2/movie/' + title;
      var param = 'handleResponse';
      jsonp(url, param, (err, res) => {
        if(!err) {
          console.log(res);
        } else {
          console.log(err);
        }
      });
    }
  }
  
}
</script>

<style scoped>
  li {
    display:inline;
    list-style: none;
  }
</style>
