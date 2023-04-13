const frontEndEngineer = {
  name: 'coderwei',
}

Object._create = function (proto) {
  function Fn() {}
  Fn.prototype = proto
  return new Fn()
}

const obj = Object._create(frontEndEngineer)

console.log(obj.name)
