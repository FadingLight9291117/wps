<template>
  <div class="home-container">
    <header class="top">
      <div class="top-title">排行榜</div>
      <!-- 导航栏 --综合榜等 -->
      <nav class="tabs">
        <ul class="tabs-list">
          <router-link to="/posts" class="tab-item">
            <img src="@/assets/img/icon_article.webp" alt="" />
            <span>好文精选</span>
          </router-link>
          <router-link to="/news" class="tab-item">
            <img src="@/assets/img/icon_article.webp" alt="" />
            <span>热门资讯</span>
          </router-link>
        </ul>
      </nav>
    </header>
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
// 根据屏幕宽度来设置根元素字体大小从而控制rem布局
function resize() {
    let clientWidth = window.innerWidth
    let fontSize = (clientWidth / 750) *20
    fontSize = Math.min(fontSize,20)
    document.documentElement.style.fontSize = fontSize+'px'
}
onBeforeMount(()=>{
    resize()
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.home-container {
  display: flex;
  flex-direction: column;
  background-color: #eee;
  margin: auto;
  position: relative;
  box-sizing: border-box;
}
.top {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #d23e34;
  padding-top: 1.5rem;
  box-shadow: 0 0.2rem 1rem 0 rgba(0, 0, 0, 0.2);
}
.top-title {
  text-align: center;
  font-size: 1.8rem;
  color: #fff;
}
.tabs {
  padding: 1.5rem;
}
.tabs-list {
  margin: 0;
  display: flex;
  border-radius: 1rem;
  background-color: #cd2523;
  overflow: hidden;
  padding: 0;
}
.tab-item {
  flex: 1;
  text-align: center;
  line-height: 4rem;
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab-item img {
  width: 2.4rem;
  margin-right: 0.8rem;
}
a {
  text-decoration: none;
}
.router-link-active {
  background-color: #b9211f;
}
</style>
