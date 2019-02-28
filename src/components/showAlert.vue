<template>
  <div id="">
    <view class="commonMask" v-if="showMask">
      <view class="alertContent">
        <view class="alertList">
          <view class="content">
            <view class="alertTitle flex-center" @click="closeMask">
              <text class="flex-grow">{{title}}</text>
              <image class src="../static/images/close.png">
            </view>
            <view class="desc">
              <view>1.拼团活动分为两种模式：
                <text>1.1、老带新团</text>
                <text>1.2、普通拼团</text>
              </view>
              <view>2.新用户仅可享受一次直接参与老带新团的机会，若该次拼团失败，可重新参与其他老带新团</view>
              <view>3.发起拼团后，分享至微信群或微信好友，邀请好友参团</view>
              <view>4.在有效时间内未达到要求人数，则拼团失败</view>
              <view>5.获取的优惠券仅限在卡券小程序内使用。</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    showMask: Boolean
  },
  data() {
    return {
      showMask: false
    };
  },
  methods: {
    /**
     * 关闭弹窗规则
     */
    closeMask() {
      this.$emit("showMask", false);
    }
  }
};
</script>

