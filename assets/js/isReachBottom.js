// 获取滚动条的高度
function getScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop
}
// 获取滚动条的高度
function getWinHeight() {
  return document.documentElement.clientHeight || document.body.clientHeight
}
// 获取文档总高度
function getScrollHeight() {
  let bodyScrollHeight = 0
  let documentScrollHeight = 0
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight
  }
  // 当页面内容超出浏览器可视窗口大小时，Html的高度包含body高度+margin+padding+border所以html高度可能会大于body高度
  return (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
}
// 是否滚动到底部
export default function isReachBottom() {
  const scrollTop = getScrollTop() // 获取滚动条的高度
  const winHeight = getWinHeight() // 一屏的高度
  const scrollHeight = getScrollHeight() // 获取文档总高度
  return scrollTop >= parseInt(scrollHeight) - winHeight
}