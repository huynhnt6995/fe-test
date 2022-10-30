import { t } from "i18next";

import MenuItem from "../types/MenuItem";

import icMemo from "./../assets/icons/ic_memo.png";
import icInfo from "./../assets/icons/ic_info.png";
import icChallenge from "./../assets/icons/ic_challenge.png";

const mainMenu: MenuItem[] = [
  {
    icon: icMemo,
    text: t("menu.memo"),
    url: "/my-records",
  },
  {
    icon: icChallenge,
    text: t("menu.challenge"),
    url: "/columns",
  },
  {
    icon: icInfo,
    text: t("menu.info"),
    url: "#3",
    bagde: 1,
  },
];

export default mainMenu;
