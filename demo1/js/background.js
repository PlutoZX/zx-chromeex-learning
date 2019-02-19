// 后台运行一般没有HTML 所以不用操作DOM

// document.querySelector('#wiki-content').innerHTML = res
// setInterval(function () {
//   document.querySelector('#wiki-content').innerHTML = '后台运行'
// }, 1000)


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message === 'Hello') {
    console.log(message)
    sendResponse('这是从后台js返回的信息')
  }
});


// 设置代理
// var config = {
//   mode: "fixed_servers",
//   rules: {
//     proxyForHttps: {
//       scheme: "https",
//       host: "61.135.169.125",
//       port: 443
//     },
//     bypassList: []
//   }
// };
// chrome.proxy.settings.set(
//   {value: config},
//   function () {
// })
// chrome.proxy.settings.get({},
//   function(config) {
//     alert(JSON.stringify(config.value));
//   }
// );


