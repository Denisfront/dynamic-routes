import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelloWorld from "../views/Articles.vue";
import ArticleId from "../views/ArticleId.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    component: HomeView,
    name: "home",
    alias: ["/ru", "/en"],
    children: [],
  },
  {
    path: "/article",
    name: "article",
    component: HelloWorld,
    alias: ["/ru/article", "/en/article"],
  },
  {
    path: "/article/:id",
    component: ArticleId,
    name: "articleId",
    props: (route) => ({ id: route.params.id }),
    alias: ["/ru/article/:id", "/en/article/:id"],
    children: [],
  },
];

const translations = ["en", "ru", "gt"];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);

  const { lang } = store.state;
  const { path } = to;
  const urlLang = to.path.split("/")[1];

  if (!translations.includes(urlLang)) {
    next({ path: `/${lang}${path}` });
  } else {
    if (urlLang !== lang) {
      store.dispatch("setLang", urlLang);
    }
    next();
  }
});

export default router;
