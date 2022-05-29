<template>    
  <!-- <div class="container-fluid"> -->
    <div class="mt-2 mb-2 rounded-lg rounded">
      <div class="bg-light rounded-3 jumbotron">
        <h1 class="text-center text-dark">{{ title }}</h1>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "HeaderVue",
  created() {},
  data() {
    return {};
  },
  props: {
    title: {type: String, required: true}
  },
  methods: {},
};
</script>

<style scoped>
  .jumbotron {
    /* background: linear-gradient(to right bottom, rgba(226, 223, 223, 0.55), #98FB98); */
    /* background: linear-gradient(rgba(37,51,26,255), rgba(226, 223, 223));  */
    background: linear-gradient(rgba(226, 223, 223, 0.55), #536f3e);
  }
</style>