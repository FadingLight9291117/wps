<template>
  <div class="content-item">
    <img class="content-item-img" :srcset="cover" />
    <div class="content-item-content">
      <div class="user-info">
        <a class="user-info-avatar">
          <img :srcset="avatar" />
          <span class="display-name">{{ name }}</span>
        </a>
        <a class="user-info-badge">
          <span class="badge">{{ badge }}</span>
        </a>
      </div>
      <div class="shot-statistic">
        <div class="shot-statistic-likes shot-container">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img"
            fill="#9e9ea7">
            <path
              d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z">
            </path>
          </svg>
          <span>{{ likes }}</span>
        </div>
        <div class="shot-statistic-views shot-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 11" fill="#9e9ea7" role="img">
            <path
              d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z">
            </path>
          </svg>
          <span>{{ views }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.content-item-img {
  width: 100%;
  border-radius: 10px;
}

.content-item-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.user-info {
  display: flex;
}

.user-info-avatar {
  display: flex;
  align-items: center;
}

.user-info-avatar img {
  width: 24px;
  height: 24px;
  overflow: hidden;
  border-radius: 50%;
}

.user-info-avatar span {
  margin-left: 8px;
}

.user-info-badge {
  display: flex;
  margin-left: 8px;
}

.user-info-badge span {
  padding: 2px 3px;
  background-color: #ccc;
  color: #fff;
  line-height: 1;
  border-radius: 3px;
}

.shot-statistic {
  display: flex;
}

.shot-container {
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.shot-statistic svg {
  width: 14px;
  height: 14px;
}

.shot-statistic span {
  color: #3d3d4e;
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface IData {
  cover: string;
  avatar: string;
  name: string;
  badge: string;
  likes: string;
  views: string;
}

export default defineComponent({
  name: "ConetentItem",
  props: {
    value: {
      type: Object as PropType<IData>,
      required: true
    },
  },
  data() {
    return {
      cover: this.value.cover,
      avatar: this.value.avatar,
      name: this.value.name,
      badge: this.value.badge,
      likes: this.value.likes,
      views: this.value.views
    }
  }
})
</script>
