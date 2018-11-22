<!-- 容器组件 -->
<template>
  <div>
    <!-- 父组件通过属性向子组件传值，这里传递的是通过ajax接收的数据 -->
  	<home-header></home-header>
  	<home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Header.vue'
import HomeSwiper from '@/components/Swiper.vue'
import HomeIcons from '@/components/Icons.vue'
import HomeRecommend from '@/components/Recommend.vue'
import HomeWeekend from '@/components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'home',
  // 使用局部组件需要在此声明注册
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return{
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
      // axios 返回一个promise对象
      // 获取当前城市名来 get 不同城市的数据
      axios.get('/api/index?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  // 利用生命周期函数发起 Ajax 请求
  mounted(){
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
