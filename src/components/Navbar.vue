<template>
  <header :class="{'scrolled-nav': scrolledNav}">
    <nav class="nav pe-5 fixed-top">
          <div class="left">
            <nav-dropdown></nav-dropdown>
            <ul class="nav-items">
              <li><router-link to="/">首頁</router-link></li>
              <li><router-link to="/products">全部產品</router-link></li>
              <li><router-link to="/cosmetics">美顏保養</router-link></li>
              <li><router-link to="/makeup">美妝彩妝</router-link></li>
            </ul>
            <!-- <router-link to="/">首頁</router-link>
            <router-link to="/products">全部產品</router-link>
            <router-link to="/cosmetics">美顏保養</router-link>
            <router-link to="/makeup">美妝彩妝</router-link> -->
          </div>
          <div class="right">
            <user-dropdown></user-dropdown>
            <cart-dropdown></cart-dropdown>
          </div>
      </nav>
    <router-view/>
  </header>

</template>

<script>
import NavDropdown from './NavDropdown.vue';
import CartDropdown from './CartDropdown.vue';
import UserDropdown from './UserDropdown.vue';

export default {
  name: 'NavBar',
  data() {
    return {
      scrolledNav: null,
      windowWidth: null,
      mobile: null,
      mobileNav: true,
    };
  },
  components: {
    NavDropdown,
    CartDropdown,
    UserDropdown,
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrollNav = true;
      }
      this.scrollNav = false;
    },
  },
};
</script>

<style scoped>
.scrolled-nav{
  width: 100px;
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  transition: 0.5s ease all;

}
.nav {
  display: flex;
  justify-content: space-between;
  background: #F8D9D9;
  transition: .5s ease all;
}

.left{
  display: flex;
  align-items: center;
}
.nav-items{
  display: flex;
}
.right{
  display: flex;
  align-items: center;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px 20px;
  border-bottom: 3px solid transparent;
}

.nav a.router-link-exact-active {
  color: #FF5858;
}

</style>
