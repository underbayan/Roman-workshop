(function __heapTest() {
    let as = console.assert
    let Heap = require('./Heap')
    let num = 100
    while (num--) {
        let minHeap = new Heap(undefined, (i1, i2) => i1 < i2)
        for (let i = 20; i; i--) {
            minHeap.push((Math.random() * 100 % 30))
        }
        minHeap.data.map((o, i) => {
            let parent = minHeap.data[minHeap.parent(i)]
            let current = minHeap.data[i]
            if (i > 0) as(!minHeap.compare(current, parent))
        })
        let maxHeap = new Heap(undefined, (i1, i2) => { return i1 > i2 })
        for (let i = 20; i; i--) {
            maxHeap.push(Math.random() * 100 % 30)
        }
        maxHeap.data.map((o, i) => {
            let parent = maxHeap.data[maxHeap.parent(i)]
            let current = maxHeap.data[i]
            if (i > 0) as(!maxHeap.compare(current, parent))
        })
    }
    num = 100
    while (num--) {
        let minHeap = new Heap(undefined, (i1, i2) => i1 < i2)
        for (let i = 20; i; i--) {
            minHeap.push((Math.random() * 100 % 30))
        }
        for (let i = 20; i; i--) {
            minHeap.shift()
            minHeap.data.map((o, i) => {
                let parent = minHeap.data[minHeap.parent(i)]
                let current = minHeap.data[i]
                if (i > 0) as(!minHeap.compare(current, parent))
            })
        }

        let maxHeap = new Heap(undefined, (i1, i2) => { return i1 > i2 })
        for (let i = 20; i; i--) {
            maxHeap.push(Math.random() * 100 % 30)
        }
        for (let i = 20; i; i--) {
            maxHeap.shift()
            maxHeap.data.map((o, i) => {
                let parent = maxHeap.data[maxHeap.parent(i)]
                let current = maxHeap.data[i]
                if (i > 0) as(!maxHeap.compare(current, parent))
            })
        }
    }
    num = 100
    while (num--) {
        let minHeap = new Heap(undefined, (i1, i2) => i1.t < i2.t)
        for (let i = 20; i; i--) {
            minHeap.push({ t: (Math.random() * 100 % 30) })
        }
        for (let i = 20; i; i--) {
            minHeap.shift()
            minHeap.data.map((o, i) => {
                let parent = minHeap.data[minHeap.parent(i)]
                let current = minHeap.data[i]
                if (i > 0) as(!minHeap.compare(current, parent))
            })
        }

        let maxHeap = new Heap(undefined, (i1, i2) => { return i1.t > i2.t })
        for (let i = 20; i; i--) {
            maxHeap.push({ t: (Math.random() * 100 % 30) })
        }
        for (let i = 20; i; i--) {
            maxHeap.shift()
            maxHeap.data.map((o, i) => {
                let parent = maxHeap.data[maxHeap.parent(i)]
                let current = maxHeap.data[i]
                if (i > 0) as(!maxHeap.compare(current, parent))
            })
        }
    }
})()