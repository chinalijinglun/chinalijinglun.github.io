!function(e){window.WechatShareData&&window.WechatJSSDKURL&&window.wx&&e.ajax({type:"get",url:window.WechatJSSDKURL,data:{url:encodeURIComponent(window.location.href.split("#")[0])}}).done(function(e){window.wx.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]}),window.wx.ready(function(){window.wx.onMenuShareTimeline(window.WechatShareData),window.wx.onMenuShareAppMessage(window.WechatShareData),window.wx.onMenuShareQQ(window.WechatShareData),window.wx.onMenuShareWeibo(window.WechatShareData),window.wx.onMenuShareQZone(window.WechatShareData)})})}(jQuery);