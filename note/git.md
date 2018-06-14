git--世界上最先进的分布式版本控制系统

### config the git

    git config --global user.name "John Doe" $ git config --global user.email johndoe@example.com

### remove the whole git project

    rm -rf .git

### new git project

    git init

### add all files to git cache except the files in .gitignore

    git add *

git commit -m 'commit'

### get the project from remote

git clone git://github.com/schacon/grit.git [newname]

### git merge --no-ff

git status

git diff

git rm --cached -r filename

git mv a b

git commit --amend

git remote add shortname

git pull

git push

git rebase newbranch1

git checkout newbranch1

git push origin :newbranch1 //delete remote branch1
git branch -d the_local_branch //delete local branch
git push origin branch-name --force 来强制覆盖

git tag -d <tagname>
git push origin :refs/tags/<tagname>

### revert from the server

        git fetch --all
        git reset --hard origin/master
        git clean -f -d

### remove the cache in git commit

        git  rm --cache -r filename(directoryName)

### remove the remote branch

        git  remote rm branchName

###

# zch git plugin
