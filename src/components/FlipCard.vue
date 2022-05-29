<template>
  <div class="flip-box">
    <div class="flip-box-inner">
      <div class="flip-box-front">
        <h2 class="opaque-header">{{ frontText }}</h2>
      </div>
      <div class="flip-box-back">
        <div class="opaque-box">
          <p class="mt-3 ms-2">{{ backText }}</p>
          <span v-html="url"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlipCard",
  created() {},
  data() {
    return {};
  },
  props: {
    frontText: {type: String, required: false},
    backText: {type: String, required: false},
    backgroundImage: {type: String},
    url: {type: String}
  },
  methods: {},
};
</script>

<style scoped>  
body {
  font-family: Arial, Helvetica, sans-serif;
}

.flip-box {
  width: 300px;
  height: 200px; /* 200 best for desktop but not mobile */
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateX(180deg);
  object-fit: fill;
}

.flip-box-front, .flip-box-back {
  background-image: v-bind(backgroundImage);  
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front {
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.flip-box-back {
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  font-weight: 600;
  transform: rotateX(180deg);
  background-size: cover;
}

.opaque-box{
  position: absolute;
  background-image: v-bind(backgroundImage); 
  background-size: 100%;
  background: rgba(0, 0, 0, 0.50); 
  height: 100%;
}

.opaque-header{
  background-size: 100%;
  background: rgba(0, 0, 0, 0.50); 
}
</style>