### basic Tips

| Commands | Description |
| -------- | ----------- |
|          |             |

```bash

find / -name *.log

man find

ssh-keygen -b 1024 -t rsa

scp  ./a.txt root@domain_or_ip:~/

scp -vrp  ./dirName/ root@domain_or_ip:~/
```

###  replace multiple files 
```bash 
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/<script language=javascript src="http:\/\/min\/js\/min.js"><\/script>//g'
```
###  replace txt in  multiple files with grep 
```bash
find . -name "*.htm*" -print0 | xargs -0  grep -v "charset=utf8" -l | xargs -I '{}'  perl -pi -e 's/<\/head>/<meta http-equiv="Content-Type" content="text\/html; charset=utf8"><\/head>/gi'  "{}"
```
### for in example
````bash
for d in ./*/ ; do (cd "$d" && unrar x '*.rar' && rm -f '*.rar'); done
````
### unrar and delete
```bash 
for d in ./*/ ; do (cd "$d" && unrar x '*.rar' && rm -f '*.rar'); done
````
### 解压chm
```bash 
zero=''
for files in ./*/*.chm ; do (  extract_chmlib "$files" "${files/.chm/$zero}" && rm "$files"); done
````
### 编码转换
```bash 
find "." -name "*.htm*" -print0 | xargs -0 enca -x utf-8
````
### 重命名
```bash 
for d in ./*/*test.zip ; do (mv $d ${d/test/}); done
````
###  端口
sudo lsof -i -P | grep -i "listen"
netstat -an | grep 3306





mov  to gif :ffmpeg -i in.mov -s 600x400 -pix_fmt rgb24 -r 10 -f gif - | gifsicle --optimize=3 --delay=3 > out.gif
===============================================================================
ssh  root@121.43.113.130
mv /var/ftp/dist/ /var/www/html/dist
chown -R apache /var/www/html/2
rm -rf /var/www/html/2
===============================================================================
apache service:
    sudo apachectl -k start
    sudo apachectl stop
    sudo apachectl -k restart
===============================================================================
mysql service:
    sudo /usr/local/mysql/support-files/mysql.server start
        mysql.server start
    service mysqld start
    mysql -uroot
    mysql -uroot
    ln -s /tmp/mysql.sock /var/mysql/mysql.sock  //修复 mysql sock 找不到的问题

mysql数据库默认情况下不允许远程连接。如需设置，方法如下：
1.改表法
    本地登入mysql，更改“mysql”数据库里的“user”表中的“host”项，改为"%"则允许任何主机远程连接，改为“指定IP”则仅允许该IP远程连接。
    mysql -u root -p123456 -h localhost
    use mysql;
    update user set host = '%' where user = 'root'
2.授权法
    例1.你想myuser使用mypassword从任何主机连接到mysql服务器
    grant all privileges on *.* to 'myuser'@'%' identified by 'mypassword' with grant option;
    例2.允许用户myuser使用mypassword从ip为192.168.1.5的主机连接到mysql服务器
    grant all privileges on *.* to 'myuser'@192.168.1.5 identified by 'mypassword' with grant option;
    grant all privileges on TeifenMarketing.* to tksadmin@122.112.13.214 identified by ‘8kKdP6GQ′;
===============================================================================
AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using localhost.localdomain. Set the 'ServerName' directive globally to suppress this message
apache 启动出现这种错误的解决方法:
将 apache 的配置文件httpd.conf中的 ServerName 改成可用域名或如下配置
ServerName localhost:80
===============================================================================
find file
    find /root -size -5557c -size +5555c -exec ls -ld {} \;
    当前目录下找 foo文件或者fOO文件
    find ./ -name "f[Oo][Oo]" -print

    找出 3 天"以前"被改动过的文件 (前第三天以前 → 2011/09/05 12:00 以前的文件) (> 72 小时)

    find /var/log/ -mtime +3 -type f -print
    找出 3 天內被改动过的文件 (2011/09/05 12:00 ~ 2011/09/08 12:00 內的文件) (0 ~ 72 小时內)

    find /var/log/ -mtime -3 -type f -print
    找出前第 3 天被改动过的文件 (2011/09/04 12:00 ~ 2011/09/05 12:00 內的文件) (72 ~ 96 小时)

    find /var/log/ -mtime 3 -type f -print
    找出第 3 天被改动过的文件 (也可以这样写)

    find /var/log/ -mtime +2 -mtime -4 -type f -print
===============================================================================

read the user’s profile:
	#source ~/.bashrc
	#.  ~/.bashrc
profile details:
	$PATH：决定了shell将到哪些目录中寻找命令或程序。
    $HOME：当前用户主目录。
    $MAIL：是指当前用户的邮件存放目录。
    $SHELL：是指当前用户用的是哪种Shell。
    $HISTSIZE：是指保存历史命令记录的条数。
    $LOGNAME：是指当前用户的登录名。
    $HOSTNAME：是指主机的名称，许多应用程序如果要用到主机名的话，通常是从这个环境变量中来取得的。
    $LANG/LANGUGE：是和语言相关的环境变量，使用多种语言的用户可以修改此环境变量。
    $PS1：是基本提示符，对于root用户是#，对于普通用户是$，也可以使用一些更复杂的值。
    $PS2：是附属提示符，默认是“>”。
    $IFS：输入域分隔符。当shell读取输入时，用来分隔单词的一组字符，它们通常是空格、制表符和换行符。
    $0：shell脚本的名字。
    $#：传递给脚本的参数个数。
    $$：shell脚本的进程号，脚本程序通常会用它生成一个唯一的临时文件，如/tmp/tmfile_$

    echo：显示指定环境变量。
    export：设置新的环境变量。
    env：显示所有环境变量。
    set：显示所有本地定义的shell变量。
    unset：清除环境变量。

通配符
    *	代表0个或多个任意字符
    ?	代表一定有一个任意字符
    [ ]	[abcd]，表示一个字符，或a或b或c或d
    [-]	[0-9]，表示一个数字，0到9之间的某个
    [^]	[^abc]，表示一个字符，且不是a、b、c

特殊字符
    #	注释
    \	转义字符
    |	管道（pipe）
    ;	连续命令
    ~	用户主文件夹
    $	变量前导符
    &	作业控制的后台运行
    !	逻辑非
    /	目录分隔符
    >,>>	数据流重定向，输出导向，分别是“替换“和”增加“
    <,<<	数据流重定向，输入导向
    ' ‘	单引号，不具有变量置换功能
    ” “	双引号，具有变量置换功能
    ` `	` `中内容可以先执行的命令，也可以用$( )来替换
    ( )	在中间为子shell的起始与结束
    { }	在中间为命令块的组合

shell 启动参数

    -n   读一遍脚本中的命令但不执行，用于检查脚本中的语法错误
    -v   一边执行脚本，一边将执行过的脚本命令打印到标准错误输出
    -x   提供跟踪执行信息，将执行的每一条命令和结果依次打印出来

变量：默认为字符串
    name="Jack"
    s="$name, hello!" #注意等号"="前后都不能有空格。建议字符串用双引号（单引号表示纯字符串，不支持$等）。
    echo $s           #输出Jack, hello!（若s用单引号，则输出$name, hello!）
    unset s           #删除变量s
    echo "this is the ${num}nd" #this is the 2nd
    ${name:-default} 使用一个默认值（一般是空值）来代替那些空的或者没有赋值的变量name；
    ${name:=default}使用指定值来代替空的或者没有赋值的变量name；
    ${name:?message}如果变量为空或者未赋值，那么就会显示出错误信息并中止脚本的执行同时返回退出码1。
    ${#name} 给出name的长度
    ${name%word} 从name的尾部开始删除与word匹配的最小部分，然后返回剩余部分
    ${name%%word} 从name的尾部开始删除与word匹配的最长部分，然后返回剩余部分
    ${name#word} 从name的头部开始删除与word匹配的最小部分，然后返回剩余部分
    ${name##word} 从name的头部开始删除与word匹配的最长部分，然后返回剩余部分

语法：

    循环
    for image in *.gif
    do
       cjpeg $image > ${image%%gif}jpg
    done

    条件
    read a
    if [ $a = "yes" ];then     s## this is not  recommended
    echo "OK"
    fi
    if [ "$a" = "yes" ];then
    echo "OK"
    fi

    变量声明：
    declare [+/-][afrix]  variable
    说明：
    +/- "-"可用来指定变量的属性，"+"则是取消变量所设的属性。
    -a　定义变量variable为数组（array）类型
    -i  定义变量variable为整数（integer）类型
    -r  定义变量variable为只读（readonly）类型
    -x  用法与export一样，将variable设置为环境变量

    数组：
        #赋值
            a[0]=1              #第一种赋值方法
            a[1]=2
            a[2]=3
            b=(6,7,8,9,10)      #第二种赋值方法
        #取值
            echo  ${b[0]}       #用${数组名[下标]}，下标是从0开始。下标是*或者@，则得到整个数组内容。输出6
            echo  ${b[*]:1:3}   #直接通过${数组名[@或*]:起始位置:长度}切片原先数组，输出7 8 9
            echo  ${b[*]::3}    #输出6 7 8（前三个元素）

        #遍历
            echo  ${b[*]}       #遍历数组除用循环外还可用：“数组名[*]”或“数组名[@]”,输出6 7 8 9 10
            echo  ${b[@]}       #输出：6 7 8 9 10
            for var in ${arr[@]};do echo $var; done    #分行输出：6 7 8 9 10

        #数组个数
            echo  ${#b[*]}      #输出：5
            echo  ${#b[@]}      #输出：5

        #修改和删除
            b[0]=0              #修改：重新赋值
            echo ${b[*]}        #输出：0 7 8 9 10
            unset  b[0]          #删除：删除第一个元素
            echo ${b[*]}        #输出：7 8 9 10


        特殊变量
            脚本名称叫test.sh 入参三个: 1 2 3
            运行test.sh 1 2 3后
            [python] view plaincopy在CODE上查看代码片派生到我的代码片
            $* 为"1 2 3"（在一个变量中列出所有参数，各个参数之间用环境变量IFS中的第一个字符分隔开，所以如果IFS置空，则会变成"123"）
            $@ 为"1 2 3"（$*的变体，不适用环境变量IFS，而是以空格连接参数，所以当IFS置空，则扔为"1 2 3"）
            $# 为3（参数数量）
            $0 $n，用来存放函数调用或脚本执行时传入的参数,$0为test.sh
            $1 为1，以此类推
            $$ 脚本运行的当前进程的ID号
            $! 后台运行的最后一个进程的ID号
            $- 显示shell使用的当前选项
            $? 显示最后命令的退出状态，0表示无错误（这个变量也常常用来打印输出，在脚本调试时标记某个shell命令或某个函数是否正确执行，但是要注意，$?记载的是最近的函数或命令的退出状态，因此打印时应该立即打印以获得正确的信息）

        数值计算
            方法1，declare -i
            [plain] view plaincopy在CODE上查看代码片派生到我的代码片
            示例1：让变量 sum 保存 100+300+50 的加和结果
            [root@linux ~]# sum=100+300+50
            [root@linux ~]# echo $sum       #结果为：100+300+50
            [root@linux ~]# declare -i sum=100+300+50
            [root@linux ~]# echo $sum       #结果为：450

            示例2：生成随机数
            [root@linux ~]# declare -i number=$RANDOM*10/32767 ; echo $number

            方法2，var=$ (( expression ))
            [plain] view plaincopy在CODE上查看代码片派生到我的代码片
            foo=1
            foo=$(($foo+1))
            [plain] view plaincopy在CODE上查看代码片派生到我的代码片
            echo $ (( 13 % 3 ))

        输入与输出
            输入命令read
            [python] view plaincopy在CODE上查看代码片派生到我的代码片
            [root@linux ~]# read [-pt] variable
            参数:
            -p :后面可以接提示字符!
            -t :后面可以接等待的『秒数!』这个比较有趣~不会一直等待使用者啦!

            范例:提示使用者 30 秒内输入自己的大名,将该输入字符串做成 name 变量
            [python] view plaincopy在CODE上查看代码片派生到我的代码片
            [root@linux ~]# read -p "Please keyin your name: " -t 30 name
            Please keyin your name: VBird Tsai
            [root@linux ~]# echo $name
            VBird Tsai

tip:
    注意打印"*"的问题
    sql='select * from gexing;'
    echo  $sql  #其中的*会被替换成所有文件,这就相当于echo select * from table;
    echo "$sql" #这就相当于echo "select * from table"

    字符串连接
    names=$var_name1$var_name2   #注意，两个变量之间没有空格
    sentence=${names}"hello"     #直接连接



list open file == lsof
netstat



###################### ----------------------

清除 git 本地 文件所有记录
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch src/main/resources/config/application-test.yml' --prune-empty --tag-name-filter cat -- --all

强制更新远程所有同步
git push origin --force --all
git push origin --force --tags

清理本地 引用缓存
git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin
git reflog expire --expire=now --all
git gc --prune=now

git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin
###################### ----------------------
直接自动合并代码
grep --exclude-dir=node_modules -lr '<<<<<<<' . | xargs git checkout --theirs/ours


# proxy forwad by ssh
ssh -L 9221:localhost:9229 user@remote.example.com
