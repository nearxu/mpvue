<template>
    <div class='swiper'>
    <swiper
      :indicator-dots='true'
      indicator-color='#EA5A49'
      :autoplay='true'
      :interval='6000'
      :duration='1000'
      :circular='true'
    >
      <div :key='imgindex' v-for='(top,imgindex) in imgUrls'>
        <swiper-item>
          <img  
            @click='bookDetail(img)'
            class='slide-image' 
            mode='aspectFit' 
            v-for='img in top'
            :key='img.id'
            :src="img.image" 
          >
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ["tops"],
  computed: {
    imgUrls() {
      let res = this.tops;
      let nums = [res.slice(0, 3), res.slice(3, 6), res.slice(6)];
      console.log(nums, "nums");
      return nums;
    }
  },
  methods: {
    bookDetail(item) {
      wx.navigateTo({
        url: "/pages/details/main?id=" + item.id
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.swiper {
  width: 100%;
  height: 250px;
  .slide-image {
    width: 33%;
    height: 250px;
  }
}
</style>

