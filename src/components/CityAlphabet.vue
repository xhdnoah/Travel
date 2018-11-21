<template>
    <ul class="list">
        <li class="item"></li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet'
}
</script>

<style lang="stylus">
    @import 
    .list
        // 利用flex布局将拖动列表居中
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute 
        top: 1.58rem
        rigth: 0
        bottom: 0
        width: .4rem
        background: red
        .item
            line-height: .44rem
            text-align: center
            color: $bgColor
</style>

