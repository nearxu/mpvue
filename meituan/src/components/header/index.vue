<template>
    <div class="header">
         <div class="content">
               <div class="title">
                   <span class="brand"></span>
                   <span class="name">{{seller.name}}</span>
               </div>
                <!-- <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon decrease" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div> -->
           </div>
    </div>
</template>
<script>
export default {
  data() {},
  props: {
    seller: {
      type: Object
    }
  }
};
</script>

<style>
</style>

