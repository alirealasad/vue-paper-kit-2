import 'bootstrap/dist/css/bootstrap.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import '@/assets/scss/paper-kit.scss';
import '@/assets/demo/demo.css';
import globalMixins from './globalMixins';
import globalDirectives from './globalDirectives';

locale.use(lang)


export default {
  install(Vue) {
    Vue.use(globalMixins);
    Vue.use(globalDirectives);
  }
};
