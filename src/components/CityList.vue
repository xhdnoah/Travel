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
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-topbottom">
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
    mounted(){
        // 创建 Bscroll 实例属性，同时传入 list DOM结构
        this.scroll = new Bscroll(this.$refs.wrapper)
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
    .list
        overflow: hidden
        position: absolute
        // 给input框预留1.58rem位置
        top: 1.58rem
        left: 0
        rigth: 0
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


