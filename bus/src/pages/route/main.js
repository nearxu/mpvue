import Vue from "vue";
import App from "./index";

const app = new Vue(App);
app.$mount();
export default {
    config: {
      navigationBarTitleText: "公交巴士",
      enablePullDownRefresh: false,
      backgroundTextStyle: "dark"
    }
  };