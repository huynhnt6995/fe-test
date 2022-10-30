import { t } from "i18next";

import MenuItem from "../types/MenuItem";

const footerMenu: MenuItem[] = [
  {
    text: t("footer.registration"),
    url: "#1",
  },
  {
    text: t("footer.operation"),
    url: "#2",
  },
  {
    text: t("footer.term"),
    url: "#3",
  },
  {
    text: t("footer.personal"),
    url: "#4",
  },
  {
    text: t("footer.special"),
    url: "#5",
  },
  {
    text: t("footer.inquiry"),
    url: "#6",
  },
];

export default footerMenu;
