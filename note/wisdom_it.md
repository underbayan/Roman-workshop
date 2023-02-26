# acl
 - 区别ugo -user-group-other
 - 有自己的一套 user group mask 和ohter，只是 user 和group可以有多个数值。 mask 掩码表示user和group的可以拥有的最高权限
  
# casbin
- ACL, RBAC, ABAC , not support PBAC
# ts type
- partial record pick omit extend interface enum Exclude Extract NonNullable ReturnType InstanceType readonly diff overlap purify required 
# git cz to commit semantic messages
# sec
- Embrace linter security rules
- Limit concurrent requests using a middleware( eslint-plugin-security )
- Extract secrets from config files or use packages to encrypt them (Vault products)
- Prevent query injection vulnerabilities with ORM/ODM libraries
- Avoid DOS attacks 
- Adjust the HTTP response headers for enhanced security
- Constantly and automatically inspect for vulnerable dependencies( npm audit)
- Avoid using the Node.js crypto library for handling passwords, use Bcrypt
- Limit the allowed login requests of each user
- Run Node.js as non-root user
- Limit payload size using a reverse-proxy or a middleware
- Prevent evil RegEx from overloading your single thread execution
- Avoid JavaScript eval statements
- Avoid module loading using a variable
- Run unsafe code in a sandbox
- Take extra care when working with child processes
- Hide error details from clients
- Configure 2FA for npm or Yarn
- Modify session middleware settings

# perf for web server 
- request Per second rps
- Error rate
- cpu Utilliztion
- bytes per seconds
- average response times ART
- peak response Time
- the count of Threads
- uptime
- memory utilization
- the count fo open files descriptions
-  Machine: EX41S-SSD, Intel Core i7, 4Ghz, 64GB RAM, 4C/8T, SSD. Method:: autocannon -c 100 -d 40 -p 10 localhost:3000 * 2, taking the second average
   | Framework   | Version | Router? | Requests/sec |
   | ----------- | ------- | ------- | ------------ |
   | hapi        | 18.1.0  | ✓       | 29,998       |
   | Express     | 4.16.4  | ✓       | 38,510       |
   | Restify     | 8.0.0   | ✓       | 39,331       |
   | Koa         | 2.7.0   | ✗       | 50,933       |
   | Fastify     | 2.0.0   | ✓       | 76,835       |
   | http.Server | 10.15.2 | ✗       | 71,768       |
        --------------------------

# zones and zone.js to imitate thread-local storage in javascript
# Bogo sort : strange sort not only for fun  
# js unref will always call the callback after process end, but clearTimeout not.


# Collaboration
- Collaboration Awareness
- Operational Transformation 
- Differential Synchronization:  diff-match-patch
 
 
 
# http  
* 几乎所有的uri都是url，反之不成立
* 所有的对象都有mime 类型
* method 除了curd 还有第3种
* http1.0报文是文本而非二进制
* 响应报文分为三个部分： 起始行，首部字段，主体
* 状态码：100信息提示，200成功，300重定向，400客户端错误，500 server错误
* 网关，隧道，代理的区别是神码
* url 的格式是什么样子？ scheme://user:pwd@host:port/path?params#frag
* dns-prefetch-control  域名缓存meta标志。预处理域名解析，加快速度
* Strict-Transport-Security: max-age: 15552000; includeSubDomains 告诉浏览器需要用https 来访问这个网站
* XSS Cross-Site Scripting 
* csrf Cross-site request forgery
* DDoS Distributed Denial of Service
* X-Frame-Options 是否可以存在  iframe 中显示, nginx-demo: add_header X-Frame-Options SAMEORIGIN;
* X-Content-Type-Options :nosniff 只允许加载 指定的type的 资源
* X-XSS-Protection 告诉浏览器 xss 的策略,老司机给你一句忠告就是，千万别配置成XSS-Protection: 1?? why
* multipart/form-data  和 multipart/byteranges 区别
* hidePoweredBy 去除 X-Powered-By header 可以 保证系统安全
* etag If-none-match 服务器端配置一个etag 就好了，浏览器第二次请求会带上ifnonematch，询问服务器要不要拉取更新.
* 服务器端返回Last-Modified ，客户端第二次就会带上 If-Modified-Since，询问服务器要不要拉取更新
* 当服务器返回cache-control，或者expires的时候，客户端第二次访问会根据他来做比较要不要使用本地缓存，不需要询问服务器。

---------------------


* Content-Security-Policy:script-src 'self' https://apis.google.com

| name          | value                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| content-src： | 限制连接的类型（例如XHR、WebSockets和EventSource）                                                    |
| font-src：    | 控制网络字体的来源。例如可以通过font-src https://themes.googleusercontent.com来使用Google的网络字体。 |
| frame-src：   | 列出了可以嵌入的frame的来源。例如frame-src https://youtube.com只允许嵌入YouTube的视频。。             |
| img-src：     | 定义了可加载图像的来源。                                                                              |
| media-src：   | 限制视频和音频的来源。                                                                                |
| object-src：  | 限制Flash和其他插件的来源。                                                                           |
| style-src：   | 类似于Script-src，只是作用于css文件。                                                                 |


# SSCCE
- Short (Small) - Minimise bandwidth for the example, do not bore the audience.
- Self Contained - Ensure everything is included, ready to go.
- Correct - Copy, paste, (compile,) see is the aim.
- Example - Displays the problem we are trying to solve.

### CSRF 防范的通常建议：
- 前提条件：不存在xss的漏洞。
- 防范基本步骤：
  - 1 使用 header 中的 origin 和referer 验证 request的来源。（没有该字段默认打安全log然后先通过，进入下一级验证）
  - 2 使用 csrf token
    - 2.1 服务器端有session机制。那么比较session和request中的 csrfToken 是否相等.(Synchronizer Tokens)
    - 2.2 服务器没有session机制。那么比较form 和 cookie 中的 csrfToken是否相等.(Double Submit Cookie)
    - 2.3 使用加密的token做认证，不使用cookie。 就是token 是根据用户id等信息对称加密的值。只有服务器端可以解密认证。
  - 3 使用 Custom Request Headers
    - 用js在访问请求中自定义一个header字段作为认证。其原理是sop同源政策不允许跨域的ajax用js自己构造自定义header字段。
    - 例如 设置X-XSRF-Cookie 为 cookie 某个 key 的 value
  - 4 使用 SameSite cookie attribute
    - 设置cookie的sameSte策略（只有chrome支持. Example: Set-Cookie: JSESSIONID=xxxxx; SameSite=Strict
- 参考资料
  - [link1](https://seclab.stanford.edu/websec/csrf/csrf.pdf) [link2](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet#Double_Submit_Cookie)


# performance table tips
```
cmdid num(request) mean stdDev min 50th 70th 80th 90th max
cmdid num(users) mean stdDev section1 section2 section3...
-     -          -    -      percent1 percent2 percent3...
```
- The Maximum Number of Concurrent Users
- The Optimum Number of Concurrent Users
- Response Time: RT
- Query Per Second: QPS
- Throughput :req/s,bytes/s,pages/s
- TPS: Transaction Per second
- ## 标准的 metrics ，支持几种标准类型
- Gauge 瞬时值
- Counter 计数器
- Meter 吞吐率度量器
- Histogram 直方分布度量器
- Timer 吞吐率和响应时间分布度量器
- ## cpu 详情
- 物理 cpu\*核数+ 超线程技术=逻辑 cpu
- 主频：时钟频率，GHZ
- 外频： 决定主板运行速度 单位 MHZ
- 前端总线 FSB 频率： 决定数据交换的数度

# bash proxy 
````bash
#use agent to access the destination
ssh -L 9090:destination-host.com:8080 ssh-agent-host.com
````
- ## 本地转发
* ssh hostname 是 ssh server，local 是 ssh client
````bash
ssh -L <local port>:<remote host>:<remote port> <SSH hostname>
````
- ## 远程转发
* ssh hostname 是 ssh client，local 是 ssh server

````bash
ssh -R <local port>:<remote host>:<remote port> <SSH hostname>
````
- ## 共享本地端口转发
````
ssh -g -L <local port>:<remote host>:<remote port> <SSH hostname>
````
- ### 问题： 两个内网之间的linux 服务器怎么才能够相互登录呢？
* 把 两个linux 服务器的端口 都映射到 公共ip的主机的端口上，就可以通过端口来互联了。
- ### 问题： 如果mysql限制了只有本地ip才可以访问服务器的数据库，那么我们应该怎么在远程连接mysql呢？ 把机器的端口映射到服务器的某个端口，通过该端口访问数据库


### 喷泉码 : 想象下数据像喷泉一样，数据传输的时候像喷泉一样 就可以到目的地。

- REFE   规则引擎
- round-robin   1~n 轮询调度算法
- Zero-downtime Restarts
- Bug-for-bug compatible