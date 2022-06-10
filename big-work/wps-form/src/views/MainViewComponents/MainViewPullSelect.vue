<template>
  <main>
    <el-card>
      <el-row>
        <el-form-item class="title" :label="mId">
          <el-input v-model="mData.title" placeholder="请输入问题">
          </el-input>
        </el-form-item>
      </el-row>
      <el-row class="option" v-for="(opt, idx) in mData.options" :key="idx">
        <span>{{ idx + 1 }}.</span>
        <el-input v-model="mData.options[idx]"></el-input>
        <a class="delete" @click="deleteItem(idx)">
          <el-icon>
            <Close/>
          </el-icon>
        </a>
      </el-row>
      <el-row>
        <el-button type="primary" @click="addItem">+选项</el-button>
      </el-row>
      <el-row>
        <el-button type="danger" @click="deleteProblem">delete</el-button>
      </el-row>
    </el-card>
  </main>
</template>

<script lang="ts" setup>
import {Close} from "@element-plus/icons";
import {reactive} from "vue";
import {defineProps} from "vue";
import {IFormProblemData} from "@/types";
import {useStore} from "vuex";

const store = useStore()

interface IProps {
  id: number,
  data: IFormProblemData,
}

const props = defineProps<IProps>()

const mData = reactive<IFormProblemData>(props.data)
const mId = props.id.toString()

if (!mData.options) {
  addItem()
}

function addItem() {
  if (!mData.options) {
    mData.options = []
  }
  mData.options.push("")
  store.commit("updateProblem", mData)
}

function deleteItem(idx: number) {
  if (mData.options && mData.options.length > 1) {
    mData.options.splice(idx, 1)
  }
}

function deleteProblem() {
  store.commit("deleteProblem", mData)
}

</script>

<style scoped lang="less">
main {
  width: 500px;

  .title {
    width: 100%;
  }

  .option {
    display: flex;
    flex-direction: row;

    .el-input {
      width: 300px
    }
  }

}
</style>
