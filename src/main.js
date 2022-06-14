import { createApp } from 'vue';
import { BIconHeart } from 'bootstrap-icons-vue';
// import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);
library.add(faShoppingCart, faInstagram, faFacebookSquare);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.component('BIconHeart', BIconHeart);
// 配置請求根路徑

app.mount('#app');
