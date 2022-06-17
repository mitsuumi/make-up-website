<template>
    <div class="home">
        <home-carousel></home-carousel>
      </div>
    <main>
      <div class="container-fluid">
        <h2>熱賣商品</h2>
        <product-box></product-box>
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

<style scoped>
</style>
