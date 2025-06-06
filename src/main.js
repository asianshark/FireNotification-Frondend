import {createPinia} from "pinia";
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router.js";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
