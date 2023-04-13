// 我问你一个算法题， 给你一个长度1000数组，数组是一堆已经滤波过的信号，信号是平稳波动的，每秒一个记录。有时候信号会被外界干扰产生一个凸起或者凹陷，干扰的时长不固定（3 - 10秒），你可否写一个算法估计出每次干扰发生的大概时间吗？ 我要求的是 假设干扰发生了n（n > 10）次，你的算法的误差平均值不超过 3。请用js实现

/**
 * 定义一个滑动窗口，大小为 k（比如说 k=10），从左到右移动窗口，每次移动一个单位。

对于窗口内的数值，计算它们的平均值。

将平均值与窗口内的数值逐一比较，如果某个数值的差距超过了一个给定的阈值（比如说阈值为 3），那么就说明在这个位置出现了一个干扰。

为了避免重复计算干扰，需要将窗口移动到干扰结束后的位置，并从这个位置重新开始滑动窗口。

下面是一个实现示例，假设数组为 signals，窗口大小为 10，阈值为 3：
 */


function detectInterference(signals) {
  const k = 10; // 窗口大小
  const threshold = 3; // 干扰阈值
  let windowStart = 0; Œ
  let windowEnd = k - 1;
  let sum = signals.slice(windowStart, windowEnd + 1).reduce((a, b) => a + b);
  let avg = sum / k;
  let result = [];

  for (let i = k; i < signals.length; i++) {
    // 滑动窗口
    sum = sum - signals[windowStart] + signals[windowEnd + 1];
    windowStart++;
    windowEnd++;
    avg = sum / k;

    if (Math.abs(signals[i] - avg) > threshold) {
      // 检测到干扰Í
      result.push(i);
      windowStart = i + 1;
      windowEnd = windowStart + k - 1;
      sum = signals.slice(windowStart, windowEnd + 1).reduce((a, b) => a + b);
      avg = sum / k;
    }
  }

  return result;
}
