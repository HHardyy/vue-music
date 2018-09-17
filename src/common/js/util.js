export function shuffle (arr) { // 洗牌函数算法
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandom(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}
function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
