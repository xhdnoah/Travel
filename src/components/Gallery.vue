<template>
    <div class="container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide 
                v-for="(item,index) of imgs"
                :key="index">
                    <img class="gallery-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:'CommonGallery',
    props:{
        imgs:Array
    },
    data(){
        return{
            swiperOptions:{
                pagination:'.swiper-pagination',
                paginationType:'fraction',
                observeParents: true,
                observer: true
            }
        }
    },
    methods:{
        handleGalleryClick(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
    // swiper-container 的 overflow: hidden 属性限制了页面高度，使得图片下方页码无法显示，
    // 使用 >>> 穿透语法改变 overflow 属性
    .container >>> .swiper-container
        overflow: inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        position: fixed
        top: 0
        right: 0
        bottom: 0
        left: 0
        background: #000
        .wrapper
            width: 100%
            .gallery-img
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem

</style>

