import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import VueGtag from "vue-gtag";
import { createHead } from '@vueuse/head'

import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './registerServiceWorker'

const app = createApp(App).use(router).use(VueGtag, {
    config: { id: 'G-8Q9PXCF133' }
});

app.use(router);

const head = createHead();
app.use(head);

app.mount("#app");
