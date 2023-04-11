Function.prototype.MyApply = function (thisArg, arg) {
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window
  thisArg.fn = this
  const res = thisArg.fn(...arg)
  delete thisArg.fn
  return res
}

function foo(a, b, c) {
  console.log(this.name, a, b, c)
}

const obj = {
  name: 'coderwei',
}

foo.MyApply(obj, [1, 2, 3])
