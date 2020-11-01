import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/scss/paper-kit.scss';
import '@/assets/demo/demo.css';
import globalMixins from './globalMixins';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)


export default {
  install(Vue) {
    Vue.use(globalMixins);
  }
};
