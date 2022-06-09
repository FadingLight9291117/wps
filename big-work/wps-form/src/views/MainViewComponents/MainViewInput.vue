<template>
  <div class="main">
    <el-card>
      <el-row>
        <el-form-item :label="thisId">
          <el-input class="title" v-model="thisTitle" placeholder="请输入问题">
          </el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <div class="answer">
          <span>填写者回答区</span>
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, computed} from "vue";

import {defineEmits} from "vue";

interface IProps {
  id?: number,
  title?: string,
}

const emit = defineEmits(["update:id", "update:title"])
const props = defineProps<IProps>()
const thisId = computed(() => props.id?.toString() || "")
const thisTitle = computed({
  get: () => props.title || "",
  set: val => emit("update:title", val)
})


</script>

<style lang="less" scoped>
.main {
  text-align: left;


  .el-row {
    margin-bottom: 10px;
  }

  .answer {
    line-height: 34px;
    width: 100%;
    color: #aeb5c0;
    font-size: 12px;
    border-bottom: 1px dashed;
  }
}
</style>
