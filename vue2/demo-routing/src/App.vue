<template>
  <div id="app">
    <router-view name="header-top"/>    
    <h1>Routing</h1>
    <router-view name="header"/>
    <router-view/>
    <button @click="getLatest">aaa</button>
    <ul>
      <li v-for="subject in inTheaters.subjects"> {{ subject.title }}</li>

    </ul>
  </div>
</template>

<script>
import jsonp from 'jsonp'
import Header from './components/Header.vue'
export default {
  name: 'App',
  data() {
    return {
      inTheaters: {
          subjects: {}
      },
      top250: {}
    }
  },
  methods: {
    // getLatest() {
    //   this.$http.get('/api/movie/in_theaters')
    //   .then((res) => {
    //     this.inTheaters = res;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // },
    getLatest() {
      console.log("!");
      var url = 'https://api.douban.com/v2/movie/in_theaters';
      var param = 'handleResponse';
      jsonp(url, param, (err, res) => {
        if(!err) {
          this.inTheaters = res;
          console.log(res);
        } else {
          console.log(err);
        }
      });
    }
  },
  components: {
    'app-header': Header
  }
  
}
</script>

<style>

</style>
