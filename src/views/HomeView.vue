<template>
    <div class="home">
        <home-carousel></home-carousel>
      </div>
    <main>
      <div class="container-fluid">
         <div class="row justify-content-center">
          <div class="col-md-10">
            <!-- 熱賣商品區域 -->
            <div class="sale-products">
              <div class="sale-title d-flex justify-content-between align-items-center py-5">
                <h2>熱賣商品</h2>
                <a href="#">瀏覽全部</a>
              </div>
              <div class="sale-items row justify-content-around ">
                <product-box class="col-md-3" v-for="item in sale"
                            :key="item.id"
                              :id="item.id"
                              :img="item.imageUrl"
                              :title="item.title"
                              :price="item.price"
                              :count="item.count"
                              :sale="item.sale">
                </product-box>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
    <my-footer></my-footer>
</template>

<script>
import HomeCarousel from '../components/CarouselHome.vue';
import ProductBox from '../components/ProductBox.vue';
import MyFooter from '../components/MyFooter.vue';

export default {
  name: 'HomeView',
  components: {
    HomeCarousel,
    ProductBox,
    MyFooter,
  },
  data() {
    return {
      sale: [],
      makeupList: [],
      facialCareList: [],
    };
  },
  mounted() {
    // ../../public/data/products.json
    // const url = 'http://localhost:8080/data/products.json';
    this.axios.get('/shopList')
      .then((response) => {
        const result = response.data.data;
        this.sale = result.filter((item) => item.sale === true);
        this.makeupList = result.filter((item) => item.productType === 'makeup');
        this.facialCareList = result.filter((item) => item.productType === 'cosmetics');
        console.log('sale', this.sale);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
h2 {
  font-size: 32px;
}

.home{
  margin-bottom: 62px;
}

.sale-title{
  border-top: 3px solid #FFB6D0;
}
.sale-items{
  margin-bottom: 165px;
}

</style>
