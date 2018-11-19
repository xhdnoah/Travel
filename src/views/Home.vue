<!-- 容器组件 -->
<template>
  <div>
  	<home-header>This is header</home-header>
  	<home-swiper>This is swiper</home-swiper>
    <home-icons></home-icons>
    <home-recommend>Hot Recommended</home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Header.vue'
import HomeSwiper from '@/components/Swiper.vue'
import HomeIcons from '@/components/Icons.vue'
import HomeRecommend from '@/components/Recommend.vue'
import HomeWeekend from '@/components/Weekend.vue'

export default {
  name: 'home',
  // 使用局部组件需要在此声明注册
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
