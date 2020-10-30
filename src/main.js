import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import PaperUiKit from './plugins/paper-ui-kit';
import router from './router'

Vue.config.productionTip = false
Vue.use(PaperUiKit);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
