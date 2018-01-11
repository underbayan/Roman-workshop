###cone锥形 NAPT
内网clientA连接外网的不同服务器时候，网关使用的对外端口号一样
* full cone 完全锥形 : 所有的外面服务器都可以和clientA通信
* restricted cone 限制型锥形： 只有特定的ip可以和 clientA 通信（比如链接是 clientA主动发起的）
* port restricted cone： 只有特定的服务器ip 和端口才可以和clientA通信
###symmetric 对称 NAPT
* 内网clientA连接外网的 不同服务器，使用的端口号不一样



#### pwnat 2010年提出通过imcp 来伪造代理骗取服务器的网关的对外通信端口。
* [链接](https://blog.blahgeek.com/pypwnat.html)