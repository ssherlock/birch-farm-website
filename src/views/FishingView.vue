<template>
  <HeaderVue title="Cat Rough Fishery" />
  <div class="mt-2 pb-5 h-100 bg-light rounded-3 jumbotron rounded-3">
    <div class="col-lg-12 p-2 mt-auto py-3">
      <div class="row">
        <div class="col-md-4 p-2 mt-auto py-3">
          <div class="col p-2">
            <img src="assets/Lake.jpg" class="img-fluid" />
          </div>
        </div>
        <div class="col-md-8 pt-4">
          <p>This is a 2.5 acre sheltered course lake with plenty of parking by the lake and overspill parking close by. Stocked with Carp, Tench, Rudd, Roach and Bream this is a beautiful setting surrounded by woodland and countryside.  A great place to fish as well as a peaceful place to spend the day and enjoy the surrounding countryside and wildlife.</p>
          <div class="mt-2 pb-1 rounded-3 warning-colour">
            <p class="pt-2 ps-2"><strong>There is currently NO:
              <ul>
                <li>Night Fishing *</li>
                <li>Matches</li>
                <li>Club Fishing</li>
              </ul></strong></p>
            <p class="ps-2">* Unfortunately, due to the facility being abused, night fishing has been withdrawn until further notice.  Apologies to those of you who enjoyed this in a responsible way.</p>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <h3 class="mt-1"><u>Opening Hours</u></h3>
              <p>8am until dusk, 7 days a week</p>
            </div>
            <div class="col-sm-6">
              <h3 class="mt-1 "><u>Prices</u></h3>
              <p><strong>Day Ticket (up to 2 rods):</strong> £10 (no change given)
              <em>Turn up, find a peg and somebody will be round to collect payment at some point</em></p>
              <p><strong>Club Fishing:</strong> None</p>
              <p><strong>Matches:</strong> None</p>
            </div>
          </div>
        </div> 
        <div class="row">
          <div class="col-sm-4">
            <h3 class="mt-1"><u>Rules</u></h3>
            <p>
              <ul>
                <li>NO Night fishing</li>
                <li>Social distancing must be adhered to at ALL times</li>
                <li>No Spectators</li>
                <li>No children under 14 years to be left unsupervised at any time</li>
                <li>Barbless hooks only</li>
                <li>Landing nets must be used on all fish</li>
                <li>Minimum ground bait</li>
                <li>No bloodworm or joker</li>
                <li>No nuts or dairy products</li>
                <li>No keep-nets to be used</li>
                <li>No floating baits</li>
                <li>Bivvies to the right hand side only</li>
                <li>Litter to be placed in the bins provided or taken home with you</li>
                <li>Under no circumstances should any fish be harmed or taken from the fishery - anybody seen doing this will be prosecuted to the full extent of the law</li>
                <li>Management reserve the right to eject any person not abiding by these rules</li>
              </ul>
            </p>
          </div>
          <div class="col-sm-4">
            <h3 class="mt-1"><u>Finding Us</u></h3>
            <p>For SatNavs please use CH3 8AN or <a href="https://what3words.com/bouncing.jukebox.straying" target="_blank">///bouncing.jukebox.straying</a> (What3Words)</p>
          </div>
          <div class="col-sm-4">
            <h3 class="mt-1"><u>Contact Us</u></h3>
            <p>For further details or questions please contact: <a href="mailto:fishing@birchfarm.com">fishing@birchfarm.com</a></p>
            <p><a href="https://www.facebook.com/CatRoughFishery/" target="_blank"><img src="../assets/Facebook.jpg" class="rounded-3" title="Find Us On Facebook" alt="Find Us On Facebook" /></a></p>
          </div>
        </div>
      </div>     
    </div>
  </div> 

</template>

<script>
// @ is an alias to /src
import HeaderVue from "@/components/HeaderVue.vue";

export default {
  name: 'FishingView',
  components: {
    HeaderVue,
  }
}
</script>

<style scoped>
  .warning-colour {
    background: rgba(240, 73, 73, 0.55);
  }

  .jumbotron {
    background: linear-gradient(rgba(226, 223, 223, 0.75), #698554);
  }
</style>
