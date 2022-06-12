<template>
  <div tabindex="0" class="item">
    <input class="focus" />
  </div>
</template>

<script lang="ts" setup>

</script>
<style lang="less" scoped>
.item {
  display: inline-block;
  margin: 20px;
  padding: 20px 24px;

  height: 200px;
  width: 200px;

  background-color: white;

  &:focus-within {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  }

}
</style>
