* 几乎所有的uri都是url，防止不成立
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
* etag If-none-match
