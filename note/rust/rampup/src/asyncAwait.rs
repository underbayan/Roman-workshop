use tokio::runtime::Runtime;

async fn process_item(item: i32) {
    println!("Processing item: {}", item);
}
async fn process_data(data: Vec<i32>) {
    for item in data {
        process_item(item).await;
    }
}

fn main() {
    let rt = Runtime::new().unwrap();
    rt.block_on(async {
        greet().await;
        let data = vec![1, 2, 3, 4, 5];
        process_data(data).await;
    });
}