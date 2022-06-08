<template>
  <div class="main">
    <el-card>
      <el-row>
        <el-form-item class="problem" :label="mId">
          <el-input class="problem" v-model="problem"></el-input>
        </el-form-item>
      </el-row>

      <el-row v-for="opt in options" :key="opt.id">
        <el-checkbox label="opt.id" size="small" disabled>
          <el-input v-model="opt.content"></el-input>
        </el-checkbox>

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
  </div>
</template>

<script lang="ts" setup>
import {Close} from "@element-plus/icons";
import {ref, reactive} from "vue";
import {defineProps} from "vue";

interface IProps {
  id?: string
}

const props = defineProps<IProps>()
let mId = props.id ? props.id.toString() + '.' : "0."
let problem = ref("")

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

.main {
  width: 500px;

  .problem {
    width: 100%;
  }

  .el-row {
    margin-bottom: 10px;
  }

  .delete {
    &:hover {
      cursor: pointer;
    }
  }
}

</style>
