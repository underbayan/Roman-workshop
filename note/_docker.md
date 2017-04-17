#Basics
#### List images
docker images
#### list all contaierns
docker ps -a
#### Install new images
docker pull IMAGES_NAME
#### Stop running container
docker stop container_name
#### Start running container
docker start container_name
#### Run Image
docker run image_name
#### Remove the docker images
docker rmi images_name
#### Remove the docker container
docker rm container_name
#### Commit the container
docker commit test01 test02
#examples
#### Re-run from the commited image, specify port
docker run -p 8080:8080 -td test02
####Run mysql 
docker run -p 8080:8080 --name drm_mysql_container -e MYSQL_ROOT_PASSWORD=mysql_password -d mysql:latest
####Run wordpress
docker run --name wordpress --link sad_ardinghelli:mysql_password -d wordpress