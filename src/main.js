import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// import "../src/assets/styles/scss/variables.scss";

Vue.config.productionTip = false

// Vue.use(VueAxios, axios)

Vue.use(BootstrapVue)
export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
