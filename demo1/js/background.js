// 后台运行一般没有HTML 所以不用操作DOM

// document.querySelector('#wiki-content').innerHTML = res
// setInterval(function () {
//   document.querySelector('#wiki-content').innerHTML = '后台运行'
// }, 1000)


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message === 'Hello') {
    sendResponse('这是从后台js返回的信息')
  }
});
