async function asyncOne() {
  console.log('async start')
  await asyncTwo()
  console.log('async1 end')
  return 'async return '
}

async function asyncTwo() {
  console.log('async--')
}
console.log('script start ')
asyncOne().then(function(m) {
  console.log(m)
})
new Promise(function(r) {
  console.log('promise1')
  r()
}).then(function() {
  let i = 0,
    j = 1
  while (i++ < 300000) {
    ;/ppp?.+t/.test('ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppddd')
  }
  console.log('promise2')
})
console.log('script end')
setTimeout(function() {
  console.log('setTimeout')
}, 0)
