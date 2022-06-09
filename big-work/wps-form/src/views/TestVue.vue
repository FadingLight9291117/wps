<template>
  <component :is="type[setType]"/>
  <div>
    <button @click="changeType">test</button>
  </div>
</template>

<script setup>
import TestComponent1 from "@/views/TestComponents/TestComponent1";
import {ref} from "vue";

const type = {
  "input": TestComponent1,
  "single": "input",
};

let setType = ref("input")
let i = 0

function changeType() {
  if (i >= Object.keys(type).length) {
    i = 0
  }
  setType.value = Object.keys(type)[i++]
}


</script>

<style scoped>

</style>
