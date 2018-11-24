<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
            <div class="banner-info">
                <div class="banner-num">
                    <span class="iconfont banner-icon"> &#xe631;</span>
                    <em>10</em>
                </div>
                <div class="banner-title">
                    <p>故宫(AAAAA 景区)</p>
                </div>
            </div>
        </div>
        <common-gallery
        :imgs="imgs" 
        v-show="showGallery"
        @close="handleGalleryClose"></common-gallery>
    </div>
</template>

<script>
import CommonGallery from '@/components/Gallery'
export default {
    name:'DetailBanner',
    data(){
        return{
            imgs:["http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg","http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg"],
            showGallery: false           
        }
    },
    components:{
        CommonGallery
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

