window.setInterval(function(){
  document.querySelector(".item1").innerHTML = (new Date()).toLocaleString()
}, 1000)

document.querySelector("#btn").addEventListener("click", function (e) {
  document.querySelector("#btn").setAttribute('style', 'color: blue')
})