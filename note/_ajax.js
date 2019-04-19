import { callbackify } from 'util'

class Ajax {
  constructor(op) {
    const { method, callback } = op
    this.xhr = new XMLHttpRequest()
    this.xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        callbackify(xhr.responseText)
      }
    }
    switch (method) {
      case 'get':
        xhr.open(method, url, true)
        xhr.send(null)
        break
      case 'post':
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(JSON.stringify(data)) //发送的数据需要转化成JSON格式
        break
      default:
        console.log('不识别的方法:' + method)
        return fasle
    }
  }
}
