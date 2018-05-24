<template>
  <div>
      <h3>{{ list.title }}</h3>
      <ul>
        <li v-for="movie in list.subjects" @click="showDetail(movie.alt)">
          <img :src="movie.images.small" alt="image">
          <p>{{ movie.title }}  <span>({{ movie.rating.average }}/10)</span></p>
        </li>
      </ul>
  </div>
</template>

<script>
import jsonp from 'jsonp';
export default {
  props: {
    list: {
      type: Object,
      default: {}
    }
  },
  methods: {
    showDetail(alt) {
      console.log(alt);
        var id = alt.match(/[\d]+/);
        var url = 'https://api.douban.com/v2/movie/subject/' + id;
        var param = 'handleResponse';
        var detail = {};
        jsonp(url, param, (err, res) => {
            if(!err) {
                console.log(res);
                detail = res;      
                this.$store.commit('setMovieDetail', detail);
            } else {
                console.log(err);
            }
        });

      this.$store.commit('setVisibility', true);
    }
  }
}
</script>

<style scoped>

  ul {
    text-align: center;
  }
  
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
