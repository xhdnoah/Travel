<!-- App.vue是整个应用的根组件 -->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- router-view显示当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>

</style>
