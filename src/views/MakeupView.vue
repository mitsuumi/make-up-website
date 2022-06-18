<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="row">
          <div class="col">
            <Breadcrumb></Breadcrumb>
          </div>
        </div>
            <div class="row  d-flex justify-content-around">
                 <product-box class="col-12 col-md-3" v-for="item in makeupList"
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
import ProductBox from '../components/ProductBox.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import MyFooter from '../components/MyFooter.vue';

export default {
  name: 'all-products',
  data() {
    return {
      makeupList: [],
      login: [],
      cart: [],
    };
  },
  mounted() {
    // ../../public/data/products.json
    // const url = 'http://localhost:8080/data/products.json';
    this.axios.get('/shopList')
      .then((response) => {
        const makeupItems = response.data.data.filter((item) => item.productType === 'makeup');
        this.makeupList = makeupItems;
        console.log(this.makeupList);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    ProductBox,
    Breadcrumb,
    MyFooter,
  },
};
</script>
