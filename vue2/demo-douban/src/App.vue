<template>
  <div id="app">
    <app-header></app-header>
    <transition name="flip">
      <app-movie-detail v-show="isShown" ></app-movie-detail>
    </transition>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MovieDetail from './components/MovieDetail.vue'



export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-movie-detail': MovieDetail
  },
  computed: {
    isShown() {
      return this.$store.state.detailIsShown
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:darkslategray;
  }


  .flip-enter-active {
      animation: flip-out 0.5s ease-out forwards;
  }


  .flip-leave-active {
      animation: flip-in 0.5s ease-out forwards;
  }

  @keyframes flip-in {
      from {
          transform: rotateY(0deg);
      }
      to {
          transform: rotateY(90deg);
      }
  }

  @keyframes flip-out {
      from {
          transform: rotateY(90deg);
      }
      to {
          transform: rotateY(0deg);
      }
  }
  </style>
