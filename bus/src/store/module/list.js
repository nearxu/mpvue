import amapFile from "@/utils/amap-wx.js";

const aMap = new amapFile.AMapWX({
  key: "94370f2468d0f3874761c234f63d5a71"
});

function handleGetRegeo(location) {
  return new Promise((resolve, reject) => {
    aMap.getRegeo({
      location,
      success: data => {
        resolve(data[0]);
      },
      fail: info => {
        reject(info);
      }
    });
  });
}

function handleGetStrategy(strategyIndex) {
  let strategies = [
    {
      id: 0,
      name: "推荐路线"
    }, // 最快捷模式
    {
      id: 1,
      name: "花钱少"
    },
    {
      id: 2,
      name: "换乘少"
    },
    {
      id: 3,
      name: "步行少"
    },
    {
      id: 5,
      name: "不坐地铁"
    }
  ];
  return strategies[strategyIndex].id;
}

const ListModule = {
  state: {
    isLoading: true,
    params: {
      which: "none", // 点击了哪一个picker，datetime（时间）, strategy（策略）, none（无选中）
      date: null,
      time: null,
      strategyIndex: 0
    },
    // 起点、终点
    place: {
      a: {
        name: null,
        latitude: null,
        longitude: null,
        citycode: null
      },
      b: {
        name: null,
        latitude: null,
        longitude: null,
        citycode: null
      }
    }
  },
  getters: {
    params: state => {
      const a = state.place.a;
      const b = state.place.b;
      const params = {
        origin: `${a.longitude.toFixed(6)},${a.latitude.toFixed(6)}`,
        destination: `${b.longitude.toFixed(6)},${b.latitude.toFixed(6)}`,
        city: a.citycode,
        cityd: b.citycode,
        strategy: handleGetStrategy(state.params.strategyIndex)
      };

      if (state.params.date && state.params.time) {
        params.date = state.params.date;
        params.time = state.params.time;
      }

      return params;
    }
  },
  mutations: {
    loading: (state, value) => {
      state.isLoading = value;
    },
    reset: state => {
      state.transits = [];
    },
    updateBusList: (state, data) => {
      state.distance = data.distance;
      state.taxi_cost = data.taxi_cost;
      state.transits = data.transits;
      // 虽然 data.transits 的数据量很大，但是放在store里面并不会直接放到小程序的data里，所以不用担心超出data的限制。
    },
    setPlace: (state, place) => {
      // 从首页传过来的数据
      state.place = place;
    },
    setACitycode: (state, code) => {
      state.place.a.citycode = code;
    },
    setBCitycode: (state, code) => {
      state.place.b.citycode = code;
    }
  },
  actions: {
    async getBusList({ commit, getters, dispatch, state }) {
      commit("loading", true);
      wx.showLoading({
        title: "请稍等",
        mask: true
      });
      try {
        let a = state.place.a;
        let b = state.place.b;
        // 反向编码坐标，拿到城市编码
        let p1 = handleGetRegeo(
          `${a.longitude.toFixed(6)},${a.latitude.toFixed(6)}`
        );
        let p2 = handleGetRegeo(
          `${b.longitude.toFixed(6)},${b.latitude.toFixed(6)}`
        );
        let results = await Promise.all([p1, p2]);

        const code0 = results[0].regeocodeData.addressComponent.citycode;
        const code1 = results[1].regeocodeData.addressComponent.citycode;
        commit("setACitycode", code0);
        commit("setBCitycode", code1);

        // 获取公交路线数据
        const params = getters.params; // 从 getters 获取参数
        aMap.getTransitRoute({
          ...params,
          success: data => {
            wx.hideLoading();
            console.log(data, "list data show");
            commit("updateBusList", data);
            commit("loading", false);
          },
          fail: err => {
            commit("loading", false);
            wx.showModal({
              title: info.errMsg
            });
          }
        });
      } catch (err) {
        console.log(err.message);
      }
    }
  }
};

export default ListModule;
