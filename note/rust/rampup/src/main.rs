fn greet_world() {
    let regions = ["世界你好", "hello world"];
    for region in regions.iter() {
        println!("{}", &region);
    }
    for i in 1..=5 {
        println!("{}", i);
    }
}

fn print_table() {
    let penguin_data = "\
    name,length
    little_penguin,33
    yellow_eyed_penguin,65
    invalid,data
    ";
    let records = penguin_data.lines();
    for (i, record) in records.enumerate() {
        if i == 0 || record.trim().len() == 0 {
            continue;
        }
        let fields: Vec<_> = record.split(",").map(|field| field.trim()).collect();
        if cfg!(debug_assertions) {
            eprintln!("debug: {:?} -> {:?}", record, fields);
        }
        let name = fields[0];
        if let Ok(length) = fields[1].parse::<f32>() {
            println!("{}, {}cm", name, length);
        }
    }
}

// for item in collection	for item in IntoIterator::into_iter(collection)	转移所有权
// for item in &collection	for item in collection.iter()	不可变借用
// for item in &mut collection	for item in collection.iter_mut()	可变借用
fn cal() {
    let a = 10;
    let b = 12i32;
    fn add(i: i32, j: i32) -> i32 {
        return i + j;
    }
    println!("add ab ab, {}", add(add(a, b), add(a, b)));
}

fn string2name() {
    let names = [String::from("liming"), String::from("hanmeimei")];
    for _name in &names {
        // do something with name...
    }

    println!("{:?}", names);

    let numbers = [1, 2, 3];
    // numbers中的元素实现了 Copy，因此无需转移所有权
    for _n in numbers {
        // do something with name...
    }

    println!("{:?}", numbers);
}
enum Direction {
    East,
    West,
    North,
    South,
}

fn direction_print() {
    let dire = Direction::South;
    match dire {
        Direction::East => println!("East"),
        Direction::North | Direction::South => {
            println!("South or North");
        }
        _ => println!("West"),
    };
}
fn main() {
    greet_world();
    print_table();
    cal();
    string2name();
    direction_print();
}
