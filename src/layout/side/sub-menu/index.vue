<template>
  <a-sub-menu v-if="menu.children.length" :key="menu.key">
    <template #title>
      <span>
        <component :is="menu.icon" />
        <span>{{ menu.text }}</span>
      </span>
    </template>
    <a-menu-item v-for="child in menu.children" :key="child.key">
      <router-link :to="child.link">
        <span>{{ child.text }}</span>
      </router-link>
    </a-menu-item>
  </a-sub-menu>
  <a-menu-item v-else :key="menu.key">
    <router-link :to="menu.link">
      <component :is="menu.icon" />
      <span>{{ menu.text }}</span>
    </router-link>
  </a-menu-item>
</template>
<script lang="ts">
import { bool, object } from "vue-types";
import { defineComponent } from "vue";
import { IMenu } from "@blazes/theme";

export default defineComponent({
  name: "sub-menu",
  props: {
    menu: object<IMenu>(),
    collapse: bool().isRequired,
  },
});
</script>
