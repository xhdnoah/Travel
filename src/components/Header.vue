<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			你想去哪儿？</div>
		<router-link to='/city'>
		<div class="header-right">
			{{this.$store.state.city}}
			<span class="iconfont arrow-icon">&#xe600;</span>
		</div>
		</router-link>
	</div>
</template>

<script>
export default{
	name:'HomeHeader'
}
</script>

<!-- scoped限制样式只对当前组件有效 -->
<style lang="stylus" scoped>
	// 在样式中引入变量
	@import '../assets/styles/variables.styl'
	.header
		display:flex
		line-height:.86rem
		background: $bgColor
		color:#fff
		.header-left
			width:.64rem
			float:left
			.back-icon
				text-align: center
				font-size: .4rem
		.header-input
			flex: 1
			height:.64rem
			line-height: .64rem
			margin-top: .12rem
			margin-left: .2rem
			padding-left: .2rem
			background: #fff
			border-radius: .1rem
			color: #ccc
		.header-right
			width:1.24rem
			float:right
			text-align:center
			font-size:.3rem
			color: #ffffff
			.arrow-icon
				margin-left:-.05rem
				font-size:.3rem
</style>