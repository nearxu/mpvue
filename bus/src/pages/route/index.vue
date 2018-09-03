<template>
  <div class="container">
      <PlaceInput />
      <scroll-view class="scroll" scroll-y enable-back-to-top scroll-with-animation>
        <history />
      </scroll-view>
  </div>
</template>

<script>
import PlaceInput from "@/components/input";
import history from "@/components/history";

export default {
  components: {
    PlaceInput,
    history
  }
};
</script>

<style scoped>
</style>
