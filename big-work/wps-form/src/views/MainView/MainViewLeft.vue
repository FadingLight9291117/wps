<template>
  <div class="left-main">
    <div class="title-small">添加题目</div>
    <div class="left-content">
      <el-button plain v-for="item in addBtnList" :key="item.id" @click="addProblem(item.type)">
        {{ item.name }}
      </el-button>
    </div>
    <div class="title-small">题目模板</div>
    <div class="left-content">
      <el-button plain v-for="item in tmplBtnList" :key="item.id">
        {{ item.name }}
      </el-button>
    </div>
    <div class="title-small">我的常用题</div>
  </div>
</template>

<script lang="ts" setup>
import {useStore} from "vuex";
import {computed} from "vue";
import {IFormProblemData} from "@/types";

const store = useStore()
const addBtnList = computed(() => store.getters.getAddBtnList)
const tmplBtnList = computed(() => store.getters.getTmplBtnList)


function addProblem(type: string) {
  const problem: IFormProblemData = {
    id: Date.now().toString(),
    type: type,
    title: "",
  }
  store.commit("addProblem", problem)
}
</script>

<style scoped lang="less">
.left-main {
  padding: 20px 15px;
  text-align: left;
}

.left-content {
  display: grid;
  flex-direction: row;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  text-align: left;
  margin-bottom: 10px;

  .el-button {
    margin-left: 0;
  }
}

.title-small {
  font-size: 14px;
  line-height: 20px;
  color: #3d4757;
  font-weight: 700;
  margin-bottom: 10px;
}
</style>
