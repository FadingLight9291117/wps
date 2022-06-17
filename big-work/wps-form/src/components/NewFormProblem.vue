<template>
  <div class="main" tabindex="0">
    <component :is="type2Component[props.type]" :id="props.id" :data="props.data" />
    <el-row class="hidden">
      <span>必填</span>
      <el-switch v-model="required" />
    </el-row>
    <el-row class="hidden">
      <el-button type="danger" @click="deleteProblem">delete</el-button>
    </el-row>
    <el-row>
      <el-button class="hidden" @click="starTheProblem">收藏</el-button>
    </el-row>
    <el-row>
      <el-button class="copy" @click="copyProblem">复制</el-button>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import InputVue from "@/components/newFormProblems/InputProblem.vue";
import SingleSelect from "@/components/newFormProblems/SingleSelectProblem.vue";
import MultiSelect from "@/components/newFormProblems/MultiSelectProblem.vue";
import DateVue from "@/components/newFormProblems/DateProblem.vue";
import TimeVue from "@/components/newFormProblems/TimeProblem.vue";
import ScoreVue from "@/components/newFormProblems/ScoreProblem.vue";
import PullSelect from "@/components/newFormProblems/PullSelectProblem.vue";
import { IFormProblemData } from "@/types";
import { computed, defineProps, ref } from "vue";
import { useStore } from "vuex";
import { starProblem } from "@/api";

const store = useStore()
const type2Component = {
  input: InputVue,
  singleSelect: SingleSelect,
  multiSelect: MultiSelect,
  pullSelect: PullSelect,
  time: TimeVue,
  date: DateVue,
  score: ScoreVue,
};

interface IProps {
  id: number;
  type: string;
  data: IFormProblemData;
}

const props = defineProps<IProps>();

function deleteProblem() {
  store.commit("deleteProblem", props.data)
}
function starTheProblem() {
  starProblem(props.data)
  store.commit("addStarProblemList", [props.data])
}
function copyProblem() {
  const data = JSON.parse(JSON.stringify(props.data))
  store.commit("addProblem", data)
}

const required = ref(props.data.required)

</script>
<style lang="less" >
.main {
  text-align: left;
  padding: 20px 24px;
  width: 100%;

  .hidden {
    display: none;
  }

  &:focus-within {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);

    .hidden {
      display: block;
    }
  }

  .el-row {
    margin-bottom: 10px;
  }
}
</style>
