import Vue from 'vue'
import App from './App'
import store from './vuex/store.js';
Vue.config.productionTip = false

App.mpType = 'app'
Vue.mixin({
	computed:{
		themeColor(){
			return this.$store.state.themeColor
		}
	}
})
const app = new Vue({
	store,
    ...App
})
app.$mount()
