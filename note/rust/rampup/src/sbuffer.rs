use std::collections::HashMap;
struct FieldInfo {
    get: fn(&[u8], usize) -> u8,
    set: fn(&mut [u8], usize, u8),
    unit: usize,
    size: usize,
    offset: usize,
}

pub struct BufferStruct<'a> {
    fields: HashMap<&'a str, FieldInfo>,
    buffer: Vec<u8>,
}

// impl<'a> BufferStruct<'a> {
//     fn new(fields: &[(&'a str, &'a str, usize)]) -> Self {
//         let mut offset = 0;
//         let mut filed_map = HashMap::new();
//         let mut buffer = Vec::new();
//         for &(name, filed_type, size) in fields {
//             let field_info = match field_type {
//               "u8"
//             };
//         }
//     }
// }