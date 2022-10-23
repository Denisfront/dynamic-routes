<template>
  <div class="container">
    <main>
      <div>{{ currentLang === "ru" ? "Какой-то текст" : "Text" }}</div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapState({
      currentLang: (state) => state.lang,
    }),
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu {
  display: flex;
}

.menu__list {
  display: flex;
  column-gap: 20px;
}
</style>
