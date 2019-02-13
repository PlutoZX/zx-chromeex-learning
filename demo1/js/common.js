window.setInterval(function () {
  document.querySelector(".item1").innerHTML = (new Date()).toLocaleString()
}, 1000)




// 发请求
function httpRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }
  xhr.send();
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
  });
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
});

chrome.contextMenus.create({
  type: 'radio',
  title: 'Menu B',
  id: 'b',
  checked: true
});

chrome.contextMenus.create({
  type: 'radio',
  title: 'Menu C',
  id: 'c'
});

chrome.contextMenus.create({
  type: 'checkbox',
  title: 'Menu D',
  id: 'd',
  checked: true
});

chrome.contextMenus.create({
  type: 'separator'
});

chrome.contextMenus.create({
  type: 'checkbox',
  title: 'Menu E',
  id: 'e'
});

chrome.contextMenus.create({
  type: 'normal',
  title: 'Menu F',
  id: 'f',
  parentId: 'a',
  onclick: handleClickMenus
});

chrome.contextMenus.create({
  type: 'normal',
  title: 'Menu G',
  id: 'g',
  parentId: 'a'
});



function handleClickMenus (info, tab) {
  console.log(info)
  console.log(tab)


  chrome.notifications.create(null, { // 需要notifications权限
    type: 'basic',
    iconUrl: 'images/WechatIMG2.jpg',
    title: '来自小旋子的提示信息',
    message: '醉后不知天在水，满船清梦压星河'
  });
}
