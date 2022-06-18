<template>
    <footer>
    <div class="container-fluid py-5">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-3 col-sm-4 col-md-3">
                        <ul class="fw-bold">HELP & FAQ
                            <li>聯繫我們</li>
                            <li>常見問題</li>
                        </ul>
                    </div>
                    <div class="col-3 col-sm-4 col-md-3">
                        <ul class="fw-bold">購物方式
                           <li>最新商品</li>
                           <li>暢銷商品</li>
                        </ul>
                    </div>
                    <div class="col-3 col-sm-4 col-md-3 ">
                        <ul class="fw-bold">顧客服務
                           <li>訂購說明</li>
                           <li>退換貨須知</li>
                           <li>會員權益</li>
                        </ul>
                    </div>
                    <div class="col-3 col-sm-4 col-md-3 ">
                        <ul class="fw-bold">
                           <li>
                              <i class="fa-brands fa-facebook-f"></i>
                              <i class="fa-brands fa-instagram"></i>
                              <i class="fa-brands fa-instagram"></i>

                              </li>
                           <li>©2022 XXX</li>
                           <li>隱私政策 | 服務條款</li>

                        </ul>
                    </div>
            </div>
        </div>
    </div>
    </div>
</footer>

</template>

<script>
export default {

};
</script>

<style>
footer{
   background-color:#F8D9D9;
   height: 200px;
  }
  /* margin-top: 20px; */
   /* 因為通常 footer 也跟 navbar 一樣會是固定的尺寸，所以這邊可以大膽的設定高度，
   為了區隔上方的內容，所以用了 margin-top */

 /* .footer-text{
    float: left;
    font-size: font-m;
    color: navbar-color;
    line-height: 100px;
    } */
    /* 針對 footer-text 的文字做設定，讓它 footer 的左邊 */
/* .footer-menu{
    float: right;
    line-height: 100px;
    } */
    /* 讓 footer 裡面的連結圖示靠右對齊 */
/* li{
    float: left;
    margin-right: 1em;
    } */
      /* 這邊的 li 的技巧跟上面選單的技巧一樣，就不再贅述 */
/* a{
    font-size: font-m;
    color: navbar-color;
    cursor: pointer;
              } */
     /* 設定 a 連結的內容 */

</style>
