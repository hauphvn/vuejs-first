import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './router';
Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({  mode: 'history', routes});
Vue.directive('tee-custom',{
  bind(el, binding){
    let delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg === 'highlight'){
        el.style.backgroundColor = binding.value;
      }else{
        el.style.fontSize = '30px';
      }
    }, delay);
  }
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
