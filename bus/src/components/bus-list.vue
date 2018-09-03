<template>
    <div class='listBox'>
      <div v-if='transits.length'>
        <div v-for='(transit,ids) in transits' :key='ids' class="list">
            <div v-for='(transport,ids2) in transit.fmt_transports' class='content'>
                <text :key="idx2" class="arrow" v-if="idx2>0">→</text>
                    <view :key="idx2" class="text">

                    <template v-for="(item, idx3) in transport">
                    <text :key="idx3" v-if="idx3>0">/</text>
                    <text :key="idx3">{{item}}</text>
                    </template>
                    </view>
            </div>
            <view class="list--desc mb10">
            <text>{{transit.fmt_duration}}</text>
            <text class="plr10">·</text>
            <text>{{transit.fmt_cost}}元</text>
            <text v-if="transit.fmt_walking_distance" class="plr10">·</text>
            <text v-if="transit.fmt_walking_distance">步行{{transit.fmt_walking_distance}}</text>
          </view>
          <view class="list--distance">本路线{{transit.fmt_distance}}</view>
        </div>
      </div>
      <div v-else>
        <view class="list--none p40 mb20 bgFFF">
        <text>没有推荐路线</text>
      </view>
      </div>
    </div>
</template>

<script>
import store from "@/store";
import {
  formatTransport,
  formatDistance,
  formatDuration
} from "@/utils/helpers";
// import obj from "@/utils/transport";

export default {
  computed: {
    transits() {
      if (!store.state.list.isLoading) {
        return store.state.list.transits.map(item => {
          return {
            fmt_cost: parseInt(item.cost) || 0,
            fmt_distance: formatDistance(item.distance),
            fmt_duration: formatDuration(item.duration),
            fmt_walking_distance: item.fmt_walking_distance,
            fmt_transports: formatTransport(item.segments)
          };
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.listBox {
  .list {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-bottom: 1px solid #e5e5e5;
  }
}
</style>

