<template>
    <div class="menu-item" @click="isOpen =! isOpen" @keypress="isOpen =! isOpen">
        <div class="btn btn-primary" href="">{{title}}</div>
        <transition name="fade" appear>
            <div class="sub-menu" v-show="isOpen">
                <div v-for="(item, i) in items" :key="i" class="menu-item">
                    <a :href="item.link">{{item.title}}</a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
  name: 'NavDropdown',
  props: ['title', 'items'],
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
    height: 80vh;
    background-color: #222;
    top: cal(100% + 18%);
    border-radius: 0px 0 16px 16px;
    z-index: 999;
}
</style>
