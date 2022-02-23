<template>
  <sf
    :schema="schema"
    @formSubmit="submit"
    @formReset="close()"
    :formData="formData"
  ></sf>
</template>

<script lang="ts">
import { ISFSchema } from "@blazes/abc/lib/sf/src/type";
import { message } from "ant-design-vue";
import { defineComponent } from "vue";
import { object } from "vue-types";
import { sf } from "@blazes/abc";
import SfSelect from "@blazes/abc/lib/sf/src/widgets/sf-select.vue";
import { tagOptions } from "./common";
import { postItem } from "@/utils/api.service";

export default defineComponent({
  name: "add",
  components: { sf },
  props: {
    dialogRef: object().isRequired,
    formData: object(),
  },
  setup(props) {
    const schema: ISFSchema = {
      properties: {
        name: {
          title: "名称",
          required: true,
        },
        age: {
          title: "年龄",
          required: true,
          type: "number",
        },
        tag: {
          title: "tag",
          required: true,
          enums: tagOptions,
          ui: {
            widget: SfSelect,
            gutter: {
              spanControl: 8,
            },
          },
        },
      },
    };

    const close = (result?: any) => {
      (props.dialogRef as any).close(result);
    };

    const submit = (form: any) => {
      postItem(form)
        .then(() => {
          message.success(`操作成功：${JSON.stringify(form)}`);
          close(true);
        })
        .catch((error) => message.error(`操作失败:${error}`));
    };

    return { schema, close, submit };
  },
});
</script>

<style scoped lang="less"></style>
