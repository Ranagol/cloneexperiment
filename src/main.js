import Vue from 'vue';
import App from './App.vue';
import Multiplier from './Multiplier.vue';

Vue.component('multiplier', Multiplier);

new Vue({
  el: '#app',
  render: h => h(App)
})
