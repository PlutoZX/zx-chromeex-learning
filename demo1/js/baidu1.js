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
let searchurl = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=baidu.com&prop=info&inprop=url&utf8=&format=json'
function searchCallBack(res) {
  console.log(res)
}
httpRequest(searchurl, searchCallBack)


console.log(document.getElementById('s_lg_img_new'))
