<template>
	<view class="" :style="{color: themeColor}">
		<view class="">
			<navigator url="../info/info">我要去往详情页面</navigator>
		</view>
		<button type="default" class="change-theme-color" :style="{backgroundColor: themeColor}" @click="changeThemeColor()">颜色切换</button>
	</view>
	
</template>
<script>
 	export default {
		
		data(){
			return {
				color: [
					'#007aff',
					'#4cd964',
					'#dd524d',
					'#808080'
				],
				index: 0,
			}
		},
		onLoad() {
			/* 获取主题色 */
			// this.$store.state.themeColor = this.color[Math.floor(Math.random()*4)];
		},
		computed: {
		
		},
		watch: {
		
		},
		methods:{
			changeThemeColor(){
				if(this.index<3){
					this.$store.state.themeColor = this.color[this.index];
					this.index++
				}else{
					this.$store.state.themeColor = this.color[this.index];
					this.index = 0;
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.change-theme-color{
		color: #FFFFFF;
	}
</style>