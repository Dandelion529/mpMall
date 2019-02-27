<template>
    <div id="mypinListPage">
        <!-- swiper展示 -->
        <view class="">
            <image class='listBg' src="../../static/images/03.png"></image>
            <!-- tab页头部展示 -->
            <view class='couponHeader flex-x'>
                <view class="swiper-tab">
                    <block v-for="(item,index) in tab" :key="index" :current="currentTab">
                        <view :class="currentTab==index?'swiper-tab-item active':'swiper-tab-item'"  @click="clickTab(index)">{{item}}</view>
                    </block>
                </view>
            </view>
        </view>
        <!-- 列表信息展示 -->
        <view v-if="currentTab==0">
            <tabList :listData="item" v-for="item in listDataA" :key="item" :currentTab="currentTab" />
        </view>
        <view v-if="currentTab==1">
            <view v-if="listDataB.length!=0">
                <tabList :listData="item" v-for="item in listDataB" :key="item" :currentTab="currentTab" />
            </view>
            <view class='pinStartBox' v-else>
                <view class='pinBox'>
                    <image class='picMiddle' src="../../static/images/no_order.png" mode='aspectFit'></image>
                    <view>没有拼团记录，快去拼团吧</view>
                    <form  report-submit="true" @submit='goPinPage'>
                        <button form-type='submit'>我要拼团</button>
                    </form>
                </view>
            </view>
        </view>
        <view v-if="currentTab==2">
            <tabList :listData="item" v-for="item in listDataC" :key="item" :currentTab="currentTab" />
        </view>

        <view v-if="currentTab==3">
            <tabList :listDataExcept="item" v-for="item in listDataD" :key="item" :currentTab="currentTab" />
        </view>

        <bottom  @toggleTab="clickToggle" :tabIndex="tabIndex"></bottom>
    </div>
</template>
<script>
import tabList from '../../components/tabList.vue'
// import bottom from '../../components/bottom.vue'
export default {
    components: {
        tabList,
        // bottom
    },
    data(){
        return{
            currentTab: 0,
            // tabIndex:0,
            tab:['拼团中','拼团成功','拼团失败','退货拼团'],
            listDataA:[ {
                code: '123456789',
                img:"../../static/images/food_01.png",
                name: '甜筒冰激凌',
                price: '12',
                num: '2',
                processline: '../../static/images/jindu_01.png',
                tag: '1/2',
                time: '2019.01.15 20:00:00'
            }],
            listDataB:[{
                code: '12563266666',
                img:"../../static/images/food_01.png",
                name: '开心爆米花',
                price: '22',
                num: '2',
                processline: '../../static/images/jindu_02.png',
                tag: '1/2',
                time: '2019.01.15 20:00:00'
            }],

            listDataC:[{
                code: '2222254556',
                img:"../../static/images/food_03.png",
                name: '开心爆米花',
                price: '18',
                num: '3',
                processline: '../../static/images/jindu_03.png',
                tag: '1/2',
                time: '2019.01.15 20:00:00'
            }],
            listDataD:[{
                code: '5687985456',
                img:"../../static/images/food_01.png",
                name: '开心爆米花',
                price: '18',
                num: '3',
                time: '2019.01.15 20:00:00'
            }],

        }
    },
    mounted(){
        console.log('mounted',this.tabIndex)
    },
    methods:{
        clickTab(e){
            this.currentTab = e;
        },
        
        goPinPage(e){
            const { formId } = e.mp.detail
        },   
    },
}
</script>
<style lang="less">

</style>


