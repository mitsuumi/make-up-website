<template>
    <div class="count-container">
        <button class="btn btn-light btn-sm" @click="onSubClick">-</button>
         <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
        <input type="number" class="form-control form-control-sm ipt-num" v-model.number.lazy="number">
        <button class="btn btn-light btn-sm" @click="onAddClick">+</button>
    </div>
</template>

<script>

export default {
  name: 'MyCounter',
  emits: ['numChange'],
  data() {
    return {
      number: this.num,
    };
  },
  watch: {
    number(newVal) {
      const parseResult = parseInt(newVal, 10);
      // eslint-disable-next-line no-restricted-globals
      if (Number.isNaN(parseResult) || parseResult < 1) {
        this.number = 1;
      }
      if (String(newVal).indexOf('.') !== -1) {
        this.number = parseResult;
      }
      this.$emit('numChange', this.number);
    },
  },
  props: {
    num: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: NaN,
    },
    max: {
      type: Number,
      default: NaN,
    },
  },
  methods: {
    onSubClick() {
      if (!Number.isNaN(this.min) && this.number - 1 < this.min) { return; }
      this.number -= 1;
    },
    onAddClick() {
      if (this.number >= this.max) { return; }
      this.number += 1;
    },
  },
};
</script>

<style scoped>
.count-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.btn{
    width: 25px;
}

.ipt-num{
    width: 100px;
    text-align: center;
    margin: 0 4px;
}
</style>
