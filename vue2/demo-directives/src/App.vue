<template>
  <div id="app">
    <h1>Built-in Directives </h1>
    <p v-text="Something"></p>
    <p >Some Strong Text</p>
    <h1>Custom Directives </h1>
    <p v-highlight="'green'">[binding.value] Highlight Text</p>    
    <p v-highlight:background="'yellow'">[binding.arg] Highlight Background</p>
    <p v-highlight:background.delayed="'yellow'">[binding.modifiers] Delayed</p>
    <p v-local-highlight:background.delayed.blink="{mainColor: 'blue', secondColor : 'green', delay: 500}">[local directives] blink</p>

  </div>
</template>

<script>
export default {
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        var delayed = 0;
        if(binding.modifiers['delayed']){
          delayed = 2000;
        }
        if(binding.modifiers['blink']){
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
              if(binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
              
            }, binding.value.delay);

          }, 2000);

        } else {
          setTimeout(() => {
            if(binding.arg == 'background') {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delayed);
        }
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
