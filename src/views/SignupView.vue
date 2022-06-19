<template>
<!--這是註冊畫面-->
<form @submit.prevent="handleSubmit()" action="" >
    <div class="signupBg">
        <div class="signupArea item-position">

            <h2>註冊</h2>

            <div class="usernameArea">
                <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
                <div class="inputTitle"><label for="username">名稱</label></div>
                <div class="space"></div>
                <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                <input v-model.trim="user_name" class="usernameInput" name="username" type="text" placeholder="請輸入您的名稱" required>
            </div>

            <div class="hr"></div>

            <div class="mailArea">
                <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
                <div class="inputTitle"><label for="userMail">信箱</label></div>
                <div class="space"></div>
                <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                <input v-model.trim="user_mail" class="userMailInput" name="userMail" type="mail" placeholder="請輸入您的信箱" required>
            </div>

            <div class="hr"></div>

            <div class="passwordArea">
                <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
                <div class="inputTitle"><label for="userPassword">密碼</label></div>
                <div class="space"></div>
                <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                <input v-model.trim="password" class="userPasswordInput" name="userPassword" :type="visibility" placeholder="請輸入您的密碼" required>
                <!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
                <a @click="showPassword()" v-if="visibility === 'password'"><font-awesome-icon class="iconEye" icon="eye" /></a>
                <!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
                <a @click="hidePassword()" v-if="visibility === 'text'"><font-awesome-icon class="iconEye" icon="eye-slash" /></a>
                <div class="error" v-if="passwordError"> {{ passwordError }}</div>

            </div>

            <div class="confirmPasswordArea">
                <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
                <div class="inputTitle"><label for="confirmUserPassword">確認密碼</label></div>
                <div class="space"></div>
                <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                <input v-model.trim="confirmPassword" class="confirmPasswordInput" name="confirmUserPassword" :type="visibilitySec" placeholder="請再次輸入您的密碼">
                <!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
                <a @click="showPasswordSec()" v-if="visibilitySec === 'password'"><font-awesome-icon class="iconEye" icon="eye" /></a>
                <!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
                <a @click="hidePasswordSec()" v-if="visibilitySec === 'text'"><font-awesome-icon class="iconEye" icon="eye-slash" /></a>

                <div v-if="checkPasswordError" class="conError">{{ checkPasswordError }}</div>

            </div>

            <div><button class="signUpBtn">註冊</button></div>
            <div class="contract">點擊註冊代表同意本網站之<span class="memberContract"> 會員條款 </span> 與 <span class="memberContract"> 客戶隱私權條款 </span></div>

            <div class="hr"></div>

            <div class="alreadyHasAccount">已經有帳號了嗎？</div>

            <div class="loginInstantlyArea">
                <button type="button" class="loginInstantlyBtn">立即登入</button>

                <span> OR </span>

                <button type="button" class="loginWithGoogleBtn">Google登入</button>
            </div>

<!--recaptcha-->
            <vue-recaptcha
            @verify="captchaVerified"
            @expired="captchaExpired"
            sitekey="Your site key"
            :loadRecaptchaScript="true"
            >
            </vue-recaptcha>

        </div>

    </div>

</form>

</template>
<script>
import axios from 'axios';
import VueRecaptcha from 'vue-recaptcha'; // recaptcha

export default {

  data() {
    return {
      user_name: ' ',
      user_mail: ' ',
      password: ' ',
      confirmPassword: ' ',
      passwordError: ' ',
      checkPasswordError: ' ',
      visibility: 'password',
      visibilitySec: 'password',

      sitekey: 'key', // recaptcha
    };
  },
  components: {
    VueRecaptcha, // recaptcha
  },
  methods: {
    showPassword() {
      this.visibility = 'text';
    },
    hidePassword() {
      this.visibility = 'password';
    },
    showPasswordSec() {
      this.visibilitySec = 'text';
    },
    hidePasswordSec() {
      this.visibilitySec = 'password';
    },

    // recaptcha 區域
    captchaExpired() {
      // eslint-disable-next-line no-unused-expressions
      this.captchaVerify = false;
      console.log('Expired');
    },

    captchaVerified(res) {
      this.captchaVerify = true;
      console.log(`Verify: ${res}`);
    },

    handleSubmit() {
      this.passwordError = this.password.length > 5 ? ' ' : '密碼長度需大於5';
      this.checkPasswordError = this.password === this.confirmPassword ? ' ' : '密碼輸入有誤，請輸入正確密碼';

      if (this.password.length > 5 && this.password === this.confirmPassword) {
        const data = {
          name: this.user_name,
          mail: this.user_mail,
          password: this.password,
          confirmPassword: this.confirmPassword,
        };

        axios.post('/signup', data)
          .then(
            (response) => {
              console.log(response);
              alert('你已成功註冊！');
            },
          );

        localStorage.setItem('token', JSON.stringify(data));
        this.$router.push('/')

          .catch(
            (error) => console.log(error),
          );
      }
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
.signupBg{
    background-color: blanchedalmond;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.signupBg .signupArea{
    background-color: rgba(248, 217, 217, 0.4);
    border: 2px solid #FF7A7A;
    width: 500px;
    height:auto;

}
.inputTitle{
    margin-bottom:10px;
    margin-right:120px
}

/*=====usernameArea=====*/
.signupArea .usernameArea{
    padding-bottom: 30px;
}

.signupArea .usernameArea .usernameInput{
    border: 2px solid #FF7A7A;
    padding: 5px;

}
/*=====mailArea=====*/
.signupArea .mailArea{
    padding-bottom: 30px;

}
.signupArea .mailArea .userMailInput{
    border: 2px solid #FF7A7A;
    padding: 5px;

}

/*=====passwordArea=====*/
.signupArea .passwordArea{
    padding-bottom: 30px;

}
.signupArea .passwordArea .userPasswordInput{
    border: 2px solid #FF7A7A;
    padding: 5px;
}

/* Show/hide password Font Icon */
.iconEye {
    cursor: pointer;
    color: #333;
    z-index: 5;

    position: absolute;
    right: 42%;

    transform: translateY(-90%);
    transform: translateX(40%);

}

/*=====confirmPasswordArea=====*/

.signupArea .confirmPasswordArea .inputTitle{
    margin-right:90px;
}

.signupArea .confirmPasswordArea .confirmPasswordInput{
    border: 2px solid #FF7A7A;
    padding: 5px;
    margin-bottom: 0px;

}

/*=====Btn=====*/
/*sugnUpBtn*/
.signUpBtn{
    cursor: pointer;
    background: none;
    background-color: #FF7A7A;
    border: 2px outset palevioletred;
    border-radius: 10px;
    width:100px;
    line-height: 2.5em;
    font-size:1.3rem;
    font-weight:600;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    opacity: 0.7 ;
    margin-bottom: 15px;

}
.signUpBtn:hover{
    opacity: 1;
    background-color: aliceblue;
}
.loginInstantlyArea {
    margin-bottom:40px;

}

.loginInstantlyArea .loginInstantlyBtn{
    cursor: pointer;
    background: none;
    background-color: #f1adad;

    border:2px outset #f1adad;
    border-radius:5px;

    line-height:2em;
    font-size:1rem;

    transition: all .1s ease;
    opacity: 0.8;
}

.loginInstantlyArea .loginInstantlyBtn:hover{
    background-color:  #f9eaea;
    opacity: 1;

}

.loginInstantlyArea .loginWithGoogleBtn{
    cursor: pointer;
    background: none;
    background-color: #f1adad;

    border:2px outset #f1adad;
    border-radius:5px;

    line-height:2em;
    font-size:1rem;

    transition: all .1s ease;
    opacity: 0.8;

}
.loginInstantlyArea .loginWithGoogleBtn:hover{
    background-color:#f9eaea;
    opacity: 1;

}

/*=====會員、隱私權條款=====*/
.contract{
    color: #444141;
}
.memberContract{
    cursor: pointer;
    color:#a20202 ;
}

.memberContract:hover{

    color:red;
}

.alreadyHasAccount{
    color:#444141;
    margin:10px 0px;
}

.error{
    color:red;
    font-size:0.8em;
    font-weight: bold;
    margin-left:0px;
}

.conError{
    color:red;
    font-size:0.8em;
    font-weight: bold;
    margin-bottom: 20px;
}
.hr{
    border: 1px solid #f1adad;
    height: 1px;
    margin:10px 30px

}

</style>
