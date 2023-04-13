- 水仙花数:153= 1^3+5^3+3^3
- 韩信点兵:中国余数定理
- 开灯问题 1-10000 灯 k 个人，第 i 个人每 i 盏等操作一次，求灯状态。
- 判断俩个链表是否相交 ===两个链表有没有共同终点

 给你 10 分钟时间，根据上排给出十个数，在其下排填出对应的十个数,要求下排每个数都是先前上排那十个数在下排出现的次数。
```
举一个例子，
数值:0,1,2,3,4,5,6,7,8,9
分配:6,2,1,0,0,0,1,0,0,0
1）下排n个数的累加和为n，即b[0]+b[1]+...+b[n-1] = n
2）ai*bi的累加和也为n，即a[0]*b[0]+a[1]*b[1]+...+a[n-1]*b[n-1] = n
3）对于b中任意一个元素b[j], 都存在i，a[i] = b[j].
4）对于b中任意一个元素b[j],都有b[j] >= 0
5）如果a中存在负数。其在b中出现的次数一定为0. 如果a中数值大于n，则其出现次数也为0.
6）a中至少有两个非0数值在b中出现的次数非0
```



有两个房间，一间房里有三盏灯，另一间房有控制着三盏灯的三个开关，这两个房间是 分割开的，从一间里不能看到另一间的情况。 现在要求受训者分别进这两房间一次，然后判断出这三盏灯分别是由哪个开关控制的。
````
````
你让一些人为你工作了七天，你要用一根金条作为报酬。金条被分成七小块，每天给出一块。如果你只能将金条切割两次，你怎样分给这些工人?
````
````
输入一颗二元树，从上往下按层打印树的每个结点，同一层中按照从左往右的顺序打印。

在一个字符串中找到第一个只出现一次的字符。如输入 abaccdeff，则输出 b。

一亿个数字里面找到 最大的 1w 的数字

一亿个用户数 积分排名，要求实时性 === 桶排序？？

网络流问题 == 残留网络+增广路径+最小流割 [link]http://mindlee.com/2011/11/19/network-flow/

如何让 cpu 的占有率 保持一个曲线, 锯齿状？ 一条直线？ 正弦曲线

```
1、电脑的cpu 频率 ，cpu 每一个时间周期 执行的代码数量？ 循环 n次，利用sleep函数。
2、getTickCount 获取 现在执行了多少个tick, 每n 个 tick 我们 都是sleep(n)
3、performanceCounter 获取使用率
```

将帅问题

```
抽象棋盘为数组。
抽象将帅不能够同列为 对3 取mod 模的值不能相同。
搜索过程 抽象为对81钟可能的遍历。
```

摞烙饼问题

```
最简单的递归方法：
    设问题为 fn
    找出最大的饼，翻转两次 可以使得问题为fn-1


动态规划问题
    把烙饼描述为元素，一堆烙饼描述成一个集合。
    过程P：
        把烙饼分成AB两部分，对于AB 来说 A的所有元素都比B中的要大，或者都要小。
        置换AB
    递归执行P 过程
```

给你一个数组 如何找到一个分割这个数组为 AB 首尾两部分，使得中的元素(ai-bj)\*(ak-bm)>0
```
```

算法的问题分析
```
每个阶段只有一个状态->递推；
每个阶段的最优状态都是由上一个阶段的最优状态得到的->贪心；
每个阶段的最优状态是由之前所有阶段的状态的组合得到的->搜索；
每个阶段的最优状态可以从之前某个阶段的某个或某些状态直接得到而不管之前这个状态是如何得到的->动态规划。
```
判断一个数是不是素数，算法复杂度是 o1,费马判定,Carmichael,Miller-Rabin ,!!AKS
```
old: 埃拉托斯特尼筛法
aks: http://yves.gallot.pagesperso-orange.fr/src/
https://github.com/tingliu/aks-primality-test/blob/master/aks.c
https://www.codeproject.com/Articles/691200/Primality-test-algorithms-Prime-test-The-fastest-w
http://www.geeksforgeeks.org/primality-test-set-3-miller-rabin/
aks 复杂度：http://mathworld.wolfram.com/AKSPrimalityTest.html
```
编辑距离: 动态规划： 复杂度 O(M\*N)
````
````
编码
```
URL_ENCODE的过程就是把URL作为字符按照某种编码方式(GBK, UTF-8等)编码成二进制的字节码
base64 字符串转为二进制,而后每6个比特（2^6）一个字符, 它防止了 每一个路由对特殊字符的过滤。
bech32= base32+ bch
base32  没有大小写之分,同时适合二维码
`
```

拜占庭将军问题
````
````
如何找到一个中位数量，如何找到一个众数. 什么是绝对众数 ，什么是普通众数， 各自算法复杂度是多少？

```
定义：给定N个数，出现次数最多的数为众数，若某众数出现次数大于N/2，则称其为绝对众数

绝对众数： 时间复杂度为on 空间复杂度为 o1，直接计数比较
普通众数： 时间复杂度为on 空间复杂度为 on，hash技术比较
其他思考：
1、普通众数还可以通过快速排序的方式
2、逐渐缩小众数的出现的次数来寻找众数，那么她的算法复杂度和众数出现的次数有关。
例如：一个数组长度为n，如果众数出现次数大于n/2， 这个众数为绝对众数，第一次快速排序后，就可以得到众数，复杂度为on
如果出现次数大于n/4，小于n/2，那么在快速排序中，那么在第二层级排序中就可以得出，算法复杂度为，o2n
```
数组中是否存在重复元素
```
一边快速排序，一边比较是否重复，o(nlogn）
```
荷兰国旗问题
```
红色为0 ，白色为1， 蓝色为2. 然后使用快速排序即可
```
矩阵相乘
```
复杂度为n^2.3737
分治，把矩阵分解为不同的大小的区块
```
寻找公共父节点
```javascript
// if node include A then thisNode.flag = 1
// if node include B then thisNode.flag = 2
// if node include A and B then thisNode.flag = 3
// find the deepest node when its flag is 3
let fv = (o, v1, v2) => {
  if (!o) return 0
  let flag = o.value === v1 ? 1 : o.value === v2 ? 2 : 0
  o.flag = fv(o.left, v1, v2) | fv(o.right, v1, v2) | flag
  return o.flag
}
```

一张纸撕成了 50 片 ，怎么把他们恢复过来？
````
````
Sattolo's algorithm 萨托洛算法 https://danluu.com/sattolo/ 部分解决方案是执行一系列指针访问，这些指针访问将以伪随机顺序绕过内存块。萨托洛的算法为此提供了一个解决方案
def shuffle(a):
    n = len(a)
    for i in range(n - 1):  # i from 0 to n-2, inclusive.
        j = random.randrange(i, n)  # j from i to n-1, inclusive.
        a[i], a[j] = a[j], a[i]  # swap a[i] and a[j].

Reservoir Sampling
````
````
有一栋100层的大楼，该种玻璃杯从某一层楼扔下，刚好会碎。   现给你两个杯子，问怎样检测出这个杯子的质量，即找到在哪一层楼刚好会碎？
````
````

#### LRU
- DualLinkedHashMap
- LRU2: Two queue, LRU2 is best of LRUK.
- 2Q: FIFO + LRU1
- MQ: M * LRU1
- LRU of redis ?? (Random remove sample items by timeStamp)

#### Dijkstra 
#### FLOYD

#### Consistent Hashing
- balance Monotonicity Spread


#### 回溯法1 https://leetcode.cn/problems/combinations/description/
#### 回溯法2 https://leetcode.cn/problems/combination-sum/submissions/418514513/

- Boyer–Moore majority vote algorithm  众数推广