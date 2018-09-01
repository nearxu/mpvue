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
    }
  },
  actions: {}
};

export default RouteModule;
