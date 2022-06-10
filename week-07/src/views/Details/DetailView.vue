<template>
   <div class="detail-wrapper">
    <nav class="detail-bar">
      <img src="@/assets/img/left.svg" class="left-arrow" @click="$router.back()" />
      <img :src="articleDetail.avatar" class="author-icon" />
      <span>{{ articleDetail.author }}</span>
    </nav>
    <div class="detail-container">
      <div
        class="detail-banner"
        v-if="articleDetail.banner"
        :style="{ backgroundImage: 'url(' + articleDetail.banner + ')' }"
      ></div>
      <div class="detail-content">
        <div class="detail-title">{{ articleDetail.title }}</div>
        <div class="detail-time">{{ articleDetail.time }}</div>
        <div
          class="content-styles"
          v-if="articleDetail.content"
          v-html="articleDetail.content"
        ></div>
      </div>
      <div class="comments-and-likes">
        <i class="iconfont icon-comment"></i>
        <span>{{ articleDetail.comments }}</span>
        <i class="iconfont icon-thumb-up"></i>
        <span>{{ articleDetail.likes }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import {detail} from '@/services/api.ts'
import {useRoute,useRouter} from 'vue-router'

const route=useRoute()

var articleDetail = ref({})
onBeforeMount( async ()=>{
    let res = await detail(route.params.id);
    if(res.stat=='OK'){
      articleDetail.value=res.data
    }else alert('获取详情失败')
    
})


</script>

<style scoped>
@import url(@/assets/styles/icon.css);
* {
  margin: 0;
  padding: 0;
}
.detail-wrapper {
  display: flex;
  flex-direction: column;
}
.detail-bar {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 4.5rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  z-index: 1;
  box-shadow: 0 0.2rem 1rem 0 rgba(0, 0, 0, 0.2);
}
.left-arrow {
  width: 1.8rem;
  cursor: pointer;
}
.author-icon {
  width: 2.5rem;
  margin: 0 0.5rem;
  border-radius: 50%;
}
.detail-container {
  margin-top: 4.5rem;
}
.detail-banner {
  width: 100vw;
  height: 16rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.detail-content {
  margin: 3rem 2rem 2rem 2rem;
}
.detail-title {
  text-align: left;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
}
.detail-time {
  text-align: left;
  color: #878787;
  font-size: 0.8rem;
  padding-top: 1.8rem;
  padding-bottom: 0.8rem;
}
.content-styles ::v-deep p {
  text-align: left;
  margin: 1rem 0;
  letter-spacing: 0.1rem;
  line-height: 1.8rem;
}
.content-styles ::v-deep a :not(.content-styles) {
  width: 28rem;
  display: block;
  margin: auto;
}
.content-styles ::v-deep img {
  width: 28rem;
}
.comments-and-likes {
  color: #878787;
  margin: 0 2rem 2rem 2rem;
  display: flex;
  justify-content: right;
}
.comments-and-likes span {
  margin-left: 0.5rem;
}
.comments-and-likes i {
  margin-left: 1.5rem;
}

</style>