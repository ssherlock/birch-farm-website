<template>
  <NavBar />
  <div class="container-fluid"> 
    <router-view />
  </div>
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/FooterVue.vue";

export default {
  components: { NavBar, Footer }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  /* background: linear-gradient(#006400, #98FB98); */
  /* background: linear-gradient(rgba(226, 223, 223, 0.55), #98FB98); */
  background: linear-gradient(rgba(37,51,26,255), rgba(226, 223, 223)); 
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
