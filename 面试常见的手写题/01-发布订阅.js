// 简易版

// class subscri {
//   subscris = {}

//   on(subscriName, callback) {
//     const s = this.subscris[subscriName] || []
//     this.subscris[subscriName] = [...s, callback]
//   }

//   emit(subscriName, ...args) {
//     const s = this.subscris[subscriName]
//     s.forEach(item => {
//       item.call(this, ...args)
//     });
//   }
// }

// const p = new subscri()

// p.on('a', (name) => {
//   console.log('触发了', name);
// })

// setTimeout(() => {
//   p.emit('a', 'coderwei')
// }, 2000);


// 带取消功能
class subscri {
  subscris = new Map()

  // 生成唯一id  用于移除订阅
  uuid() {
    return new Date() + Math.random()
  }
  on(subscriName, callback) {
    const s = this.subscris.get(subscriName) || new Map()
    const uuid = this.uuid()
    s.set(uuid, callback)
    this.subscris.set(subscriName, s)
    return uuid
  }

  emit(subscriName, ...args) {
    const s = this.subscris.get(subscriName) || new Map()
    for (const [key, value] of s) {
      value.call(this, ...args)
    }
  }

  remove(value) {
    const s = this.subscris.get(value)
    if (s) {
      console.log(s);
      this.subscris.delete(value)
    } else {
      for (const [name, callbackMap] of this.subscris) {
        for (const [uuid, callback] of callbackMap) {
          if (uuid === value) {
            callbackMap.delete(uuid)
          }

        }
      }
    }
  }
}

const p = new subscri()

const A = p.on('a', (name) => {
  console.log('触发了', name);
})

const B = p.on('b', (name) => {
  console.log('触发了', name);
})

setTimeout(() => {
  p.remove(B)
}, 1000);


setTimeout(() => {
  p.emit('a', 'coderwei--a')
  p.emit('b', 'coderwei--b')
}, 2000);
