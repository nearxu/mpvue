<template>
  <div class="container">
    <h1>hello comment1231132</h1>
    <!-- <div v-for='item in news' :key='items.newsid'>{{item.title}}</div> -->
  </div>
</template>

<script>
import { get } from "@/utils/api";
export default {
  data() {
    return {
      news: []
    };
  },
  components: {},
  mounted() {
    this.refresh();
  },
  methods: {
    async refresh() {
      wx.showNavigationBarLoading();
      const data = await get("/json/newslist/news");
      this.news = data;
      wx.hideNavigationBarLoading();
    }
  }
};
</script>

<style scoped>
</style>
