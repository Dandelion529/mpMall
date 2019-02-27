<template>
  <div id="home">
    <!-- 轮播图展示 -->
    <div class="swiperContent">
      <swipers :swiper="swipers"/>
    </div>

    <!-- 内容展示 -->
    <scroll-view scroll-y class="scrollY">
      <navigator url="../tuanDetail/main">
        <div class="content" v-for="(item,index) in lists" :key="index">
          <image :src="item.pic" mode="aspectFit" />
          <div class="contentInfo flex-x">
            <view class>
              <view class="title">{{item.title}}</view>
              <view class="priceBox">
                <text class="hotPrice">￥{{item.hotPrice}}</text>
                <text class="deleteLine f24">￥{{item.price}}</text>
                <label class="lines">|</label>
                {{item.num}}人团
              </view>
            </view>
            <view class="center">
              <button class="goActicityBtn" bindtap="goActivityBtn">去拼团</button>
            </view>
          </div>
        </div>
      </navigator>
      <!--加载内容-->
      <div class="BottomTost" v-if="tostShow">我是有底线的~</div>
    </scroll-view>
    <!--底部tabbar-->
    <bottom  @toggleTab="clickToggle" :tabIndex="tabIndex"></bottom>
  </div>
</template>

<script>
import swipers from "../../components/swipers.vue";
import bottom from '../../components/bottom.vue'
export default {
  components: {
    swipers,
    bottom
  },

  data() {
    return {
      swipers: [
        {
          img: "../../static/images/bg01.png"
        },
        {
          img: "../../static/images/03.png"
        }
      ],
      tabIndex:0,
      isHide: "none", // 加载中隐藏标识
      lists: [],
      off_on: false, // 加载开关
      tostShow: false,
      page: 1 // 默认从第一页
    };
  },

  onShow() {
    console.log("onshow");
  },

  mounted() {
    this.loadList();
    console.log("mounted");
  },

  onload() {
    console.log("onload");
  },

  methods: {
    loadList() {
      var that = this;
      var off_on = that.off_on;
      if (off_on == true) {
        return;
      }
      off_on = true;

      let lists = [
        {
          pic: "../../static/images/pintuan_01.png",
          title: "邀新用户参团，各得免费蒸蛋券",
          hotPrice: "10",
          price: "26",
          num: "2"
        },
        {
          pic: "../../static/images/pintuan_02.png",
          title: "邀新用户参团，各得免费蒸蛋券",
          hotPrice: "14",
          price: "28",
          num: "3"
        },
        {
          pic: "../../static/images/pintuan_03.png",
          title: "邀新用户参团，各得免费蒸蛋券",
          hotPrice: "22",
          price: "38",
          num: "2"
        },
        {
          pic: "../../static/images/pintuan_02.png",
          title: "邀新用户参团，各得免费蒸蛋券",
          hotPrice: "12",
          price: "24",
          num: "3"
        },
        {
          pic: "../../static/images/pintuan_01.png",
          title: "邀新用户参团，各得免费蒸蛋券",
          hotPrice: "22",
          price: "38",
          num: "2"
        },
        {
          pic: "../../static/images/pintuan_03.png",
          title: "邀新用户参团，各得免费蒸蛋券",
          hotPrice: "10",
          price: "22",
          num: "3"
        },
        {
          pic: "../../static/images/pintuan_01.png",
          title: "邀新用户参团，各得免费蒸蛋券",
          hotPrice: "16",
          price: "32",
          num: "3"
        },
        {
          pic: "../../static/images/pintuan_02.png",
          title: "邀新用户参团，各得免费蒸蛋券",
          hotPrice: "22",
          price: "38",
          num: "2"
        },
        {
          pic: "../../static/images/pintuan_01.png",
          title: "邀新用户参团，各得免费蒸蛋券",
          hotPrice: "12",
          price: "24",
          num: "3"
        },
        {
          pic: "../../static/images/pintuan_03.png",
          title: "邀新用户参团，各得免费蒸蛋券",
          hotPrice: "20",
          price: "40",
          num: "3"
        }
      ];

      that.loadingShow();
      if (lists.length > 0) {
        that.lists = lists;
        that.off_on = false;
        that.loadingHide();
      } else {
        that.lists = lists;
        that.off_on = true;
        that.tostShow = true;
      }
    },
    loadingShow() {
      var that = this;
      wx.showToast({
        title: "加载中",
        icon: "loading",
        mask: true,
        duration: 1000
      });
    },
    loadingHide() {
      var that = this;
      that.tostShow = true;
      that.isHide = "none";
    },
    clickToggle(tabIndex) {
      console.log(tabIndex, 173);
    }
  }
};
</script>

<style lang="less" scoped>
</style>
