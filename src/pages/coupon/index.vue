<template>
  <div id="coupon">
    <view class="couponMargin">
      <view
        class="voucher"
        v-for="(item,index) in couponLists"
        :key="index"
      >
        <image class="bg" :src="item.bg" mode="aspectFit" />
        <!-- 角标 -->
        <image class="title" :src="item.tagPic" mode="aspectFit" />
        <!-- 列表卡券内容 -->
        <view class="voucherContainer">
          <view class="voucherLeft">
            <image class :src="item.img" mode="aspectFit" />
          </view>
          <view class="voucherCenter">
            <view class="foodName">{{item.prizeName}}</view>
            <view class="voucherTag">全天可用</view>
            <view class="voucherTime">{{item.time}}</view>
          </view>
          <form class="voucherRight"  :cardId="item.cardId" report-submit="true" @submit="couponDetailPage">
            <view class="receiveBtn flex-cloumn">
              <text class="f50">￥{{item.couponPrice}}</text>
              <text class="desTitle">{{item.subTitle}}</text>
              <button class="wbt" form-type='submit' plain="true">
                <image class="userBtn" :src="item.btnPic" />
              </button>
            </view>
          </form>
        </view>
      </view>
    </view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      couponLists: [
        {
          bg: "../../static/images/coupon/q_02.png",
          tagPic: "../../static/images/coupon/mark_02.png",
          cardId: '123456789',
          prizeName: "香甜冰激凌",
          couponPrice: "100",
          subTitle: "满100减30",
          time: "2019-02-28-2019-03-31",
          img: "../../static/images/food_01.png",
          btnPic: "../../static/images/coupon/btn_02.png"
        },
        {
          bg: "../../static/images/coupon/q_03.png",
          tagPic: "../../static/images/coupon/mark_03.png",
          cardId: '216547896',
          prizeName: "香甜冰激凌",
          couponPrice: "100",
          subTitle: "满100减30",
          time: "2019-02-28-2019-03-31",
          img: "../../static/images/food_01.png",
          btnPic: "../../static/images/coupon/btn_03.png"
        }
      ]
    };
  },

  methods: {
    couponDetailPage(e){
        console.log(e,70)
        const cardId = e.cardId
        wx.navigateTo({
          url: '../couponDetail/main?cardId=' + cardId
        })
    },
    couponPage(e, i) {
      const cardId = e.cardId 
      console.log(cardId,76)
    }
  }
};
</script>
<style>
.couponMargin {
  margin: 20rpx 0rpx 37rpx 40rpx;
}

.voucher {
  display: flex;
  position: relative;
  width: 671rpx;
  height: 183rpx;
  margin-bottom: 30rpx;
}

.voucher .bg {
  width: 100%;
  height: 100%;
}

.title {
  position: absolute;
  top: 0;
  left: 0;
  width: 93rpx;
  height: 93rpx;
}

.voucherContainer {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
}

.voucherLeft {
  flex: 1.2;
  height: 80%;
}

.voucherRight {
  flex: 1.5;
  height: 80%;
}

.voucherLeft > image {
  width: 137rpx;
  height: 110rpx;
  margin-top: 15rpx;
  margin-left: 32rpx;
}

.voucherCenter {
  flex: 2;
  height: 80%;
}

.voucherTag {
  width: 80rpx;
  background-color: #f75656;
  font-size: 20rpx;
  padding: 7rpx;
  margin: 10rpx 0;
}

.voucherTime {
  font-size: 18rpx;
}

.userBtn {
  width: 121rpx;
  height: 30rpx;
  margin-top: 16rpx;
}

.f50 {
  font-size: 50rpx;
}

.desTitle {
  font-size: 22rpx;
}

.foodName {
  font-size: 35rpx;
}

/** 领卡按钮 **/

.receiveBtn button {
  border: none !important;
}

.wbt {
  position: relative;
  bottom: 13rpx;
  left: -7rpx;
  width: 151rpx;
  height: 65rpx;
}

.allReceiveBtn {
  margin-top: 30rpx;
  background: #51b0ff;
  color: #fff;
}
</style>


