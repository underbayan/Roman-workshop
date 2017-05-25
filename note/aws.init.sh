sudo yum update -y
sudo yum install -y git
sudo yum install -y docker
sudo curl -L https://github.com/docker/compose/releases/download/1.4.2/docker-compose-Linux-x86_64 > /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo service docker start
sudo usermod -a -G docker ec2-user
docker pull mysql
echo Please enter mysql pwd
read MYSQL_PWD
docker run -p 3306:3306 --name drm_mysql_container -e MYSQL_ROOT_PASSWORD=$MYSQL_PWD -d mysql:latest
sudo yum install -y httpd24 php70 php70-mysqlnd
sudo service httpd start
sudo chkconfig httpd on
sudo groupadd www
sudo usermod -a -G www ec2-user
exit
groups
sudo chown -R root:www /var/www
sudo chmod 2775 /var/www
find /var/www -type d -exec sudo chmod 2775 {} \;
find /var/www -type f -exec sudo chmod 0664 {} \;
echo "<?php phpinfo(); ?>" > /var/www/html/phpinfo.php

#  docker pull for rocket chat