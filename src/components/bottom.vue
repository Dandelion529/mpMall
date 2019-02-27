<template>
    <div id="">
    <view class='tab-wrap'>
        <!--循环渲染出tab列表-->
        <view class='tab' v-for="(item,index) in tarList" :key="index" @click="toggleTab(index)">
            <view v-if="item.iconPath">
                <image :src="tabIndex==index?item.selectedIconPath:item.iconPath" :class='index==1?"round-btn":""'></image>
                <view>{{item.name}}</view>
            </view>
        </view>
    </view>
    </div>
</template>
<script>
// import { TABBAR } from '../utils/index.js'
export default {
     props: {
        tabIndex: String
    },

    data(){
        return{
            // tarList: TABBAR,
            tarList:[{
                id: 0,
                name: '首页',
                iconPath:  '../../static/images/tab-home.png',
                selectedIconPath: '../../static/images/tab-home-on.png',
                url: ''
            },
            {
                id: 1,
                name: '我的拼团',
                iconPath:  '../../static/images/icon_shouye07.png',
                selectedIconPath:  '../../static/images/icon_shouye07.png',
                url: ''
            },
            {
                id: 2,
                name: '我的',
                iconPath:  '../../static/images/tab-user.png',
                selectedIconPath:  '../../static/images/tab-user-on.png',
                url: ''
            },
            ]
        }
    },
    mounted(){
       console.log(this.tarList)
        console.log('mounted111')
    },
    methods:{
        /**
         * 点击tab切换选中值
         */
        toggleTab(e) {
            console.log(e,36)
            let index  = e;
            if(index == 0){
                wx.navigateTo({
                    url: '../index/main',
                })
            }else if (index == 1) {
                wx.navigateTo({
                    url: '../mypinList/main',
                })
            }else if(index == 2) {
                wx.navigateTo({
                    url: '../user/main',
                }) 
            }
            this.tabIndex = index;
            // 子组件调起父组件
            this.$emit('toggleTab', index)
        }
    },
}
</script>
<style>
.tab-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    background: #fff;
    color: #999;
    font-size: 25rpx;
    height: 120rpx;
    box-shadow: 0rpx 0rpx 400rpx 0rpx #aaa;
}

.tab image {
    width: 50rpx;
    height: 50rpx;
}

image.round-btn {
    width: 120rpx;
    height: 120rpx;
    background: transparent;
    border-radius: 50%;
    margin-top: -100rpx;
    border: 15rpx solid #fff;
}

</style>


