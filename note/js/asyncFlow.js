const toArray = args => Array.prototype.slice.call(args);
const IIFE = (any, data) => (typeof any === "function" ? any(data) : any);
/**
 * @description run async task parallelly
 * @example parallel(promise1,promise2,promise3,()=>promise4)
 * @return {Promise}
 *
 */
const parallel = function() {
  return new Promise((res, rej) => {
    const handle = (function(l) {
      let num = 0;
      const ret = [];
      return d => ret.push(d) && (++num < l ? res(ret) : "");
    })(arguments.length);
    toArray(arguments).map(v =>
      IIFE(v)
        .then(d => handle(d))
        .catch(d => rej(d))
    );
  });
};
/**
 * @description run async task one by one
 * @example chain(promise1,promise2,promise3,(fromPromise3)=>promise4)
 * @return {Promise}
 *
 */
const chain = function() {
  const args = toArray(arguments);
  return new Promise((res, rej) => {
    const aux = (step, data) =>
      IIFE(args[step], data)
        .then(d => (++step < args.length ? aux(step, d) : res(d)))
        .catch(d => rej(d));
    aux(0);
  });
};
exports.chain = chain;
exports.parallel = parallel;
