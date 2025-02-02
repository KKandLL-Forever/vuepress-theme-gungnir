import { defineClientAppEnhance } from "@vuepress/client";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import {
  BiLayoutSidebarInset,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaCircle,
  FaEnvelope,
  FaFacebookF,
  FaGithubAlt,
  FaLinkedinIn,
  FaListUl,
  FaMagic,
  FaMoon,
  FaPencilAlt,
  FaRegularCalendar,
  FaRegularUser,
  FaSun,
  FaTwitter,
  HiTranslate,
  RiRssFill,
  RiSearch2Line,
  RiTimerLine,
  RiWeiboFill,
  RiZhihuLine
} from "oh-vue-icons/icons";
import { h } from "vue";
import type { DefineComponent } from "vue";
import Badge from "./components/global/Badge.vue";
import Card from "./components/global/Card.vue";
import CodeGroup from "./components/global/CodeGroup";
import CodeGroupItem from "./components/global/CodeGroupItem.vue";
import { useScrollPromise } from "./composables";
import "./styles/index.scss";

addIcons(
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
  FaMagic,
  FaSun,
  FaMoon,
  FaGithubAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  RiZhihuLine,
  RiWeiboFill,
  FaEnvelope,
  RiRssFill,
  FaCircle,
  FaPencilAlt,
  FaRegularUser,
  FaRegularCalendar,
  RiTimerLine,
  FaListUl,
  BiLayoutSidebarInset,
  HiTranslate,
  RiSearch2Line
);

export default defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", Badge);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", CodeGroupItem);

  // icons
  app.component("VIcon", OhVueIcon);

  // link card
  app.component("Card", Card);

  // built-in SearchPage component
  app.component("GungnirSearchPage", () => {
    const SearchPage = app.component("SearchPage");
    return SearchPage ? h(SearchPage) : null;
  });

  // Giscus
  app.component("GungnirGiscus", (props: { theme?: string }) => {
    const Giscus = app.component("Giscus") as DefineComponent;
    return Giscus ? h(Giscus, { theme: props.theme }) : null;
  });

  // compat with @vuepress/plugin-docsearch and @vuepress/plugin-search
  app.component("NavbarSearch", () => {
    const SearchComponent =
      app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return h(SearchComponent);
    }
    return null;
  });

  // handle scrollBehavior with transition
  const scrollBehavior = router.options.scrollBehavior!;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
