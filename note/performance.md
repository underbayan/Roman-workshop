# performance table tips

```
cmdid num(request) mean stdDev min 50th 70th 80th 90th max


cmdid num(users) mean stdDev section1 section2 section3...
-     -          -    -      percent1 percent2 percent3...
                                .
                                .
                                .
```

The Maximum Number of Concurrent Users
The Optimum Number of Concurrent Users
Response Time: RT
Query Per Second: QPS
Throughput :req/s,bytes/s,pages/s
TPS: Transaction Per second

标准的 metrics ，支持几种标准类型

Gauge 瞬时值
Counter 计数器
Meter 吞吐率度量器
Histogram 直方分布度量器
Timer 吞吐率和响应时间分布度量器
