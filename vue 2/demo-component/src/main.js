import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods:{
    log(text){ 
      
      this.$emit('logged', text);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

