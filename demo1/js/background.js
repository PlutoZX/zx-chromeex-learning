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


//
// // 右键菜单
// chrome.contextMenus.create({
//   type: 'normal',
//   title: 'Menu A',
//   id: 'a'
// });
//
// chrome.contextMenus.create({
//   type: 'radio',
//   title: 'Menu B',
//   id: 'b',
//   checked: true
// });
//
// chrome.contextMenus.create({
//   type: 'radio',
//   title: 'Menu C',
//   id: 'c'
// });
//
// chrome.contextMenus.create({
//   type: 'checkbox',
//   title: 'Menu D',
//   id: 'd',
//   checked: true
// });
//
// chrome.contextMenus.create({
//   type: 'separator'
// });
//
// chrome.contextMenus.create({
//   type: 'checkbox',
//   title: 'Menu E',
//   id: 'e'
// });
//
// chrome.contextMenus.create({
//   type: 'normal',
//   title: 'Menu F',
//   id: 'f',
//   parentId: 'a',
//   onclick: handleClickMenus
// });
//
// chrome.contextMenus.create({
//   type: 'normal',
//   title: 'Menu G',
//   id: 'g',
//   parentId: 'a'
// });
//
//
//
// function handleClickMenus (info, tab) {
//   console.log(info)
//   console.log(tab)
// }


// omnibox 设置默认提示
chrome.omnibox.setDefaultSuggestion({
  description: '这是默认提示'
})
chrome.omnibox.onInputEntered.addListener(function (text, disposition) { // 第一个是用户输入的值，字符串型，第二个是对结果的建议打开方式
  alert('您输入的是 ' + text)
})


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


