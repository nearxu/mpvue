<template>
  <div class="container">
   <div v-for="book in books" :key="book.id">
    <card :book="book"></card>
   </div>
  </div>
</template>

<script>
import { get } from "@/utils/utils";
import card from "@/components/card";
export default {
  data() {
    return {
      books: {},
      page: 0,
      more: true
    };
  },
  mounted() {
    this.getList(true);
    // this.getTop();
  },
  components: {
    card
  },
  methods: {
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
