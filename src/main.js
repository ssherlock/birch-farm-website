import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import VueGtag from "vue-gtag";
import { createHead } from '@vueuse/head'

import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

const app = createApp(App).use(router).use(VueGtag, {
    config: { id: 'UA-3237294-8' }
});

app.use(router);

const head = createHead();
app.use(head);

app.mount("#app");
