<template>
<div>
    <div class="title">热门推荐</div>
    <ul>
        <!-- 添加 border-bottom 的类名，可以给 li 元素实现一像素边框效果 -->
        <router-link 
        class="item border-bottom" 
        v-for="item of list" 
        :key="item.id"
        :to="'/detail/' + item.id">
            <div class="item-img-wrapper">
                <img :src="item.imgUrl" alt="" class="item-img">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </router-link>
    </ul>
 </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        list: Array
    }
    // data(){
    //     return{
    //         recommendList:[{
    //             id:'0001',
    //             imgUrl: 'http://img1.qunarzz.com/sight/p0/1808/29/2973bbf3e2eb3244a3.img.jpg_200x200_a69b39a6.jpg',
    //             title:'南京万达主题乐园',
    //             desc:'好评如潮，小伙伴热推景点'
    //         }]
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
    @import '../assets/styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item
        display: flex
        height: 1.9rem
        overflow: hidden
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            // 设置 min-width: 0 使被 ellipsis 的内容正常显示
            min-width: 0
            .item-title
                line-height: .54rem
                font-size: .32rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #cccccc
                ellipsis()
            .item-button
                line-height: .44rem
                margin-top: .16rem
                background: #ff9300
                padding: 0 .2rem
                border-radius: .06rem
                color: #ffffff

                


</style>


