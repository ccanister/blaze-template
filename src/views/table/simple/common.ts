import { ISFSchemaEnum } from "@blazes/abc/lib/sf/src/type";

export enum Tag {
  Success = 1,
  Error,
  Processing,
  Default,
  Waring,
}

export const tagMap = {
  [Tag.Success]: { text: "成功", color: "green" },
  [Tag.Error]: { text: "错误", color: "red" },
  [Tag.Processing]: { text: "进行中", color: "blue" },
  [Tag.Default]: { text: "默认", color: "" },
  [Tag.Waring]: { text: "警告", color: "orange" },
};

export const tagOptions = Object.keys(tagMap).reduce(
  (result: ISFSchemaEnum[], key) => {
    result.push({
      label: tagMap[key as unknown as Tag].text,
      value: +key,
    });
    return result;
  },
  []
);
