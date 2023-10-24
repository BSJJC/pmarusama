import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { createPinia } from 'pinia';

import './css/index.css';
import './css/style.css';
import './css/fonts.css';

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount('#app');
