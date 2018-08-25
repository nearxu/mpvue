<template>
    <div id= 'app'>
        <v-header :seller = "seller"></v-header>
    </div>
</template>

<script>
import header from "../../components/header/index";
export default {
  data() {
    return {
      seller: {
        name: "hi meituan "
      }
    };
  },
  components: {
    "v-header": header
  }
};
</script>

