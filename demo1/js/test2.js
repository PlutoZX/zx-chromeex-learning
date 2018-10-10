function btn_move(el, mouseLeft, mouseTop){
  var leftRnd = (Math.random()-0.5)*20;
  var topRnd = (Math.random()-0.5)*20;
  var btnLeft = mouseLeft+(leftRnd>0?100:-100)+leftRnd;
  var btnTop = mouseTop+(topRnd>0?30:-30)+topRnd;
  btnLeft = btnLeft<100?(btnLeft+window.innerWidth-200):(btnLeft>window.innerWidth-100?btnLeft-window.innerWidth+200:btnLeft);
  btnTop =  btnTop<100?( btnTop+window.innerHeight-200):(btnTop>window.innerHeight-100?btnTop-window.innerHeight+200:btnTop);
  el.style.position = 'fixed';
  el.style.left = btnLeft+'px';
  el.style.top = btnTop+'px';
}

function over_btn(e){
  if(!e){
      e = window.event;
  }
  btn_move(this, e.clientX, e.clientY);
}

document.getElementsByClassName('button')[0].addEventListener("click", function(){
  window.alert(1)
  console.log(1)
});
document.getElementsByClassName('button')[0].onmouseover = over_btn

let domText = '<div>小选择的豆腐脑</div>'
document.body.insertBefore(document.querySelector('.mod_container'), domText)


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