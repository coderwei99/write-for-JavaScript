const syn = Symbol(1)
const obj = {
  name: 'coderwei',
  age: 13,
  friend: {
    name: 'test1',
  },
  [syn]: 123,
}

Object.prototype.dadad = '123'

Object._freeze = function (obj) {
  const ObjKey = Object.getOwnPropertyNames(obj)
  const SymbolKey = Object.getOwnPropertySymbols(obj)
  const keys = [...ObjKey, ...SymbolKey]

  for (const key of keys) {
    Object.defineProperty(obj, key, {
      writable: false,
      configurable: false,
    })
  }
}

Object._freeze(obj)

function hasOwnProtoType(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}
obj[syn] = '被修改了'
obj.name = '被修改了'
obj.age = '被修改了'
obj.friend.name = '被修改了'
console.log(obj)
