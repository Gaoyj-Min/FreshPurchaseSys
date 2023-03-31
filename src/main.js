import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import 'normalize.css'
import '@/assets/css/base.css'
import router from './router/index.js'
import VueRouter from 'vue-router'
import api from './api/index.js'
import store from '@/store/index'
Vue.prototype.$api = api;
Vue.config.productionTip = false;


Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router: router,
  store,
  mounted(){
    console.log(this.$router);
  }
}).$mount('#app')
