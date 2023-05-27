fn main() {
    // 创建一个新的字符串
    let mut s = String::from("Hello, ");

    // 追加字符串
    s.push_str("world!");

    // 打印字符串
    println!("{}", s);

    // 获取字符串长度
    let len = s.len();
    println!("Length: {}", len);

    // 判断字符串是否为空
    if s.is_empty() {
        println!("String is empty");
    } else {
        println!("String is not empty");
    }

    // 检查字符串是否包含特定的子串
    if s.contains("world") {
        println!("String contains 'world'");
    } else {
        println!("String does not contain 'world'");
    }

    // 替换字符串中的内容
    let replaced = s.replace("world", "Rust");
    println!("Replaced string: {}", replaced);

    // 分割字符串为向量
    let split_vec: Vec<&str> = s.split(", ").collect();
    println!("Split vector: {:?}", split_vec);

    // 大写转换
    let uppercase = s.to_uppercase();
    println!("Uppercase: {}", uppercase);

    // 小写转换
    let lowercase = s.to_lowercase();
    println!("Lowercase: {}", lowercase);
}