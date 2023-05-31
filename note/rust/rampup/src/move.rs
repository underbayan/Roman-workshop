fn main() {
    let name = String::from("Alice");

    let greet = || {
        println!("Hello, {}!", name);
    };

    greet(); // Invoke the closure to print "Hello, Alice!"

    // Move ownership of 'name' into the closure
    let greet_move = move || {
        println!("Hello, {}!", name);
    };

    greet_move(); // Invoke the closure to print "Hello, Alice!"

    // Attempting to use 'name' here will result in a compilation error
    // because ownership has been moved into the closure
    // println!("Name: {}", name);
}

// In Rust, the move keyword is typically used to transfer ownership of all variables involved in a closure. It's a mechanism for bulk moving, transferring ownership of all captured variables to the closure.