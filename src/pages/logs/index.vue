<template>
    <!-- <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul> -->
    <div>
      <button @click="clickFun">点击</button>
      <div class="wrap" :class="{show: isShow}">
      </div>
    </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: [],
      isShow: false,
    }
  },

  // created () {
  //   const logs = (wx.getStorageSync('logs') || [])
  //   this.logs = logs.map(log => formatTime(new Date(log)))
  // },
  mounted() {
    // setTimeout(() => {
    //   this.isShow = !this.isShow;
    // }, 1000);
    // setInterval(() => {
    //   this.isShow = !this.isShow;
    // }, 1500);
  },
  methods: {
    clickFun() {
      // console.log(this, 999)
      this.isShow = !this.isShow;
    }
  },
}
</script>

<style lang="less">
.wrap {
    width: 200px;
    height: 0;
    background-color: red;
    &.show {
      height: 200px;
      transition: all 300ms;
    }
}
</style>

