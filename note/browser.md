### 事件机制
- 类型：mousedown, mouseup, mousemove, click, touchstart, touchmove ,touchend
- 标准事件： 先捕获capturing后冒泡 bubbling 
- IE：只有冒泡
- dispatchEvent 手动触发
- 捕获还是冒泡在addEventListener 的 第三个参数中设定, attachEvent 中没有该参数
- 阻止传播：stopPropagation
- 也可以阻止 捕获阶段的传播
#### 事件委托
currentTarget 注册事件dom
srcElement, target 触发时间的dom
timeStamp 事件的时间戳
#### ghostClick
scalable page ：300ms delay to fire the click after touchstart
not scalable page：10ms delay to fire the click after touchstart
<meta name="viewport" content="width=device-width, user-scalable=no">
In addition in IE10, also add this CSS rule to remove the ghost click delay:
html {
-ms-touch-action: manipulation;
touch-action: manipulation;
}
preventing the ghost clicks :
1,在window的 时间捕获中判断，touchstart 和click的位置，如果是同一个位置那么则，阻止click 传播
2,只用click
3，只用touch
4，fastclick

#### fastClick 原理

#### postMessage 
postMessage 可以做到任何域名页面之间的通信。但是需要使用到iframe

#### Fetch
credentials : include

#### webSocket  不实行同源政策
