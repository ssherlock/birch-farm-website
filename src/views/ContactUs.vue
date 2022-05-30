<template>
<HeaderVue title="Contact Us" />
<!-- <div class="container-fluid"> -->
    <div class="mt-2 pb-5 h-100 bg-light rounded-3 jumbotron">
      <div class="col-lg-12 p-2 mt-auto py-3">
        <div class="row">
          <div class="col-md-4 p-2 mt-auto py-3">
            <div class="col p-2">
              <h3 class="mt-1"><u>Map:</u></h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2388.1483370832357!2d-2.7299570840656386!3d53.233117190887356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb2cff6609ec86e1!2zNTPCsDEzJzU5LjIiTiAywrA0Myc0MC4wIlc!5e0!3m2!1sen!2suk!4v1653107962316!5m2!1sen!2suk" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="embed-responsive "></iframe>
            </div>
          </div>
          <div class="col-md-8 pt-4">
            <h3 class="mt-1"><u>Address:</u></h3>
            <p>Birch Farm,<br>Mouldsworth,<br>Chester,<br>Cheshire<br>CH3 8AW</p>
            <p>Phone: +44 (0) 1928 740231<br>
            Mobile: 	+44 (0) 7540 805006<br>
            Email: <a href="mailto:camping@birchfarm.com">camping@birchfarm.com</a></p>
            <div class="row">
              <div class="col-sm-6">
                <h3 class="mt-1"><u>Booking</u></h3>
                <p>To enquire or book please either telephone or email (email preferred) at <a href="mailto:camping@birchfarm.com">camping@birchfarm.com</a></p>
              </div>
            </div>
            <div class="col-sm-6">
              <h3 class="mt-1"><u>Finding Us</u></h3>
              <div class="mt-2 rounded-3 warning-colour">
                <p class="pt-1 ps-2 pb-1">For SatNavs please use CH3 8AN or <a href="https://what3words.com/bouncing.jukebox.straying" target="_blank">///bouncing.jukebox.straying</a> (What3Words)</p>
              </div>
            </div>
          </div>
        </div>     
      </div>
    </div> 
  <!-- </div> -->
</template>

<script>
import { event } from 'vue-gtag';
import { computed, reactive } from 'vue';
import { useHead } from '@vueuse/head'

// @ is an alias to /src
import HeaderVue from "@/components/HeaderVue.vue";

export default {
  name: 'ContactUs',
  components: {
    HeaderVue,
  },
  setup() {
    const siteData = reactive({
      title: `Birch Farm - Contact Us`,
      description: `Contact Birch Farm, Mouldsworth, Cheshire`,
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

    const contactUsPage = () => {
      event('contactUsPage', { method: 'Google' })
    }
    return {contactUsPage};
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
