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
          <el-icon v-for="i in [0,0,0,0,0]" :key="i" :size="20">
            <StarFilled/>
          </el-icon>
        </div>
      </el-row>
      <el-row>
        <el-button type="danger" @click="deleteProblem">delete</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, reactive} from "vue";
import {useStore} from "vuex";
import {IFormProblemData} from "@/types";
import {StarFilled} from "@element-plus/icons"

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


  .el-row {
    margin-bottom: 10px;
  }

  .answer {
    line-height: 34px;
    width: 100%;
    color: #aeb5c0;
    font-size: 12px;
    border-bottom: 1px solid;
  }
}
</style>
