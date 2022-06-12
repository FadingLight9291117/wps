<template>
    <component :is="type2Component[props.type]" :id="props.id" :data="props.data"/>
</template>
<script lang="ts" setup>
import InputVue from "@/components/newFormProblems/InputProblem.vue"
import SingleSelect from "@/components/newFormProblems/SingleSelectProblem.vue"
import MultiSelect from "@/components/newFormProblems/MultiSelectProblem.vue"
import DateVue from "@/components/newFormProblems/DateProblem.vue"
import TimeVue from "@/components/newFormProblems/TimeProblem.vue"
import ScoreVue from "@/components/newFormProblems/ScoreProblem.vue"
import PullSelect from "@/components/newFormProblems/PullSelectProblem.vue"
import {IFormProblemData} from "@/types";
import {defineProps} from "vue";

interface IProps {
  id: number
  type: string
  data: IFormProblemData
}

const props = defineProps<IProps>()

const type2Component = {
  "input": InputVue,
  "singleSelect": SingleSelect,
  "multiSelect": MultiSelect,
  "pullSelect": PullSelect,
  "time": TimeVue,
  "date": DateVue,
  "score": ScoreVue,
}


</script>
<style lang="less">
</style>
