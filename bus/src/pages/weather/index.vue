<template>
  <div class="container">
      hello weather
  </div>
</template>

<script>
// import store from "@/store";
import amapFile from "@/utils/amap-wx.js";

export default {
  mounted() {
    this.getweatherbaidu();
  },
  methods: {
    getWeather() {
      wx.getLocation({
        type: "gcj02",
        success: geo => {
          const data = {
            ak: "SUaGCkLbTjwcL4ce7OfDhaGB4nYW943d",
            location: `${geo.latitude},${geo.longitude}`,
            output: "json"
          };
          wx.request({
            url: "http://api.map.baidu.com/telematics/v3/weather",
            method: "GET",
            data: data,
            header: {
              //设置参数内容类型为x-www-form-urlencoded
              "content-type": "application/x-www-form-urlencoded",
              Accept: "application/json"
            },
            success: res => {
              console.log(res.data, "data");
            }
          });
        }
      });
    },
    getweatherbaidu() {
      wx.getLocation({
        type: "gcj02",
        success: res => {
          console.log(res, "red");
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
