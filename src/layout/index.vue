<template>
  <div class="layout" :class="{ 'layout-main-collapse': collapse }">
    <layout-side></layout-side>
    <layout-header></layout-header>
    <main class="layout-main">
      <router-view></router-view>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LayoutHeader from "./header/index.vue";
import LayoutSide from "./side/index.vue";
import { menuService } from "@blazes/theme";

export default defineComponent({
  name: "layout",
  components: {
    LayoutHeader,
    LayoutSide,
  },
  setup() {
    return { collapse: menuService.collapse };
  },
});
</script>
<style lang="less" scoped>
.layout {
  ::v-deep .ant-menu {
    height: 100%;
  }
  .layout-main {
    margin: @layout-header 24px 24px calc(@layout-aside + 24px);
  }
  &.layout-main-collapse {
    .layout-main {
      margin-left: calc(@layout-collapse-aside + 24px);
    }
    .layout-header {
      left: @layout-collapse-aside;
    }
    ::v-deep .layout-header {
      .layout-header-logo {
        width: @layout-collapse-aside;
        padding-left: 8px;
      }
      .layout-header-logo-title {
        display: none;
      }
    }
    ::v-deep .layout-side {
      width: @layout-collapse-aside;
      .anticon {
        font-size: @layout-collapse-icon-size !important;
      }
      .layout-header-logo {
        padding: 16px 0;
      }
      .ant-menu-inline-collapsed {
        & > .ant-menu-item,
        & > .ant-menu-submenu .ant-menu-submenu-title {
          height: 64px;
          line-height: 64px;
          padding: 0 0 0 12px !important;
        }
      }
    }
  }
}
</style>
