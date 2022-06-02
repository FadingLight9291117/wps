<template>
    <div :class="btnClass">
        <slot></slot>
    </div>
</template>
<script lang="ts" >
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        type: {
            type: String,
            default: "default",
        }
    },
    data() {
        return {
            btnClass: "btn-default"
        }
    },
    mounted() {
        if (this.type === 'primary') {
            this.btnClass = 'btn-primary'
        }
    }

})
</script>
<style scoped>
.btn-default {
    display: inline-block;
    border-style: solid;
    border-color: #dcdfe6;
    border-width: 1px;
    border-radius: 4px;
    padding: 8px 15px;
    color: #606266;
    margin-right: 10px;
    margin-bottom: 15px;
}

.btn-default:hover {
    background-color: #ecf5ff;
    cursor: default;
    color: #409eff;
}

.btn-default:active {
    border-color: #409eff;
}

.btn-primary {
    display: inline-block;
    background-color: #409eff;
    border-style: solid;
    border-color: #409eff;
    border-width: 1px;
    border-radius: 4px;
    padding: 8px 15px;
    color: #ffffff;
    margin-right: 10px;
    margin-bottom: 15px;
}

.btn-primary:hover {
    background-color: #79bbff;
    cursor: default;
    border-color: #79bbff;
}

.btn-primary:active {
    background-color: #337ecc;
    border-color: #337ecc;
}
</style>