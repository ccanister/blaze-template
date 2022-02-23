<template>
  <a-select
    v-model:value="model"
    class="switch-project-select"
    @change="changeProject"
    :bordered="false"
  >
    <a-select-option v-for="item in projects" :key="item.id" :value="item.id">
      {{ item.title }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { IProject, settingService } from "@blazes/theme";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "switch-project",
  setup() {
    const { project, projects } = settingService;

    const model = ref(project.id);

    const changeProject = (id: number) => {
      const project = projects.value.find((p) => p.id === id);
      settingService.setProject(project as IProject);
    };

    return {
      project,
      projects,
      changeProject,
      model,
    };
  },
});
</script>
<style lang="less" scoped>
.switch-project-select {
  min-width: 100px;
}
</style>
