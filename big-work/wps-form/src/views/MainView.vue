<template>
  <div class="page">
    <div class="main-container">
      <div class="container-left">
        <MainViewLeft class="bg" />
      </div>
      <div class="container-main">
        <MainViewMain class="bg" />
      </div>
      <div class="container-right">
        <MainViewRight class="bg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import MainViewLeft from "@/views/MainView/MainViewLeft.vue"
import MainViewMain from "@/views/MainView/MainViewMain.vue"
import MainViewRight from "@/views/MainView/MainViewRight.vue"
</script>
<style scoped lang="less">
.main-container {
  //margin: 20px 10px;
  display: flex;
  justify-content: center;

  .bg {
    background-color: white;
  }

  .container-left {
    flex: 0 0 200px;
    margin-left: 10px;
    margin-right: 16px;
  }

  .container-main {
    flex: 0 0 600px;
    margin-right: 0;
    margin-left: 0;
    min-height: 400px;
  }


  .container-right {
    flex: 0 0 250px;
    margin-left: 16px;
    margin-right: 10px;
  }
}
</style>
