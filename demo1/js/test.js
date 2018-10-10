window.setInterval(function(){
  document.querySelector(".item1").innerHTML = (new Date()).toLocaleString()
}, 1000)

document.querySelector("#btn").addEventListener("click", function (e) {
  document.querySelector("#btn").setAttribute('style', 'color: blue')
})

function httpRequest(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          callback(xhr.responseText);
      }
  }
  xhr.send();
}
let searchurl = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=jd.com&prop=info&inprop=url&utf8=&format=json'
function searchCallBack (res) {
  console.log(res.query.search)
}
httpRequest(searchurl, searchCallBack)