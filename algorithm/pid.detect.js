class DynamicInterferenceDetector {
  constructor(p, i, d) {
    // 初始化PID控制器参数
    this.kp = p;
    this.ki = i;
    this.kd = d;
    this.prevError = 0;
    this.integral = 0;

    // 初始化窗口和干扰阈值
    this.windowSize = 10;
    this.threshold = 3;

    // 初始化滑动窗口和平均值
    this.windowStart = 0;
    this.windowEnd = this.windowSize - 1;
    this.windowSum = 0;
    this.windowAvg = 0;

    // 初始化检测结果
    this.result = [];
  }

  update(signal) {
    // 更新滑动窗口和平均值
    this.windowSum += signal - (this.windowStart > 0 ? this.signals[this.windowStart - 1] : 0);
    this.windowStart += 1;
    this.windowEnd += 1;
    this.windowAvg = this.windowSum / this.windowSize;

    // 计算误差和PID控制量
    const error = Math.abs(signal - this.windowAvg);
    const derivative = error - this.prevError;
    this.integral += error;
    const pid = this.kp * error + this.ki * this.integral + this.kd * derivative;

    // 根据PID控制量动态调整窗口大小和干扰阈值
    const newWindowSize = Math.round(this.windowSize + pid);
    const newThreshold = this.threshold + pid / 10;
    if (newWindowSize > 0 && newThreshold > 0) {
      this.windowSize = newWindowSize;
      this.threshold = newThreshold;
    }

    // 检测干扰
    if (error > this.threshold) {

      // 检测到干扰
      this.result.push({ start: this.windowStart - 1, end: this.windowEnd - 1 });
      this.windowStart = this.windowEnd + 1;
      this.windowEnd = this.windowStart + this.windowSize - 1;
      this.windowSum = this.signals.slice(this.windowStart, this.windowEnd + 1).reduce((a, b) => a + b, 0);
      this.windowAvg = this.windowSum / this.windowSize;
      this.prevError = 0;
      this.integral = 0;
    } else {
      this.prevError = error;
    }

    // 记录信号
  }

  detect(signals) {
    // 初始化信号和结果
    this.signals = signals;
    this.result = [];

    // 检测干扰
    for (let i = 0; i < signals.length; i++) {
      this.update(signals[i]);
    }

    // 返回结果
    return this.result;
  }
}

// 生成sin函数
function generateSin() {
  const amplitude = 5; // 振幅
  const frequency = 1; // 频率
  const phase = Math.random() * 2 * Math.PI; // 相位
  return t => amplitude * Math.sin(2 * Math.PI * frequency * t + phase);
}

// 生成1000个随机波动信号
function generateSignals() {
  const noiseAmplitude = 2; // 噪声振幅
  const signalFn = generateSin();
  const signals = [];

  for (let i = 0; i < 1000; i++) {
    const t = i / 1000;
    const signal = signalFn(t) + noiseAmplitude * (Math.random() - 0.5);
    signals.push(signal);
  }

  return signals;
}
const signals = generateSignals(1000);
const detector = new DynamicInterferenceDetector();

console.log(detector.detect(signals))