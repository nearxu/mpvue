<template>
    <div>
      hello bus
      <!-- <div v-if='transits.length'>
        <div v-for='(transit,ids) in transits' :key='ids'>
            <div v-for='(transport,ids2) in transit.fmt_transports'>
                <text :key="idx2" class="arrow" v-if="idx2>0">→</text>
                    <view :key="idx2" class="text">

                    <template v-for="(item, idx3) in transport">
                    <text :key="idx3" v-if="idx3>0">/</text>
                    <text :key="idx3">{{item}}</text>
                    </template>
                    </view>
            </div>
        </div>
      </div> -->
    </div>
</template>

<script>
import store from "@/store";
import * as helpers from "@/utils/helpers";
import obj from "@/utils/transport";

export default {
  mounted() {
    this.transits();
  },
  methods: {
    transits() {
      debugger;
      const list = obj;
      console.log(list, "list");
      return list.transits.map(item => {
        return {
          fmt_transports: helpers.formatTransport(item.segments)
        };
      });
    }
  },
  computed: {}
};
</script>

