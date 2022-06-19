<template>
    <div class="cart py-2">
        <!-- Item -->
        <div class="cart-items py-2">
            <!-- 左側圖片區 -->
            <div class="left">
                <div class="form-check">
                    <input type="checkbox" value="" name="item-picture">
                    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
                    <label class="form-check-label cart-img" for="item-picture">
                        <img :src="imgUrl" alt="product-item">
                    </label>
                </div>
            </div>
            <!-- 右側文字區 -->
            <div class="right">
                <h5>{{title}}</h5>
                <div class="item-counts">
                    <p class="py-3">數量</p>
                    <div class="count-container">
                      <button class="btn btn-light btn-sm" @click="onSubClick">-</button>
                      <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                      <input type="number" class="form-control form-control-sm ipt-num" v-model.number.lazy="number">
                      <button class="btn btn-light btn-sm" @click="onAddClick">+</button>
                  </div>
                </div>
                <div class="price">
                    <p>價格 ${{price}}</p>
                </div>
                <button class="submit-btn" @click="removeItem(index)"><font-awesome-icon icon="fa-solid fa-trash-can" />移除商品</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'MyGoods',
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
    imgUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      min: 0,
      max: 10,
      number: 1,
      cartTitle: this.title,
    };
  },
  methods: {
    onSubClick() {
      if (!Number.isNaN(this.min) && this.number - 1 < this.min) { return; }
      this.number -= 1;
    },
    onAddClick() {
      if (this.number >= this.max) { return; }
      this.number += 1;
    },
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
    removeItem(index) {
      this.cartTitle.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.cart{
  overflow:auto;
}
.cart-items{
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-top: 1px solid black; */
  border-bottom: 1px solid black;
  height: 320px;
}
.cart-img img{
  width: 100px;
  height: 100px;
  object-fit: contain;
}
/* 右邊區塊 */
.right{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
/* 增加數量的按鈕 */
.item-counts{
  display: flex;
  justify-content: space-around;
  margin-top:20px;
}
.count-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 150px;
}
.btn{
    width: 139px;
}

.ipt-num{
    width: 100px;
    text-align: center;
    margin: 0 4px;
}

/* 價格 */
.price{
  margin-top: 75px;
}
/* 移除商品的按鈕 */
.submit-btn{
  margin-top: 30px;
  border-radius: 10px;
  width: 105px;
  height: 35px;
  background-color: white;
}
</style>
