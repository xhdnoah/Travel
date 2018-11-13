<!-- 容器组件 -->
<template>
  <div>
  	<home-header></home-header>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Header.vue'

export default {
  name: 'home',
  // 使用局部组件需要在此声明注册
  components: {
    HomeHeader
  }
}
</script>
