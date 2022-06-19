<template>
    <div class="menu-item" @click="isOpen =! isOpen" @keypress="isOpen =! isOpen">
        <button class="button"><font-awesome-icon icon="user" /></button>
        <transition name="fade" appear>
            <ul class="sub-menu" v-show="isOpen">
              <li><router-link to="/login">登入</router-link></li>
              <li><router-link to="/signup">註冊</router-link></li>
              <li><router-link to="/signup">會員資料</router-link></li>
            </ul>
        </transition>
    </div>
</template>

<script>

export default {
  name: 'NavDropdown',
  // props: ['title', 'items'],
  data() {
    return {
      isOpen: false,
    };
  },
};

</script>

<style scoped>
nav .menu-item .sub-menu {
    position: absolute;
    width: 400px;
    top:60px;
    right: 0;
    background-color: rgba(248, 217, 217, 0.9);
    box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 999;
}

.button{
  width: 100px;
  color: #FF7A7A;
  border: transparent;
  background: #F8D9D9;
  padding: 3vh;
}

.sub-menu a {
  font-weight: bold;
  font-size:2rem;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px 20px;
  border-bottom: 3px solid transparent;
  line-height: 2;
}
.sub-menu a.router-link-exact-active {
  color: #FF5858;
}
</style>
