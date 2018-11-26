<template>
  <div>    
      <header-app/>
      <menu-app/>
      <div class="content-wrapper" style="min-height: 946px;">
        <breadcrumb-app/>
        <section class="content">
          <router-view/>
        </section>
      </div>
      <footer-app/>
  </div>
</template>

<script>
import menuApp from "./components/menu.vue";
import headerApp from "./components/header.vue";
import footerApp from "./components/footer.vue";
import breadcrumbApp from "./components/breadcrumb.vue";
export default {
  name: "App",
  components: {
    menuApp,
    headerApp,
    footerApp,
    breadcrumbApp
  }
};
</script>