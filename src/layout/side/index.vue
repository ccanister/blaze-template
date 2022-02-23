<template>
  <aside class="layout-side" :class="{ collapse }">
    <header-logo></header-logo>
    <div class="layout-side-inner">
      <a-menu
        :inlineCollapsed="collapse"
        v-model:selectedKeys="active"
        v-model:openKeys="opened"
        mode="inline"
        theme="dark"
      >
        <sub-menu
          v-for="menu in menus"
          :key="menu.key"
          :menu="menu"
          :collapse="collapse"
        ></sub-menu>
      </a-menu>
    </div>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SubMenu from "./sub-menu/index.vue";
import { menuService, useCollapse } from "@blazes/theme";
import HeaderLogo from "./logo/index.vue";

export default defineComponent({
  name: "layout-side",
  components: {
    SubMenu,
    HeaderLogo,
  },
  setup() {
    const { menus, collapse } = menuService;
    const { active, opened } = useCollapse(menuService);

    return { collapse, menus, active, opened };
  },
});
</script>
<style lang="less" scoped>
.layout-side {
  width: @layout-aside;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: #fff;
  border-right: 1px solid #efe3e5;
  transition: all 0.3s;
  .layout-side-inner {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .ant-menu-inline-collapsed {
    width: 60px;
  }
}
</style>
