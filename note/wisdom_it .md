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
