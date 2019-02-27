<template>
    <div>
        <view class="couponList"  v-if="currentTab==3">
            <view class='btLine'><text class='pl20'>订单编号: </text>{{listDataExcept.code}}</view>
            <view class='box flex-x'>
                <image class="foodIcon" :src='listDataExcept.img' mode="aspectFit"></image>
                <view class='intro'>
                    <view class='flex-x'>
                        <text class='foodName'>{{listDataExcept.name}}</text>
                        <view class='bold flex-cloumn'>
                            <text>已退款</text>
                            <text>￥{{listDataExcept.price}}</text>
                        </view>
                    </view>
                    <view class='pinBox'>
                        <view class='mt'>
                            <text class='voucherTime'>下单时间: {{listDataExcept.time}}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="couponList" v-else>
            <view class='btLine'><text class='pl20'>订单编号: </text>{{listData.code}}</view>
            <view class='box flex-x'>
                <image class="foodIcon" :src='listData.img' mode="aspectFit"></image>
                <view class='intro'>
                    <view class='flex-x'>
                        <text class='foodName'>{{listData.name}}</text>
                        <text class='bold'>￥{{listData.price}}</text>
                    </view>
                    <view class='pinBox'>
                        <text class='voucherTag'>{{listData.num}}人团</text>
                        <image class="processLines" :src='listData.processline'></image>
                        <text class='num'>{{listData.tag}}</text>
                        <view class='mt'>
                            <text class='voucherTime'>下单时间:{{listData.time}}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>  
    </div>
</template>
<script>
export default {    
    props:{
        /**
         * 拼团中，拼团成功，拼团失败
         */
        listData: {
            type:Object,
            default:{}
        },
        /**
         * 已退款
         */
        listDataExcept: {
            type:Object,
            default:{}
        },

        currentTab: String
    },

    data() {
		return {
		}
    },
  
    methods:{
    }
}
</script>
<style lang="less">

</style>



