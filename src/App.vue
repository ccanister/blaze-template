<template>
  <a-config-provider :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";

export default {
  name: "app",
  setup() {
    return { zhCN };
  },
};
</script>
