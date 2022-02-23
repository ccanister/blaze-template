import {
  st,
  sf,
  TableWrapper,
  PageHeader,
  VerificationFailed,
} from "@blazes/abc";
import { App } from "vue";

import "@blazes/abc/lib/style.css";

const components = [st, sf, TableWrapper, PageHeader, VerificationFailed];

export default (app: App) => {
  components.forEach((component) => {
    app.use(component);
  });
};
