!function(e,n){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return n(e)}):n(e,!0)}(this,function(o,e){function a(n,e,i){o.WeixinJSBridge?WeixinJSBridge.invoke(n,r(e),function(e){c(n,e,i)}):d(n,i)}function n(n,i,t){o.WeixinJSBridge?WeixinJSBridge.on(n,function(e){t&&t.trigger&&t.trigger(e),c(n,e,i)}):d(n,t||i)}function r(e){return(e=e||{}).appId=V.appId,e.verifyAppId=V.appId,e.verifySignType="sha1",e.verifyTimestamp=V.timestamp+"",e.verifyNonceStr=V.nonceStr,e.verifySignature=V.signature,e}function c(e,n,i){var t,o;switch(delete n.err_code,delete n.err_desc,delete n.err_detail,(t=n.errMsg)||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i,t,o=e,r=p[o];return r&&(o=r),i="ok",n&&(t=n.indexOf(":"),"confirm"==(i=n.substring(t+1))&&(i="ok"),"failed"==i&&(i="fail"),-1!=i.indexOf("failed_")&&(i=i.substring(7)),-1!=i.indexOf("fail_")&&(i=i.substring(5)),"access denied"!=(i=(i=i.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=i||(i="permission denied"),"config"==o&&"function not exist"==i&&(i="ok"),""==i&&(i="fail")),n=o+":"+i}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",V.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n)),o=t.indexOf(":"),t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function s(e){var n,i,t,o;if(e){for(n=0,i=e.length;n<i;++n)t=e[n],(o=u[t])&&(e[n]=o);return e}}function d(e,n){if(!(!V.debug||n&&n.isInnerInvoke)){var i=p[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function l(){return(new Date).getTime()}function i(e){S&&(o.WeixinJSBridge?e():t.addEventListener&&t.addEventListener("WeixinJSBridgeReady",e,!1))}var u,p,t,f,m,g,h,y,S,_,w,I,T,v,k,M,V,x,b,L,P;if(!o.jWeixin)return u={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},p=function(){var e,n={};for(e in u)n[u[e]]=e;return n}(),t=o.document,f=t.title,m=navigator.userAgent.toLowerCase(),g=navigator.platform.toLowerCase(),h=!(!g.match("mac")&&!g.match("win")),y=-1!=m.indexOf("wxdebugger"),S=-1!=m.indexOf("micromessenger"),_=-1!=m.indexOf("android"),w=-1!=m.indexOf("iphone")||-1!=m.indexOf("ipad"),P=m.match(/micromessenger\/(\d+\.\d+\.\d+)/)||m.match(/micromessenger\/(\d+\.\d+)/),I=P?P[1]:"",v=T=!1,k={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},M={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",preVerifyState:1,systemType:w?1:_?2:-1,clientVersion:I,url:encodeURIComponent(location.href)},V={},x={_completes:[]},b={state:0,data:{}},i(function(){k.initEndTime=l()}),L={config:function(e){d("config",V=e);var t=!1!==V.check;i(function(){var e,n,i;if(t)a(u.config,{verifyJsApiList:s(V.jsApiList)},function(){x._complete=function(e){k.preVerifyEndTime=l(),b.state=1,b.data=e},x.success=function(){M.preVerifyState=0},x.fail=function(e){x._fail?x._fail(e):b.state=-1};var i=x._completes;return i.push(function(){0!=M.preVerifyState&&(h||y||V.debug||I<"6.0.2"||M.systemType<0||T||(T=!0,M.appId=V.appId,M.initTime=k.initEndTime-k.initStartTime,M.preVerifyTime=k.preVerifyEndTime-k.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(e){var n;M.networkType=e.networkType,n="http://open.weixin.qq.com/sdk/report?v="+M.version+"&o="+M.preVerifyState+"&s="+M.systemType+"&c="+M.clientVersion+"&a="+M.appId+"&n="+M.networkType+"&i="+M.initTime+"&p="+M.preVerifyTime+"&u="+M.url,(new Image).src=n}})))}),x.complete=function(){for(var e=0,n=i.length;e<n;++e)i[e]();x._completes=[]},x}()),k.preVerifyStartTime=l();else{for(b.state=1,n=0,i=(e=x._completes).length;n<i;++n)e[n]();x._completes=[]}}),V.beta&&(L.invoke||(L.invoke=function(e,n,i){o.WeixinJSBridge&&WeixinJSBridge.invoke(e,r(n),i)},L.on=function(e,n){o.WeixinJSBridge&&WeixinJSBridge.on(e,n)}))},ready:function(e){0!=b.state?e():(x._completes.push(e),!S&&V.debug&&e())},error:function(e){I<"6.0.2"||v||(v=!0,-1==b.state?e(b.data):x._fail=e)},checkJsApi:function(e){a("checkJsApi",{jsApiList:s(e.jsApiList)},(e._complete=function(e){if(_){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n,i,t=e.checkResult;for(n in t)(i=p[n])&&(t[i]=t[n],delete t[n]);return e}(e)},e))},onMenuShareTimeline:function(e){n(u.onMenuShareTimeline,{complete:function(){a("shareTimeline",{title:e.title||f,desc:e.title||f,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){n(u.onMenuShareAppMessage,{complete:function(){a("sendAppMessage",{title:e.title||f,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){n(u.onMenuShareQQ,{complete:function(){a("shareQQ",{title:e.title||f,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){n(u.onMenuShareWeibo,{complete:function(){a("shareWeiboApp",{title:e.title||f,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){n(u.onMenuShareQZone,{complete:function(){a("shareQZone",{title:e.title||f,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){a("startRecord",{},e)},stopRecord:function(e){a("stopRecord",{},e)},onVoiceRecordEnd:function(e){n("onVoiceRecordEnd",e)},playVoice:function(e){a("playVoice",{localId:e.localId},e)},pauseVoice:function(e){a("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){a("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){n("onVoicePlayEnd",e)},uploadVoice:function(e){a("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){a("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){a("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){a("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(_){var n=e.localIds;n&&(e.localIds=JSON.parse(n))}},e))},previewImage:function(e){a(u.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){a("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){a("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getNetworkType:function(e){a("getNetworkType",{},(e._complete=function(e){e=function(e){var n,i,t,o=e.errMsg;if(e.errMsg="getNetworkType:ok",n=e.subtype,delete e.subtype,n)e.networkType=n;else switch(i=o.indexOf(":"),t=o.substring(i+1)){case"wifi":case"edge":case"wwan":e.networkType=t;break;default:e.errMsg="getNetworkType:fail"}return e}(e)},e))},openLocation:function(e){a("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){a(u.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){a("hideOptionMenu",{},e)},showOptionMenu:function(e){a("showOptionMenu",{},e)},closeWindow:function(e){a("closeWindow",{},e=e||{})},hideMenuItems:function(e){a("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){a("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){a("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){a("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){a("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){var n,i;!w||(n=e.resultStr)&&(i=JSON.parse(n),e.resultStr=i&&i.scan_code&&i.scan_code.scan_result)},e))},openProductSpecificView:function(e){a(u.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){var n,i,t,o,r=e.cardList,c=[];for(n=0,i=r.length;n<i;++n)o={card_id:(t=r[n]).cardId,card_ext:t.cardExt},c.push(o);a(u.addCard,{card_list:c},(e._complete=function(e){var n,i,t,o=e.card_list;if(o){for(n=0,i=(o=JSON.parse(o)).length;n<i;++n)(t=o[n]).cardId=t.card_id,t.cardExt=t.card_ext,t.isSuccess=!!t.is_succ,delete t.card_id,delete t.card_ext,delete t.is_succ;e.cardList=o,delete e.card_list}},e))},chooseCard:function(e){a("chooseCard",{app_id:V.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){var n,i,t,o,r=e.cardList,c=[];for(n=0,i=r.length;n<i;++n)o={card_id:(t=r[n]).cardId,code:t.code},c.push(o);a(u.openCard,{card_list:c},e)},chooseWXPay:function(e){a(u.chooseWXPay,function(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}(e),e)}},e&&(o.wx=o.jWeixin=L),L});