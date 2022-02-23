import {
  Form,
  Button,
  Avatar,
  Breadcrumb,
  Col,
  Row,
  Input,
  Menu,
  Pagination,
  Table,
  Empty,
  ConfigProvider,
  Select,
  Badge,
  Tooltip,
  Card,
  Checkbox,
  Dropdown,
  Tag,
  Popconfirm,
} from "ant-design-vue";
import { App } from "vue";

import "ant-design-vue/dist/antd.less";
import "@blazes/theme/dist/index.less";

const components = [
  Form,
  Button,
  Avatar,
  Breadcrumb,
  Col,
  Row,
  Input,
  Menu,
  Pagination,
  Table,
  Empty,
  ConfigProvider,
  Select,
  Badge,
  Tooltip,
  Card,
  Checkbox,
  Dropdown,
  Tag,
  Popconfirm,
];

export default (app: App) => {
  components.forEach((component) => {
    app.use(component);
  });
};
