<template>
  <component :is="type['test']"/>
  <div>
    <button @click="changeType">test</button>
  </div>
</template>

<script setup>
import TestComponent1 from "@/views/TestComponents/TestComponent1";

const type = {
  "input": TestComponent1,
  "single": TestComponent1,
};


</script>

<style scoped>

</style>
