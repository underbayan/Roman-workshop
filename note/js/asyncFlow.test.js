#!/usr/bin/env node
const a = require("./asyncFlow");
const $ = require("jquery");
const { chain, parallel } = a;
Array.range = function(n) {
  return Array.apply(null, Array(n)).map((x, i) => i);
};
Object.defineProperty(Array.prototype, "chunk", {
  value: function(n) {
    return Array.range(Math.ceil(this.length / n)).map((x, i) =>
      this.slice(i * n, i * n + n)
    );
  }
});

const taskItem = (value, data) =>
  new Promise((res, rej) => res(value + ~~data));

const taskList = Array.range(100).map(v => taskItem.bind(this, v));
/** 链式调用 得到 1-n 的和*/
chain.apply(this, taskList).then(_ => console.log("sum is :", _));
/** 平行触发 得到1-n 的list*/
parallel.apply(this, taskList).then(_ => console.log(_.toString()));
/** 混合使用 取最后一个并行的结果 */
chain
  .apply(
    this,
    taskList
      .chunk(10)
      .map(v =>
        parallel.apply(this, v).then(arr => arr.reduce((s, v) => s + v, 0))
      )
  )
  .then(_ => console.log("End is :", _));

const taskDeferred = (value, data) => {
  const r = $.Deferred();
  setTimeout(() => r.resolve(value + ~~data));
  return r;
};

const taskDeList = Array.range(100).map(v => taskDeferred.bind(this, v));
/** 链式调用 得到 1-n 的和*/
chain.apply(this, taskDeList).then(_ => console.log("sum is :", _));
/** 平行触发 得到1-n 的list*/
parallel.apply(this, taskDeList).then(_ => console.log(_.toString()));
/** 混合使用 取最后一个并行的结果 */
chain
  .apply(
    this,
    taskDeList
      .chunk(10)
      .map(v =>
        parallel.apply(this, v).then(arr => arr.reduce((s, v) => s + v, 0))
      )
  )
  .then(_ => console.log("End is :", _));

const taskAsyncFun = async (value, data) => {
  return await (value + ~~data);
};
const taskAsynList = Array.range(100).map(v => taskAsyncFun.bind(this, v));
/** 链式调用 得到 1-n 的和*/
chain.apply(this, taskAsynList).then(_ => console.log("sum is :", _));
/** 平行触发 得到1-n 的list*/
parallel.apply(this, taskAsynList).then(_ => console.log(_.toString()));
/** 混合使用 取最后一个并行的结果 */
chain
  .apply(
    this,
    taskAsynList
      .chunk(10)
      .map(v =>
        parallel.apply(this, v).then(arr => arr.reduce((s, v) => s + v, 0))
      )
  )
  .then(_ => console.log("End is :", _));
