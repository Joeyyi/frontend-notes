<template>
  <div>
      <!--  <button @click="increment">Increment</button>
            <button @click="decrement">Decrement</button> -->
      <button @click="increment(5)">Increment by 5</button>
      <button @click="decrement(5)">Decrement by 5</button>
      <span>   // Actions</span>
      <br/>
      <button @click="asyncIncrement({step: 10, duration: 1000})">Increment by 10</button>
      <button @click="asyncDecrement({step: 10, duration: 1000})">Decrement by 10</button>
      <span>   // Async Actions</span>
  </div>
</template>

<script>
    //import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';
    export default {
        // methods: {
        //     increment() {
        //         //this.$emit('updated', 1);
        //         this.$store.commit('increment');
        //     },
        //     decrement() {
        //         //this.$emit('updated', -1);
        //         this.$store.commit('decrement');
        //     },
        //}


        // methods: {
        //     ...mapMutations([
        //         'increment',
        //         'decrement'
        //     ])
        // }

        methods: {
            ...mapActions([
                'increment',
                'decrement',
                'asyncIncrement',
                'asyncDecrement',
            ])
        }
    }
</script>