<template>
  <div>
      <button @click="close">x</button>
      <p>{{ movieDetail }}</p>
  </div>
</template>

<script>
    export default {
        props: {
            isShown: {
                type: Boolean,
                default: false
            },
            movieDetail: {
                default: '222'
            }
        },
        methods: {
            close() {
                this.$emit('on-close');
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: blueviolet;
        position: fixed;
        top: 0;
        left: 0;
    }
</style>
