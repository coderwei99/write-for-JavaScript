//考虑存在重复的query的情况 输出格式为: { name: 'koala', study: [ 'js', 'node', '123' ] }
let urlStr1 = 'http://www.inode.club?name=koala&study=js&study=node&study=123'

function queryString2(request) {
  let str = request.split('?')[1]
  console.log(str)
  let obj = {}
  const params = str.split('&')
  params.forEach((item) => {
    const [key, value] = item.split('=')
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value)
      } else {
        obj[key] = [obj[key], value]
      }
    } else {
      obj[key] = value
    }
  })

  console.log(obj)
  return obj
}
queryString2(urlStr1)
