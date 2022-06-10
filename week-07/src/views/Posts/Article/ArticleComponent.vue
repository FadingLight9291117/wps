<template>
  <div class="article-card" @click="this.$emit('goDetail', article.id)">
    <div class="cover"  :style="{ backgroundImage: 'url(' + article.banner + ')' }">
      <img
        :src="require(`@/assets/img/rank-top${index+1}.png`)"
        class="cover-rank"
        v-if="index < 5"
      />
    </div>
    <div class="article-card-title">
      {{ article.title }}
    </div>
    <div class="article-card-footer">
      <i class="iconfont icon-comment"></i>
      <span>{{ article.comments }}</span>
      <i class="iconfont icon-thumb-up"></i>
      <span>{{ article.likes }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IArticle } from "@/types.ts";
import { defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  article: {
    type: IArticle,
    required: true,
  },
  index: {
    type: Number,
    require: true
  }
});
</script>

<style scoped>
@import url(@/assets/styles/icon.css);
.article-card {
  display: block;
  text-decoration: none;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #fff;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
  cursor: pointer;
}
.cover {
  height: 15.7rem;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  text-align: center;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.cover-rank {
  position: absolute;
  width: 3.6rem;
  left: 0;
  top: 0;
}
.article-card-title {
  color: #333;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.5em;
  margin-top: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.article-card-footer {
  display: flex;
  margin-top: 1.5rem;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.2rem;
  color: #999;
}
.article-card-footer span {
  margin-left: 0.5rem;
}
.article-card-footer i {
  margin-left: 1.5rem;
}
</style>
