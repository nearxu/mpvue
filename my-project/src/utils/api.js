import http from "./http";
const baseUrlApi = "https://api.ithome.com";

export function get(url, data) {
  return request(url, "GET", data);
}

export function post(url, data) {
  return request(url, "POST", data);
}

function request(url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      url: baseUrlApi + url,
      success: function(res) {
        if (res.data.code === 0) {
          resolve(res.data.data);
        } else {
          showModal("失败", res.data.data.msg);
          reject(res.data);
        }
      }
    });
  });
}
export function showModal(title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  });
}
