<template>
  <div>    
      <header-app/>
      <menu-app/>
      <footer-app/>
    <router-view/>
  </div>
</template>

<script>
import menuApp from "./components/menu.vue";
import headerApp from "./components/header.vue";
import footerApp from "./components/footer.vue";
export default {
  name: "App",
  components: {
    menuApp,
    headerApp,
    footerApp
  }
};
</script>