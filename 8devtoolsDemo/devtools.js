chrome.devtools.panels.create('zxDemo', 'WechatIMG2.jpg', 'panel.html', function (panel) {
  console.log('自定义面板创建成功！')
})

chrome.devtools.panels.elements.createSidebarPane("zxDemoSidebar",
  function (sidebar) {
    sidebar.setPage('sidebar.html') // 侧边栏为页面
    // sidebar.setObject({ some_data: "Some data to show" })  // 侧边栏显示某个json对象
    // sidebar.setExpression('document.querySelectorAll("img")', 'All Images') // 侧边栏显示由表达式指定
  });
