// omnibox 设置默认提示
chrome.omnibox.setDefaultSuggestion({
  description: '小旋子的提示'
})
chrome.omnibox.onInputChanged.addListener(function (text, suggest) { // 第一个是用户输入的值，字符串型，第二个是对结果的建议打开方式
  if (text === '帅哥') {
    suggest([
      { content: '1' + text, description: '小旋子是个帅哥' },
      { content: '2' + text, description: '小旋子为什么这么帅'},
      { content: '3' + text, description: '小旋子比张艺兴帅吗'},
      { content: '4' + text, description: '小旋子是靠帅吃饭的' },
      { content: '5' + text, description: '小旋子的才华都比不过他的帅' }
    ])
  }
})


chrome.omnibox.onInputEntered.addListener(function (text, disposition) {
  if (text === '1帅哥') {
    alert('小旋子必须是个帅哥')
  } else if (text === '2帅哥') {
    alert('天生丽质，难自弃')
  } else if (text === '3帅哥') {
    alert('那不是妥妥滴')
  } else if (text === '4帅哥') {
    alert('那饿不死了')
  } else {
    alert('净说大实话')
  }
})
