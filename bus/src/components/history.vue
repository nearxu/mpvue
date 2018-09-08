<template>
    <div class="historyBox">
    <div v-if='historys'>
        <div v-for='(item,index) in historys'>
            <div class="item" :key='index' :data-index="index">
                <div class="blockBox">
                    <image 
                      class='icon' 
                      src="/static/image/route/clock.png" 
                      @click='bindHistoryDltOneTap'
                    />
                    <div class="textBox" @click="bindHistoryTap(index)">
                        <text class='a'>{{item.a.name}}</text>
                         <text>{{item.b.name}}</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="no-history">
      暂无历史路线
    </div>
    </div>
</template>

<script>
import store from "@/store";

export default {
  onLoad() {
    console.log("onload");
    store.commit("initHistorys");
  },

  created() {
    console.log("created");
    store.commit("initHistorys");
    console.log(store, "create store");
  },
  computed: {
    historys() {
      console.log(store.state.route, "history11");
      return store.state.route.historys;
    }
  },
  methods: {
    bindHistoryTap(idx) {
      // const idx = e.currentTarget.dataset.index;
      const historys = this.historys;
      const history = historys[idx];
      store.commit("updatePlace", { which: "a", place: history.a });
      store.commit("updatePlace", { which: "b", place: history.b });
    },
    bindHistoryDltOneTap(e) {
      const idx = e.currentTarget.dataset.index;
      store.commit("delHistoryOne", { idx });
    }
  }
};
</script>

<style lang='scss' scoped>
.historyBox {
  .item {
    padding: 20px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 14px;
    .blockBox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-right: 5px;
      }
      .textBox {
        flex: 1;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .no-history {
    display: flex;
    justify-content: center;
    padding: 30px 0;
    font-size: 24px;
    color: #333333;
  }
}
</style>
