import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

// createApp(App).use(router).mount('#app')
const app = createApp(App).use(router);

app.use(router);

app.mount("#app");
