<template>
  <header class="flex-center layout-header px-lg">
    <toggle-collapse class="layout-header-item"></toggle-collapse>
    <div class="flex-center layout-header-right">
      <switch-project class="mr-sm" />
      <notify class="layout-header-item"></notify>
      <account class="layout-header-item"></account>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Notify from "./notify/index.vue";
import SwitchProject from "./switch-project/index.vue";
import ToggleCollapse from "./toggle-collapse/index.vue";
import Account from "./account/index.vue";

export default defineComponent({
  name: "layout-header",
  components: {
    Notify,
    SwitchProject,
    ToggleCollapse,
    Account,
  },
});
</script>
<style lang="less" scoped>
.layout-header {
  height: @layout-header;
  position: fixed;
  top: 0;
  left: @layout-aside;
  right: 0;
  z-index: 99;
  box-sizing: border-box;
  background: #fff;
  .layout-header-right {
    margin-left: auto;
  }
  .layout-header-item {
    min-width: 50px;
    padding: 8px 4px;
    text-align: center;
    cursor: pointer;
    ::v-deep .anticon {
      font-size: 18px;
    }

    &:hover {
      background: hsla(0, 0%, 100%, 0.2) !important;
    }
  }
}
</style>
<style scoped>
.layout-header {
  box-shadow: 0 1px 10px rgb(0 0 0 / 20%);
}
</style>
