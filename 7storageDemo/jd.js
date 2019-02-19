//
// let jsPath = 'inject.js'
// let temp = document.createElement('script')
// temp.setAttribute('type', 'text/javascript')
// temp.src = chrome.extension.getURL(jsPath)
// temp.onload = function()
// {
//   this.parentNode.removeChild(this)
// }
// document.head.appendChild(temp)


var imgURL = chrome.runtime.getURL('WechatIMG2.jpg');
document.getElementsByClassName('logo_scene')[0].style.display = 'none'
document.getElementsByClassName('logo_tit_lk')[0].style.backgroundImage = 'url('+ imgURL +')'


document.getElementsByClassName('logo_tit_lk')[0].addEventListener("mouseenter", function () {
  chrome.runtime.sendMessage(null, document.getElementById('key').value, null, function (res) {
    document.getElementById('key').value = res
  })
})
