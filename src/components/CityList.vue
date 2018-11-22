<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">您的位置</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                    class="button-wrapper" 
                    v-for="item of hot" 
                    :key="item.id"
                    @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <!-- 嵌套循环 -->
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" 
                    v-for="innerItem of item" 
                    :key="innerItem.id"
                    @click="handleCityClick(innerItem.name)">
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    props:{
        hot: Array,
        cities: Object,
        letter: String
    },
    methods:{
        handleCityClick(city){
            this.$store.dispatch('changeCity',city)
        }
    },
    mounted(){
        // 创建 Bscroll 实例属性，同时传入 list DOM结构
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch:{
        letter(){
            if(this.letter){
                // ref属性是对DOM元素的reference,循环得到的是一个DOM的数组，需要加上[0]
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../assets/styles/variables.styl'
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            borcer-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        overflow: hidden
        position: absolute
        // 给input框预留1.58rem位置
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height: .54rem
            background: #eeeeee
            padding-left: .2rem
            color: #666
            fonr-size: .26rem
        .button-list
            // 触发BFC
            overflow: hidden
            padding: .1rem
            .button-wrapper
                float: left
                width: 33.3%
                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid #ccc
        .item-list
            .item
                line-height: .54rem
                padding-left: .2rem
</style>


