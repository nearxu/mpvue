<template>
    <div class="historyBox">
    <div v-if='historys'>
        <div v-for='(item,index) in historys'>
            <div class="item" :key='index' :data-index="index" @click="bindHistoryTap">
                <div class="dltBox" @click='bindHistoryDltOneTap'>删除</div>
                <div class="blockBox">
                    <image class='icon' src="/static/image/route/clock.png" />
                    <div class="textBox">
                        <text class='a'>{{item.a.name}}</text>
                        <text>--->>></text>
                         <text>{{item.b.name}}</text>
                    </div>
                </div>
            </div>
        </div>
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
    bindHistoryTap(e) {
      const idx = e.currentTarget.dataset.index;
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
    display: flex;
    font-size: 24px;
    .icon {
      display: inline-block;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
