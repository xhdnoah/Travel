<template>
    <!-- 定义一个限制宽高比的div -->
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class='icon-img-content' :src='item.imgUrl'>
                    </div>
                    <p class='icon-desc'>{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    props:{
        list: Array
    },
    // data(){
    //     return{
    //         iconList: [{
    //             id: '0001',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
    //             desc: '景点门票'
    //         },{
    //             id: '0002',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
    //             desc: '文化古迹'
    //         },{
    //             id:'0003',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
    //             desc: '一日游'
    //         },{
    //             id:'0004',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
    //             desc: '打卡圣地'
    //         },{
    //             id: '0005',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
    //             desc: '中山陵'
    //         },{
    //             id: '0006',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
    //             desc: '夫子庙'
    //         },{
    //             id:'0007',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
    //             desc: '总统府'
    //         },{
    //             id:'0008',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
    //             desc: '牛首山'
    //         },{
    //             id:'0009',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
    //             desc: '万达主题乐园'
    //         }]
        // }
    // },
    data(){
        return {
            swiperOption:{
                autoplay:false
            }
        }
    },
    // 使用计算属性为图标分配轮播页面
    // 把一维的 iconList 拆分为二维的数组，并将页码和数据项做关联
    computed:{
        pages(){
            const pages = []
            this.list.forEach((item,index) => {
                const page = Math.floor(index/8)
                if (!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../assets/styles/variables.styl'
    @import '../assets/styles/mixins.styl'
    .icons >>> .swiper-container
    .icons
        overflow: hidden
        height: 0
        // 宽高比：2
        padding-bottom: 50%
        .icon
            position: relative
            overflow: hidden
            float: left
            // 小图标的宽度和高度都是25%
            width: 25%
            // 设置height:0,防止图标和文字总高度超过50%
            height: 0
            padding-bottom: 25%
            .icon-img
                // 将图片大小限制在框内
                position: absolute 
                top: 0
                left: 0
                right: 0
                bottom: .44rem
                // boder padding包含在宽高内
                box-sizing: border-box
                // 图片之间有一个5像素的间距
                .icon-img-content
                    // 设置图片内容居中
                    display: block
                    margin: 0 auto
                    height: 80%
                    margin-top: 10%
            .icon-desc
                position: absolute
                left: 0
                right: 0
                bottom: 0
                height: .44rem
                text-align: center
                color: $darlTextColor
                // 实现文字溢出部分的折叠
                ellipsis()
</style>






