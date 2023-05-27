fn main() {
    // 加法
    let sum = 5 + 10;
    println!("Sum: {}", sum);

    // 减法
    let difference = 20 - 5;
    println!("Difference: {}", difference);

    // 乘法
    let product = 4 * 5;
    println!("Product: {}", product);

    // 除法
    let quotient = 10 / 3;
    println!("Quotient: {}", quotient);

    // 取余
    let remainder = 10 % 3;
    println!("Remainder: {}", remainder);

    // 幂运算
    let power = i32::pow(2, 3);
    println!("Power: {}", power);

    // 浮点数运算
    let float_result = 3.14 * 2.0;
    println!("Float result: {}", float_result);

    // 比较运算
    let x = 5;
    let y = 10;
    println!("x < y: {}", x < y);
    println!("x > y: {}", x > y);
    println!("x <= y: {}", x <= y);
    println!("x >= y: {}", x >= y);
    println!("x == y: {}", x == y);
    println!("x != y: {}", x != y);

    // 数字类型转换
    let a: i32 = 42;
    let b: f64 = 3.14;
    let converted_a: f64 = a as f64;
    let converted_b: i32 = b as i32;
    println!("Converted a: {}", converted_a);
    println!("Converted b: {}", converted_b);

    // 数字运算方法
    let num = 5;
    let squared = num.pow(2);
    let abs_num = (-10).abs();
    println!("Squared: {}", squared);
    println!("Absolute value: {}", abs_num);
}