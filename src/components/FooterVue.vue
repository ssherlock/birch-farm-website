<template>    
  <div class="container-fluid">
    <div class="mt-2 mb-2 h-100 bg-light rounded-3">
      <div class="col-lg-12 p-2 mt-auto py-3 jumbotron">
        <footer class="footer text-center">
          <strong>&copy; <a href="https://www.sherlock.co.uk">Simon Sherlock</a> 2022</strong>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterVue",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
  .jumbotron {
    background: linear-gradient(rgba(226, 223, 223, 0.55), #536f3e);
  }
</style>