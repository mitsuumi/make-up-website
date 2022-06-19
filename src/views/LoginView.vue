/* eslint-disable vuejs-accessibility/click-events-have-key-events */
/* eslint-disable vuejs-accessibility/form-control-has-label */
<!-- eslint-disable vuejs-accessibility/label-has-for  -->
<template>
  <form @submit.prevent="handleLogin()"  action="" >
    <div class="loginBg">
        <div class="loginArea item-position ">

            <h2>登入</h2>
            <div class="mailArea">
                <div class="inputTitle">
                    <label for="mail">Email</label>
                </div>
                <div class="space">
                </div>
                <!--  eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                <input v-model.trim="mail" class="mailInput" id="mail" name="name" type="mail" placeholder="請輸入您的信箱">
                </div>

            <div class="passwordArea">
                <div class="inputTitle"><label for="Password">Password</label></div>
                <div class="space"></div>
                <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                <input v-model.trim="password" class="passwordInput" name="Password"  placeholder="請輸入您的密碼" :type="visibility" autocomplete="off">
                <!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
                <a href="#" @click="showPassword()" v-if="visibility === 'password'"><font-awesome-icon class="iconEye" icon="eye" /></a>
                <!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
                <a @click="hidePassword()" onKeyDown={this.handleClick} v-if="visibility === 'text'"><font-awesome-icon class="iconEye" icon="eye-slash" /></a>
            </div>

            <div class="loginBtnArea">
                <button @click="onLoginClick()" class="loginBtn">登入</button>
                <div class="space"></div>
                <button class="forgot">忘記密碼？</button>
            </div>

            <div class="loginInstantlyArea">
                <span class="loginInstantlyTitle">快速登入</span>
                <div class="space"></div>
                <button class="loginWithGoogleBtn"><img class="googleIcon" src="../assets/googleIcon.png" width="20px" alt="google icon">Google帳戶登入</button>
            </div>

            <div class="hr"></div>

            <div class="signUpArea">
                <span>新朋友嗎？</span>
                <div class="space"></div>
                <button class="signUpBtn"><router-link to="/signup">立即註冊</router-link></button>
            </div>
        </div>
    </div>
</form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      googleIcon: '../assets/googleIcon.png',
      name: ' ',
      mail: ' ',
      password: ' ',
      visibility: 'password',
    };
  },
  methods: {
    showPassword() {
      this.visibility = 'text';
    },
    hidePassword() {
      this.visibility = 'password';
    },
    async handleLogin() {
      const res = await axios.post('/login', {
        name: this.name,
        mail: this.mail,
        password: this.password,
      });
      localStorage.setItem('token', JSON.stringify(res.data));
      this.$router.push('/');
    },
  },

};
</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
}
a:hover{
  color: black;
}
.item-position{
  margin-top: 100px;
}
.loginBg{
    background-color: blanchedalmond;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loginBg .loginArea{
    background-color: rgba(248, 217, 217, 0.4);
    border: 2px solid #FF7A7A;
    width: 500px;
    height:auto;
}
.inputTitle{
    margin-bottom:10px;
    margin-right:120px
}

/*=====mailArea=====*/
.mailArea{
    margin:20px auto
}

/*=====passwordArea=====*/
.passwordArea{
   margin:0 auto;
   position: relative;
}
.passwordArea .inputTitle{
    margin-left:5%;
}

/* Show/hide password Font Icon */

.iconEye{
    position: absolute;;
    left:310px;
    bottom: 5px;
}

/*======loginBtnArea======*/
.loginBtnArea{
    margin:30px 0;
}
.loginBtnArea .loginBtn{
    cursor: pointer;
    background-color: #FF7A7A;
    border: 2px outset palevioletred;
    border-radius: 10px;
    width:150px;
    line-height: 2.5em;
    font-size:1.3rem;
    font-weight:600;
    letter-spacing: 4px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    opacity: 0.7 ;
    margin-bottom: 0px;
}
.loginBtnArea .loginBtn:hover{
    opacity: 1;
    background-color: aliceblue;
}
.forgot{
    cursor: pointer;
    background: none;
    border:none;
    text-decoration-line: underline;
    color:#797676
}
.forgot:hover{
    color: #e20a0a;
}

/*=====loginInstantlyArea======*/
.loginInstantlyArea{
    margin:30px 0;
}
.loginInstantlyArea .space{
    height:4px;
}
.loginInstantlyArea .loginInstantlyTitle{
    font-size:1.2rem;
    font-weight: 700;
}

.loginInstantlyArea .loginWithGoogleBtn{
    cursor: pointer;
    background: none;
    background-color: #f1adad;
    border:2px outset #f1adad;
    border-radius:5px;
    line-height:2em;
    font-size:1rem;
    letter-spacing: 1px;
    transition: all .1s ease;
    opacity: 0.8;

}
.loginInstantlyArea .loginWithGoogleBtn:hover{
    background-color:#f9eaea;
    opacity: 1;
}
.loginInstantlyArea .googleIcon{
    width: 20px;
}
/*=====signUpArea 立即註冊======*/
.signUpArea{
    margin:30px 0;
}
.signUpArea .signUpBtn{
    cursor:pointer;
    background-color: #f1adad;
    border:2px outset  #f1adad;
    border-radius:5px;
    line-height: 2;
    font-size: 1rem;
    letter-spacing: 1px;
    transition: all .1s ease;
    opacity: 0.8;
}

.signUpBtn .nav a {
  cursor:pointer;
    background-color: #f1adad;
    border:2px outset  #f1adad;
    border-radius:5px;
    line-height: 2;
    font-size: 1rem;
    letter-spacing: 1px;
    transition: all .1s ease;
    opacity: 0.8;
}

.signUpArea .signUpBtn:hover{
    background-color: #f9eaea;
    transition: all .1s ease;
    opacity: 1;
}

.signUpArea .space{
    height:2px;
}

/*=====Btn=====*/

button{
    background: none;
}
.hr{
    border: 1px solid #f1adad;
    height: 1px;
    margin:10px 30px

}

</style>
