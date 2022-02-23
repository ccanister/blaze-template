<template>
  <page-header></page-header>
  <table-wrapper>
    <template #left>
      <a-button type="primary" @click="add"> <PlusOutlined />添加 </a-button>
    </template>
    <a-card>
      <st ref="stRef" :data="url" :columns="columns" rowKey="id"></st>
    </a-card>
  </table-wrapper>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { ISTColumn } from "@blazes/abc/lib/st/src/type";
import { message } from "ant-design-vue";
import { simpleTableUrl } from "@/utils/api.service";
import { ModalHelper } from "@blazes/theme/dist";
import { st } from "@blazes/abc";
import Add from "./add.vue";
import { tagMap } from "./common";

export default defineComponent({
  name: "simple-table",
  setup() {
    const stRef: Ref<typeof st | null> = ref(null);

    const columns: ISTColumn[] = [
      { title: "姓名", index: "name" },
      { title: "年龄", index: "age" },
      { title: "tag", index: "tag", type: "tag", tag: tagMap },
      {
        title: "操作",
        buttons: [
          {
            text: "编辑",
            click: (record) => {
              const { dialogRef } = ModalHelper.open<boolean>({
                title: `编辑项目`,
                component: Add,
                componentParams: {
                  formData: record,
                },
              });
              dialogRef.afterClose.then((result) => {
                if (result) {
                  (stRef.value as typeof st).reloadCurrent();
                }
              });
            },
          },
          {
            text: "删除",
            type: "popconfirm",
            popconfirm: {
              title: "确认删除吗",
              confirm: () => {
                message.success("删除成功");
              },
            },
          },
          {
            text: "更多",
            children: [
              {
                text: "下载",
                click: () => {
                  message.success("下载成功");
                },
              },
            ],
          },
        ],
      },
    ];

    const url = simpleTableUrl;

    const add = () => {
      const { dialogRef } = ModalHelper.open<boolean>({
        title: `新建项目`,
        component: Add,
      });
      dialogRef.afterClose.then((result) => {
        if (result) {
          (stRef.value as typeof st).reloadCurrent();
        }
      });
    };

    return { columns, url, stRef, add };
  },
});
</script>

<style scoped lang="less"></style>
