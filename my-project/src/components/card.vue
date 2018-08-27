<template>
     <a class="card" :href="detailUrl">
        <p>{{book.title}}</p>
        <img :src = "book.image" />
     </a>
</template>

<script>
export default {
  props: ["book"],
  computed: {
    detailUrl() {
      const url = `/pages/details/main?id=${this.book.id}`;
      console.log(url);
      return url;
    }
  }
};
</script>
<style scope lang="scss">
.card {
  display: block;
  width: 100%;
  background: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  img {
    display: block;
    width: 500px;
    min-height: 200px;
  }
}
</style>


