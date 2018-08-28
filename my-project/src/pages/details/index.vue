<template>
  <div class="container">
    <BookInfo :info='info'></BookInfo>
    <div class="comment">
      <textarea 
        class='textarea'
        v-model='comment'
        :maxlength='100'
        placeholder='请输入图书短评'
			></textarea>
      <div class='location'>
        地理位置：
        <switch color='#EA5A49' :checked='location' @change='getGeo'></switch>
        <span class='text-primary'>{{location}}</span>
      </div>
      <div class='phone'>
        手机型号：
        <switch color='#EA5A49' :checked='phone' @change='getPhone'></switch>
        <span class='text-primary'>{{phone}}</span>
      </div>
      <button class="btn" @click='addComment'>
        评论
      </button>
    </div>
  </div>
</template>

<script>
import BookInfo from "@/components/book-info";
import { get } from "@/utils/utils";

export default {
  data() {
    return {
      info: {},
      userinfo: {},
      bookid: ""
    };
  },
  mounted() {
    this.bookid = this.$root.$mp.query.id;
    this.getDetail();
    const userinfo = wx.getStorageSync("userinfo");
    if (userinfo) {
      this.userinfo = userinfo;
    }
  },
  methods: {
    async getDetail() {
      const info = await get("/weapp/bookdetail", {
        id: this.bookid
      });
      // wx.setNavgationBarTitle({ title: info.title });
      this.info = info;
      console.log(info, "info");
    },
    getGeo(e) {
      const ak = "nLCYXhhXoQgwPQIobGoNtGuXdIQ2wYH8";
      let url = "http://api.map.baidu.com/geocoder/v2/";
      if (e.target.value) {
        wx.getLocation({
          success: geo => {
            wx.request({
              url,
              data: {
                ak,
                location: `${geo.latitude},${geo.longitude}`,
                output: "json"
              },
              success: res => {
                console.log(res);
                if (res.data.status === 0) {
                  this.location = res.data.result.addressComponent.city;
                } else {
                  this.location = "未知地点";
                  // console.log('出错了')
                }
              }
            });
          }
        });
      } else {
        this.location = "";
      }
    },
    getPhone(e) {
      console.log("手机型号");
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync();
        this.phone = phoneInfo;
      } else {
        this.phone = "";
      }
    },
    addComment() {}
  },
  components: {
    BookInfo
  }
};
</script>

<style scoped>
</style>
