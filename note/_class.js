"use strict";

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


///////////////////////////////////////////////////////////////////////////////////////////////

// class p {} will tramsform to
var p = function p() {
  _classCallCheck(this, p);
};

///////////////////////////////////////////////////////////////////////////////////////////////
class p2 {
  constructor(i) {
    super(i)
  }

  property() {
  }
}
// equal to
var p2 = function () {
  function p2(i) {
    _classCallCheck(this, p2);
  }

  p2.prototype.property = function property() {};

  return p2;
}();
///////////////////////////////////////////////////////////////////////////////////////////////
class p3 {
  constructor(i) {
    this.hehe = i
  }

  set hehe(i) {
    this.hehe = i
  }

  get hehe() {
  }
}
var p3 = function () {
  function p3(i) {
    _classCallCheck(this, p3);

    this.hehe = i;
  }

  _createClass(p3, [{
    key: "hehe",
    set: function set(i) {
      this.hehe = i;
    },
    get: function get() {}
  }]);

  return p3;
}();
///////////////////////////////////////////////////////////////////////////////////////////////
