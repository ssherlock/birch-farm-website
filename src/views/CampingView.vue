<template>
  <HeaderVue title="Camping and Caravanning" />
  <!-- <div class="container-fluid"> -->
    <div class="mt-2 pb-5 h-100 bg-light rounded-3 jumbotron rounded-3">
      <div class="col-lg-12 p-2 mt-auto py-3">
        <div class="row">
          <div class="col-md-4 p-2 mt-1 py-3">
            <div class="col p-2">
              <!-- <img src="assets/CampSite.jpg" class="img-fluid" /> -->
              <Carousel
                :navigation="true"
                :pagination="true"
                :startAutoPlay="true"
                :timeout="5000"
                class="carousel"
                v-slot="{ currentSlide }"
              >
                <Slide v-for="(slide, index) in carouselSlides" :key="index">
                  <div v-show="currentSlide === index + 1" class="slide-info">
                    <img class="img-fluid" :src="require(`../assets/${slide}.jpg`)" alt="" />
                  </div>
                </Slide>
              </Carousel>
            </div>
          </div>
          <div class="col-md-8 pt-4">
            <p>This beautiful Caravan and Tent site is part of the Caravan & Camping Club (you can join at the site), situated in a picturesque, secluded area of Mouldsworth, on the south side of Delamere Forest (a short walk away).</p>
            <p>There are 5 hard standings and a level grass area for both caravans and tents - choose between a pitch under the trees (overlooking the lake) or one looking over the lovely surrounding area. </p>
            <p>The ground being predominately sand means we don't suffer from being water logged during our classic British weather!</p>
            <div class="row">
              <div class="col-sm-6">
                <h3 class="mt-1"><u>Prices</u></h3>
                <p>Per night:
                  <ul>
                    <li>Caravans: £15</li>
                    <li>Tents: £10 to £14 (depending on size)</li>
                  </ul>
                </p>
                <p>Electric hookup is £5 extra per night</p>
                <div class="mt-2 pb-1 rounded-3 warning-colour">
                  <p class="pt-2 ps-2"><strong>Please Note:</strong><br>
                  During high season and public holidays a non-refundable deposit may be required</p>
                </div>
              </div>
              <div class="col-sm-6">
                <h3 class="mt-1"><u>Finding Us</u></h3>
                <p>For SatNavs please use CH3 8AN or <a href="https://what3words.com/bouncing.jukebox.straying" target="_blank">///bouncing.jukebox.straying</a> (What3Words)</p>
                <div class="row">
                  <h3 class="mt-1"><u>Contact Us</u></h3>
                  <p>For further details or questions please contact: <a href="mailto:camping@birchfarm.com">camping@birchfarm.com</a></p>
                  <p><a href="https://www.facebook.com/BirchFarmCamping" target="_blank"><img src="../assets/Facebook.jpg" class="rounded-3" title="Find Us On Facebook" alt="Find Us On Facebook" /></a></p>
                </div>
              </div>
            </div>
          </div> 
          <div class="row">
            <div class="col-md-12">
              <h3 class="mt-1"><u>Amenities</u></h3>
              <p>As well as the amazing scenery and surroundings the site has:
                <ul>
                  <li>Electric hookups available for both caravans and tents</li>
                  <li>Toilet and shower block</li>
                  <li>Waste disposal point and refuse bins</li>
                  <li>No nearby main road to ruin the sounds of the birds singing</li>
                  <li>A course fishing lake</li>
                  <li>Dog walking area</li>
                  <li>Nearby sights such as <a href="https://www.forestryengland.uk/delamere-forest" target="_blank">Delamere Forest</a>, <a href="https://www.thegoshawkpub.co.uk/" target="_blank">The Goshawk</a>, <a href="https://www.nationalrail.co.uk/stations/mld/details.html" target="_blank">Mouldsworth Railway Station</a> (for trains to Chester and Manchester) and everything else that Cheshire has to offer</li>
                </ul>
              </p>
            </div>
          </div>
        </div> 
      </div>    
    </div> 
  <!-- </div> -->

</template>

<script>
// @ is an alias to /src
import HeaderVue from "@/components/HeaderVue.vue";
import Carousel from "../components/CarouselVue.vue";
import Slide from "../components/SlideVue.vue";

export default {
  name: 'FishingView',
  components: {
    HeaderVue, Carousel, Slide
  },
  setup() {
    const carouselSlides = ["CampSite", "Caravan", "Lake", "CaravanStorage"];

    return { carouselSlides };
  },
}
</script>

<style lang="scss" scoped>
  .warning-colour {
    background: rgba(240, 73, 73, 0.55);
  }

  .jumbotron {
    /* background: linear-gradient(rgba(226, 223, 223, 0.55), #98FB98); */
    background: linear-gradient(rgba(226, 223, 223, 0.75), #698554);
  }
</style>
