const setting = {
	namespaced: true,
	state: {
		version: "0.9.4",
		lastmodify: "2020/11/19",
		systemName: "北京汉光巡检系统",
		appId: "wx252743e71090a061",
		openId: '',
		// 是否登录
		hasLogin: false,
		userinfo: {},

		// OSS下载规则
		OSSDownload: "?x-oss-process=image/resize,m_mfit,h_120,w_120",
		// swiper是否采用衔接滑动，即播放到末尾后重新回到开头
		circular: true,
		// swiper滑动动画时长
		swiperDuration: '100',
		// loadmore加载时图标样式
		iconType: 'circle',
		// loadmore各个状态的文本
		loadText: {
			loadmore: '我是有底线的',
			loading: '努力加载中',
			nomore: '我是有底线的'
		},
		// loadmore问题大小
		loadmoreFontSize: '24',
		// 与前一个元素的距离，单位rpx
		loadmoreMarginTop: '50',
		// 与后一个元素的距离，单位rpx
		loadmoreMarginBottom: '50',
		// loadmore状态为nomore时内容是否显示为一个'·'
		isDot: false,
		// 返回顶部按钮
		customStyle: {
			boxShadow: '0 1px 8px -4rpx rgba(0,0,0,0.3)',
			bottom: '100rpx',
			zoom: '1.2',
			background: '#fff',
			opacity: '0.8'
		},
		// 返回顶部按钮图标样式
		iconStyle: {
			fontSize: '32rpx',
			color: '#2979ff',
		},
		// 安卓/IOS点击标题scroll-view返回顶部
		enableBackToTop: true
	},
}

export default setting
