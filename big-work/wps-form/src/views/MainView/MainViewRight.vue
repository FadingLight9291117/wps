<template>
  <div class="right-main">
    <el-row class="btn-group1" justify="space-between">
      <el-col :span="10">
        <el-button @click="preview">预览</el-button>
      </el-col>
      <el-col :span="10">
        <el-button @click="submit(EFormStatus.ing)">保存草稿</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-button class="btn-group2" type="primary" @click="submit">完成创建</el-button>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { submitNewForm } from "@/api";
import { EFormStatus } from "@/types";

const store = useStore()

function submit(state?: EFormStatus) {
  console.log(store.getters.getNewForm)
  console.log(state)
  submitNewForm(store.getters.getNewForm, state)
}

// 预览
function preview() {
  console.log("preview")
}
</script>

<style scoped lang="less">
.right-main {
  padding: 20px 15px;
}

.btn-group1 {
  margin-bottom: 20px;

  .el-button {
    width: 100%;
  }

}

.btn-group2 {
  width: 100%;
}
</style>
