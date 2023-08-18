const template = '<div><p>hello  </p>{{message}}</div>'

AstType = {
  rootType: 1, //根节点
  ElementType: 2, //标签节点
  smiple: 3, //插值语法
  textType: 4, //普通字符串
}
// 编译原理
// 有限状态机

const ast = {
  type: AstType.rootType,
  children: [
    {
      type: AstType.ElementType,
      tag: 'div',
      children: [
        {
          type: AstType.textType,
          content: 'hello ',
        },
        {
          type: AstType.smiple,
          content: 'message',
        },
      ],
    },
  ],
}

const startToken = '<'
const endToken = '>'

function createContext(context) {
  return {
    source: context,
  }
}

function parseTag(context, type) {
  const match = /^<\/?([a-z]*)/i.exec(context.source)
  console.log(match)
  context.source = context.source.slice(match[0].length)
  context.source = context.source.slice(1)
  if (type === 'TagEnd') return
  return {
    type: AstType.ElementType,
    tag: match[1],
  }
}
function parseElemet(context, TagStack) {
  // const element = {
  //   type: AstType.ElementType,
  //   tag: match[1],
  // }
  const element = parseTag(context, 'startTag')
  parseTagChildren(TagStack, element, context)
  // console.log(context.source.slice(2, 2 + element.tag.length))
  // console.log(context)
  if (context.source.slice(2, 2 + element.tag.length) == element.tag) {
    // 结束标签  推进一下
    parseTag(context, 'TagEnd')
  }
  return element
}

function parseTagChildren(TagStack, element, context) {
  TagStack.push(element.tag)
  element.children = parseChildren(context, TagStack)
  TagStack.pop()
}

function parseText(context) {
  let tokens = ['{{', '<']
  let endIndex = context.source.length
  const s = context.source
  for (let i = 0; i < tokens.length; i++) {
    const index = s.indexOf(tokens[i])
    if (index !== -1 && index < endIndex) {
      endIndex = index
    }
  }
  const content = s.slice(0, endIndex)
  context.source = context.source.slice(endIndex)
  return {
    type: AstType.textType,
    content,
  }
}

function parseInterpolation(context) {
  // 走到这里说明是一个插值语法 {{xxx}}的形式 不管三七二十一  先推进2个字符长度
  context.source = context.source.slice(2)
  const index = context.source.indexOf('}}')

  const content = context.source.slice(0, index)
  context.source = context.source.slice(index + 2)
  return {
    type: AstType.smiple,
    content,
  }
}

function isEnd(context, TagStack) {
  console.log(context, TagStack)
  // 两种情况结束
  // 1. 遇到结束标签 2. context.source.length ==0
  if (context.source.startsWith('</')) {
    for (let i = 0; i < TagStack.length; i++) {
      const tag = TagStack[i]
      // 'div'   '</div>'
      if (context.source.slice(2, tag.length + 2) === tag) {
        return true
      }
    }
  }

  return !context.source
}
function parseChildren(context, TagStack) {
  const nodes = []
  while (!isEnd(context, TagStack)) {
    console.log(context.source, 'parseCHildren')
    let node
    if (context.source.startsWith(startToken)) {
      // 走进来说明是以<开头的，那就说明是标签内容
      if (/[a-z]/i.test(context.source[1])) {
        node = parseElemet(context, TagStack)
      }
    } else if (context.source.startsWith('{{')) {
      node = parseInterpolation(context, TagStack)
    }
    if (!node) {
      node = parseText(context, TagStack)
    }
    nodes.push(node)
  }

  return nodes
}

function parse(template) {
  const context = createContext(template)

  const res = parseChildren(context, [])

  return {
    children: res,
    type: AstType.rootType,
  }
}
const res = parse(template)

console.log(res)
const str = `const {name,age} = Vue
console.log(name,age)`
const render = new Function("Vue={name: 'coderwei1', age: 181}", str)({
  name: 'coderwei',
  age: 18,
})
