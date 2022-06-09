<template>
  <div class="page">
    <div class="main-container">
      <div class="left content">
        <div class="title-small">添加题目</div>
        <div class="left-content">
          <el-button plain v-for="item in addBtnList" :key="item.id" @click="clickQuestionBtn('add', item.id)">
            {{ item.name }}
          </el-button>
        </div>
        <div class="title-small">题目模板</div>
        <div class="left-content">
          <el-button plain v-for="item in tmplBtnList" :key="item.id" @click="clickQuestionBtn('tmpl', item.id)">{{
              item.name
            }}
          </el-button>
        </div>
        <div class="title-small">我的常用题</div>
      </div>
      <div class="main content">
        <!-- <NewFormContent></NewFormContent> -->
        <div class="main-row">
          <input class="main-title" type="text" value="" placeholder="请输入表单标题"/>
        </div>
        <div class="main-row">
          <el-input type="text" value="" placeholder="点击设置描述"/>
        </div>
      </div>
      <div class="right content">
        <!-- <NewFormSetting></NewFormSetting> -->
        <el-row class="btn-group1">
          <el-button>预览</el-button>
          <el-button>保存草稿</el-button>
        </el-row>
        <el-row>
          <el-button class="btn-group2" type="primary">完成创建</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import NewFormContent from '@/components/NewFormContent.vue';
// import NewFormSetting from '@/components/NewFormSetting.vue';
import MainViewInput from "../views/MainViewComponents/MainViewInput.vue"

const type = 'MainViewInput'
// ------------------- 初始化left的按钮 ----------------------
const addBtnList = [
  {id: 1, name: "填空题", type: "input"},
  {id: 2, name: "单选题", type: "singleSelect"},
  {id: 3, name: "多选题", type: "multiSelect"},
  {id: 4, name: "下拉选择", type: "pullSelect"},
  {id: 5, name: "日期题", type: "date"},
  {id: 6, name: "时间题", type: "time"},
  {id: 7, name: "分数题", type: "score"},
];
const tmplBtnList = [
  {id: 1, name: "姓名"},
  {id: 2, name: "年龄"},
];

function clickQuestionBtn(type: string, id: number) {
  alert(`${type}, ${id}`);
}

// ----------------------------------------------------

</script>
<style scoped lang="less">
.page {
  background-color: #f0f2f5;
  height: 100%;
}

.main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 500px;

  .content {
    //margin: 20px;
    padding: 20px 15px;
    background-color: white;
    margin-top: 20px;
  }

  .left {
    text-align: left;
    width: 200px;
    margin-left: 10px;
    margin-right: 16px;
  }

  .main {
    margin-right: 0;
    margin-left: 0;
    padding: 50px 66px;
    width: 700px;
  }

  .right {
    width: 300px;
    margin-left: 16px;
    margin-right: 10px;

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
    width: 100%;
    margin: 0;
    border: none;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    color: #3d4757;
    text-align: center;
    overflow: hidden;
    outline: none;
  }
}
</style>
