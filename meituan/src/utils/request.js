import { resolve } from "path";
import { rejects } from "assert";

let api = "http://www.abc.com/api/";

export function post(url, body) {
  return new Promise((resolve, rejecct) => {
    wx.request({
      url: api + url,
      data: body,
      method: "POST",
      header: {
        "content-type": "application/json"
      },
      success(res) {
        resolve(res.data);
      },
      fail(err) {
        reject(err);
      }
    });
  });
}
