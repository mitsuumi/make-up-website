<template>
    <div class="menu-item" >
        <button class="cartButton" @click="isOpen =! isOpen" @keypress="isOpen =! isOpen"><font-awesome-icon icon="shopping-cart" /></button>
        <transition name="fade" appear>
            <div class="sub-menu" v-show="isOpen">
              <h5>購物車</h5>
              <!-- eslint-disable-next-line vue/valid-v-for -->
              <MyCart v-for="item in cart" :title="item.title" :count="item.count" :price="item.price" :imgUrl="item.img"></MyCart>
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
  props: ['cart'],
  data() {
    return {
      isOpen: true,
      cartItem: null,
      propsItem: this.cart,
    };
  },
  components: {
    MyCart,
  },
  mounted() {
    this.axios.get('/shopList')
      .then((response) => {
        const productItem = response.data.data.filter((item) => item.id === this.propsItem.forEach((mono) => Number(mono.id)));
        console.log(this.propsItem);
        console.log('購物車商品:', productItem);
        // eslint-disable-next-line prefer-destructuring
        this.cartItem = productItem;
      })
      .catch((error) => {
        console.log(error);
      });
  },

};

</script>

<style scoped>
.sub-menu{
  position: relative;
  padding: 25px 10px;
}
nav .menu-item .sub-menu {
    position: absolute;
    right:0;
    width: 400px;
    border: 1px solid #FF0000;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 999;
    height: 90vh;
    overflow:auto;
}

.sub-menu h5{
  font-size: 1.5rem;
  background-color: #FF7A7A;
  padding: 10px 0;
}

.cartButton{
  width: 100px;
  color: #FF7A7A;
  border: transparent;
  background: #F8D9D9;
  padding: 3vh;
}

.sub-menu a.router-link-exact-active {
  color: #FF5858;
}
/* 商品總金額 */
.products-total{
  display: flex;
  justify-content: flex-end;
}
.products-total p{
  margin-right:10px;
  margin-bottom: 30px;
}

/* 結帳按鈕顏色 */
.order{
  background: #FF5858;
  border: none;
  width: 140px;
  height: 45px;
}
</style>
