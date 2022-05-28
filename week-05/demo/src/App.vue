<template>
  <NavigatorComp />
  <BackgroundPage />
  <div class="content">
    <div v-for="value in values" :key="value.name">
      <ContentItem :value="value"></ContentItem>
    </div>
  </div>
  <FooterPage></FooterPage>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as request from "./request";
import ContentItem, { IData } from "./components/ContentItem.vue";
import NavigatorComp from "./components/Navigator.vue";
import BackgroundPage from "./components/BackgroundPage.vue";
import FooterPage from "./components/Footer.vue";
export default defineComponent({
  name: "App",
  components: {
    ContentItem,
    NavigatorComp,
    BackgroundPage,
    FooterPage,
  },
  data(): { values: IData[] } {
    return {
      values: [],
    };
  },
  methods: {
    loadData: async function () {
      this.values = await request.get("./data/task.json");
    },
  },
  created: function () {
    this.loadData();
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  display: grid;
  flex-direction: row;
  grid-gap: 36px;
  gap: 36px;
  grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
  padding: 32px 72px 41px;
}

a:link,
a:visited {
  text-decoration: none;
}
</style>
