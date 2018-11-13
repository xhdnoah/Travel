<template>
    <div class="wrapper">
    	<swiper :options="swiperOption">
        <!-- slides -->
            <swiper-slide v-for="item of swiperList" key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default{
	name:'HomeSwiper',
    // 子组件的data是函数类型
	data: function(){
		return{
            // swiper 可选配置项
			swiperOption:{
                pagination:'.swiper-pagination',
                loop: true
            },
            // Vue 是数据驱动的框架
            swiperList:[{
                
                id:'001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
            },{
                id:'002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/ff/1bf7d3a4f6591002.jpg_750x200_be24850a.jpg'
            },{
                id:'003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/42/f11738e550ef8902.jpg_750x200_5b72564d.jpg'
            }]
		}
	}
}
</script>

<style lang="stylus" scoped>
    // swiper组件不在此组件内，使用>>>语法实现样式穿透，不受scoped的限制
    .wrapper >>> .swiper-pagination-bullet-active
        background:#fff
    .wrapper
        overflow: hidden
        width:100%
        height:0
        // 实现宽高比始终保持和图片宽高比一致的比例，防止因为图片加载而产生的页面抖动
        padding-bottom: 26.667%
        // 在图片未加载时显示背景色
        background: #eee
        .swiper-img
            width:100%
	
</style>