<template>
  <div>
      <p>The counter is: {{ counter }}</p>
  </div>
</template>

<script>
    export default {
        //props: ['counter']
        computed: {
            counter() {
                console.log(this.$store.state)
                return this.$store.state.counter.counter;//????? after exporting counter.js, state.counter becomes an obj. {counter: Object, value: 0} why???
                //return this.$store.state.counter;
                //return this.$store.getters.doubleCounter;
            }
        }
    }
</script>