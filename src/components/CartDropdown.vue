<template>
    <div class="menu-item" >
        <button class="button" @click="isOpen =! isOpen" @keypress="isOpen =! isOpen"><font-awesome-icon icon="shopping-cart" /></button>
        <transition name="fade" appear>
            <div class="sub-menu" v-show="isOpen">
              <h5>購物車</h5>
              <MyCart></MyCart>
              <div class="carts-total">
                <div class="products-total">
                    <p>商品總金額: $999</p>
                    <p>結帳總金額: $999</p>
                </div>
                <button class="order btn btn-danger">結帳</button>
              </div>
            </div>
        </transition>
    </div>
</template>

<script>
import MyCart from './MyCart.vue';

export default {
  name: 'NavDropdown',
  // props: ['title', 'items'],
  data() {
    return {
      isOpen: true,
    };
  },
  components: {
    MyCart,
  },
};

</script>

<style scoped>
nav .menu-item .sub-menu {
    position: absolute;
    right:0;
    width: 400px;
    border: 1px solid #FF0000;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 999;
}

.button{
  width: 100px;
  color: #FF7A7A;
  border: transparent;
  background: #F8D9D9;
  padding: 3vh;
}

.sub-menu a.router-link-exact-active {
  color: #FF5858;
}
</style>
