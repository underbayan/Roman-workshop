// explicit
// http://blog.csdn.net/wangkai_123456/article/details/75045187

// 类型
// ````
// //
// 整型	int	int	16位     	-32768至+32767
// 无符号整型	unsigned int 	unsigned	16位	0 至 65,535
// 短整型	short int 	short	16位	-32768至+32767
// 无符号短整型     	unsigned short int    	unsigned short	16位	0 至 65,535
// 长整型	long int 	long	32位	-2,147,483,648 至 2,147,483,647

// 无符号长整型     	unsigned long int     	unsigned long        	32位      	0至4,294,967,295
// typedef unsigned char        uint8_t;
// typedef unsigned short int   uint16_t;
// typedef unsigned int         uint32_t;
// #if __WORDSIZE == 64
// typedef unsigned long int    uint64_t;
// #else
// __extension__
// typedef unsigned long long int  uint64_t;
// #endif

// ````

// 重载操作符()
// ```
// class background_task
// {
// public:
//   void operator()() const
//   {
//     do_something();
//     do_something_else();
//   }
// };
// background_task f;
// std::thread my_thread(f);
// ```

// lambda 函数
// ```
// [](int i){std::cout<<i<<"\n";}
// ```
// 函数变量- 有生命周期和作用域的函数
// ```
// auto func1 = [=] (long b) {
//   return a + b;
// };
// ```
// 运行时的线程
// ```
// join 使得线程中 的闭包更安全?
// detch 使得线程和当前线程无关。

// // pass params
// void f(int i, std::string const& s);
// std::thread t(f, 3, "hello");
// //拷贝传递,
// std::thread t(update_data_for_widget,w,data);
// //引用传递 避免盲目构造函数
// std::thread t(update_data_for_widget,w,std::ref(data));
// ```
// fcntl: 可以将文件io 变成非阻塞

