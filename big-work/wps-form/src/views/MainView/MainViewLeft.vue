<template>
  <div class="left-main">
    <div class="title-small">添加题目</div>
    <div class="left-content">
      <el-button plain v-for="item in addBtnList" :key="item.id" @click="addProblem({ type: item.type })">
        {{ item.name }}
      </el-button>
    </div>
    <div class="title-small">题目模板</div>
    <div class="left-content">
      <el-button plain v-for="(item, idx) in tmplBtnList" :key="idx" @click="addProblem(item)">
        {{ item.title }}
      </el-button>
    </div>
    <div class="title-small title-container">
      <div>我的常用题</div>
      <div class="manger" @click="clickManage">管理</div>
      <el-dialog v-model="managerVisible" title="管理我的常用题目">
        <el-table :data="starBtnList">
          <el-table-column property="title" label="标题" />
          <el-table-column fixed="right" label="操作" width="150px">
            <template #default="scope">
              <el-button type="danger" size="small" @click="deleteStarProblem(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>
    </div>
    <div class="left-content">
      <el-button plain v-for="(item, idx) in starBtnList" :key="idx" @click="addProblem(item)">
        {{ item.title }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { IFormProblemData } from "@/types";

const store = useStore()
store.dispatch("setStarProblemList")
const addBtnList = computed(() => store.getters.getAddBtnList)
const tmplBtnList = computed(() => store.getters.getTmplBtnList)
const starBtnList = computed(() => store.getters.getStarBtnList)

function addProblem(problem: { type: string, title?: string, options?: Array<string> }) {
  const _problem: IFormProblemData = {
    id: Date.now().toString(),
    type: problem.type,
    title: problem.title || "",
    options: problem.options,
  }
  store.commit("addProblem", _problem)
}

// 管理常用题
const managerVisible = ref(false)

function clickManage() {
  managerVisible.value = true
}
function deleteStarProblem(index: string) {
  const id = starBtnList.value[index].id
  store.dispatch("cancelStarProblem", id)
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

.title-container {
  display: flex;
  justify-content: space-between;

  .manger {
    color: blue;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
