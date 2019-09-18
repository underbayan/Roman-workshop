### laze image load
### window on error report
### skeleton of loading
### loading bar of top navigation
### ES5 shim ,ES6 shim?

### meta:
*  \<meta charset="UTF-8">
*  \<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
*  application-name, author, description, keywords, generator
*  \<meta name="revisit-after" content="7 days" > 防止爬虫过度爬数据
*  \<meta name="renderer" content="webkit"> //默认webkit内核
   \<meta name="renderer" content="ie-comp"> //默认IE兼容模式
   \<meta name="renderer" content="ie-stand"> //默认IE标准模式
*  \<meta name=”viewport” content=”initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no”/>禁止缩放
*  \<meta http-equiv="Cache-Control" content="no-siteapp"/> //禁止转码
*  \<meta content=”telephone=no” name=”format-detection” /> // 防止数字当做电话号码
*  http-equiv : 略
* example:
  - \<meta name="keywords" content="your tags" />
  - \<meta name="description" content="150 words" />
  - \<meta name="robots" content="index,follow" />
     \<!--
         all：文件将被检索，且页面上的链接可以被查询；
         none：文件将不被检索，且页面上的链接不可以被查询；
         index：文件将被检索；
         follow：页面上的链接可以被查询；
         noindex：文件将不被检索；
         nofollow：页面上的链接不可以被查询。
      -->
  - \<meta name="apple-mobile-web-app-capable" content="yes" /> \<!-- 启用 WebApp 全屏模式 -->    
  - \<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> 隐藏状态栏/设置状态栏颜色
  - \<meta name="apple-mobile-web-app-title" content="标题"> 添加到主屏后的标题
  - <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">  添加智能 App 广告条 Smart App Banner
### Base element of info
* \<title>
* \<base>表示文档中所有相对url地址的基础url
