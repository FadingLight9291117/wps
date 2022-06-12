<template>
  <div class="main-main">
    <el-row class="main-row">
      <input class="title" type="text" v-model="title" placeholder="请输入表单标题" maxlength="30"/>
    </el-row>
    <el-row class="main-row">
      <div class="describe-warp">
        <textarea class="describe" type="text" v-model="subTitle" placeholder="点击设置描述"/>
      </div>
    </el-row>
    <el-row class="problems">
      <el-row v-for="(item, idx) in problems" :key="idx">
        <NewFormProblem :type="item.type" :data="item" :id="idx"></NewFormProblem>
      </el-row>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import NewFormProblem from "@/components/NewFormProblem.vue"
import {useStore} from "vuex";
import {computed} from "vue";
import {IFormProblemData} from "@/types";

const store = useStore()
const title = computed({
  get: () => store.getters.getNewForm.title,
  set: val => store.commit("setTitle", {title: val})
})
const subTitle = computed({
  get: () => store.getters.getNewForm.subTitle,
  set: val => store.commit("setTitle", {subTitle: val})
})
const problems = store.getters.getNewForm.problems as Array<IFormProblemData>

</script>

<style scoped lang="less">
.main-main {
  padding: 50px 66px;
}

.main-row {
  margin-bottom: 28px;
}

.title {
  width: 100%;
  border: none;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #3d4757;
  text-align: center;
  outline: none;
}

.describe-warp {
  width: 100%;

  &:hover {
    border-bottom: 1px solid rgba(25, 55, 88, .1);
  }

  &:focus-within {
    border-bottom: 1px solid #1488ed;
  }

  .describe {
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    text-align: center;
    height: 18px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
}


.problems {
  .el-row {
    margin-bottom: 20px;
    width: 100%
  }

}

</style>
