import Vue from 'vue'
import Init from './views/init.vue'



Vue.config.productionTip = false

new Vue({
  render: h => h(Init),
}).$mount('#app')
