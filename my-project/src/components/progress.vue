<template>
    <div class="progressbar">
        <progress 
            :precent='precent' 
            activeColor='#f5f5f5' 
            backgroundColor='#38ae67'
            active='true'
            stroke-width='50px'
        >
        </progress>
        <p>{{year}} 过去了 {{days}} 天, {{precent}}</p>
    </div>
</template>

<script>
export default {
  methods: {
    isYear() {
      const year = new Date().getFullYear();
      if (year % 400 === 0) {
        return true;
      } else if (year % 4 === 0 || year % 100 === 0) {
        return true;
      } else {
        return false;
      }
    },
    getDayOfYear() {
      return this.isYear() ? 366 : 365;
    }
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
    days() {
      let start = new Date();
      start.setMonth(0);
      start.setDate(1);
      let offset = new Date().getTime() - start.getTime();
      return parseInt(offset / 1000 / 60 / 60 / 24) + 1;
    },
    precent() {
      return (this.days * 100 / this.getDayOfYear()).toFixed(1);
    }
  }
};
</script>

<style lang='scss'>
.progressbar {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 40px;
  width: 100%;
  height: 100px;
  progress {
    margin-bottom: 10px;
  }
}
</style>
