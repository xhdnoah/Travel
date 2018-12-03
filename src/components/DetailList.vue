<template>
    <div>
        <div class="ticket" v-for="(item,index) of list" :key="index">
            <div class="ticket-title border-bottom">
                <span class="ticket-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailList',
    props:{
        list:Array
    }
}
</script>

<style lang="stylus" scoped>
    .ticket-title
        height: .88rem
        line-height: .88rem
        padding: 0 .2rem
        font-size: .32rem
        .ticket-icon
            position: relative
            display: inline-block
            top: .06rem
            left: .06rem
            height: .36rem
            width: .36rem
            margin-right: .1rem
            background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat
            background-size: .4rem 3rem
    .item-children
        padding: 0 .2rem
</style>
