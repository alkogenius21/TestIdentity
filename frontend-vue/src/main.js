import axios from './axios';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');