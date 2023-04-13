/**
 * 
这是一个计算平面内多个矩形覆盖面积的问题，可以使用扫描线算法来解决。下面是使用 JavaScript 实现的算法：

在一个平面内给你 n (n>30)个矩形，第i个矩形可以用两个点[ai,bi] 和[ci,di]表示为[ai,bi,ci,di], 求n个矩形的在平面上的覆盖面积，请你用javascript写出算法。 例如输入[[0,0,2,2],[0,0,3,3]] 输出9， 再比如输入 [[0,0,1,1],[0,0,3,3],[1,1,2,2]] 输出为9
 */


function getCoveredArea(rectangles) {
  // 构建扫描线
  let scanLine = [];
  for (let i = 0; i < rectangles.length; i++) {
    let rect = rectangles[i];
    scanLine.push([rect[0], rect[1], 1]); // 左边界
    scanLine.push([rect[2], rect[1], -1]); // 右边界
  }

  // 按 x 坐标排序
  scanLine.sort(function (a, b) {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return b[2] - a[2];
    }
  });

  // 执行扫描
  let currHeight = 0;
  let currX = 0;
  let coveredArea = 0;
  for (let i = 0; i < scanLine.length; i++) {
    let line = scanLine[i];
    let x = line[0], y = line[1], type = line[2];
    let width = x - currX;
    if (currHeight > 0) {
      coveredArea += width * currHeight;
    }
    currX = x;
    currHeight += type * y;
  }

  return coveredArea;
}
