<template>
  <div id="app" class="container-fluid">
    <navigation />
    <home />
    <chiSiamo />
    <servizi />
    <aree />
    <eventi />
    <blog />
     
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Home from "./views/Home.vue";
import ChiSiamo from "./views/ChiSiamo.vue";
import Servizi from "./views/Servizi.vue";
import Aree from "./views/Aree.vue";
import Eventi from "./views/Eventi.vue";
import Blog from "./views/Blog.vue"
export default {
  name: "App",
  components: {
    Navigation,
    Home,
    ChiSiamo,
    Servizi,
    Aree,
    Eventi,
    Blog
  },
  
}
</script>

<style lang="scss" scoped>
@import "../public/css/styles.scss";
#app {
  font-family: "Open Sans", sans-serif, "Segoe UI", "Roboto", "Helvetica Neue",
    "Arial";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dark;
}

.container-fluid {
  padding-left: 0em;
  padding-right: 0em;
}


</style>
