<template>
    <div class="row">
        <div class="col">
            <template>
                <ProductBox></ProductBox>
            </template>
        </div>
    </div>
    <h1>單一產品頁</h1>
</template>

<script>
import ProductBox from '../components/ProductBox.vue';

export default {
  name: 'AllProducts',
  components: {
    ProductBox,
  },
};

</script>

<style scoped>
</style>
