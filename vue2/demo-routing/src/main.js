// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
 console.log('global before each');
 next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  //shortcut for router: router
  components: { App },
  template: '<App/>'
})

