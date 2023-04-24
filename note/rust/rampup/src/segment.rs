// Curry
fn add(a: i32) -> impl Fn(i32) -> i32 {
    move |b| a + b
}
//  let sum = add(1)(2);

fn add(a: i32) -> impl Fn(i32) -> i32 {
    move |b| add(a + b)
}

fn sum(args: &[i32]) -> i32 {
    args.iter().sum()
}

fn curry_sum(args: &[i32]) -> impl Fn(i32) -> i32 {
    move |x| {
        let mut new_args = args.to_vec();
        new_args.push(x);
        if new_args.len() == 10 {
            sum(&new_args)
        } else {
            curry_sum(&new_args)
        }
    }
}
// let result = curry_sum(&[])(1)(2)(3)(4)(5)(6)(7)(8)(9)(10);
fn main() {
    // 所有权 转移
    let s1 = String::from("hello");
    let s2 = s1; // it‘s move operation instead of assignment

    println!("{}, world!", s1); // Error, actually we should use s1.clone();
}
fn main() {
    let s = String::from("hello"); // s 进入作用域
    takes_ownership(s); // s 的值移动到函数里 ...
    println!("{}, world!", s); // Error, since s has lose its ownship of  "hello"
}
fn main() {
    let x: &str = "hello, world";
    let y = x; // since x is base type so it's stored in stack instead of heap, so this line is not an move operation, it's a copy operation.
    println!("{},{}", x, y); // success!!
}