<template>
  <HeaderVue title="Birch Farm, Mouldsworth" />
  <div class="row p-3">
    <div class="col mb-2">
      <FlipCard class="img-fluid img-center"
        frontText="Camping"  
        backText="Camping is available for both caravans and tents. For further details click"
        backgroundImage="url(/assets/Caravan.jpg)"
        url="<p><a href='/camping' style='color: white; font-weight: bold;'>Camping &amp; Caravanning</a></p>"
      />
    </div>
    <div class="col mb-2">
      <FlipCard class="img-fluid img-center"
        frontText="Fishing"  
        backText="Course fishing available in our 2.5 acre lake. For further details click"
        backgroundImage="url(/assets/Lake.jpg)"
        url="<p><a href='/fishing' style='color: white; font-weight: bold;'>Fishing</a></p>"
      />
    </div>
    <div class="col mb-2">
      <FlipCard class="img-fluid img-center"
        frontText="Caravan Storage" 
        backText="Why not store your van conveniently on the farm in secure storage?. For further details click"
        backgroundImage="url(/assets/CaravanStorage.jpg)"
        url="<p><span style='color: red; font-weight: bold;'>Currently No Spaces</span></p>"
      />
    </div>
  </div>
  <div class="mt-2 bg-light rounded-3">
    <div class="col-lg-12 p-2 mt-auto py-3 jumbotron rounded-3">
      <p>If you want somewhere quiet and beautiful to camp, caravan or fish then Birch Farm, Mouldsworth is the place to come.  Set in the rolling Cheshire countryside with easy access to a number of local amenities such as:<br>
        <a href="https://www.thegoshawkpub.co.uk/" target="_blank">The Goshawk public house/restaurant</a> based near <a href="https://www.nationalrail.co.uk/stations/mld/details.html" target="_blank">Mouldsworth Railway station</a></p>
        <p>Other local facilities include:<br>
        <a href="https://www.forestryengland.uk/delamere-forest" target="_blank">The ancient forest of Delamere</a><br>
        <a href="https://www.manleymere.co.uk/" target="_blank">Manley Mere</a><br>  
        <a href="https://goape.co.uk/locations/delamere" target="_blank">Go Ape</a><br>
        <a href="http://www.ladyheyes.co.uk/" target="_blank">Lady Heyes Craft Centre</a><br>
        to name but a few...
      </p>
      <div class="col-md-4 p-auto mt-auto py-auto img-center ">
        <Carousel
          :navigation="true"
          :pagination="true"
          :startAutoPlay="true"
          :timeout="5000"
          class="carousel"
          v-slot="{ currentSlide }">
          <Slide v-for="(slide, index) in carouselSlides" :key="index">
            <div v-show="currentSlide === index + 1" class="slide-info">
              <img class="img-fluid" :src="require(`../assets/${slide}.jpg`)" alt="" />
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
import { useHead } from '@vueuse/head'
import { event } from 'vue-gtag';

// @ is an alias to /src
import FlipCard from "@/components/FlipCard.vue";
import Carousel from "@/components/CarouselVue.vue";
import Slide from "@/components/SlideVue.vue";
import HeaderVue from "@/components/HeaderVue.vue";

export default {
  name: 'HomeView',
  components: {
    FlipCard, Carousel, Slide, HeaderVue
  },
  setup() {
    const siteData = reactive({
      title: `Birch Farm - Home`,
      description: `Birch Farm Camping and Fishing in Mouldsworth, Cheshire`,
    })

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    })

    const carouselSlides = ["CampSite", "Caravan", "Lake", "CaravanStorage", "Lake3"];
    // return { carouselSlides };

    const homePage = () => {
      event('homePage', { method: 'Google' })
    }
    return {carouselSlides: carouselSlides, googleAnalytics: homePage};
  },
}
</script>

<style scoped>
  .jumbotron {
    background: linear-gradient(rgba(226, 223, 223, 0.75), #698554);
  }
  .img-center {margin:0 auto;}
</style>
