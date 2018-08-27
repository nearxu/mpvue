<template>
  <div class="container">
   hello details
  </div>
</template>

<script>
export default {
  mounted() {
    this.bookid = this.$root.$mp.query.id;
    console.log(this.bookid, "bookid");
  }
};
</script>

<style scoped>
</style>
