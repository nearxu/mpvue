// import wx from "wx";
import Fly from "flyio";

const http = new Fly();

http.interceptors.request.use(request => {
  wx.showNavigationBarLoading();
  return request;
});

http.interceptors.response.use(
  (response, promise) => {
    wx.hideNavigationBarLoading();
    return promise.resolve(response.data);
  },
  (err, promise) => {
    wx.hideNavigationBarLoading();
    wx.showToast({
      title: err.message,
      icon: "none"
    });
    return promise.resolve();
  }
);

export default http;
