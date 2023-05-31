sudo su -
yum update -y
yum install python34-setuptools
easy_install-3.4 pip
sudo yum groupinstall 'Development Tools'
yum install -y git
yum install -y docker
curl -L https://github.com/docker/compose/releases/download/1.4.2/docker-compose-Linux-x86_64 > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
service docker start
usermod -a -G docker ec2-user
docker pull mysql
echo Please enter mysql pwd
read MYSQL_PWD
docker run -p 3306:3306 --name drm_mysql_container -e MYSQL_ROOT_PASSWORD=$MYSQL_PWD -d mysql:latest
yum install -y httpd24 php70 php70-mysqlnd
service httpd start
chkconfig httpd on
groupadd www
usermod -a -G www ec2-user
exit
groups
chown -R root:www /var/www
chmod 2775 /var/www

find /var/www -type d -exec chmod 2775 {} \;
find /var/www -type f -exec chmod 0664 {} \;
echo "<?php phpinfo(); ?>" > /var/www/html/phpinfo.php

# 会话管理
yum install screen

#auto restart node
npm install supervisor -g
#  docker pull for rocket chat

#npm forever run
npm install forever -g

#spider
#pip3 install magneticod --user
#export PATH=$PATH:~/.local/bin

firewall-cmd --zone=dmz --add-service=smtp --permanent
firewall-cmd --zone=dmz --add-service=smtps --permanent
firewall-cmd --zone=dmz --add-service=imap --permanent
firewall-cmd --zone=dmz --add-service=imaps --permanent
firewall-cmd --zone=dmz --add-service=pop3 --permanent
firewall-cmd --zone=dmz --add-service=pop3s --permanent
firewall-cmd --remove-service=ssh --permanent
firewall-cmd --add-port=7022/tcp --permanent
firewall-cmd --reload
