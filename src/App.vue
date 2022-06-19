<template>
  <div id="app">
    <header>
      <navbar ></navbar>
    </header>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'MyApp',
  components: {
    Navbar,
  },
};
</script>

<style>
*,::before, ::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
