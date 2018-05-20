<template>
  <div>
    <input type="text" v-model="filterText">
    <ul>
      <li v-for="fruit in filterFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
  import { fruitMixin } from './fruitMixin';
  export default {
    mixins: [fruitMixin],
    created() {
      console.log('list created hook');
    }
  }
</script>

<style>



</style>
