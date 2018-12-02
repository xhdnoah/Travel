<template>
    <div>
        <div class="list-header border-bottom">门票</div>
        <div class="ticket-title border-bottom" v-for="(item,index) of list" :key="index">
            <span class="ticket-icon"></span>
            {{item.title}}
            <!-- <div v-for="(item,index) of list.children" :key="index"> -->
                <!-- <detail-list></detail-list> -->
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailList',
    data(){
        return{
            list:[{title:"故宫预售成人票"},
                  {title:"故宫预售学生票"},
                  {title:"故宫预售老人票"}]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .list-header
        padding: 0 .2rem
        height: 1rem
        line-height: 1rem
        font-size: .4rem
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
</style>
