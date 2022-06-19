<template>

<div>
    <div class="container item-position" >

        <div class="detailsArea">
            <p class="infoTitle">會員資訊</p>
            <div class="details">
                <div>
                    <span class="level">會員等級：</span> <span> 一般會員 </span>
                </div>

                <div>
                <span class="userName">會員姓名：</span>
                    <span>{{ userName }}</span>
                </div>
                <div>
                    <span class="userEmail">會員連絡信箱：</span>
                    <span>{{ userEmail }}</span>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      userName: '',
      userEmail: '',
    };
  },
  mounted() {
    const info = JSON.parse(localStorage.getItem('token'));
    this.userEmail = info.mail;
    this.userName = info.name;
  },
};
</script>

<style scoped>
.item-position{
  margin-top: 100px;
}
.container{
    background-color: rgb(255, 255, 255);
    height:100vh;

    display: flex;
    justify-content: center;
    align-items: center;
}
.detailsArea{
    width:40%;
    height:40%;
    background-color: rgb(255, 255, 255);
    border:1px solid #FF7A7A;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

}
.detailsArea .infoTitle{
    font-weight: bold;
    font-size:2rem;

}
.details{
    text-align: left;
    margin:10px auto;

}

.level , .userName , .userEmail{
    font-weight:bold
}
</style>
