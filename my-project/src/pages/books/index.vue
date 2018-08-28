<template>
  <div class="container">
    <TopSwiper :tops='imgs'></TopSwiper>
   <div v-for="book in books" :key="book.id">
    <card :book="book"></card>
   </div>
  </div>
</template>

<script>
import { get } from "@/utils/utils";
import card from "@/components/card";
import TopSwiper from "@/components/top-swiper";

export default {
  data() {
    return {
      imgs: [],
      books: {},
      page: 0,
      more: true
    };
  },
  mounted() {
    this.getList(true);
    this.getTop();
  },
  components: {
    card,
    TopSwiper
  },
  methods: {
    async getTop() {
      const imgs = await get("/weapp/top");
      this.imgs = imgs.list;
    },
    async getList(init) {
      if (init === true) {
        this.page = 0;
      }
      wx.showNavigationBarLoading();
      const books = await get("/weapp/booklist", { page: this.page });
      if (books.list.length < 10) {
        this.more = false;
      }
      if (init) {
        this.books = books.list;
      } else {
        // 下拉刷新，需要累加数据而不是直接覆盖
        this.books = this.books.concat(books.list);
      }
      wx.hideNavigationBarLoading();
    },
    onPullDownRefresh() {
      this.getList(true);
    },
    onReachBottom() {
      if (!this.more) {
        return false;
      }
      this.page += 1;
      this.getList();
    }
  }
};
</script>

<style scoped>
</style>
