# CSRF攻击：
攻击者盗用了你的身份，以你的名义发送恶意请求
## 途径
* 通过 截获cookie

## 解决方式
* 在form中添加one time token 来验证表单的唯一性，在多页面中打开同一个表单，将只有最后一个有效
* 验证码
* 在form 中加入对cookie 的hash 校验
* Header 中加入 auth token 
* 验证http的referer 字段

