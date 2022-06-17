<template>
      <div class="card" style="width: 18rem;">
      <img src="../assets/care1.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Body Hero Dry-Touch Oil Mist</h5>
        <p class="card-text original">原價 $3,320</p >
        <p class="card-text sale">特價 $2,100</p>
        <a href="#" class="btn btn-primary cartBtn">加入購物車</a>
        <div class="follow">
          <BIconHeart />
          <span>加入追蹤清單</span>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  name: 'productBox',
};
</script>

<style scoped>
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
