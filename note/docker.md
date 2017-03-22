
#Change the port of docker
* stop running container

docker stop test01

* commit the container

docker commit test01 test02

* NOTE: The above, test02 is a new image that I'm constructing from the test01 container.

* re-run from the commited image

docker run -p 8080:8080 -td test02

#Run mysql 

docker run -p 8080:8080 --name drm_mysql_container -e MYSQL_ROOT_PASSWORD=drm_mysql -d mysql:latest
