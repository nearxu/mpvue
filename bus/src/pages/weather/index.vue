<template>
  <div class="container">
    <Info :weatherData='weatherData' :data = "data"/>
    <Future :dates='futureData'/>
    <LiveList :lists='data'/>
  </div>
</template>

<script>
import BMapWX from "@/lib/bmap-wx.js";
import Info from "@/components/info";
import LiveList from "@/components/live-list";
import Future from "@/components/future";
export default {
  data() {
    return {
      weatherData: {},
      data: [],
      futureData: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var BMap = new BMapWX({
        ak: "####"
      });
      BMap.weather({
        success: res => {
          console.log("res", res);
          this.weatherData = res.currentWeather[0];
          this.data = res.originalData.results[0].index;
          this.futureData = res.originalData.results[0].weather_data;
          console.log(this.data, "data", this.futureData);
        }
      });
    }
  },
  components: {
    Info,
    LiveList,
    Future
  }
};
</script>

<style scoped>
.container {
  display: block;
  width: 100%;
  background: rgb(30, 136, 210);
  color: #fff;
  /* opacity: 0.8; */
  /* background: url("../../../static/img/beach-bird-birds-235787.jpg") center
    no-repeat;
  background-size: cover; */
}
</style>
