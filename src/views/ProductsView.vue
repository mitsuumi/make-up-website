<template>
  <header>
      <navbar :cart ="chosenProducts" ></navbar>
  </header>
  <div class="container-fluid item-position">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="row">
          <div class="col">
            <Breadcrumb></Breadcrumb>
          </div>
        </div>
            <div class="row d-flex justify-content-around">
              <product-box class="col-12 col-md-3" v-for="item in goodsList" @chosen="putIntoCart"
              :initProduct = "item"
              :key="item.id"
              :id="item.id"
              :img="item.imageUrl"
              :title="item.title"
              :price="item.price"
              :count="item.count"
              :sale="item.sale"></product-box>
            </div>
          </div>
        </div>
  </div>
  <my-footer></my-footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ProductBox from '../components/ProductBox.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import MyFooter from '../components/MyFooter.vue';

export default {
  name: 'all-products',
  data() {
    return {
      goodsList: [],
      login: [],
      cart: [],
      chosenProducts: [],
      filter: 'all',
    };
  },
  mounted() {
    // const url = 'http://localhost:8080/data/products.json';
    this.axios.get('/shopList')
      .then((response) => {
        this.goodsList = response.data.data;
        this.goodsList.forEach((good) => {
          // eslint-disable-next-line no-param-reassign
          good.count = 0;
        });
        // console.log('全部商品', this.goodsList);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    ProductBox,
    Breadcrumb,
    MyFooter,
    Navbar,
  },
  methods: {
    putIntoCart(info) {
      this.chosenProducts.push(info);
      this.$emit('cartItem', info);
      // console.log('要加入購物車的商品', this.chosenProducts);
    },
  },
};
</script>

<style scoped>
.item-position{
  margin-top: 100px;
}

</style>
