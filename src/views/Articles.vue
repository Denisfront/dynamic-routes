<template>
  <div class="articles">
    <ul class="articles__list">
      <li class="articles">
        <router-link
          :to="{
            name: 'articleId',
            params: {
              id: 1,
            },
          }"
        >
          🐱
          {{ currentLang === "ru" ? "Статья о котиках" : "Article about cats" }}
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'articleId',
            params: {
              id: 2,
            },
          }"
        >
          🐶
          {{ currentLang === "ru" ? "Статья про собак" : "Article about dogs" }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HelloWorld",
  computed: {
    ...mapState({
      currentLang: (state) => state.lang,
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
