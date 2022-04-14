require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue'
import router from './router';

// userIndex is the index components
import UserIndex from './components/UserIndex.vue'


createApp({
    components: {
        UserIndex
    }
}).use(router).mount('#app');