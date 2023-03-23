/** code */
// import { strict as assert } from "node:assert"
/* deepEqual */
// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
/* callsfunc() must be called exactly 1 time before tracker.verify(). */
// const tracker = new assert.CallTracker();
// function func() {}
// const callsfunc = tracker.calls(func, 2);
// callsfunc();
// tracker.verify();
// import { EventEmitter } from 'node:events';

/** Memory */
// weak map and weak set
// High performance queue or array (https://github.com/nodejs/node/blob/main/lib/internal/fixed_queue.js)
// Reuse memory of often created or destroyed objects. (https://github.com/nodejs/node/blob/main/lib/internal/freelist.js)

/** Security */
// We should freeze all prototype after polyfill https://github.com/nodejs/node/blob/main/lib/internal/freeze_intrinsics.js
// Use block list to forbid ip source range
// Use Symbol and Symbol.for to prevent any hack injection. https://overreacted.io/why-do-react-elements-have-typeof-property/
// <Item {...data}> is dangerous
// please directly using assert to validate arguments.



/**
 * Thread localstorage: AsyncLocalStorage VS request context？？ how to write a own AsyncLocalStorage??
 * cluster is for multiple CPU while worker is for task that is CPU intensive 
 * debounce for fetching: new AbortContorller => abortCtr.signal =>abortCtr.abort()
 * diagnostics_channel is a better choice when you want use console.log
 * We should consider dns cache while we use external api on nodejs(For any http request)
 * A tool to console table: https://github.com/nodejs/node/blob/main/lib/internal/cli_table.js
 * Circular references: Use lazy require to solve circular references
 * Default nodejs debug port is 9229, Remote debug or local debug code with chrome://inspect by node x.js --inspect.
 */