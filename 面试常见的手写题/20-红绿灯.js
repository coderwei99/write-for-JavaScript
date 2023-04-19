async function foo() {
  console.log('红')
  await sleep(1000)
  console.log('绿')
  await sleep(2000)
  console.log('黄')
}

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

foo()
