import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

// import "../src/assets/styles/scss/variables.scss";

Vue.config.productionTip = false

Vue.use(BootstrapVue)
export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
