export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '\\s|$')
  return reg.test(el.className)
}

// 右侧菜单列表,拿到data-index
export function getData (el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(prefix + name, val)
  } else {
    return el.getAttribute(name)
  }
}

// 根据浏览器的支持情况添加前缀
let elementStyle = document.createElement('div').style
let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }
  return false
})()

export function prefixStyle (style) {
  if (vendor === false) {
    return false
  }
  if (vendor === 'standard') {
    return style
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
// 根据浏览器的支持情况添加前缀end
