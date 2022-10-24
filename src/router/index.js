import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelloWorld from "../views/Articles.vue";
import ArticleId from "../views/ArticleId.vue";
import store from "@/store";

const translations = ["en", "ru"];

let routes = [
  {
    path: "/",
    component: HomeView,
    name: "home",
    children: [],
  },
  {
    path: "/article",
    name: "article",
    component: HelloWorld,
  },
  {
    path: "/article/:id",
    component: ArticleId,
    name: "articleId",
    props: (route) => ({ id: route.params.id }),
    children: [],
  },
];

function glueLanguageWithUrl(lang, url) {
  return `/${lang}${url}`;
}

function addAliasForRoutes(routes) {
  return routes.map((route) => {
    const newAlias = translations.map((lang) => {
      return glueLanguageWithUrl(lang, route.path);
    });

    let alias;

    if (route.alias) {
      alias = [...route.alias, ...newAlias];
    } else {
      alias = [...newAlias];
    }

    return {
      ...route,
      alias,
    };
  });
}

routes = addAliasForRoutes(routes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { lang } = store.state;
  const { path } = to;
  const urlLang = to.path.split("/")[1];

  if (!translations.includes(urlLang)) {
    next({ path: glueLanguageWithUrl(lang, path) });
  } else {
    if (urlLang !== lang) {
      store.dispatch("setLang", urlLang);
    }
    next();
  }
});

export default router;
