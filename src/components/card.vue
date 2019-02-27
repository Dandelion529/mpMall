<template>
<div>
    <view class='list'>
        <!--拼团成功和拼团失败显示拼团名称-->
        <view class='whiteBg' v-if="pinSuccess=='pinSuccess'">
            <view class='shareList flex-x flex-center'>
              <text>拼团名称</text>
              <view class="gray">甜筒冰激凌</view>
            </view>
        </view>
        <view class='whiteBg' @click='myActivity'>
            <view class='shareList flex-x flex-center'>
              <text>我的拼团</text>
              <view class='rightArrow'></view>
            </view>
        </view>
        <view class='whiteBg' @click='moreActivity'>
            <view class='shareList  flex-x flex-center'>
              <text>更多拼团</text>
              <view class='rightArrow'></view>
            </view>
        </view>
        <view class='whiteBg' @click='openMask'>
            <view class='shareList noBorder flex-x flex-center'>
              <text>活动须知</text>
              <view class='rightArrow'></view>
            </view>
        </view>
    </view>
    <view class='commonMask' v-if="showMask">
        <view class='alertContent'>
            <view class='alertList'>
                <view class='content'>
                    <view class='alertTitle flex-center' @click='closeMask'>
                        <text class='flex-grow'>充值说明</text>
                        <image class='' src="../../static/images/close.png"></image>
                    </view>
                    <view class='desc'>
                        <view>
                            1.拼团活动分为两种模式：
                            <text>1.1、老带新团</text>
                            <text>1.2、普通拼团</text>
                        </view>
                        <view>
                            2.新用户仅可享受一次直接参与老带新团的机会，若该次拼团失败，可重新参与其他老带新团
                        </view>
                        <view>
                            3.发起拼团后，分享至微信群或微信好友，邀请好友参团
                        </view>
                        <view>
                            4.在有效时间内未达到要求人数，则拼团失败
                        </view>
                        <view>
                            5.获取的优惠券仅限在卡券小程序内使用。
                        </view>
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
        pinSuccess: String
    },
    data(){
        return {
            showMask: false
        }
    },
    /**
     * 事件处理
     */
    methods:{
        /**
         * 我的拼团跳转
         */
        myActivity() {
            wx.navigateTo({
                url: '../mypinList/main',
            })
        },
        /**
         * 更多拼团跳转
         */
        moreActivity() {
            wx.navigateTo({
                url: '../index/main'
            })
        },

        /**
         * 开启弹窗规则
         */
        openMask() {
            this.showMask = true
        },
        
        /**
         * 关闭弹窗规则
         */
        closeMask() {
           this.showMask = false
        }, 
    },
}
</script>
<style lang="less">

</style>

