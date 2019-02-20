document.getElementById('checkJqueryBtn').addEventListener('click', function () {
  chrome.devtools.inspectedWindow.eval(
    "JDFUI",
    function (result, isException) {
      console.log(result)
    }
  )

  chrome.devtools.inspectedWindow.eval(
    "jQuery.fn.jquery",
    function (result, isException) {
      if (isException)
        console.log("the page is not using jQuery")
      else
        console.log("The page is using jQuery v" + result)
    }
  )
})

document.getElementById('getLogoBtn').addEventListener('click', function() {
  chrome.devtools.inspectedWindow.eval("inspect(document.images[0])", function(result, isException){

  })
})

document.getElementById('getAllBtn').addEventListener('click', function() {
  chrome.devtools.inspectedWindow.getResources(function(resources) {
    console.log(resources)
  })
})

document.getElementById('reloadBtn').addEventListener('click', function() {
  chrome.devtools.inspectedWindow.reload({
    ignoreCache: true
  })
})
