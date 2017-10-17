# 解压rar
for d in . ; do (cd "$d" && unrar x '*.rar' && rm -f '*.rar'); done
for d in ./*/ ; do (cd "$d" && unrar x '*.rar' && rm -f '*.rar'); done
# 解压chm
zero=''
for files in ./*/*.chm ; do (  extract_chmlib "$files" "${files/.chm/$zero}" && rm "$files"); done
#删除没有必要的文件
rm -rf ./**/*.rar
find . -name "*.hhc.*" -print0 | xargs -0  rm -rf
find . -name "*.hhk" -print0 | xargs -0  rm -rf
rm -rf ./**/*.left.ht*
# 编码转换
find "." -name "*.h*" -print0 | xargs -0 enca -L zh_CN -x UTF-8
# 简体和繁体转换
find . -name "*.htm*" -print0 | xargs -0 -I '{}' cconv -o '{}'.bak -f utf8 -t utf8-tw  '{}'
zero=''
find . -name "*.bak" -print0 | xargs -0 rename -f 's/\.bak$//'

##替换空格
#find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/\n|\r//g'
#find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/\s+/ /g'
#find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/\　+/ /g'

# 重命名
for d in ./*/*更多电子书籍 ; do (mv $d ${d/更多电子书籍/}); done

#找到没有index.html 的文件夹  todo:if ls *.c >/dev/null 2>&1;then
for d in ./*/*  -prune; do (
    if ls $d/index.htm* >/dev/null 2>&1;then
       echo 1 >/dev/null
    else
        ls $d
    fi
); done

#替换编码
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/charset=GB2312|charset=gb2312|charset=GBK|charset=gbk/charset=utf8/g'
find . -name "*.htm*" -print0 | xargs -0  grep -v "charset=utf8" -l | xargs -I '{}'  perl -pi -e 's/<\/head>/<meta http-equiv="Content-Type" content="text\/html; charset=utf8"><\/head>/gi'  "{}"
find . -name "*.htm*" -print0 | xargs -0  grep -v "charset=utf8" -l >text.txt
#转换为字体
find . -name "*.htm*" -print0 | xargs -0 -I '{}'  cconv -o '{}' -f utf-8 -t utf8-tw '{}'
# clear info
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/<!--[\s\S]*?-->//g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/□//g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/www.163164.com\/ebook.htm"/www.bookocean.online"/gi'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/www.163164.com/www.bookocean.online/gi'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/<a href="http:\/\/www.163164.com" target="_blank"><img src="yao123.gif" width="120" height="40" border=0><\/a>//gi'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/<script language=javascript src="http:\/\/www.163164.cn\/js\/xia.js"><\/script>//gi'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/163164/bookocean/g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/<\/body>/########include("js.html")<\/body>/gi'


#  generate the index.html
tree -d -L 1 -H ./ > ./index.html
for d in ./*/ ; do (cd "$d" && tree -d -L 1 -H . > ./index.html); done
# index format  and add own style
find . -name "index.html" -print0 | xargs -0  perl -pi -e 's/<a href="\.\/">\.\/<\/a><br>/<a href="\.\/">回到上级<\/a><br>/gi'
find . -name "index.html" -print0 | xargs -0  perl -pi -e 's/<\/a><br>/<\/a>/gi'
find . -name "index.html" -print0 | xargs -0  perl -pi -e 's/<a href="\.\//<a class="index_menu_link" href="\.\//gi'
find . -name "index.html" -print0 | xargs -0  perl -pi -e 's/\n|\r//g'


find . -name "index.html" -print0 | xargs -0  perl -pi -e 's/├──//gi'
find . -name "index.html" -print0 | xargs -0  perl -pi -e 's/└──//gi'
find . -name "index.html" -print0 | xargs -0  perl -pi -e 's/<\/head>/########include("css.html")<\/head>/gi'
find . -name "index.html" -print0 | xargs -0  perl -pi -e 's/<h1>Directory Tree<\/h1>//gi'

find . -name "index.html" -print0 | xargs -0  perl -pi -e 's/<p class="VERSION">[\s\S]*?<\/p>//gi'

#menu after body
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/<body(.*?)>/<body $1>########include("menu.html")/gi'


# com
find . -name "index.html" -print0 | xargs -0  perl -pi -e 's/<body(.*?)>/<body $1>########include("menu.html")/gi'

#</style>
#while read line; do
#    perl -pi -e 's/<\/head>/<meta http-equiv="Content-Type" content="text\/html; charset=utf8"><\/head>/gi'  $line
#done < text.txt
#
#fileList=$(find . -name "*.htm*" -print0 |xargs -0  grep -v "charset=utf8" -l )
#for f in $fileList
#do (
#    echo "$f"
#   ls "$f");
#done
#find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/3G时代的电子书网，格式最全！藏书量最大！//g'
#sed -i -ne '/<!-- BEGIN realm -->/ {p; r realm.xml' -e ':a; n; /<!-- END realm -->/ {p; b}; ba}; p' server.xml

#for d in ./*/* ; do (cd "$d" && echo $d); done

#FILES=$(find . -type f -name '*.htm*')
#for f in $FILES
#do
#        echo $f
#        echo $f,"______________________________________________"
#        perl -pi -e 's|\n||g' $f
#done
#
#
#
#find . -name '*.htm*' -print0 | xargs -0 -I '{}' sh -c "echo {}; perl -pi -e 's|\n||g' {}"
#find "." -name "*.htm*" -print0 | xargs -0 -I '{}' sed -i ':1;$!N;s/\n//;t1' {}
