import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/semi-docs/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "半导体知识文档",
      description: "半导体知识文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
