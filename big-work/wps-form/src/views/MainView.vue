<template>
  <div class="page">
    <div class="main-container">
      <div class="main-left content">
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
      <div class="main-main content">
        <!-- <NewFormContent></NewFormContent> -->
        <div class="main-row">
          <el-input class="main-title" type="text" v-model="title" placeholder="请输入表单标题" />
        </div>
        <div class="main-row">
          <el-input type="text" v-model="subTitle" placeholder="点击设置描述" />
        </div>
        <div class="problems">
          <el-row v-for="(item, idx) in problems" :key="idx">
            <component class="problem-item" :is="type2Component[item.type]" :data="item" :id="idx"></component>
          </el-row>
        </div>
      </div>
      <div class="main-right content">
        <!-- <NewFormSetting></NewFormSetting> -->
        <el-row class="btn-group1">
          <el-button>预览</el-button>
          <el-button>保存草稿</el-button>
        </el-row>
        <el-row>
          <el-button class="btn-group2" type="primary" @click="submit">完成创建</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import MainViewInput from "@/views/MainViewComponents/MainViewInput.vue"
import MainViewSingleSelect from "@/views/MainViewComponents/MainViewSingleSelect.vue"
import MainViewMultiSelect from "@/views/MainViewComponents/MainViewMultiSelect.vue"
import MainViewPullSelect from "@/views/MainViewComponents/MainViewPullSelect.vue"
import MainViewTime from "@/views/MainViewComponents/MainViewTime.vue"
import MainViewDate from "@/views/MainViewComponents/MainViewDate.vue"
import MainViewScore from "@/views/MainViewComponents/MainViewScore.vue"
import { IFormProblemData } from "@/types";
import { submitNewForm } from "@/api";

const store = useStore()
// ---------------------------- 初始化left的按钮 ---------------------------------
const addBtnList = computed(() => store.getters.getAddBtnList)
const tmplBtnList = computed(() => store.getters.getTmplBtnList)
// ------------------------------ 标题设置 -----------------------------------------
const title = computed({
  get: () => store.getters.getNewForm.title,
  set: val => store.commit("setTitle", { title: val })
})
const subTitle = computed({
  get: () => store.getters.getNewForm.subTitle,
  set: val => store.commit("setTitle", { subTitle: val })
})
// -------------------------- 主页面的点击按钮添加问题 ------------------------------
const type2Component = {
  "input": MainViewInput,
  "singleSelect": MainViewSingleSelect,
  "multiSelect": MainViewMultiSelect,
  "pullSelect": MainViewPullSelect,
  "time": MainViewTime,
  "date": MainViewDate,
  "score": MainViewScore,
}
// const type2Component = new Map(Object.entries(_type2Component))

const problems = store.getters.getNewForm.problems as Array<IFormProblemData>
function addProblem(type: string) {
  const problem: IFormProblemData = {
    id: Date.now().toString(),
    type: type,
    title: "",
  }
  store.commit("addProblem", problem)
}
// ----------------------------- right 提交新form ------------------------------
function submit() {
  submitNewForm(store.getters.getNewForm)
}
</script>
<style scoped lang="less">
.page {}

.main-container {
  display: flex;
  justify-content: center;
  //height: 80%;

  .content {
    //margin: 20px;
    padding: 20px 15px;
    background-color: white;
    margin-top: 20px;
  }

  .main-left {
    flex: 0 0 100px;
    text-align: left;
    margin-left: 10px;
    margin-right: 16px;
    height: 500px;
  }

  .main-main {
    flex: 0 0 500px;
    margin-right: 0;
    margin-left: 0;
    padding: 50px 66px;
    min-height: 300px;
  }

  .main-right {
    flex: 0 0 150px;
    margin-left: 16px;
    margin-right: 10px;
    height: 500px;

    .btn-group1 {
      justify-content: space-between;
      margin-bottom: 20px;

      .el-button {
        width: 45%;
      }
    }

    .btn-group2 {
      width: 100%;
    }
  }

  .title-small {
    font-size: 14px;
    line-height: 20px;
    color: #3d4757;
    font-weight: 700;
    margin-bottom: 10px;
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

  .main-row {
    margin-bottom: 10px;
  }

  .main-title {
    //width: 100%;
    //margin: 0;
    //border: none;
    //font-size: 20px;
    //font-weight: 700;
    //line-height: 20px;
    //color: #3d4757;
    //text-align: center;
    //overflow: hidden;
    //outline: none;
  }
}

.problems {
  .el-row {
    margin-bottom: 20px;
  }

  .problem-item {
    width: 100%;
  }
}
</style>
