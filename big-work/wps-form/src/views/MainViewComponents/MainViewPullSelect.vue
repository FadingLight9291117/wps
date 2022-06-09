<template>
  <main>
    <el-card>
      <el-row>
        <el-form-item class="problem" :label="mId">
          <el-input v-model="problem" placeholder="请输入问题">
          </el-input>
        </el-form-item>
      </el-row>
      <el-row class="option" v-for="opt in options" :key="opt.id">
        {{options.findIndex(item => item === opt)}}.
        <el-input></el-input>
        <a class="delete" @click="deleteItem(opt.id)">
          <el-icon>
            <Close/>
          </el-icon>
        </a>
      </el-row>
      <el-row>
        <el-button type="primary" @click="addItem">+选项</el-button>
      </el-row>
    </el-card>
  </main>
</template>

<script lang="ts" setup>
import {defineProps, reactive, ref} from 'vue'
import {Close} from "@element-plus/icons";

interface IProps {
  id?: string
}

const props = defineProps<IProps>()
let mId = props.id ? props.id.toString() + '.' : "0."

const problem = ref<string>()

const options = reactive([
  {id: 0, content: ""}, {id: 1, content: ""}
])

function addItem() {
  const id = options[options.length - 1].id + 1
  const newItem = {
    id: id,
    content: "",
  }
  options.push(newItem)
}

function deleteItem(id: number) {
  if (options.length === 1) {
    return
  }
  const idx = options.findIndex(item => item.id = id)
  options.splice(idx, 1)
}

</script>

<style scoped lang="less">
main {
  width: 500px;

  .problem {
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
