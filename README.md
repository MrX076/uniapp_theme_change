# status

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###  涉及内容：vuex、mixin
###  实现方式：利用动态绑定样式（:style={}），将主题色进行字体颜色或背景色的改变；颜色值存在store的state里面，通过mixin将颜色值全局抛出，每个页面通过style动态绑定主题色。
