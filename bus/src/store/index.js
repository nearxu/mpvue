import Vue from "vue";
import Vuex from "vuex";
import RouteModule from "./module/route";
import ListModule from "./module/list";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    route: RouteModule,
    list: ListModule
  }
});

export default store;
