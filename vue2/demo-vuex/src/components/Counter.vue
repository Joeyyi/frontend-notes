<template>
  <div>
      <!--  <button @click="increment">Increment</button>
            <button @click="decrement">Decrement</button> -->
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                //this.$emit('updated', 1);
                this.$store.state.counter.counter++;
            },
            decrement() {
                //this.$emit('updated', -1);
                this.$store.state.counter.counter--;
            },
        }
    }
</script>