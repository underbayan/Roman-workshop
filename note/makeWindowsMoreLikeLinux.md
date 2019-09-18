```bat
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
choco install -y wget
choco install -y curl
choco install -y cmder
choco install -y find
choco install -y git
choco install -y flux
choco install -y vim
choco install -y svn
choco install -y yarn
choco install -y make
choco install -y openssh
choco install -y inkscape
choco install -y dotnet3.5
choco install -y everything
choco install -y sourcetree
choco install -y libreoffice-fresh
choco install -y  ccleaner
choco install -y  golang
choco install -y  git-lfs
choco install -y  calibre
choco install -y  cygwin
choco install -y  vagrant
choco install -y  cmake
choco install -y  ruby
choco install -y  php
choco install -y  jre8
choco install -y  python3
choco install -y  python2
choco install -y  docker
choco install -y  docker-compose
choco install -y  docker-for-windows
choco install -y  redis-64
choco install -y  ffmpeg
choco install -y  mysql
choco install -y  phantomjs
choco install -y  nmap
choco install -y  tor-browser
choco install -y  mongodb
choco install -y  jenkins
choco install -y  autohotkey.portable
choco install -y  tortoisesvn
choco install -y  zeal
choco install -y virtualbox
choco install -y shadowsocks
choco install -y haskell-stack
choco install -y cabal
choco install -y rsync
choco install -y superbenchmarker
choco install -y jdk8 -params "both=true"
choco install -y bind-toolsonly
##--------------------- 下面可选
choco install -y carnac #键盘记录
choco install -y ScreenToGif #录屏
npm install -g windosu
refreshenv


# C:\tools\cmder\config\user-aliases.cmd

:: THIS IS USED IN THE CMDER config alias file.
;= @echo off
;= rem Call DOSKEY and use this file as the macrofile
;= %SystemRoot%\system32\doskey /listsize=1000 /macrofile=%0%
;= rem In batch mode, jump to the end of the file
;= goto:eof
;= Add aliases below here
e.=explorer .
gs=git status
gl=git log --oneline --all --graph --decorate  $*
ga=git add  $*
gcam= git diff --check &&  git commit -a -m $*
gca!= git diff --check && git commit -v -a --amend $*
gcp= git cherry-pick $*
gc=git checkout $*
gp=git pull
gr=git rebase -i $*
gm= git merge --no-ff $*
gpr=git pull --rebase
gfa=git fetch --all --prune
gfli=git flow init
gflfs=git flow feature start $*
gflff=git flow feature finish $*
gflrs=git flow release start $*
gflrf=git flow release finish $*
gflhs=git flow hotfix start $*
gflhf=git flow hotfix finish $*
gsss= git stash && git stash clear
ls=ls --show-control-chars -F --color $*
pwd=cd
clear=cls
~=cd "C:\Users\lomondai\"
history=cat "%CMDER_ROOT%\config\.history"
unalias=alias /d $1
vi=vim $*
cmderr=cd /d "%CMDER_ROOT%"
```
