<template>
  <el-row>
    <el-form-item :label="mId">
      <el-input class="title" v-model="mData.title" placeholder="请输入问题">
      </el-input>
    </el-form-item>
  </el-row>
  <el-row>
    <div class="time">
      <span> 时&nbsp;分</span>
    </div>
  </el-row>
  <el-row class="hidden">
    <span>时间格式</span>
    <el-select size="small">
      <el-option label="1" value="1" />
      <el-option label="1" value="1" />
    </el-select>
  </el-row>
</template>
<script lang="ts" setup>
import { defineProps, reactive } from "vue";
import { useStore } from "vuex";
import { IFormProblemData } from "@/types";

const store = useStore()

interface IProps {
  id: number,
  data: IFormProblemData,
}

const props = defineProps<IProps>()

const mData = reactive<IFormProblemData>(props.data)
const mId = props.id.toString()

</script>

<style lang="less" scoped>
.hidden {
  display: none;
}

.time {
  text-align: left;
  width: 100%;
  border-bottom: 1px dashed;
}
</style>
