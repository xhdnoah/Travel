<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-num">
                    <span class="iconfont banner-icon"> &#xe631;</span>
                    <em>{{this.bannerImgs.length}}</em>
                </div>
                <div class="banner-title">
                    <p>{{this.sightName}}</p>
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallery
            :imgs="bannerImgs" 
            v-show="showGallery"
            @close="handleGalleryClose">
            </common-gallery>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallery from '@/components/Gallery'
import FadeAnimation from '@/components/FadeAnimation'
export default {
    name:'DetailBanner',
    props:{
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
    },
    data(){
        return{
            showGallery: false           
        }
    },
    components:{
        CommonGallery,
        FadeAnimation
    },
    methods:{
        handleBannerClick(){
            this.showGallery = true
        },
        handleGalleryClose(){
            this.showGallery = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        // 防页面抖动
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            position: absolute
            left: .2rem
            right: 0
            bottom: 0
            line-height: .6rem
            color: #ffffff
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                padding: 0 .2rem .2rem 0
                font-size: .32rem
            .banner-icon 
                font-size: .24rem
                padding-right: .1rem
            .banner-num
                box-sizing: border-box
                padding: 0 .4rem
                width: 1.3rem
                height: .4rem
                line-height: .4rem
                border-radius: .2rem
                font-size: .24rem
                background: rgba(0,0,0,.5)

</style>

