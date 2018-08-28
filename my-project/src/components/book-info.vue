<template>
    <div class="bookinfo">
        <div class="thumb">
            <img class="back" :src="info.image" />
            <div class="info">
                <div class="title">
                    {{info.title}}
                </div>
                <div class="author">
                    {{info.author}}
                </div>
            </div>
        </div>
        <div class="detail">
            <img :src="userinfo.image" class="avatar" />
            {{userinfo.name}}
            <div class="right">{{info.rate}}</div>
        </div>
        <div class="detail">
      {{info.publisher}}
      <div class="right">
        {{info.price}}
      </div>
    </div>
    <div class="tags">
        <div class="badge" v-for="tag in info.tags" :key='tag'>
            {{tag}}
        </div>
        <div class="summary">
            <p v-for="(sum,i) in info.summary" :key='i'>{{sum}}</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  props: ["info"],
  computed: {
    userinfo() {
      return this.info.user_info || {};
    }
  }
};
</script>

<style lang='scss' scoped>
.bookinfo {
  font-size: 14px;

  .badge {
    display: inline-block;
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    border: 1px #ea5a49 solid;
    color: #ea5a49;
  }
  .summary {
    padding: 0 15px;
    margin-top: 10px;
    p {
      text-indent: 2em;
      font-size: 14px;
    }
  }
  .right {
    float: right;
  }
  .detail {
    padding: 5px 10px;
    .avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
  .thumb {
    width: 750rpx;
    height: 500rpx;
    overflow: hidden;
    position: relative;
    .back {
      filter: blur(15px);
      width: 100%;
    }
    .img {
      position: absolute;
      width: 100%;
      height: 300rpx;
      left: 0;
      top: 30rpx;
    }
    .info {
      color: white;
      position: absolute;
      width: 100%;
      left: 0;
      top: 330rpx;
      text-align: center;
      .title {
        font-size: 20px;
      }
      .author {
        font-size: 14px;
      }
    }
  }
}
</style>


