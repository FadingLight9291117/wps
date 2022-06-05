<template>
    <button @click="click">
        <slot></slot>
    </button>
</template>
<script lang="ts" setup>
import { defineEmits } from 'vue';
const emit = defineEmits<{ (e: 'print', value: string): void }>()

function click() {
    emit('print', 'click')
    alert("this is a click.")
}
</script>
<style>
</style>