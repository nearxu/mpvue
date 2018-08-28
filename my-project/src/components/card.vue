<template>
     <a class="card" :href="detailUrl">
       <div class="book-card">
      <div class="thumb" @click.stop="preview">
				<!-- mode: wechat document -->
        <img :src="book.image" class="img" mode="aspectFit"/>
      </div>
      <div class="detail">
        <div class="row text-primary">
          <div class="right">
            <!-- {{book.rate}} <Rate :value='book.rate'></Rate> -->
          </div>
          <div class="left">
            {{book.title}}
          </div>
        </div>
        <div class="row">
          <div class="right text-primary">
            浏览量:{{book.count}}
          </div>
          <div class="left">
            {{book.author}}
          </div>
        </div>
        <div class="row">
          <div class="right">
            {{book.user_info.nickName}}
          </div>
          <div class="left">
          {{book.publisher}}
          </div>
        </div>
      </div>
    </div>
     </a>
</template>

<script>
export default {
  props: ["book"],
  computed: {
    detailUrl() {
      const url = `/pages/details/main?id=${this.book.id}`;
      return url;
    }
  }
};
</script>
<style scoped lang="scss">
.book-card {
  margin: 10px 5px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .thumb {
    margin-right: 40px;
    display: flex;
    justify-content: center;
    .img {
      width: 90px;
      height: 90px;
    }
  }
  .detail {
    flex: 1;
    display: flex;
    flex-direction: column;
    .row {
      line-height: 20px;
      margin-bottom: 3px;
    }
    .left {
      margin-right: 80px;
    }
  }
}
</style>


