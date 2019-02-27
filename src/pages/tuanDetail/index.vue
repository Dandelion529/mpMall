<template>
    <view id="tuanDetail">
       <scroll-view class="tuanDetailPage">
           <!-- 轮播图展示 -->
           <view class="swiperContent">
               <swipers :swiper="swipers" :tuanDetail="tuanDetail"></swipers>
           </view>
           <!-- 拼团详情 -->
           <view class="pinDetailContent">
               <!-- 商品标题展示 -->
                <view class="titielBox flex-x">
                    <view class='leftPart flex-center'>
                        <view class='userTag flex-center'>
                            <!-- <image class='userIcon' src="../../static/images/tab-user.png"></image> -->
                            <text class="f24">2人团</text>
                        </view>
                        <view class='price'>
                            ￥<text><text class='f42'>9</text>.90</text>
                            ￥<text class='deleteLine f24'>21.50</text>
                        </view>
                    </view>
                    <view class='rightPart flex-cloumn'>
                        <view>距离结束仅剩</view>
                        <view>10:59:59</view>
                    </view>  
               </view>
               <!-- 超值套餐 -->
               <view class="detailBox">
                   <view class="m20 flex-center">
                       <text class="redBg f24">自营</text>
                       <text class='m6 f32'>超值套餐</text>
                   </view>
                    <view class='tag f24 flex-x'>
                        <view>0元拼</view>
                        <view>开团后 48小时内有效</view>
                        <view>小程序内使用</view>
                    </view>
               </view>
               <!-- 优惠券详情 -->
               <view class="quanBox">
                   <view class="flex-center">
                        <image class="hotBag" src="../../static/images/hotBag.png"></image>
                        <text class="f32 m6">优惠券详情</text>
                   </view>
                   <view class='quanList flex-x'>
                        <view>优惠券名称1优惠券名称1</view>
                        <view>X1</view>
                    </view>
                    <view class='quanList flex-x'>
                        <view>优惠券名称1优惠券名称2</view>
                        <view>X2</view>
                    </view>
                    <view class='quanList flex-x'>
                        <view>优惠券名称1优惠券名称3</view>
                        <view>X3</view>
                    </view>
               </view>
               <!-- 拼团活动 -->
                <view class='quanBox flex-x'>
                    <view class="flex-center">
                        <image class="hotBag" src="../../static/images/hotBag.png"></image>
                        <text class="f32 m6">拼团活动</text>
                    </view>
                    <view class='line f32' @click='setVisible(false)'>
                        <view class='activity'>活动规则</view>
                    </view>
                </view>
           </view>
        </scroll-view> 
        <!-- 拼团底部展示 -->
        <view class='pinBar f24 flex-x'>
            <view class='common flex-cloumn' @click='indexPage'>
                <image class='tab-user' src="../../static/images/tab-home-on.png"></image>
                <text>首页</text>
            </view>
            <view class='common flex-cloumn' @click='mypinPage'>
                <image class='tab-shop' src="../../static/images/icon_shopping.png"></image>
                <text>我的拼团</text>
            </view>
            <view class='activeBox flex-cloumn' @click='enterPinPage'>
                <view>￥9.90</view>
                <view>我要开团</view>
            </view>
        </view>
        <!--活动规则弹框-->
        <toast message="活动规则" :visible.sync="visible" position="center"></toast>
    </view>
</template>
<script>
import swipers from "../../components/swipers.vue"
import toast from '../../components/toast.vue'

export default {
    components:{
        swipers,
        toast
    },
    data () {
      return {
        currentTab:0,
        tuanDetail:'tuanDetail',
        visible: false,
        showMask: false,
        swipers:[
              {   
                img: '../../static/images/bg.png'
              },{
                img: '../../static/images/03.png'
              }
          ],
          indicatorDots: false,
          autoplay: false,
          interval: 3000,
          duration: 1000,
      }
    },
    created() {
    console.log(this)
  },
    methods:{
        setVisible() {
            this.visible = !this.visible
        },
        // 开启弹窗规则
        openMask() {
            this.showMask = true
        },
        
        // 关闭弹窗规则
        closeMask() {
           this.showMask = false
        }, 
        
        // 首页
        indexPage() {
            wx.navigateTo({
                url: '/pages/index/main'
            })
        },

        // 我的拼团
        mypinPage() {
            wx.navigateTo({
                url: '/pages/mypinList/main'
            })
        }
    }
}
</script>
<style lang="less" scoped>
.ripple-test {
  margin-top: 10px;
  background: #fff;
  text-align: center;
  padding: 12px;
  border-top: 0.5px solid #ddd;
  border-bottom: 0.5px solid #ddd;
}
</style>

