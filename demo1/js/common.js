window.setInterval(function () {
  document.querySelector(".item1").innerHTML = (new Date()).toLocaleString()
}, 1000)





function httpRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
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



document.querySelector("#sendMessageBigBtn").addEventListener('click', function () {
  chrome.runtime.sendMessage('Hello', function(response){
    document.querySelector('#wiki-content').innerHTML = response
  });
})
