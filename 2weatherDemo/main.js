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
function searchCallBack(res) {
  var dataObj = JSON.parse(res)
  console.log(dataObj)
  document.querySelector('#cityName').innerHTML = dataObj.aqi.city
  document.querySelector('#cityId').innerHTML = dataObj.aqi.city_id
  document.querySelector('#cityWeather').innerHTML = dataObj.today.weatherEnd
  document.querySelector('#cityMin').innerHTML = dataObj.today.tempMin
  document.querySelector('#cityMax').innerHTML = dataObj.today.tempMax

  let promptText = ''
  for (let i = 0; i < dataObj.index.length; i++) {
    promptText += '<span>' + dataObj.index[i].details + '</span><br/>'
  }
  document.querySelector('#prompt').innerHTML = promptText

  document.querySelector("#weather-content").style.display = 'block'
}

// 101010100 北京
// 101180901 洛阳


document.querySelector('#save').addEventListener('click', function () {
  var txt = document.querySelector('#city').value
  if (!txt) {
    window.alert('请输入城市')
  } else {
    var searchurl = 'http://weatherapi.market.xiaomi.com/wtr-v2/weather?cityId='+ txt
    httpRequest(searchurl, searchCallBack)
  }
})
