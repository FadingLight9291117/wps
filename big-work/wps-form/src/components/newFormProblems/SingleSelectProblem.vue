<template>
  <el-row>
    <el-form-item class="title" :label="mId">
      <el-input class="title" v-model="mData.title"></el-input>
    </el-form-item>
  </el-row>

  <el-row v-for="(option, idx) in mData.options" :key="idx">
    <el-radio :label="idx + 1" size="small">
      <el-input v-model="mData.options[idx]" :placeholder="`选项${idx + 1}`"></el-input>
    </el-radio>

    <a class="delete hidden" @click="deleteItem(idx)">
      <el-icon>
        <Close />
      </el-icon>
    </a>

  </el-row>
  <el-row class="hidden">
    <el-button type="primary" @click="addItem">+选项</el-button>
  </el-row>
</template>

<script lang="ts" setup>
import { Close } from "@element-plus/icons";
import { reactive } from "vue";
import { defineProps } from "vue";
import { IFormProblemData } from "@/types";
import { useStore } from "vuex";

const store = useStore()

interface IProps {
  id: number,
  data: IFormProblemData,
}

const props = defineProps<IProps>()

const mData = reactive<IFormProblemData>(props.data)
const mId = props.id.toString()

// 新问题默认一个空选项
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

</script>
<style scoped lang="less">
.hidden {
  display: none;
}

.title {
  width: 100%;
}

.delete {
  &:hover {
    cursor: pointer;
  }
}

.el-radio {
  margin-right: 0;
}
</style>
