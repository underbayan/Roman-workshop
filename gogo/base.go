package main

import "fmt"
import "math"
import "math/rand"
import "runtime"
import "strings"
func add(x int,y int) int{
	return x + y
}
func swap(x,y string)(string,string){
	return y,x
}
//命名返回
func split(sum int)(x,y int){
	x= sum+1
	y=sum -1
	return 
}
//变量初始化

func main (){
	defer fmt.Println("Last call1...")
	defer fmt.Println("Last call2...")
	// var i,j int =1,2
	// var a,b,c string= "A","B","C"
	// t:="T" // 类型推导只发生在函数里面
	//var c, python, java = true, false, "no!"
	fmt.Println("Rand number is", rand.Intn(10))
	fmt.Println("Sqrt number is", math.Sqrt(10))
	fmt.Println("Pi number is",math.Pi)
	fmt.Println("add(42, 13) is",add(42, 13))
	a,b:= swap("first","last")
	fmt.Println("first,last reverse: ",a,b)
	fmt.Println(split(1))
	// go 的基本类型：
	// bool string, init initn ,uint,uintn,float32,float64,complex64,complex128.(byte,rune)
	// go 语言需要 显示转化：
	// var i int = 42
	// var f float64 = float64(i)
	// var u uint = uint(f)
	// const 可以使 字符，字符串，数字，布尔，一个没有指定类型的常量，会由上下文来决定其类型。
	fmt.Println("Loop: ")
	for i:=0;i<10;i++{
		fmt.Print(i)
	}
	j:=10
	for j>0{
		if(j<5){
			fmt.Print(j)
		}
		j=j-1
	}
	//switch 
		fmt.Println("\n")
	switch os:=runtime.GOOS; os{
		case "linux":
			fmt.Println("Linux.")
		case "darwin":
			fmt.Println("OS X")
		default: 
			fmt.Println(os)
	}
	//指针： 和c的一样
	// struct
	type Vertex struct {
			X int
			Y int
		}
	fmt.Println(Vertex{1, 2})
	v := Vertex{1, 2}
	v.X = 4
	fmt.Println(v.X)
	//如果我们有一个指向结构体的指针 p，那么可以通过 (*p).X 来访问其字段 X。不过这么写太啰嗦了，所以语言也允许我们使用隐式间接引用，直接写 p.X 就可以。
	
	// 数组 
	primes := [6]int{2, 3, 5, 7, 11, 13}
	var astring [2]string
	astring[0] = "Hello"
	astring[1] = "World"
	fmt.Println(astring)
	fmt.Println(primes[1:3])
	fmt.Println(primes[2:])
	
	fmt.Println([]struct {
		i int
		b bool
	}{
		{2, true},
		{3, false},
		{5, true},
		{7, true},
		{11, false},
		{13, true},
	})
	// cap 和len 区别
	
	//nil
	var s []int
	fmt.Println(s, len(s), cap(s))
	// make([]int, 5)  like new
	
		board := [][]string{
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
	}
	// 二维数组
	// 两个玩家轮流打上 X 和 O
	board[0][0] = "X"
	board[2][2] = "O"
	board[1][2] = "X"
	board[1][0] = "O"
	board[0][2] = "X"

	for i := 0; i < len(board); i++ {
		fmt.Printf("%s\n", strings.Join(board[i], " "))
	}
}