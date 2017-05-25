
# 解压rar
for d in ./*/ ; do (cd "$d" && unrar x '*.rar' && rm -f '*.rar'); done
# 解压chm
zero=''
for files in ./*/*.chm ; do (  extract_chmlib "$files" "${files/.chm/$zero}" && rm "$files"); done
# 编码转换
find "." -name "*.htm*" -print0 | xargs -0 enca -x utf-8
find "." -name "*.hhk" -print0 | xargs -0 enca -x utf-8
find "." -name "*.hhc" -print0 | xargs -0 enca -x utf-8
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
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's|charset=GB2312|charset=utf8|g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's|charset=gb2312|charset=utf8|g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's|charset=GBK|charset=utf8|g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's|charset=gbk|charset=utf8|g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's|\n||g'
#替换空格
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/\n|\r//g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/\s+/ /g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/\　+/ /g'

#  generate the index.html
cd extmp && tree -d -L 1 -H ./ > ./index.html
for d in ./*/ ; do (cd "$d" && tree -d -L 1 -H ./ > ./index.html); done



# clear info
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/<script language=javascript src="http:\/\/www.163164.cn\/js\/xia.js"><\/script>//g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/163164电子书网-/bookocean-/g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/<a href="http:\/\/www.163164.com" target="_blank"><img src="yao123.gif" width="120" height="40" border=0><\/a>//g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/href="http:\/\/www.163164.com\/ebook.htm"/href="http:\/\/www.bookocean.online"/g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/163164/bookocean/g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/□//g'
find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/www.1<!--<Cdc-->63１<!--<bookocean-->６<!--<y1sCC4cc-->４.c<!--<ys3-->o<!--<Dfsc-->m/www.bookoceanline/g'
find . -name "*.htm*" -print0 | xargs -0  grep -v "charset=utf8" -l | xargs -I '{}'  perl -pi -e 's/<\/head>/<meta http-equiv="Content-Type" content="text\/html; charset=utf8"><\/head>/gi'  "{}"
find . -name "*.htm*" -print0 | xargs -0  grep -v "charset=utf8" -l >text.txt

find . -name "*.htm*" -print0 | xargs -0  perl -pi -e 's/<\/body>/@@include("\/commonHtml\/js.html")/gi'

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
