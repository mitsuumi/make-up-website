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
                 <product-box class="col-12" v-for="item in goodsList"
              :key="item.id"
              :id="item.id"
              :thumb="item.goods_img"
              :title="item.goods_name"
              :price="item.goods_price"
              :count="item.goods_count"
              :checked="item.goods_state"></product-box>
            </div>
          </div>
        </div>
    <font-awesome-icon icon="shopping-cart" />
  </div>

</template>

<script>
// import axios from 'axios';
import axios from 'axios';
import ProductBox from '../components/ProductBox.vue';
import Breadcrumb from '../components/Breadcrumb.vue';

export default {
  name: 'all-products',
  data() {
    return {
      goodsList: [],
    };
  },
  mounted() {
    // ../../public/data/products.json
    const url = 'http://localhost:8080/data/products.json';
    axios.get(url)
      .then((response) => {
        this.goodsList = response.data;
        console.log(this.goodsList);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    ProductBox,
    Breadcrumb,
  },
};
</script>
