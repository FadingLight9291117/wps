<template>
  <div class="main">
    <el-card>
      <el-row>
        <el-form-item class="title" :label="itemId">
          <el-input class="title" v-model="data.title"></el-input>
        </el-form-item>
      </el-row>

      <el-row v-for="opt in data.setting?.options" :key="opt.id">
        <el-radio label="opt.id" size="small" disabled>
          <el-input v-model="opt.content"></el-input>
        </el-radio>

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
import {ref, reactive, computed, watch} from "vue";
import {defineProps} from "vue";
import {IFormItemData} from "@/types";
import {useStore} from "vuex";

const store = useStore()

interface IProps {
  id?: string
}

const props = defineProps<IProps>()

const itemId = computed(() => store.getters.getNewForm.findIndex((item: IFormItemData) => item.id === props.id).toString())

const data = store.getters.getNewForm.find((item: IFormItemData) => item.id === props.id)


function addItem() {
  data.value.setting?.options.push({title: "", status: 1})
}

function deleteItem(id: string) {
  const idx = data.value.setting.options.indexOf((item: { id: string, status: number }) => item.id === id)
  data.value.setting?.options.splice(idx, 1)
}


</script>
<style scoped lang="less">

.main {
  width: 500px;

  .title {
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

  .el-radio {
    margin-right: 0;
  }
}

</style>
