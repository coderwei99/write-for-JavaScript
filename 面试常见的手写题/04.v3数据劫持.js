// vue3 的数据劫持主要是使用proxy实现的

const rawObject = {
  name: 'coderwei',
  age: 18
}

const effect = () => {
  console.log('渲染dom');
}

let set = new Set()

const trick = (target, key) => {
  set.add(effect)
}
const tigger = (target, key) => {
  for (const fn of set) {
    fn()
  }
}

const optionFunction = {
  get(target, key, value) {
    // 收集依赖
    trick(target, key)
    console.log(target, key, value);
  },
  set(target, key, value) {
    // 触发依赖
    tigger()
    console.log(target, key, value);
  },
  deleteProperty() {
    console.log('delete操作');
  }
}

const reactive = (obj) => {
  return new Proxy(obj, optionFunction)
}

const obj = reactive(rawObject)
// console.log(obj);

delete obj.name