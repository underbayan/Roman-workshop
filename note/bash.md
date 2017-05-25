#### basic Tips

| Commands | Description |
| ------ | ----------- |
|    |  |

```bash

find / -name *.log

man find

ssh-keygen -b 1024 -t rsa

scp  ./a.txt root@domain_or_ip:~/

scp -vrp  ./dirName/ root@domain_or_ip:~/
```

####  replace multiple files 
```bash 
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/<script language=javascript src="http:\/\/min\/js\/min.js"><\/script>//g'
```
####  replace txt in  multiple files with grep 
```bash
find . -name "*.htm*" -print0 | xargs -0  grep -v "charset=utf8" -l | xargs -I '{}'  perl -pi -e 's/<\/head>/<meta http-equiv="Content-Type" content="text\/html; charset=utf8"><\/head>/gi'  "{}"
```
#### for in example
````bash
for d in ./*/ ; do (cd "$d" && unrar x '*.rar' && rm -f '*.rar'); done
````
#### unrar and delete
```bash 
for d in ./*/ ; do (cd "$d" && unrar x '*.rar' && rm -f '*.rar'); done
````
#### 解压chm
```bash 
zero=''
for files in ./*/*.chm ; do (  extract_chmlib "$files" "${files/.chm/$zero}" && rm "$files"); done
````
#### 编码转换
```bash 
find "." -name "*.htm*" -print0 | xargs -0 enca -x utf-8
````
#### 重命名
```bash 
for d in ./*/*test.zip ; do (mv $d ${d/test/}); done
````
