<template>
    <header>
      <navbar ></navbar>
    </header>
    <div class="home item-position">
        <home-carousel></home-carousel>
      </div>
    <main>
      <section class="container-fluid">
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
                            :init-product="item"
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
      </section>
      <section class="col slogan">
            <h2 class="py-5">Beauty inspired by real life.</h2>
            <p>渲染更多的美麗，人生更加光彩</p>
      </section>
      <section class="container-fluid">
         <div class="row justify-content-center">
          <div class="col-md-10">
            <!-- 熱賣商品區域 -->
            <div class="cosmetics-products">
              <div class="sale-title d-flex justify-content-between align-items-center py-5">
                <h2>第一步:保養肌膚</h2>
                <a href="#">瀏覽全部</a>
              </div>
              <div class="cosmetics-items row justify-content-around ">
                <product-box class="col-md-3 product-box" v-for="item in cosmeticsList"
                            :init-product="item"
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
      </section>
      <section class="container-fluid">
         <div class="row justify-content-center">
          <div class="col-md-10">
            <!-- 熱賣商品區域 -->
            <div class="makeup-products">
              <div class="sale-title d-flex justify-content-between align-items-center py-5">
                <h2>第二步:化妝</h2>
                <a href="#">瀏覽全部</a>
              </div>
              <div class="makeup-items row justify-content-around ">
                <product-box class="col-md-3 product-box" v-for="item in makeupList"
                        :init-product="item"
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
      </section>
      <section class="container-fluid">
         <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="promote-section">
                <div class="picture">
                  <img src="https://i.imgur.com/WxLywmH.png" alt="甘醇酸去角質化妝水">
                </div>
                <div class="promote-content">
                  <h5>The Ordinary 甘醇酸去角質化妝水</h5>
                  <p>加拿大知名品牌保養品，歐美熱銷網紅一致推薦，改善肌膚暗沉、均勻膚色
        ，甘醇酸果酸調理肌膚促進角質更新，使肌膚滑嫩光潤。加入馬尼亞胡椒莓成分，可修護肌膚。</p>
          </div>
        </div>
      </div>
      </div>
       </section>
       <section class="container-fluid">
         <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="promote-section ">
                <div class="picture order-md-2">
                  <img src="https://i.imgur.com/Cqkd7Qa.png" alt="Physicians Formula Murumuru Butter Blush 腮紅">
                </div>
                <div class="promote-content order-md-1">
                  <h5>Physicians Formula 奶油腮紅 <br>Murumuru Butter Blush</h5>
                  <p>An ultra-luxurious blush, infused with Murumuru Butter to deliver a radiant Brazilian goddess glow! Incredibly creamy and soft texture combines the best features of a powder and cream blush, to deliver a lit-from-within tropical glow unlike any other.</p>
          </div>
        </div>
      </div>
      </div>
       </section>
    </main>
    <my-footer></my-footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import HomeCarousel from '../components/CarouselHome.vue';
import ProductBox from '../components/ProductBox.vue';
import MyFooter from '../components/MyFooter.vue';

export default {
  name: 'HomeView',
  components: {
    HomeCarousel,
    ProductBox,
    MyFooter,
    Navbar,
  },
  data() {
    return {
      sale: [],
      makeupList: [],
      cosmeticsList: [],
      chosenProducts: [],
    };
  },
  mounted() {
    // ../../public/data/products.json
    // const url = 'http://localhost:8080/data/products.json';
    this.axios.get('/shopList')
      .then((response) => {
        const result = response.data.data;
        this.sale = result.filter((item) => item.sale === true);
        this.makeupList = result.filter((item) => item.productType === 'makeup').slice(0, 4);
        this.cosmeticsList = result.filter((item) => item.productType === 'cosmetics').slice(0, 4);
        console.log('sale', this.sale);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    // putIntoCart(info) {
    //   this.chosenProducts.push(id);
    //   console.log(this.chosenProducts);
    // },
  },
};
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.item-position{
  margin-top: 7vh;
}
h2 {
  font-size: 32px;
}

.home{
  margin-bottom: 62px;
}

/* 熱賣商品區 */
.sale-products{
  border-top: 3px solid #FFB6D0;
  border-bottom: 3px solid #FFB6D0;
  padding-top: 33px;
  padding-bottom: 131px;
  margin-bottom: 165px;
}

/* slogan區域 */
.slogan{
  height: 30vh;
  background-color: #F8D9D9;
  margin-bottom: 49px;
}

/* 保養品區 */
.cosmetics-products{
  margin-bottom: 43px;
  border-bottom: 1px solid rgba(255, 182, 208, 0.7);
}
.cosmetics-items{
  padding-bottom: 138px;
}
/* 化妝品區 */
.makeup-products{
  margin-bottom: 138px;
  border-bottom: 1px solid rgba(255, 182, 208, 0.7);
}
.makeup-items{
  padding-bottom: 138px;
}

.promote-section{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 194px;
}
/*
.promote-section::after{
  content:'';
  background-color: rgba(248, 217, 217, 0.2);
  width: 100%;
  height: 200px;
} */
.picture img{
  height: 450px;
}
.promote-content{
  width:1067px;
  background-color: rgba(248, 217, 217, 0.2);
  padding: 50px;
}
.promote-content h5{
  font-size: 45px;
  font-weight: 400;
  padding-bottom: 55px;
}
.promote-content{
  line-height: 1.5;
}
</style>
