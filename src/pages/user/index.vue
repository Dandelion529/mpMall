<template>
  <div id="user">
    <!-- 判断用户信心展示 -->
    <view class="userBox flex-center" v-if="userInfo">
      <image class="userLogo" :src="userInfo.avatarUrl" />
      <text class="userName">{{userInfo.nickName}}</text>
    </view>
    <view class="userBox" v-else>
      <button class="userLogo" open-type="getUserInfo" @getuserinfo="bindGetUserInfo"></button>
      <view class="userName middle">请授权个人信息</view>
    </view>
    <!--入口-->
    <view class="entryContent flex-x">
      <view
        class="flex-cloumn enteryBox"
        v-for="(item,index) in entryLists"
        :key="index"
        @click="entryPage(index,item)"
      >
        <image class="img" :src="item.img" />
        <text>{{item.name}}</text>
      </view>
    </view>
    <!--内容须知-->
    <view class="entryBottom">
      <view
        class="p25"
        v-for="(item,index) in bottomLists"
        :key="index"
        @click="bottomPage(item,index)"
      >
        <view class="shareList flex-x flex-center">
          <view class>
            <image class="infoIcon" :src="item.pic" />
            <text class="infoText">{{item.name}}</text>
          </view>
          <view class="rightArrow"></view>
        </view>
      </view>
    </view>

    <!-- <showAlert></showAlert> -->
  </div>
</template>

<script>
// import showAlert from "../../components/showAlert.vue";

export default {
  components: {
    // showAlert
  },

  data() {
    return {
      userInfo: {},
      entryLists: [
        {
          img: "../../static/images/homepage_icon_03.png",
          name: "我的拼团",
          path: "../mypinList/main"
        },
        {
          img: "../../static/images/homepage_icon_02.png",
          name: "交易记录",
          path: "../refund/main"
        },
        {
          img: "../../static/images/quan.png",
          name: "优惠券",
          path: "../coupon/main"
        }
      ],
      bottomLists: [
        {
          pic: "../../static/images/icon_wode04.png",
          name: "退款须知"
        },
        {
          pic: "../../static/images/icon_wode05.png",
          name: "关于我们"
        }
      ],
      showMask: false,
      title: ""
    };
  },
  onReady() {
    /**
     * 获取当前的用户信息
     */
    let userInfo = wx.getStorageSync("userInfos");
    this.userInfo = userInfo;
  },
  methods: {
    bindGetUserInfo(e) {
      if (e.mp.detail.rawData) {
        //用户按了允许授权按钮
        const { userInfo } = e.mp.detail;
        wx.setStorageSync("userInfos", userInfo);
        this.userInfo = userInfo;
      } else {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
      }
    },

    entryPage(e, i) {
      if (e == 0) {
        wx.navigateTo({
          url: i.path
        });
      } else if (e == 1) {
        wx.navigateTo({
          url: i.path
        });
      } else {
        wx.navigateTo({
          url: i.path
        });
      }
    },

    bottomPage(e, i) {
      console.log(e, i, 101);
      if (e == 0) {
        this.showMask = true;
        this.title = i.name;
      }
    }
  }
};
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
