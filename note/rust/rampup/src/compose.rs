
/**
 * F represents the type of the function and R represents the type of result
 * where keyword is used to add additonal type constraints or bounds to generic functions of types.
 * I recall that typescirpt uses 'infer' keyword to do that, since TS relies  more on gradual type inference while Rust opts for explicit type bounds.
 *  TS is with less explicitness and flexible type level computations while RS is more readable and clarified, predictable.
 * Move will transfer owership of all variables in closure
 * By default closures capture variables by borrowing which means they can access immutable references to external vaiables.
 */
fn compose<F, R>(functions: &[F]) -> impl (Fn(R) -> R) + '_ where F: Fn(R) -> R {
    move |x| {
        let mut result = x;
        for f in functions.iter().rev() {
            result = f(result);
        }
        result
    }
}

// fn add_one(x: i32) -> i32 {
//     x + 1
// }

// fn multiply_by_two(x: i32) -> i32 {
//     x * 2
// }

// fn subtract_three(x: i32) -> i32 {
//     x - 3
// }

// fn main() {
//     let functions = [add_one, multiply_by_two, subtract_three];
//     let composed_function = compose(&functions);
//     let result = composed_function(5);
//     println!("Result: {}", result);
// }