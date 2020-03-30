dnf install epel-release
yum install -y git
yum install -y nodejs
yum -y install lrzsz
yum -y install screen 
sudo yum -y install openssl-devel


sudo yum -y install libevent
wget https://github.com/libevent/libevent/releases/download/release-2.1.11-stable/libevent-2.1.11-stable.tar.gz
tar -zxf libevent-2.1.11-stable.tar.gz
 cd  libevent-2.1.11-stable
 ./configure
 make
 
 cd ~
 git clone https://github.com/coturn/coturn.git
cd coturn
./configure --prefix=/home/work/turn-server
make 
make install
touch ~/.ssh/authorized_keys