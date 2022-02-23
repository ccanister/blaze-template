import PlusOutlined from "@ant-design/icons-vue/PlusOutlined";
import MenuUnfoldOutlined from "@ant-design/icons-vue/MenuUnfoldOutlined";
import MenuFoldOutlined from "@ant-design/icons-vue/MenuFoldOutlined";
import DashboardOutlined from "@ant-design/icons-vue/DashboardOutlined";
import BellOutlined from "@ant-design/icons-vue/BellOutlined";
import TableOutlined from "@ant-design/icons-vue/TableOutlined";
import { App } from "vue";

const components = [
  PlusOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  BellOutlined,
  TableOutlined,
];

export default (app: App) => {
  components.forEach((component) => {
    app.component(component.displayName, component);
  });
};
