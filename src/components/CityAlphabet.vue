<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="item of letters" 
            :key="item"
            :ref="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick">
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    data(){
        return{
            // 用来标识touch事件状态
            touchStatus : false,
            startY: 0,
            timer: null
        }
    },
    updated(){
        this.startY = this.$refs['A'][0].offsetTop
    },
    // 使用计算属性替代props属性来循环字母表的项
    computed:{
        letters(){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    methods:{
        handleLetterClick(e){
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart(){
            this.touchStatus = true
        },
        // 通过计算字母和手指到顶部的距离做插值
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    // 获取到用户touch位置到屏幕顶部的距离
                    const touchY = e.touches[0].clientY - 74
                    const index = Math.floor((touchY - startY) / 23)
                    console.log(index)
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                }, 16)
            }
        },
        handleTouchEnd(){
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../assets/styles/variables.styl'
    .list
        // 利用flex布局将拖动列表居中
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        top: 1.58rem
        right: 0
        bottom: 0
        width: .4rem
        .item
            line-height: .44rem
            text-align: center
            color: $bgColor
</style>

