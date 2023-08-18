Function.prototype.MyBind = function (thisArg, ...arg) {
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window
  thisArg.fn = this
  // const res = thisArg.fn(...arg)
  return function (...arg2) {
    const res = thisArg.fn(...arg, ...arg2)
    return res
  }
}

function foo(a, b, c) {
  console.log(this.name, a, b, c)
  return 1
}

const obj = {
  name: 'coderwei',
}

const bar = foo.MyBind(obj, 1)
console.log(bar(2, 3))
