<template>
    <div class="live-list">
        <div class="list" v-for='(item,index) in lists' :key='index'>
            <div class="list-column">
                <h1>{{item.tipt}} {{item.zs}}</h1>
                <p>{{item.des}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.lists, "lists");
  },
  props: ["lists"],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.live-list {
  font-size: 24px;
  color: #fff;
  z-index: 10;
  // background: url("/static/img/beach-bird-birds-235787.jpg") center no-repeat;
  // background-size: cover;
  .list {
    margin-top: 20px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    // border-bottom: 2px solid rgb(26, 21, 12);
    image {
      display: block;
      width: 60px;
      max-height: 60px;
      margin-right: 10px;
    }
    .list-column {
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 24px;
      }
      p {
        padding: 5px 0;
        font-size: 12px;
      }
    }
  }
}
</style>
