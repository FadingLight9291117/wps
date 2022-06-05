<template>
    <div id="main-title" class="main-title">
        <div v-show="inputTitleMod" @click="changeInputTitle">请输入表单标题</div>
        <input v-show="!inputTitleMod" class="input-title" type="text" value="" />
    </div>
</template>
<script lang="ts" setup>

import { ref } from 'vue';

// -------------------- 新建表单的标题 --------------
const inputTitleMod = ref(true);
function changeInputTitle() {
    inputTitleMod.value = !inputTitleMod.value
}
document.addEventListener('click', (e) => {
    let t = document.getElementById('main-title')!;
    let path: Array<HTMLElement> = (e as PointerEvent).path
    if (!path.includes(t)) {
        inputTitleMod.value = true
    }
})


// ------------------------------------------------

</script>
<style lang="less" scoped>
.main-title {
    font-size: 20px;
    font-weight: 700;

    .input-title {
        width: 100%;
        font-size: 20px;
        font-weight: 700;
    }

    input {
        border-width: 0;

        &:active,
        &:focus {
            border-width: 0;
            border-color: white;
        }
    }
}
</style>