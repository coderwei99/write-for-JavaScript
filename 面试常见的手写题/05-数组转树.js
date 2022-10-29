let originalObj = [
  {
    id: 1,
    name: "键盘专区",
    path: "xxx/xxx/xxx.vue",
    pid: 0,
    icon: "xxxx",
  },
  {
    id: 2,
    name: "鼠标专区",
    path: "xxx/xxx/xxx.vue",
    pid: 0,
    icon: "xxxx",
  },
  {
    id: 4,
    name: "显卡专区",
    path: "xxx/xxx/xxx.vue",
    pid: 0,
    icon: "xxxx",
  },
  {
    id: 5,
    name: "达尔优键盘",
    path: "xxx/xxx/xxx.vue",
    pid: 1,
    icon: "xxxx",
  },
  {
    id: 6,
    name: "腹灵cmk87键盘",
    path: "xxx/xxx/xxx.vue",
    pid: 1,
    icon: "xxxx",
  },
  {
    id: 7,
    name: "七彩虹gtx 1660ti",
    path: "xxx/xxx/xxx.vue",
    pid: 4,
    icon: "xxxx",
  },
  {
    id: 8,
    name: "华硕3050ti",
    path: "xxx/xxx/xxx.vue",
    pid: 4,
    icon: "xxxx",
  },
  {
    id: 9,
    name: "微星 4090ti",
    path: "xxx/xxx/xxx.vue",
    pid: 4,
    icon: "xxxx",
  },
  {
    id: 10,
    name: "g502",
    path: "xxx/xxx/xxx.vue",
    pid: 2,
    icon: "xxxx",
  },
  {
    id: 11,
    name: "毒奎v2",
    path: "xxx/xxx/xxx.vue",
    pid: 2,
    icon: "xxxx",
  },
  {
    id: 12,
    name: "雷蛇v3",
    path: "xxx/xxx/xxx.vue",
    pid: 2,
    icon: "xxxx",
  },
  {
    id: 13,
    name: "雷蛇v3 children",
    path: "xxx/xxx/xxx.vue",
    pid: 12,
    icon: "xxxx",
  },
  {
    id: 14,
    name: "达尔优 children",
    path: "xxx/xxx/xxx.vue",
    pid: 5,
    icon: "xxxx",
  },
  {
    id: 15,
    name: "达尔优 children children",
    path: "xxx/xxx/xxx.vue",
    pid: 14,
    icon: "xxxx",
  },
];

// 实现一个方法  将上述数组转成树状结构

// 1. 递归
// 处理parentData 和childrenData 之间关系的函数
function parseChildrenToParent(parentData, childrenData) {
  childrenData.forEach(item => {
    const tempData = parentData.find(_item => _item.id == item.pid);
    if (!tempData) return;
    tempData.children = tempData.children ?? [];
    tempData.children.push(item);
    // if (tempData.children) {
    //   // 有值 递归
    //   tempData.children.push(item);
    // } else {
    //   tempData.children = [item];
    // }
    parseChildrenToParent([item], childrenData);
  });
}

function arrayToTree(arr) {
  let tree = [];

  function findParent(arr, pid = 0) {
    const parentData = arr.filter(item => item.pid == 0),
      childrenData = arr.filter(item => item.pid != 0);
    parseChildrenToParent(parentData, childrenData);
    tree = parentData;
  }

  findParent(arr);
  return tree;
}

console.log(arrayToTree(originalObj));
