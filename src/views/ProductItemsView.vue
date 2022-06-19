<template>
<div>
    <div class="container">
<!--左邊商品圖-->
        <div class="imgArea">
            <img :src="idProduct.imageUrl" alt="產品的照片">
        </div>
<!--右邊細節圖-->
        <div class="detailsArea">

            <!--產品名和種類-->
            <div class="titleAndSort">
                <h2 class="title">{{ idProduct.title }}</h2>
                <p class="sort"> {{  idProduct.productType }}</p>
            </div>

            <!--產品介紹和價錢-->
            <p  style="text-align: justify" class="introductionText"> {{ introduction }}</p>

            <div class="productDetails">
                <div class="pay">
                    <span class="originalPay"> {{ idProduct.price }} </span> <span class="discountPay"> {{ parseInt(idProduct.price * 0.8) }} </span>
                </div>
            </div>

            <!--數量和付款方式-->
            <div class="btnAndCheckOut">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        請選擇數量
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">1</a></li>
                        <li><a class="dropdown-item" href="#">2</a></li>
                        <li><a class="dropdown-item" href="#">3</a></li>
                        <li><a class="dropdown-item" href="#">4</a></li>
                        <li><a class="dropdown-item" href="#">5</a></li>
                        <li><a class="dropdown-item" href="#">6</a></li>
                        <li><a class="dropdown-item" href="#">7</a></li>
                        <li><a class="dropdown-item" href="#">8</a></li>
                        <li><a class="dropdown-item" href="#">9</a></li>
                        <li><a class="dropdown-item" href="#">10</a></li>
                    </ul>
                </div>

            <!--這邊使用Boostrap-->
                <div class="payment">付款方式
                        <span> <i class="fa-solid fa-credit-card"></i> </span>
                        <span> <i class="fa-brands fa-cc-mastercard"></i> </span>
                        <span> <i class="fa-brands fa-line"></i> </span>
                        <span> <i class="fa-brands fa-cc-apple-pay"></i></span>
                </div>
            </div>

            <!--加入購物車-->
            <div class="addToCart"><button class="addToCart addToCartBtn" type="" @click="addToCart()">加入購物車</button></div>
            <!--直接購買-->
            <div class="buyNow"><button class="buyNow buyNowBtn" type="" @click="buyNow()">直接結帳</button></div>
            <!--適用折價卷-->
            <span class="coupon"><i class="fa-solid fa-magnifying-glass"></i> 適用折價卷 </span>
            <!--收藏清單、分享商品-->
            <div class="collectAndShare">
                <button class="addToFavoriteBtn">
                    <i class="fa-solid fa-heart-circle-plus"></i>
                        <span> 加入追蹤清單 </span>
                </button>

                <button class="shareBtn">
                    <i class="fa-solid fa-share-nodes"></i>
                        <span> 分享此商品 </span>
                </button>
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default {
  name: 'productCard',
  props: {
    initProduct: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      idProduct: '',
      productPhoto: '',
      title: 'test',
      sort: 'test',
      introduction: '產品介紹：光聞道味道心靈就被療癒！Aesop的屏息以待，是一款充滿柑橘香調的身體保濕精油，主要成份為血橙、荷荷芭籽、月桂葉，搭配了甜杏仁油、澳洲堅果油及荷荷芭油的基底油，有助於柔軟保濕並讓肌膚更緊實細緻。內行人也推薦搭配AESOP同系列香調的「橙香身體乳」加強保濕與鎖水效果。',
      originalPrice: '299',
      discountPrice: '特價NTD$999',
    };
  },
  mounted() {
    this.axios.get('/shopList')
      .then((response) => {
        const productItem = response.data.data.filter((item) => item.id === Number(this.$route.params.id));
        console.log(productItem[0]);
        // eslint-disable-next-line prefer-destructuring
        this.idProduct = productItem[0];
        console.log(this.idProduct.title);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
  },
};

</script>

<style scoped>

.container{
    background-color: rgb(255, 255, 255);
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.imgArea{
    /* background-color: bisque; */
    display: flex;
    justify-content: center;
    align-items: center;
    width:500px;
    height:700px;
}

.imgArea img{
    width: 70%;
    height: 70%;
    object-fit: cover;
}
.detailsArea{
    width:500px;
    height:700px;
    background-color: rgb(255, 255, 255);
    border:1px solid #FF7A7A;
    display: flex;
    flex-direction: column;
}

/*=====右邊產品細節=====*/

.titleAndSort{
    display: flex;
    flex-direction: column;

}
.title{
    align-self:flex-start;
    margin-top:10px;
}
.sort{
    align-self:flex-start;
}
.productDetails{
    display: flex;
    flex-direction: column;
    background-color:#FFF1F1;
    margin:0 auto;
    width:90%;
    height:40px;
}
.productDetails .introductionText{
    align-self: flex-start;
    margin-left:50px;
    text-align: left;
}
.productDetails .price{
    width:200px;
    background-color: rgb(173, 224, 224);
    align-self: center;
    padding-left:0px;

}

/*=pay=*/
.originalPay{
    text-decoration: line-through;
    font-size: small;
    width: 10%;
    margin: 0.5rem 0 0 2rem;
    }

.discountPay{
    font-weight:bold;
    color:red;
    padding-left:10px;
}

/*=數量和付款方式=*/
.btnAndCheckOut{
    margin-top:20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

}
/*btn*/
.dropdown{
    width:100px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    color: rgb(182, 182, 182);
    align-self: flex-start;

}

.dropdown .dropdown-toggle{
    width:150px;
    background-color: rgb(255, 255, 255);
    color: rgb(182, 182, 182);

}
.dropdown .dropdown-menu{
    width:100px;
    background-color:rgb(255, 255, 255);
    color:rgb(182, 182, 182);

}
.dropdown .dropdown-item{
    color:rgb(182, 182, 182);
}
/*付款方式*/

.btnAndCheckOut .payment{
    background-color: rgb(255, 255, 255);
    padding:10px 20px
}
.payment span{
    padding: 3px;
}

/*加入購物車、立即購買*/
.addToCart, .buyNow{
    margin-top:20px;
    display: flex;
    justify-content:center;
    align-items: center;

}
.addToCartBtn , .buyNowBtn{
    cursor: pointer;
    background: none;
    border: 1px outset rgb(130, 129, 129);
    border-radius: 5px;
    width:80%;

}
.addToCartBtn{
    background-color: #FFD0D0;
    border:1px solid #FF7A7A ;
}

.buyNowBtn{
    background-color: #FF5858;
    border:1px solid #FF0000 ;
}

.addToCartBtn:hover{
    background-color: #FF7A7A;
}

.buyNowBtn:hover{
    background-color: #ffffff;

}

/*折價卷*/

.coupon{
    padding-top:10px;
    font-size: 0.9rem;
}
.coupon:hover{
    color: #FF7A7A;
}
/*＝收藏分享＝*/

.collectAndShare{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.addToFavoriteBtn , .shareBtn{
    margin-top:30px;
    background: none;
    border:none;
    width:30%;
    letter-spacing: 1px;
}

.addToFavoriteBtn:hover , .shareBtn:hover{
    text-decoration: underline;
    color:blueviolet;

}

</style>
