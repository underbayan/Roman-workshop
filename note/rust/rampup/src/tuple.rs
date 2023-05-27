fn main() {
    // 定义一个包含两个元素的元组
    let person: (String, i32) = ("Alice".to_string(), 30);

    // 访问元组的元素
    let name = person.0;
    let age = person.1;

    println!("Name: {}", name);
    println!("Age: {}", age);

    // 解构元组
    let (name, age) = person;
    println!("Name: {}", name);
    println!("Age: {}", age);
}