<template>
  <div class="layout-header-logo flex-center">
    <img src="@/assets/img/logo.png" />
    <!--  eslint-disable-next-line -->
    <span class="layout-header-logo-title"><%= name %></span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "layout-header-logo",
});
</script>
<style lang="less" scoped>
.layout-header-logo {
  width: 100%;
  height: @layout-aside-title;
  padding: 16px;
  color: #fff;
  background: #001529;
  img {
    height: 50px;
  }
  .layout-header-logo-title {
    margin-left: 12px;
    font-size: 20px;
  }
}
</style>
