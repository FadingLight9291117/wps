<template>
  <div class="main">
    <el-card>
      <el-row>
        <el-form-item :label="mId">
          <el-input class="title" v-model="mData.title" placeholder="请输入问题">
          </el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <div class="answer">
          <span>填写者回答区</span>
        </div>
      </el-row>
      <el-row>
        <el-button type="danger" @click="deleteProblem">delete</el-button>
      </el-row>
    </el-card>
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

// const mDataIdxInVuex = store.getters.getNewForm.findIndex((item: IFormItemData) => item.id === mData.id)


// const data = computed<IFormItemData>({
//   get: () => store.getters.getNewForm.find((item: IFormItemData) => item.id === props.id),
//   set: val => {
//     store.commit("updateProblem", val)
//   }
// })
//
// const title = computed({
//   get: () => data.value.title,
//   set: val => {
//     const problem = data.value
//     problem.title = val
//     data.value = problem
//   }
// })


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
