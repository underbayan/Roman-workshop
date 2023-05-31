
class ConcurrencyController {
  queue = []
  count = 0
  timeOut = 5000
  healthInterval = 200
  timer = 0
  activeQueue = []
  static startTime = Symbol("startTime")
  static rej = Symbol("reject")
  static id = Symbol("ID")
  constructor() {
    // custom Options 
  }
  push(fn) {
    const promisifyTask = () => new Promise(async (res, _rej) => {
      promisifyTask[ConcurrencyController.rej] = _rej
      try {
        await fn()
        res(void 0)
      } catch {
        _rej()
      }
    })
    promisifyTask[ConcurrencyController.id] = Math.random()
    this.queue.push(promisifyTask)
    this.process()
  }
  process() {
    if (this.timer) clearTimeout(this.timer)
    // Avoid long tasks run out the activeQueue
    const current = performance.now()
    this.activeQueue = this.activeQueue.filter(task => {
      // If task is timeout or completed, the remove it from active queue
      if (current - task[ConcurrencyController.startTime] > this.timeOut) {
        if (task[ConcurrencyController.startTime] > -Infinity) {
          task[ConcurrencyController.rej]()
        }
        return false
      }
      // Task is till active 
      return true
    })
    // Run tasks in parallel
    while (this.count < 10 && this.queue.length) {
      const task = this.queue.shift()
      console.log("Run task", task)
      if (task) {
        this.activeQueue.push(task)
        this.count++
        task[ConcurrencyController.startTime] = performance.now()
        // directly call fn since we don't mean to change context of task 
        task().finally(() => {
          console.log("task finished", task)
          task[ConcurrencyController.startTime] = -Infinity
          this.count--
          //Directly call process.
          this.process()
        })
      } else {
        break
      }
    }
    if (this.queue.length > 0) this.timer = setTimeout(() => this.process(), this.healthInterval)
  }
}

const cc = new ConcurrencyController
for (let i = 0; i < 5; i++)
  cc.push(() => delay(3000))
for (let i = 0; i < 3; i++)
  cc.push(() => delay(16000))
for (let i = 0; i < 23; i++)
  cc.push(() => delay(1000))


process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});


