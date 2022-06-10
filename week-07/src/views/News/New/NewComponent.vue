<template>
  <div class="news" @click="this.$emit('goDetail', newItem.id)">
    <div
      class="cover"
      :style="{ backgroundImage: 'url(' + newItem.banner + ')' }"
    ></div>
    <div class="news-introduction">
      <p class="news-title">{{ newItem.title }}</p>
      <div class="news-author">{{ newItem.author }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IArticle } from "@/types.ts";
import { defineProps } from "vue";
const props = defineProps({
  newItem: {
    type: IArticle,
    required: true,
  },
});
</script>

<style scoped>
@import url(@/assets/styles/icon.css);
.news {
  display: flex;
  text-decoration: none;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #fff;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
  cursor: pointer;
}
.cover {
  height: 8rem;
  width: 10rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.news-introduction {
  flex: 1;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}
.news-title {
  color: #333;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.news-author {
  color: rgb(135, 135, 135);
}
</style>
