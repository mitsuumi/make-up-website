<template>
<div>

    <button type="button" @click="onLogoutClick()">Log out</button>

</div>

</template>

<script>

export default {
  data() {
    return {};
  },
  methods: {
    onLogoutClick() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },

};
</script>

<style scoped>
button{
    background: none;
    background-color: rgb(214, 180, 135);
    border-radius: 5px;
    border:2px outset rgb(241, 158, 158);
    width:150px;

}

button:hover{
    transition: 0.5s ease;
    background-color: aliceblue;

}
</style>
