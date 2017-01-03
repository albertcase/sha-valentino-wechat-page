var baseImg = "http://app.socialvalue.cn/images/valentino_h5_201505/share_left.jpg";
var baseUrl = "http://app.socialvalue.cn/i/valentino/h5_201505/index";
var baseFriendTitle="邂逅花园精灵";
var baseFriendDes="漫步Primavera花园，邂逅美丽精灵，共续浪漫情缘。";
var baseFriendZoneTitle=baseFriendTitle;

function wxShareBase(tt,ns,sign){
	wx.config({
		debug: false,
		appId: 'wx9422774a4832f647',
		timestamp: tt,
		nonceStr: ns,
		signature: sign,
		jsApiList: [
			'checkJsApi',
			'onMenuShareTimeline',
			'onMenuShareAppMessage',
			'onMenuShareQQ',
			'onMenuShareWeibo',
			'hideMenuItems',
			'showMenuItems',
			'hideAllNonBaseMenuItem',
			'showAllNonBaseMenuItem',
			'translateVoice',
			'startRecord',
			'stopRecord',
			'onRecordEnd',
			'playVoice',
			'pauseVoice',
			'stopVoice',
			'uploadVoice',
			'downloadVoice',
			'chooseImage',
			'previewImage',
			'uploadImage',
			'downloadImage',
			'getNetworkType',
			'openLocation',
			'getLocation',
			'hideOptionMenu',
			'showOptionMenu',
			'closeWindow',
			'scanQRCode',
			'chooseWXPay',
			'openProductSpecificView',
			'addCard',
			'chooseCard',
			'openCard'
		]
	});
	wx.ready(function () {
		wx.onMenuShareAppMessage({
			title: baseFriendTitle,
			desc: baseFriendDes,
			link: baseUrl,
			imgUrl: baseImg,
			trigger: function (res) {
				//alert('用户点击发送给朋友');
			},
			success: function (res) {
				//alert('已分享');
			},
			cancel: function (res) {
				//alert('已取消');
			},
			fail: function (res) {
				//alert(JSON.stringify(res));
			}
		});
		wx.onMenuShareTimeline({
			title: baseFriendZoneTitle,
			link: baseUrl,
			imgUrl: baseImg,
			trigger: function (res) {
				//alert('用户点击分享到朋友圈');
			},
			success: function (res) {
				//alert('已分享');
			},
			cancel: function (res) {
				//alert('已取消');
			},
			fail: function (res) {
				//alert(JSON.stringify(res));
			}
		});
	});
}

function wxShareByUrl(url,tt,ns,sign){
	var baseUrl = url;
	wx.config({
		debug: false,
		appId: 'wx9422774a4832f647',
		timestamp: tt,
		nonceStr: ns,
		signature: sign,
		jsApiList: [
			'checkJsApi',
			'onMenuShareTimeline',
			'onMenuShareAppMessage',
			'onMenuShareQQ',
			'onMenuShareWeibo',
			'hideMenuItems',
			'showMenuItems',
			'hideAllNonBaseMenuItem',
			'showAllNonBaseMenuItem',
			'translateVoice',
			'startRecord',
			'stopRecord',
			'onRecordEnd',
			'playVoice',
			'pauseVoice',
			'stopVoice',
			'uploadVoice',
			'downloadVoice',
			'chooseImage',
			'previewImage',
			'uploadImage',
			'downloadImage',
			'getNetworkType',
			'openLocation',
			'getLocation',
			'hideOptionMenu',
			'showOptionMenu',
			'closeWindow',
			'scanQRCode',
			'chooseWXPay',
			'openProductSpecificView',
			'addCard',
			'chooseCard',
			'openCard'
		]
	});
	wx.ready(function () {
		wx.onMenuShareAppMessage({
			title: baseFriendTitle,
			desc: baseFriendDes,
			link: baseUrl,
			imgUrl: baseImg,
			trigger: function (res) {
				//alert('用户点击发送给朋友');
			},
			success: function (res) {
				//alert('已分享');
			},
			cancel: function (res) {
				//alert('已取消');
			},
			fail: function (res) {
				//alert(JSON.stringify(res));
			}
		});
		wx.onMenuShareTimeline({
			title: baseFriendZoneTitle,
			link: baseUrl,
			imgUrl: baseImg,
			trigger: function (res) {
				//alert('用户点击分享到朋友圈');
			},
			success: function (res) {
				//alert('已分享');
			},
			cancel: function (res) {
				//alert('已取消');
			},
			fail: function (res) {
				//alert(JSON.stringify(res));
			}
		});
	});
}