# basic tips
````bash
#use agent to access the destination
ssh -L 9090:destination-host.com:8080 ssh-agent-host.com
````

#本地转发
* ssh hostname 是 ssh server，local 是 ssh client
````bash
ssh -L <local port>:<remote host>:<remote port> <SSH hostname>
````
#远程转发
* ssh hostname 是 ssh client，local 是 ssh server

````bash
ssh -R <local port>:<remote host>:<remote port> <SSH hostname>
````
#共享本地端口转发
````
ssh -g -L <local port>:<remote host>:<remote port> <SSH hostname>
````

###问题： 两个内网之间的linux 服务器怎么才能够相互登录呢？
* 把 两个linux 服务器的端口 都映射到 公共ip的主机的端口上，就可以通过端口来互联了。
###问题： 如果mysql限制了只有本地ip才可以访问服务器的数据库，那么我们应该怎么在远程连接mysql呢？
* 把机器的端口映射到服务器的某个端口，通过该端口访问数据库
