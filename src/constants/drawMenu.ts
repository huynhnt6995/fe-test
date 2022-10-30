import { t } from "i18next";

import MenuItem from "../types/MenuItem";

const drawMenu: MenuItem[] = [
  {
    text: t("menu.memo"),
    url: "#1",
  },
  {
    text: t("menu.chart_weight"),
    url: "#2",
  },
  {
    text: t("menu.target"),
    url: "#3",
  },
  {
    text: t("menu.selected_source"),
    url: "#4",
  },
  {
    text: t("menu.column_list"),
    url: "#5",
  },
  {
    text: t("menu.setting"),
    url: "#6",
  },
];

export default drawMenu;
