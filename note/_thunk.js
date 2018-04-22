// In computer programming,
// a thunk is a subroutine used to inject an additional calculation into another subroutine.
// Thunks are primarily used to delay a calculation until its result is needed,
// or to insert operations at the beginning or end of the other subroutine.
;(function (root, factory) {
  'use strict'
  if (typeof Promise !== 'function') throw new Error('Promise required')
  if (typeof module === 'object' && module.exports) module.exports = factory()
  else if (typeof define ==='function' && define.amd) define([],factory)
  else root.thunks =factory()
}(
  typeof window ==='object'?window:this, function(){
    'use strict'
    var maxTickDepth =100

  }
))
