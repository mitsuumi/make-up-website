<template>
      <nav class="nav">
        <nav-dropdown title="Services" :items="services"></nav-dropdown>
        <router-link to="/">Home</router-link>
        <router-link to="/products">全部產品</router-link>
      </nav>
    <router-view/>
</template>

<script>
import NavDropdown from './NavDropdown.vue';

export default {
  name: 'NavBar',
  data() {
    return {
      services: [
        {
          title: '首頁',
          link: '#',
        },
        {
          title: '全部商品',
          link: '#',
        },
        {
          title: '美顏保養',
          link: '#',
        },
        {
          title: '美妝彩妝',
          link: '#',
        },
      ],
    };
  },
  components: {
    NavDropdown,
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  padding:2vh;
  text-align: center;
  background: #F8D9D9;
}
header{
  /* width: 100%; */
  bottom: #222;
  padding: 15px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px 20px;
  border-bottom: 3px solid transparent;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

</style>
