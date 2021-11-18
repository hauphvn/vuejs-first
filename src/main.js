import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.config.globalProperties.$filter = {

}
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
  render: h => h(App),
}).$mount('#app')
