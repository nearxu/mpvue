<template>
    <div class="info">
        <p>城市：{{weatherData.currentCity}}</p>
        <p>PM2.5：{{weatherData.pm25}}</p>
        <p>日期：{{weatherData.date}}</p>
        <p>温度：{{weatherData.temperature}}</p>
        <p>天气：{{weatherData.weatherDesc}}</p>
        <p>风力：{{weatherData.wind}}</p>
    </div>
</template>

<script>
export default {
  mounted() {
    console.log("data", this.weatherData);
  },
  props: ["weatherData"]
};
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0;
  p {
    text-align: center;
  }
}
</style>
