<template>
  <MyButton>默认按钮</MyButton>
  <MyButton type="primary" onclick="alert('test')">主按钮</MyButton>
  <MyButton type="primary" @click="changeModalVisable">打开Modal框</MyButton>
  <MyModal :visible='modalVisiable' title="窗口标题" @handleClose="changeModalVisable">
    <template #footer>
      <MyButton @click="changeModalVisable">确定</MyButton>
      <MyButton @click="changeModalVisable" type='primary'>取消</MyButton>
    </template>
    <p>some content....</p>
    <p>some content....</p>
    <p>some content....</p>
    <p>some content....</p>
  </MyModal>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyButton from "./components/MyButton.vue"
import MyModal from './components/MyModal.vue';

export default defineComponent({
  name: 'App',
  components: {
    MyButton,
    MyModal
  },
  data() {
    return {
      modalVisiable: false
    }
  },
  methods: {
    changeModalVisable() {
      this.modalVisiable = !this.modalVisiable;
    }

  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
