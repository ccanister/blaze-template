<template>
  <div @click="toggleCollapse" class="toggle-collapse">
    <MenuUnfoldOutlined v-if="collapse" />
    <MenuFoldOutlined v-else />
  </div>
</template>

<script lang="ts">
import { menuService } from "@blazes/theme";
import { defineComponent } from "vue";

export default defineComponent({
  name: "toggle-collapse",
  setup() {
    const toggleCollapse = () => {
      menuService.toggle();
    };
    return {
      toggleCollapse,
      collapse: menuService.collapse,
    };
  },
});
</script>

<style scoped lang="less">
.toggle-collapse {
  margin-left: -24px;
}
</style>
