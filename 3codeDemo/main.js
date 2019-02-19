$(function () {
  var qrcode = new QRCode(document.getElementById("qrBox"), {
    text: '',
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  })

  chrome.tabs.getSelected(null, function (tab) {
    qrcode.clear()
    qrcode.makeCode(tab.url)
  })

  $('#queryBtn').click(function () {
    qrcode.clear()
    qrcode.makeCode($('#textBox').val())
  })
  $('#textBox').on('input', function () {
    qrcode.clear()
    qrcode.makeCode($('#textBox').val())
  })
})
