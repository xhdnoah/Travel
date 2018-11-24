<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <!-- 搜索到的内容显示在此区块中 -->
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li 
                class="search-item border-bottom" 
                v-for="item of list" 
                :key="item.id" 
                @click="handleCityClick(item.name)">
                {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{
        cities: Object
    },
    methods:{
        handleCityClick(city){
            this.$store.commit('changeCity',city)
            this.$router.push('/')
        }
    },
    data(){
        return{
            keyword:'',
            list:[],
            timer: null
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            // 没有输入keyword时，默认不显示内容
            if(!this.keyword){
                this.list = []
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities){
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.keyword) > -1 || 
                        value.name.indexOf(this.keyword) > -1){
                            result.push(value)
                        }
                    })
                }
                // list数组为包含了keyword的城市名
                this.list = result
            }, 100)
        }
    },
    // 尽量保持模版内代码不涉及逻辑，需要计算的内容放到计算属性当中
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    // 为显示出来的搜索内容添加滚动功能
    mounted(){
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
    @import '../assets/styles/variables.styl'
    .search
        height: .72rem
        padding: 0 .1rem
        background: $bgColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            padding: 0 .1rem
            line-height: .62rem
            text-align: center
            border-radius: .06rem
            color: #666
    .search-content
        z-index: 1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        .search-item
            line-height: .62rem
            padding-left: .2rem
            background: #fff
            color: #666
        
</style>


