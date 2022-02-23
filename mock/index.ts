import MockJs from "mockjs";

MockJs.setup({
  timeout: "10-1000", // 表示响应时间介于 1000 和 3000 毫秒之间，默认值是'10-100'。
});

const resp = {
  data: "",
  code: 0,
  msg: "",
};

const r = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

MockJs.mock(new RegExp("/api/project" + "*"), {
  ...resp,
  data: [
    {
      id: 1,
      code: "ninja_space",
      title: "忍者必须死3",
    },
  ],
});
MockJs.mock(new RegExp("/api/user" + "*"), {
  ...resp,
  data: {
    id: 1,
    name: "admin",
    phone: "188123454678",
  },
});
MockJs.mock(new RegExp("/api/simple-table" + "*"), {
  ...resp,
  data: {
    items: new Array(24).fill({}).map((_, idx) => ({
      id: idx + 1,
      name: `name ${idx + 1}`,
      age: r(10, 50),
      tag: r(1, 5),
    })),
    total: 24,
    limit: 10,
    offset: 1,
  },
});
MockJs.mock(new RegExp("/api/item" + "*"), {
  ...resp,
});
