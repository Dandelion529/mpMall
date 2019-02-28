<template>
    <div id="activityPage">
        <!--拼团中-->
        <view class="pinDoing">
            <!-- 商品详情展示 -->
            <view class="pintuan mt">
                <view class="topBox flex-x flex-center">
                    <image class="foodIcon" src='../../static/images/food_01.png' mode="aspectFit"></image>
                    <view class="flex-1">
                        <view class="intro">
                            <view class="foodName">甜筒冰激凌</view>
                            <view class="pinBox">
                                <view class='voucherTag tr'>2人团</view>
                                <text class='bold red mr'>￥12.00</text>
                                <text class='deleteLine f24'>￥15.00</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class='introTip flex-x'>
                    <view>
                        0元拼
                    </view>
                    <view>开团后 48小时内有效</view>
                    <view>小程序内使用</view>
                </view>
            </view>
            <!-- 拼团中，已开团 -->
            <!-- <view class="box">
                <view class='smallText gray p30'>剩余1天
                    <text class='f32'>23:12:20</text>
                </view>
                <view class='openTuan' v-if="goodsList.length==0">
                    <view class='bigFont p30'>分享到微信群邀请2个好友</view>
                    <view class='start'>
                        <form @submit='joinGroup' report-submit="true">
                            <button class="sharebtn mg" open-type="getUserInfo" form-type='submit'>点击立即开团</button>
                        </form>
                    </view>
                </view>
                <view class='openTuan' v-else>
                    <view class='bigFont'>拼团中，再邀{{goodsList.length-activity.users.length}}个好友即可成功</view>
                    <view class='start'>
                        <view class="headImgs flex-x">
                            <image src="" v-for="(item,index) in activity.users" :key="index" :class='!activity.finish?"userLogo":"userLogo bigLogo"' :src="item"></image>
                            <view class="userLogo void" v-for="(item,index) in goodsList.length-activity.users.length" :key="index" wx:for-item='item'>?</view>
                        </view>
                        <view class='mg' v-if="!activity.finish">
                            <button v-if='activity.join' class="sharebtn invite mg" open-type="share">邀请好友拼团</button>
                            <form class='mg' @submit='joinGroup' report-submit="true" wx:else>
                                <button class="sharebtn invite mg" open-type="getUserInfo" form-type='submit'>立即参团</button>
                            </form>
                        </view>
                        <form class='mg' @submit='receiveBtn' report-submit="true" wx:else>
                            <button class="sharebtn invite mg" form-type='submit'>查看卡券</button>
                        </form>
                    </view>
                </view>
            </view> -->
        </view>
        
        <!--拼团成功-->
        <view class="pinSuccess">
            <view class="tr">
                <image class="picMiddle" src="../../static/images/no_order.png"></image>
                <form bindsubmit='refundBack' report-submit="true">
                    <button class='rightBt' form-type='submit'>申请退款</button>
                </form>
                <view class="" v-if="success">
                    <view class='smallText p30 bigFont'>拼团成功，可以再开一团哦~</view>
                    <view class='f24 gray'>优惠券已到账，点击查看 ></view>
                </view>
                <view class="" v-if="noSuccess">
                    <view class='smallText p30 bigFont'>拼团失败，邀请好友再试一次吧！</view>
                    <view class="f24 gray"><text class="red">￥10.00</text>已退款成功，点击查看 ></view>
                </view>
                <view class='start'>
                    <form @submit='joinGroup' report-submit="true">
                        <button class="sharebtn mg" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" form-type='submit'>再开一团</button>
                    </form>
                </view>
            </view>
        </view>
        <!--拼团失败-->
        <view class=""></view>
        <card :pinSuccess='pinSuccess' /> 
    </div>
</template>
<script>
import card from '../../components/card.vue'
export default {
    components:{
        card
    },
    data(){
        return {
            success: true,
            pinSuccess: 'pinSuccess',
            goodsList:[],
        }
    },
    mounted(){
        // 刚开始判断用户是否授过权
        this.getSetting();
    },
    methods: {
        getSetting() {
            wx.getSetting({
                success: function(res){
                    if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function(res) {
                            console.log(res)
                        }
                    })
                    }else{
                        console.log('用户还未授权过')
                    }
                }
            })
        },

        joinGroup(e){
            console.log(e,'126')
            // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
            if(wx.canIUse('button.open-type.getUserInfo')){
                // 用户版本可用
                console.log('版本可用')
            }else{
                console.log('请升级微信版本')
            }
        },

        bindGetUserInfo(e) {
            if (e.mp.detail.rawData){
                //用户按了允许授权按钮
                console.log('用户按了允许授权按钮')
            } else {
                //用户按了拒绝按钮
                console.log('用户按了拒绝按钮')
            }
        },
    },
}
</script>
<style lang="less">

</style>