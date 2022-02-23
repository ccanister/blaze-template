<template>
  <a-dropdown>
    <div class="flex-center px-sm">
      <a-avatar
        :size="24"
        :src="require('@/assets/img/avatar.png')"
        class="mr-sm"
      ></a-avatar>
      {{ user.name }}
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <span @click="logout">注销登录</span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import { settingService } from "@blazes/theme";
import { message } from "ant-design-vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "account",
  setup() {
    const logout = () => message.success(`注销成功`);
    return {
      user: settingService.user,
      logout,
    };
  },
});
</script>

<style scoped lang="less"></style>
