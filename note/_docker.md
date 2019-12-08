#Basics
### List images
docker images
### list all contaierns
docker ps -a
### Install new images
docker pull IMAGES_NAME
### Stop running container
docker stop container_name
### Start running container
docker start container_name
### Run Image
docker run image_name
### Remove the docker images
docker rmi images_name
### Remove the docker container
docker rm container_name
### Commit the container
docker commit test01 test02
#examples
### Re-run from the commited image, specify port
docker run -p 8080:8080 -td test02
###Run mysql 
docker run -p 8080:8080 --name drm_mysql_container -e MYSQL_ROOT_PASSWORD=mysql_password -d mysql:latest
###Run wordpress
docker run --name wordpress --link sad_ardinghelli:mysql_password -d wordpress

### using container to run command
docker run -it -v "$PWD":/app -w /app images yarn test

### docker backup Script using aws ec2 container service 
```bash 
CONTAINER_ID=`docker ps -aqf "name=app"`
DATE=`date +%Y_%m_%d_%H_%M_%S`
aws ecr get-login --region us-east-1 |sh
IMAGES_ID=`docker images forum_backup_* -q`
if [ ! -z "$IMAGES_ID" ];then
	docker tag $IMAGES_ID awsIDUrl:backup
    docker push awsIDUrl:backup
    docker rmi -f $(docker images forum_backup_* -q)
fi
docker commit $CONTAINER_ID forum_backup_$DATE
docker tag $(docker images forum_backup_* -q) awsIDUrl:latest
docker push awsIDUrl:latest
```