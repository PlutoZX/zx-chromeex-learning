// 右键菜单
chrome.contextMenus.create({
  type: 'normal',
  title: '弹出桌面提示',
  id: '001',
  onclick: handleNewNotify
})

chrome.contextMenus.create({
  type: 'normal',
  title: '新建书签google',
  id: '002',
  onclick: handleCreateBookMarks
})

chrome.contextMenus.create({
  type: 'normal',
  title: '打开京东标签页',
  id: '003',
  onclick: handleGetTab
})

chrome.contextMenus.create({
  type: 'normal',
  title: '下载图片',
  id: '004',
  onclick: handleDownload
})

chrome.contextMenus.create({
  type: 'normal',
  title: '获取系统信息',
  id: '005',
  onclick: handleGetSystem
})

chrome.contextMenus.create({
  type: 'normal',
  contexts: ['selection'],
  title: '小旋子选中值并用搜狗搜索',
  id: '006',
  onclick: handleSelect
})


function handleNewNotify (info, tab) {
  chrome.notifications.create(null, { // 需要notifications权限 桌面弹窗
    type: 'basic',
    iconUrl: 'WechatIMG2.jpg',
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
  chrome.tabs.create({
    index: 0,
    url: 'https://www.jd.com',
    active: true,
    pinned: false,
  }, function(tab){
    console.log(tab)
  })
}

function handleDownload () {
  chrome.downloads.download({
    url: 'http://www.baidu.com/img/xinshouye_f097208390e839e5b5295804227d94e9.png'
  }, function () {

  })
}

function handleGetSystem () {
  chrome.system.cpu.getInfo(function(info){
    console.log(info)
  })
  chrome.system.memory.getInfo(function(info){
    console.log(info)
  })
  chrome.system.storage.getInfo(function(info){
    console.log(info)
  })
}

function handleSelect (params) {
  chrome.tabs.create({
    url: 'https://www.sogou.com/web?query=' + params.selectionText,
    active: true,
    pinned: false,
  }, function(tab){
    console.log(tab)
  })
}
