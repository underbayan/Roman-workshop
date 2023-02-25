//aperture 函数
Array.zip = arr => Array.from({
  length: Math.max(...arr.map(x => x.length))
}).map((_, i) => Array.from({
  length: arr.length
}, (_, k) => arr[k][i]))
Array.unzip = arr => arr.reduce(
  (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
  Array.from({
    length: Math.max(...arr.map(x => x.length))
  }).map(x => [])
)
Array.union = (a, b) => Array.from(new Set([...a, ...b]))
Array.unique = arr => [...new Set(arr)]
Array.range = n => Array.apply(null, Array(n)).map((x, i) => i);
Array.chunk = (arr, n) => Array.range(Math.ceil(arr.length / n)).map((x, i) => arr.slice(i * n, i * n + n))
Array.shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}
