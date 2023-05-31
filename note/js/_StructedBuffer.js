class BufferStruct {
    constructor(fields) {
        let offset = 0;
        this.fields = Object.freeze(new Map(fields.map(({ name, type, size = 1 }) => {
            const fieldType = BufferStruct.fieldTypeMap.get(type);
            if (!fieldType) throw new Error("invalid field type of Buffer struct");
            const fieldInfo = Object.assign({}, fieldType, { type, size, offset });
            offset += fieldType.unit * size;
            return [name, Object.freeze(fieldInfo)];
        })));
        this.buffer = Buffer.alloc(offset);
    }
    getFieldInfo(fieldName) {
        const fieldInfo = this.fields.get(fieldName);
        if (!fieldInfo) throw new Error(`Field '${fieldName}' does not exist`);
        return fieldInfo;
    }
    get(fieldName, index = 0) {
        const { get: getter, offset, unit } = this.getFieldInfo(fieldName);
        return this.buffer[getter](offset + index * unit);
    }
    set(fieldName, value, index = 0) {
        const { set: setter, offset, unit } = this.getFieldInfo(fieldName);
        this.buffer[setter](value, offset + index * unit);
    }
    from(obj) {
        for (const fieldName of this.fields.keys()) {
            const fieldInfo = this.getFieldInfo(fieldName);
            const value = obj[fieldName];
            if (Array.isArray(value) && fieldInfo.size > 1) {
                for (let j = 0; j < fieldInfo.size; j++) {
                    const { name } = fieldInfo;
                    const index = j;
                    this.buffer[fieldInfo.set](value[j], fieldInfo.offset + index * fieldInfo.unit);
                }
            } else {
                const { name } = fieldInfo;
                this.buffer[fieldInfo.set](value, fieldInfo.offset);
            }
        }
    }
    toJson() {
        const obj = {};
        for (const [fieldName, fieldInfo] of this.fields.entries()) {
            if (fieldInfo.size > 1) {
                const arr = Array.from({ length: fieldInfo.size }, (_, j) =>
                    this.buffer[fieldInfo.get](fieldInfo.offset + j * fieldInfo.unit)
                );
                obj[fieldName] = arr;
            } else {
                obj[fieldName] = this.buffer[fieldInfo.get](fieldInfo.offset);
            }
        }
        return obj;
    }
    clear() {
        this.buffer.fill(0)
    }
}


BufferStruct.fieldTypeMap = new Map([
    ['int8', { get: "readInt8", set: "writeInt8", unit: 1 }],
    ['uint8', { get: "readUInt8", set: "writeUInt8", unit: 1 }],
    ['int16', { get: "readInt16LE", set: "writeInt16LE", unit: 2 }],
    ['uint16', { get: "readUInt16LE", set: "writeUInt16LE", unit: 2 }],
    ['int32', { get: "readInt32LE", set: "writeInt32LE", unit: 4 }],
    ['uint32', { get: "readUInt32LE", set: "writeUInt32LE", unit: 4 }],
    ['float', { get: "readFloatLE", set: "writeFloatLE", unit: 4 }],
    ['double', { get: "readDoubleLE", set: "writeDoubleLE", unit: 8 }],
]);
exports.BufferStruct = BufferStruct;

// const bf = new BufferStruct([{ type: 'uint8', size: 3, name: "a8" }, { type: 'int32', size: 2, name: "a10" }, { type: 'float', name: "f64" }])
// bf.from({ a8: [15, 15, 15], a10: [1, 1], f64: 1 })
// console.log(bf.buffer)

// Array(3).fill(0).map((_, i) => i).map(r => bf.set("a8", 1, r))
// Array(2).fill(0).map((_, i) => i).map(r => bf.set("a10", 15, r))

// bf.set("f64", 15)
// console.log(bf.buffer)

// console.log(bf.toJson())
// bf.clear()
// console.log(bf.toJson())


