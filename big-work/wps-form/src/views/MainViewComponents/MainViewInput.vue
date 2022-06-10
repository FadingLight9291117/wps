<template>
  <div class="main">
    <el-card>
      <el-row>
        <el-form-item :label="itemId">
          <el-input class="title" v-model="title" placeholder="请输入问题">
          </el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <div class="answer">
          <span>填写者回答区</span>
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, computed} from "vue";
import {useStore} from "vuex";
import {IFormItemData} from "@/types";

const store = useStore()

interface IProps {
  id?: string,
}

const props = defineProps<IProps>()

const itemId = computed(() => store.getters.getNewForm.findIndex((item: IFormItemData) => item.id === props.id).toString())

const data = computed<IFormItemData>({
  get: () => store.getters.getNewForm.find((item: IFormItemData) => item.id === props.id),
  set: val => {
    store.commit("updateProblem", val)
  }
})

const title = computed({
  get: () => data.value.title,
  set: val => {
    const problem = data.value
    problem.title = val
    data.value = problem
  }
})


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
