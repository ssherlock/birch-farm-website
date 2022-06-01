<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Birch Farm</router-link> |
        <button class="navbar-toggler" type="button" 
          data-bs-toggle="!visible?'collapse':''"
          data-bs-target="#navContent" 
          @click="visible=!visible"
          aria-controls="navContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          >  
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse" :class="!visible?'collapse':''" id="navContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link px-3" to="/" @click="visible=!visible">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link px-3" to="/camping" @click="visible=!visible">Camping &amp; Caravanning</router-link>
              </li>       
              <li class="nav-item">
                <router-link class="nav-link px-3" to="/fishing" @click="visible=!visible">Cat Rough Fishery</router-link>
              </li>  
              <li class="nav-item">
                <router-link class="nav-link px-3" to="/contact" @click="visible = !visible">Contact Us</router-link>
              </li>  
            </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  created() {},
  data() {
    return {
      visible: false
    }
  },
  props: {},
  methods: {},
  components: {}
};
</script>

<style scoped></style>