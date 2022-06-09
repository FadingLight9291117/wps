<template>
  <div class="main">
    <el-card>
      <el-row>
        <el-form-item :label="mId">
          <el-input class="problem" v-model="problem" placeholder="请输入问题">
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
import {ref} from "vue";
import {defineProps} from "vue";

interface IProps {
  id?: string
}

const props = defineProps<IProps>()
let mId = props.id ? props.id.toString() + '.' : "0."

const problem = ref("");
</script>

<style lang="less" scoped>
.main {
  width: 500px;
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
