function bgfn1 () {
  alert('触发background fn1')
}

function bgfn2 () {
  var views = chrome.extension.getViews({type:'popup'})
  console.log(views)
  if(views.length > 0) {
    views[0].bgtopopFn()
  }
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.notifications.create(null, { // 需要notifications权限 桌面弹窗
    type: 'basic',
    iconUrl: 'WechatIMG2.jpg',
    title: '我是background，我已收到你的消息',
    message: request
  })
  sendResponse('这是background返回的结果')
})
