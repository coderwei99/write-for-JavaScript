let originalObj = [
  {
    id: 1,
    name: "键盘专区",
    path: "xxx/xxx/xxx.vue",
    pid: 0,
    icon: "xxxx",
    children: [
      {
        id: 5,
        name: "达尔优键盘",
        path: "xxx/xxx/xxx.vue",
        pid: 1,
        icon: "xxxx",
        children: [
          {
            id: 14,
            name: "达尔优 children",
            path: "xxx/xxx/xxx.vue",
            pid: 5,
            icon: "xxxx",
            children: [
              {
                id: 15,
                name: "达尔优 children children",
                path: "xxx/xxx/xxx.vue",
                pid: 14,
                icon: "xxxx",
              },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "腹灵cmk87键盘",
        path: "xxx/xxx/xxx.vue",
        pid: 1,
        icon: "xxxx",
      },
    ],
  },
  {
    id: 2,
    name: "鼠标专区",
    path: "xxx/xxx/xxx.vue",
    pid: 0,
    icon: "xxxx",
    children: [
      { id: 10, name: "g502", path: "xxx/xxx/xxx.vue", pid: 2, icon: "xxxx" },
      { id: 11, name: "毒奎v2", path: "xxx/xxx/xxx.vue", pid: 2, icon: "xxxx" },
      {
        id: 12,
        name: "雷蛇v3",
        path: "xxx/xxx/xxx.vue",
        pid: 2,
        icon: "xxxx",
        children: [
          {
            id: 13,
            name: "雷蛇v3 children",
            path: "xxx/xxx/xxx.vue",
            pid: 12,
            icon: "xxxx",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "显卡专区",
    path: "xxx/xxx/xxx.vue",
    pid: 0,
    icon: "xxxx",
    children: [
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
    ],
  },
];

function TreeToArrat(tree) {
  // console.log(tree);
  let arr = [];
  function recursion(tree) {
    tree.forEach(item => {
      arr.push(item);
      item.children && recursion(item.children);
      delete item.children;
    });
  }

  recursion(tree);
  return arr;
}

console.log(TreeToArrat(originalObj));
