import Vue from 'vue'
import App from './App.vue'
import Contact from "@/Contact";
import DataContact from "@/DataContact";

Vue.config.productionTip = false
Vue.component('contact-component', Contact);
Vue.component('data-contact-component', DataContact);
new Vue({
  render: h => h(App),
}).$mount('#app')
