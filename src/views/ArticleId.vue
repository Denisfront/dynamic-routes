<template>
  <div>{{ currentLang === "ru" ? "Статья" : "Article" }} {{ id }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ArticleId",
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState({
      currentLang: (state) => state.lang,
    }),
  },
};
</script>
