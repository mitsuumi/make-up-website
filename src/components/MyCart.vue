<template>
    <div class="cart">
        <!-- main-title -->
        <div class="main-title">
            <h4>購物車</h4>
        </div>
        <!-- Item -->
        <div class="cart-items">
            <!-- 左側圖片區 -->
            <div class="left">
                <div class="form-check">
                    <input type="checkbox" value="">
                    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
                    <label class="form-check-label">
                        <img src="@/assets/care1.png" alt="">
                    </label>
                </div>
            </div>
            <!-- 右側文字區 -->
            <div class="right">
                <h5>Body Hero Dry-Touch Oil Mist</h5>
                <div class="item-counts">
                    <p>數量</p>
                    <my-counter :num="count" :min="1" :max="10" @numChange="getNumber"></my-counter>
                </div>
                <div class="price">
                    <p>價格 $999</p>
                </div>
                <button class="submit-btn">移除商品</button>
            </div>
        </div>
        <!-- 金額 -->
        <div class="total-price">
            <p>商品總金額: $999 結帳總金額: $999</p>
        </div>
        <!-- 結帳按鈕 -->
        <button class="btn btn-primary">結帳</button>
    </div>
</template>

<script>
import MyCounter from './MyCounter.vue';

export default {
  name: 'MyGoods',
  components: {
    MyCounter,
  },
  emits: ['stateChange', 'countChange'],
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onCheckBoxChange(e) {
    // 將數值傳給父元件之後，父元件接收到數值，找到對應的商品ID，去修改狀態
      console.log(e.target.checked);
      this.$emit('stateChange', {
        id: this.id,
        value: e.target.checked,
      });
    },
    // 監聽數量變化
    getNumber(num) {
      this.$emit('countChange', {
        id: this.id,
        value: num,
      });
    },
  },
};
</script>
