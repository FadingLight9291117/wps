<template>
  <div style="width: 300px">
    <ContentItem :value="value"></ContentItem>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ContentItem, { IData } from "./components/ContentItem.vue";

@Options({
  components: {
    ContentItem,
  },
})
export default class App extends Vue {
  public value: IData = {
    cover: "imgs/cover-01.jpg",
    avatar: "imgs/avatar-01.jpg",
    name: "nane",
    badge: "badge",
    likes: "123",
    views: "323",
  };
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
