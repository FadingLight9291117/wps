<template>
  <div>
    <div>
      <span>name: {{ name }} </span>
    </div>
    <button type="submit" @click="clickBtn">click me</button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const name = computed(() => store.getters.getName);

function clickBtn() {
  store.commit("setName", "me");
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
