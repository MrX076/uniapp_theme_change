<template>
	<view>
		<view class="">
			<text :style="{color: themeColor}">这是一个详情页</text>
		</view>
		<view class="">
			<button type="default" @click="reback" class="reback" :style="{backgroundColor: themeColor}">返回</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},

		methods: {
			reback() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.reback{
		color: #FFFFFF;
	}
</style>
