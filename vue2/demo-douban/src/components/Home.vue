<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: '主页空空如也:) 去看看电影吧！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
