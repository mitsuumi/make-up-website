<template>
    <div class="card" style="width: 18rem;">
    <router-link :to="{name: 'product',params: {id: id}}">
      <img :src="img" class="card-img-top" alt="...">
      <div class="card-body">
        <div class="title">
          <h5 class="card-title">{{title}}</h5>
        </div>
        <div class="content">
          <p class="card-text original">原價 ${{price}}</p >
          <p class="card-text sale">特價 ${{parseInt(price*0.8)}}</p>
          <button href="#" class="btn btn-primary cartBtn" @click="addCart">加入購物車</button>
          <div class="follow">
            <BIconHeart />
            <span>加入追蹤清單</span>
          </div>
        </div>
      </div>
      </router-link>
    </div>

</template>
<script>
export default {
  name: 'productBox',
  props: {
    id: Number,
    img: String,
    price: Number,
    title: String,
    category: String,
    count: Number,
    initProduct: Object,
  },
  data() {
    return {
    };
  },
  methods: {
    addCart() {
      this.$emit('chosen', this.id);
    },
  },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: black;
}
a:hover{
  color: black;
}
.card{
  border: 1px solid #000;
  border-radius: 0;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.5s;

}
.card:hover{
  transform: scale(1.05);
}
.card img{
  height: 200px;
  object-fit: contain;
}

.card-body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cartBtn{
  margin-bottom: 19px;
  background: rgba(255, 208, 208, 0.2);
  color: #000;
  border-radius: 10px;
  border: 1px solid #FF5858;
  font-size: 1rem;
  transition: transform 0.5s;
}
.cartBtn:hover, .cartBtn:active:hover, .cartBtn.active:hover{
  background-color: white;
  border:  1px solid #FF0000;
  color: #000000;
}

.cartBtn:active, .cartBtn.active, .cartBtn.active.focus{
  background-color: #FFD0D0;
  border-color: #FF0000;
}

.card-title{
  font-size: 1rem;
  line-height: 36px;
}
.card-text{
  font-size: 1rem;
}
.original{
  color: #797979;
  text-decoration:  line-through;
}
.sale{
  color: #FF0000;
}
.follow{
  font-size: 1rem;
  transition: 0.5s;
}
.follow:hover{
  color:red;
}

</style>
