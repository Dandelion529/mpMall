<template>
    <div>
        <!-- 拼团详情轮播 -->
        <swiper class="heightDetail" :duration="duration" :interval="interval" :autoplay="true" circular="true" :current="currentTab" @change="swiperChange" v-if="tuanDetail=='tuanDetail'">
            <swiper-item v-for="(item, index) in swiper" :key="index">
                <image class="pinBg"  :src="item.img" mode="aspectFill"></image>
            </swiper-item>
        </swiper>
        <!-- 首页轮播 -->
        <swiper class="heightIndex" :duration="duration" :interval="interval" :autoplay="true" circular="true" :current="currentTab" @change="swiperChange" v-else>
            <swiper-item v-for="(item, index) in swiper" :key="index">
                <image class="homeBg"  :src="item.img" mode="aspectFill"></image>
            </swiper-item>
        </swiper>
        <div class="indicator-dots flex-center">
            <div v-for="(item,index) in swiper" :class="currentTab==index?'item cur':'item'" :key="index" @click="slideSwiper(index)"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        swiper: Object,
        tuanDetail: String
    },
    data(){
        return{
            currentTab:0,
            indicatorDots: false,
            autoplay: false,
            interval: 3000,
            duration: 1000,
        }
    },

    methods:{
        /**
         * 轮播图
         */
        swiperChange(e){
            this.currentTab = e.mp.detail.current
        },
        
        slideSwiper(e) {
            console.log(e,this.tuanDetail,39)
            this.currentTab = e
        },

        
        /**
         * 拼团详情传参tuanDetail
         */
    }
}
</script>