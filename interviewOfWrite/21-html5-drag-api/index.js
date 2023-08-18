const root = document.querySelector('.app')
const ul = document.querySelector('ul')
const dataList = ['11111', '22222', '33333', '44444', '55555']

dataList.forEach((item) => {
  const li = document.createElement('li')
  li.innerText = item
  li.draggable = true
  ul.appendChild(li)
})

function throttle(func, delay) {
  let timeoutId
  let lastExecTime = 0

  return function (...args) {
    const currentTime = Date.now()

    if (currentTime - lastExecTime > delay) {
      clearTimeout(timeoutId)
      lastExecTime = currentTime
      func.apply(this, args)
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        lastExecTime = currentTime
        func.apply(this, args)
      }, delay)
    }
  }
}
const hadnleOver = throttle((event) => {
  const targetLi = document.querySelector('.hidden-ul')
  const changelist = [...document.querySelectorAll('ul li:not(.hidden-ul)')]
  const ret = changelist.find((item) => {
    // console.log(item)
    if (event.clientY <= item.offsetTop + item.offsetHeight / 2) {
      return item
    }
  })
  console.log(ret, event.target)
  targetLi && ul.insertBefore(targetLi, ret)
}, 300)

function bindEvent() {
  const li = document.querySelectorAll('ul li')
  ul.addEventListener('dragover', hadnleOver)
  li.forEach((item) => {
    console.log(item)
    item.addEventListener(
      'drag',
      function () {
        // console.log('dragstart', this)
      },
      false
    )

    // bind dragStart  event
    item.addEventListener('dragstart', (event) => {
      const target = event.target
      setTimeout(() => {
        target.classList.add('hidden-ul')
      }, 0)
      console.log('start', event.target)
    })

    item.addEventListener('dragend', (event) => {
      event.target.classList.remove('hidden-ul')
      console.log('end', event)
    })
  })
}

bindEvent()
