<template>
    <div class="news-container">
        <main class="list">
            <NewsComponent v-for="newItem in news" :key="newItem.id" :newItem="newItem" @goDetail=getDetail></NewsComponent>
        </main>
    </div>
</template>

<script setup lang="ts">
import {onBeforeMount, ref} from 'vue'
import {getNews} from '@/services/api.ts'
import NewsComponent from './New/NewComponent'
import {useRouter} from 'vue-router'

const router = useRouter()

const news = ref([])

onBeforeMount( async ()=>{
    let res = await getNews();
    if(res.stat=='OK'){
      news.value = res.rows
    }else alert('获取新闻失败')
    
})
function getDetail(id: string) {
  router.push(`/detail/${id}`)
}
</script>

<style scoped>
.news-container {
  margin-top: 11rem;
  min-height: calc(100vh - 11rem);
  padding: 1.5rem;
  padding-bottom: 0;
}

</style>