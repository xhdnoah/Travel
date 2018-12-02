<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from '@/components/Banner'
import DetailHeader from '@/components/DetailHeader'
import DetailList from '@/components/DetailList'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height: 50rem
</style>

