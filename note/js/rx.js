#!/usr/bin/env node
'use strict'
var Rx = require('rxjs/Rx');
console.log('============================================================')
console.log('=                         RXJS                             =')
console.log('============================================================')
console.log("rxjs Demo")
function f() {
    return Rx.Observable.from(arguments);
}
Rx.Observable.from([1,2,3,4]).subscribe((x) =>console.log('from-next: ' + x))
Rx.Observable.from(new Map([['key1', 1], ['key2', 2]])).subscribe((x) =>console.log('from-next: ' + x))
Rx.Observable.from(new Set([1,2,3,4,5])).subscribe((x) =>console.log('from-next: ' + x))

Rx.Observable.of(4,5,6,7).subscribe((x) =>console.log('of-next: ' + x))
Rx.Observable.timer(200, 100).timeInterval().pluck('interval').take(3).subscribe(x => console.log(x))
Rx.Observable.timer(500, 100).timestamp().subscribe(x => console.log(x.value + ': ' + x.timestamp))
