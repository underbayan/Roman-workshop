const strDiff = require("./Levenshtein")

// TODO assert
console.table(strDiff("1", "12", 2))//1
console.table(strDiff("12", "1_2", 2))//1
console.table(strDiff("1_2", "1#2", 2))//2
console.table(strDiff("121", "21212", 2)) //2
console.table(strDiff("___1", "1", 2))//3
console.table(strDiff("1_2_3", "1#2#3", 2))//4
console.table(strDiff("123_1234567", "1234567", 2))//4
console.table(strDiff("aa____bb", "cc____db", 2)) //6



console.table(strDiff("1", "12", 1))
console.table(strDiff("12", "1_2", 1))
console.table(strDiff("1_2", "1#2", 1))
console.table(strDiff("121", "21212", 1))
console.table(strDiff("___1", "1", 1))
console.table(strDiff("1_2_3", "1#2#3", 1))
console.table(strDiff("123_1234567", "1234567", 1))
console.table(strDiff("aa____bb", "cc____db", 1))  