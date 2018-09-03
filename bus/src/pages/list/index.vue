<template>
  <div class="container">
    <!-- <busSelector /> -->
    <scroll-view class="scrollBody" scroll-y enable-back-to-top scroll-with-animation>
      <busList />
    </scroll-view>
  </div>
</template>

<script>
import store from "@/store";
import busList from "@/components/bus-list";
import busSelector from "@/components/bus-selector";

export default {
  onLoad() {
    this.getList();
    console.log("onload");
  },
  components: {
    busList,
    busSelector
  },
  methods: {
    getList() {
      const place = JSON.parse(this.$root.$mp.query.place);
      store.commit("setPlace", place);
      store.dispatch("getBusList");
    }
  }
};
</script>

<style scoped>
</style>
