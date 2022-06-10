<template>
  <div class="post-container">
      <main class="list">
        <ArticleComponent v-for="(article,index) in articles" :key="article.id" :article="article" :index=index @goDetail=getDetail></ArticleComponent>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import {posts} from '@/services/api.ts'
import ArticleComponent from './Article/ArticleComponent'
import {useRouter} from 'vue-router'

const router = useRouter()

const articles = ref([]);

onBeforeMount( async ()=>{
    let res = await posts();
    if(res.stat=='OK'){
      articles.value = res.rows
    }else alert('获取文章失败')
})
function getDetail(id: string) {
  router.push(`/detail/${id}`)
}
</script>

<style scoped>
.post-container {
  margin-top: 11rem;
  min-height: calc(100vh - 11rem);
  padding: 1.5rem;
  padding-bottom: 0;
}
.list {
  position: relative;
  width: 100%;
  flex: 1;
  overflow: auto;
  padding: 15px;
}
</style>