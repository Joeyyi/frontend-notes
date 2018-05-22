<template>
  <div id="app">
    <h1>Vuex</h1>
    <!-- <app-counter @updated="counter += $event"></app-counter>
    <app-result :counter="counter"></app-result> -->
    <app-counter></app-counter>
    <app-another-counter></app-another-counter>
    <app-result></app-result>
    <app-another-result></app-another-result>
    <input type="text" v-model="value">
    <p>value:{{ value }}</p>

  </div>
</template>

<script>
  import Counter from './components/Counter.vue'
  import Result from './components/Result.vue'
  import AnotherResult from './components/AnotherResult.vue'
  import AnotherCounter from './components/AnotherCounter.vue'
  export default {
    name: 'app',
    data () {
      return {
        counter: 0
      }
    },
    computed: {
      value: {
        get() {
          return this.$store.getters.value;          
        },
        set(value) {
          this.$store.dispatch('updateValue', value);
        }
      }
    },
    components: {
      appCounter: Counter,
      appResult: Result,
      appAnotherResult: AnotherResult,
      appAnotherCounter: AnotherCounter
    }
  }
</script>

<style>

</style>
