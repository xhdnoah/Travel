<template>
<div>
    <div class="title">周末去哪儿</div>
    <ul>
        <!-- 添加 border-bottom 的类名，可以给 li 元素实现一像素边框效果 -->
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
                <img :src="item.imgUrl" alt="" class="item-img">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
 </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    data(){
        return{
            recommendList:[{
                id:'0001',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1808/29/2973bbf3e2eb3244a3.img.jpg_200x200_a69b39a6.jpg',
                title:'南京万达主题乐园',
                desc:'好评如潮，小伙伴热推景点'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../assets/styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 33.9%
        .item-img
            width: 100%
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #cccccc
            ellipsis()

</style>


