let str = "create_array_to_save_every_day_price";

function changeStr(str) {
  const temp = [...str]
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === '_') {
      temp[i + 1] = temp[i + 1].toUpperCase()
      temp.splice(i, 1)
      i--
    }
  }
  return temp.join('')
}

const res = changeStr(str)

console.log(res);