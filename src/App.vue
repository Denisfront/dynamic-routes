<template>
  <div>
    <header class="header">
      <menu class="menu">
        <ul class="menu__list">
          <li>
            <RouterLink :to="{ name: 'home' }">
              {{ currentLang === "ru" ? "Главная" : "Main" }}
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'article' }">
              {{ currentLang === "ru" ? "Статьи" : "Article" }}
            </RouterLink>
          </li>
        </ul>
      </menu>
      <div>
        {{ selectText }}
        <select :name="selectText" id="" v-model="localLang">
          <option value="ru">
            {{ currentLang === "ru" ? "Русский" : "Russian" }}
          </option>
          <option value="en">
            {{ currentLang === "ru" ? "Английский" : "English" }}
          </option>
        </select>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      currentLang: (state) => state.lang,
    }),
    selectText() {
      return this.currentLang === "ru" ? "Выбирите язык" : "Change the lang";
    },
    localLang: {
      get() {
        return this.currentLang;
      },
      set(newLang) {
        this.$store.dispatch("setLang", newLang);
        this.changeLang(newLang);
      },
    },
  },
  methods: {
    changeLang() {
      const pathChunks = this.$route.path.split("/");
      pathChunks[1] = this.currentLang;
      const newPath = pathChunks.join("/");
      location.href = `${newPath}`;
      // this.$router.push({ path: newPath, hash: { lang: newLang } });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
