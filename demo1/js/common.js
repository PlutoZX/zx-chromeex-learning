window.setInterval(function () {
  document.querySelector(".item1").innerHTML = (new Date()).toLocaleString()
}, 1000)




// 发请求
function httpRequest(url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", url, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText)
    }
  }
  xhr.send()
}
let searchurl = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=jd.com&prop=info&inprop=url&utf8=&format=json'
function searchCallBack(res) {
  document.querySelector('#wiki-content').innerHTML = res
}
httpRequest(searchurl, searchCallBack)


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





// 右键菜单
chrome.contextMenus.create({
  type: 'normal',
  title: 'Menu A',
  id: 'a'
})
chrome.contextMenus.create({
  type: 'normal',
  title: '弹出桌面提示',
  id: 'f',
  onclick: handleClickMenus
})

chrome.contextMenus.create({
  type: 'normal',
  title: '新建书签google',
  id: 'g',
  onclick: handleCreateBookMarks
})

chrome.contextMenus.create({
  type: 'normal',
  title: '打开京东标签页',
  id: 'h',
  onclick: handleGetTab
})

chrome.contextMenus.create({
  type: 'normal',
  title: '下载图片',
  id: 'i',
  onclick: handleDownload
})

chrome.contextMenus.create({
  type: 'normal',
  title: '获取系统信息',
  id: 'j',
  onclick: handleGetSystem
})




function handleClickMenus (info, tab) {
  console.log(info)
  console.log(tab)

  chrome.notifications.create(null, { // 需要notifications权限 桌面弹窗
    type: 'basic',
    iconUrl: 'images/WechatIMG2.jpg',
    title: '来自小旋子的提示信息',
    message: '醉后不知天在水，满船清梦压星河'
  })
}

function handleCreateBookMarks (info, tab) {
  chrome.bookmarks.create({
    parentId: '1',
    index: 0,
    title: 'Google',
    // url: 'http://www.google.com/' // 不传url就会当文件夹创建
  }, function (bookmark) {
    console.log(bookmark)
  })
}

function handleGetTab () {
  // chrome.tabs.getCurrent(function(tab){
  //   console.log(tab)
  // })

  chrome.tabs.create({
    index: 0,
    url: 'https://www.jd.com',
    active: true,
    pinned: false,
  }, function(tab){
    console.log(tab);
  });

}

function handleDownload () {
  chrome.downloads.download({
    url: 'http://www.baidu.com/img/xinshouye_f097208390e839e5b5295804227d94e9.png'
  }, function () {

  })
}

function handleGetSystem () {
  chrome.system.cpu.getInfo(function(info){
    console.log(info);
  })
  chrome.system.memory.getInfo(function(info){
    console.log(info);
  })
  chrome.system.storage.getInfo(function(info){
    console.log(info);
  })
}
