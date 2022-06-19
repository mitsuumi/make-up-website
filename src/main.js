import { createApp } from 'vue';
import { BIconHeart } from 'bootstrap-icons-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookSquare, faInstagram, faCcMastercard, faLine, faCcApplePay,
} from '@fortawesome/free-brands-svg-icons';
import {
  faShoppingCart, faBars, faUser, faEye, faEyeSlash, faHeart, faCreditCard, faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../public/reset.css';

const app = createApp(App);
library.add(faShoppingCart, faBars, faInstagram, faFacebookSquare, faUser, faEye, faEyeSlash, faHeart, faCreditCard, faCcMastercard, faLine, faCcApplePay, faTrashCan);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(VueAxios, axios);
app.component('BIconHeart', BIconHeart);
// 配置請求根路徑

app.mount('#app');
