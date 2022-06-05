<template>
    <MyTest1 @print="print">Button</MyTest1>
</template>
<script lang="ts" lang="ts">
import MyTest1 from "@/components/MyTest1.vue";

const print = (value: string) => {
    console.log(value);
}
</script>
