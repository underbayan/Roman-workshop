//  hack the console.log to the logger. then we should using console.log always and anywhere?
//  set customized module.paths to make require method more easy. we call it plug?
//  hack file read or write num by hacking the fs method?
//  hack the dns.loogup to make sure the dns is sucees and timely.
//  hack http request to capture the request info.
//  reporter and lodder ??
//  overload  和负载均衡的问题 怎么弄？
//  require cache 需要更新的时候，如何保证在文件变化的时候，所有依赖这个文件的require cache 都更新呢~， 我们是可以这么做的，在require 中hack一个方法来做建立一个树。
if (!global[__filename]) { global[__filename] = true; } // this code will make the js file run only once.