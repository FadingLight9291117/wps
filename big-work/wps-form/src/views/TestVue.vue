<template>
  <div @click="clickit" tabindex="0" class="item">
    <input class="focus" />
  </div>
  <el-button @click="clickBtn">click it</el-button>
  <div v-for="i in list" :key="i">{{ i }}</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const list = ref([
  { i: 1 }, { i: 2 }, { i: 3 }
])
function clickit() {
  alert("test")
}
let i = 0
function clickBtn() {
  i++
  list.value.splice(0, 0, { i: i })
}
</script>
<style lang="less" scoped>
.item {
  display: inline-block;
  margin: 20px;
  padding: 20px 24px;

  height: 200px;
  width: 200px;

  background-color: white;

  &:focus-within {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  }

}
</style>
