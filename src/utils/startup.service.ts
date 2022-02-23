import { menuService, settingService } from "@blazes/theme";
import { fetchAssets, getProjects, getUser } from "./api.service";
import { ArrayService } from "@blazes/utils";

class StartupService {
  load() {
    return Promise.all([
      fetchAssets("app-data.json"),
      getProjects(),
      getUser(),
    ]).then(([data, projects, user]) => {
      settingService.setUser(user);
      const existProject = settingService.project;
      if (
        (!existProject.id ||
          projects.every((p: any) => p.id !== existProject.id)) &&
        !ArrayService.arrIsEmpty(projects)
      ) {
        settingService.setProject(projects[0]);
      }
      settingService.setProjects(projects);
      menuService.add((data as any).menu);
    });
  }
}

export const startupService = new StartupService();
