<template>
  <div class="container">
    <Info :weatherData='weatherData' :data = "data"/>
    <LiveList :lists = 'weatherData.index'/>
  </div>
</template>

<script>
import BMapWX from "@/lib/bmap-wx.js";
import Info from "@/components/info";
import LiveList from "@/components/live-list";
export default {
  data() {
    return {
      weatherData: {},
      data: {}
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var BMap = new BMapWX({
        ak: "0giEcwiMmNadgOnPHIQKDcFjGYTSrHvG"
      });
      BMap.weather({
        success: res => {
          console.log(res.currentWeather[0], "reuslt", res);
          this.weatherData = res.currentWeather[0];
        }
      });
    }
  },
  components: {
    Info,
    LiveList
  }
};
</script>

<style scoped>
.container {
  display: block;
  width: 100%;
  height: 1000px;
  background: #e5e5e5;
  /* opacity: 0.8; */
  /* background: url("../../../static/img/beach-bird-birds-235787.jpg") center
    no-repeat;
  background-size: cover; */
}
</style>
