window.setInterval(function () {
  document.querySelector(".item1").innerHTML = (new Date()).toLocaleString()
}, 1000)




// 前后台页面信息交互
document.querySelector("#sendMessageBigBtn").addEventListener('click', function () {
  chrome.runtime.sendMessage('Hello', function(response){
    document.querySelector('#wiki-content').innerHTML = response
  })
})


// chrome自带读写api
chrome.storage.sync.set({zxdemo: 'lalalala'}, function () {
  // window.alert('写入成功')
})
chrome.storage.sync.get('zxdemo', function (res) {
  window.alert(JSON.stringify(res))
  console.log(1)
})


// chrome设置badge
chrome.browserAction.setBadgeBackgroundColor({color: '#0000FF'})
chrome.browserAction.setBadgeText({text: '999+'})





