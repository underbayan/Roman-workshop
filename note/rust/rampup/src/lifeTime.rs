fn get_field_name<'a>() -> &'a str {
    let field_name = "example";
    field_name
}

fn process_field_name(field_name: &str) {
    println!("Processing field name: {}", field_name);
}

fn store_field_name<'a>(field_name: &'a str) -> &'a str {
    let stored_name = field_name;
    stored_name
}

fn main() {
    let field_name = get_field_name();
    let stored_name = store_field_name(field_name);
    process_field_name(stored_name);
}