<template>
    <header>
    </header>
    <div class="home">
        <home-carousel></home-carousel>
      </div>
    <main>
       <h2>熱賣商品</h2>
      <div class="row">
        <div class="col-md-10">
          <div class="row">
            <div class="col-lg-3">
               <product-box></product-box>
            </div>
          </div>
        </div>
      </div>

    </main>

</template>

<script>
import HomeCarousel from '../components/CarouselHome.vue';
import ProductBox from '../components/ProductBox.vue';

export default {
  name: 'HomeView',
  components: {
    HomeCarousel,
    ProductBox,
  },
};
</script>
