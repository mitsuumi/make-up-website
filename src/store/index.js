import vuex from 'vuex';
import axios from 'axios';

vuex.use(vuex);

export default new vuex.Store({
  state: {
    isLogin: false,
    productsList: [],
    isLoading: false,
    serverPath: 'http://localhost:3000',
    cartInfo: {
      cartList: [],
      total: 0,
      final_total: 0,
    },
    category: '全部',
  },
  getters: {
    // filterProductsList(state){
    // },
  },
  mutations: {

  },
  actions: {
    GetProducts() {
      axios.get('/shopList')
        .then((response) => {
          this.productsList = response.data.data;
          console.log('vuex裡面的:productsList', this.productsList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {

  },
});
