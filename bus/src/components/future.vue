<template>
    <div class="future">
        <div class="date" v-for='(item,index) in dates' :key='index'>
            <image :src='item.dayPictureUrl' alt=''/>
            <span>{{index === 0 ? '今天':item.date}}</span>
            <span>{{item.temperature}}</span>
            <span>{{item.weather}}</span>
            <span>{{item.wind}}</span>
        </div>
    </div>
</template>

<script>
export default {
  props: ["dates"]
};
</script>
<style lang="scss" scoped>
.future {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  padding-top: 30px;
  .date {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      padding: 5px 0;
      color: #fff;
      font-size: 12px;
      text-align: center;
    }
    image {
      display: block;
      width: 50px;
      max-height: 50px;
      margin: 0 auto;
    }
  }
}
</style>
