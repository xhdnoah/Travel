<!-- 容器组件 -->
<template>
  <div>
  	<home-header>This is header</home-header>
  	<home-swiper>This is swiper</home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Header.vue'
import HomeSwiper from '@/components/Swiper.vue'
import HomeIcons from '@/components/Icons.vue'

export default {
  name: 'home',
  // 使用局部组件需要在此声明注册
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
