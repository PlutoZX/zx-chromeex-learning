$(function () {
  $('#saveBtn').click(function () {
    let key = $('#keyBox').val()
    let value = $('#valueBox').val()
    let obj = {
      [key]: value
    }
    chrome.storage.sync.set(obj, function () {
      window.alert('写入成功')
    })
  })

  $('#getBtn').click(function () {
    let key = $('#keyBox').val()
    chrome.storage.sync.get(key, function (res) {
      window.alert(JSON.stringify(res))
    })
  })


  var bgPage = chrome.extension.getBackgroundPage()
  $('#poptobgBtn').click(function () {
    bgPage.bgfn1()
  })

  window.bgtopopFn = function () {
    alert('触发pop fn1')
  }
  $('#bgtopopBtn').click(function () {
    bgPage.bgfn2()
  })

})


// 页面出来 js运行可以响应onMessage
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
//   sendResponse('Hello from background.');
// });
