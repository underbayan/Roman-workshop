// 定义一个普通函数
fn add(a: i32, b: i32) -> i32 {
    a + b
}

// 定义一个函数，接受一个函数引用作为参数
fn apply_operation(a: i32, b: i32, operation: fn(i32, i32) -> i32) -> i32 {
    operation(a, b)
}

fn main() {
    // 调用普通函数
    let result = add(5, 10);
    println!("Result: {}", result);

    // 函数引用
    let add_ref: fn(i32, i32) -> i32 = add;
    let result_ref = add_ref(3, 7);
    println!("Result (Function Reference): {}", result_ref);

    // 匿名函数
    let multiply = |a, b| a * b;
    let result_anonymous = multiply(4, 6);
    println!("Result (Anonymous Function): {}", result_anonymous);

    // 高阶函数
    let operation = add;
    let result_higher_order = apply_operation(2, 8, operation);
    println!("Result (Higher-Order Function): {}", result_higher_order);
}