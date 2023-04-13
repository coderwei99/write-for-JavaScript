/**
 * 深拷贝
 *  类型
 *    1. 简单数据类型(number、string、boolean、null、undefined..)
 *    2. 对象(object、正则、日期等)
 *    3. 函数
 *    4. 数组
 */

function deepClone(originObj) {
  const result = {}
  function helpFunction(obj, res) {
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key] = obj[key]
          .toString()
          .split(',')
          .map((item) => Number(item))
      } else if (obj[key] instanceof Object) {
        // 对象
        res[key] = {}
        helpFunction(obj[key], res[key])
      } else {
        res[key] = obj[key]
      }
    }
  }
  helpFunction(originObj, result)
  return result
}

const o = {
  name: 'coderwei',
  hello: [1, 2, 3, 4, 5],
  age: {
    s: 19,
    t: 9,
    g: {
      ts: 1,
      jks: 90,
    },
  },
}

const newObj = deepClone(o)
o.age.s = 2999
o.age.g.ts = 999
console.log(o)
console.log(newObj)

// chatgpt 的 demo
function _deepClone(obj, cache = new WeakMap()) {
  // 如果obj不是一个对象或者是null，则直接返回
  if (!isObject(obj) || obj === null) {
    return obj
  }

  // 如果obj已经被拷贝过了，则直接返回之前的拷贝结果，避免循环引用导致的死循环
  if (cache.has(obj)) {
    return cache.get(obj)
  }

  let result

  // 处理Map对象
  if (obj instanceof Map) {
    result = new Map()
    obj.forEach((value, key) => {
      result.set(_deepClone(key, cache), _deepClone(value, cache))
    })
    return result
  }

  // 处理Set对象
  if (obj instanceof Set) {
    result = new Set()
    obj.forEach((value) => {
      result.add(_deepClone(value, cache))
    })
    return result
  }

  // 处理Date对象
  if (obj instanceof Date) {
    result = new Date(obj.getTime())
    return result
  }

  // 处理RegExp对象
  if (obj instanceof RegExp) {
    result = new RegExp(obj.source, obj.flags)
    return result
  }

  // 处理函数
  if (typeof obj === 'function') {
    const funcString = obj.toString()
    result = eval(`(${funcString})`)
    return result
  }

  // 处理普通对象和数组
  result = Array.isArray(obj) ? [] : {}
  cache.set(obj, result) // 缓存当前对象，避免循环引用导致的死循环
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = _deepClone(obj[key], cache)
    }
  }
  return result
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}
