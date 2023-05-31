function PID(Kp, Ki, Kd) {
  this.Kp = Kp;
  this.Ki = Ki;
  this.Kd = Kd;

  this.integral = 0;
  this.prevError = 0;
  this.prevTime = Date.now();
}

PID.prototype.update = function (setpoint, input) {
  let error = setpoint - input;
  let currentTime = Date.now();
  let deltaTime = currentTime - this.prevTime;

  let proportional = this.Kp * error;
  this.integral += error * deltaTime;
  let derivative = (error - this.prevError) / deltaTime;

  let output = proportional + (this.Ki * this.integral) + (this.Kd * derivative);

  this.prevError = error;
  this.prevTime = currentTime;

  return output;
};

let pid = new PID(0.002, 0.001, 0.001); // 创建 PID 控制器对象
let element = document.getElementById('wewewes'); // 获取需要移动的元素
let start = 0; // 动画开始位置
let end = 500; // 动画结束位置
let currentTime = Date.now(); // 记录动画开始时间
function animate2() {
  let deltaTime = Date.now() - currentTime; // 计算当前时间与动画开始时间的时间差
  let progress = pid.update(0, element.offsetLeft); // 使用 PID 控制器计算动画运动的进度
  element.style.left = start + progress + 'px'; // 将计算得到的进度应用到元素的 left 属性上
  if (deltaTime < 9000) { // 如果动画时间未达到 1 秒
    requestAnimationFrame(animate2); // 递归调用 animate() 函数，继续更新动画
  } else {
    currentTime = performance.now()
    animate()
  }
}
function animate() {
  let deltaTime = Date.now() - currentTime; // 计算当前时间与动画开始时间的时间差
  let progress = pid.update(end, element.offsetLeft); // 使用 PID 控制器计算动画运动的进度
  element.style.left = start + progress + 'px'; // 将计算得到的进度应用到元素的 left 属性上

  if (deltaTime < 3000) { // 如果动画时间未达到 1 秒
    requestAnimationFrame(animate); // 递归调用 animate() 函数，继续更新动画
  } else if (deltaTime > 6000) {
    requestAnimationFrame(animate2);
  }
}

animate(); 