const KEY_HISTORY = "History";

const RouteModule = {
  state: {
    place: {
      a: {
        name: null,
        latitude: null,
        longitude: null
      },
      b: {
        name: null,
        latitude: null,
        longitude: null
      }
    },
    historys: []
  },
  mutations: {
    // 更新
    updatePlace: (state, payload) => {
      const { place, which } = payload;
      state.place[which] = place;
    },
    switchAB: state => {
      let sA = state.place.a;
      let sB = state.place.b;
      state.place.a = sB;
      state.place.b = sA;
    },
    navigateToRouteList: state => {
      let a = state.place.a;
      let b = state.place.b;

      let place = JSON.stringify({
        a,
        b
      });
      wx.navigateTo({
        url: `/pages/list/main?place=${place}`
      });
    },
    initHistorys: state => {
      let historys = wx.getStorageSync(KEY_HISTORY) || [];
      console.log(historys, "get his");
      state.historys = historys;
      console.log(state, "state");
    },
    saveHistory: state => {
      let olds = wx.getStorageSync(KEY_HISTORY) || [];
      let a = state.place.a;
      let b = state.place.b;
      let one = {
        a: a,
        b: b
      };
      // 查看历史记录是否存在
      const exsitIndex = olds.findIndex(
        m => JSON.stringify(m) === JSON.stringify(one)
      );
      if (exsitIndex > -1) {
        return null;
      }
      olds.unshift(one);
      // 历史查询记录限制15个
      if (olds.length >= 15) {
        olds.pop();
      }
      wx.setStorageSync(KEY_HISTORY, olds);
      let o = wx.getStorageSync(KEY_HISTORY);
      console.log(o, "get o");
      // 更新页面
      state.historys = olds;
    },
    delHistoryOne: (state, payload) => {
      const { idx } = payload;
      let olds = wx.getStorageSync(KEY_HISTORY) || [];
      olds.splice(idx, 1);
      wx.setStorageSync(KEY_HISTORY, olds);
      state.historys = olds;
    }
  },
  actions: {}
};

export default RouteModule;
