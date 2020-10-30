import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/scss/paper-kit.scss';
import globalMixins from './globalMixins';

export default {
  install(Vue) {
    Vue.use(globalMixins);
  }
};
