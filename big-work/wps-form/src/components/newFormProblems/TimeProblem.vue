<template>
  <div class="main" tabindex="0">
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
    <el-row class="hidden">
      <el-button type="danger" @click="deleteProblem">delete</el-button>
    </el-row>
  </div>
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

function deleteProblem() {
  store.commit("deleteProblem", mData)
}

</script>

<style lang="less" scoped>
.main {
  text-align: left;
  padding: 20px 24px;
  width: 100%;

  .hidden {
    display: none;
  }

  &:focus-within {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);

    .hidden {
      display: block;
    }
  }

  .el-row {
    margin-bottom: 10px;
  }
}

.time {
  text-align: left;
  width: 100%;
  border-bottom: 1px dashed;
}
</style>
