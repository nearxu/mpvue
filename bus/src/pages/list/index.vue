<template>
  <div class="container">
      <h1>hello list</h1>
      <busList />
  </div>
</template>

<script>
import store from "@/store";
import busList from "@/components/bus-list";

export default {
  mounted() {
    // this.getList();
  },
  components: {
    busList
  },
  methods: {
    getList() {
      const place = JSON.parse(this.$root.$mp.query.place);
      console.log(place, "place");
      store.commit("setPlace", place);
      store.dispatch("getBusList");
    }
  }
};
</script>

<style scoped>
</style>
