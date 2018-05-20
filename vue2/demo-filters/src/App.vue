<template>
  <div id="app">
    <h1>Filters & Mixins</h1>
    <p>{{ text | toUppercase }}</p>
    <p>{{ text | toUppercase | to-lowercase}}</p>
    <input type="text" v-model="filterText">
    <input type="text" v-model="newFruit">
    <button @click="fruits.push(newFruit)">Add New Fruit</button>
    <ul>
      <li v-for="fruit in filterFruits">{{ fruit }}</li>
    </ul>

    <app-list></app-list>
  </div>
</template>

<script>
import List from './List.vue';
import { fruitMixin } from './fruitMixin';
export default {

  data () {
    return {
      text: 'Hello there!',
      newFruit:''
    }
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  },
  mixins: [fruitMixin]

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
