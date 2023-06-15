import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from "vue";
import router from '@/router/index.js';
import CompaniesIndex from '@/components/companies/CompaniesIndex.vue';
import ProductsIndex from '@/components/products/ProductIndex.vue';
createApp({
    components: {
        CompaniesIndex,
        ProductsIndex,
    }
}).use(router).mount('#app')
// import { createApp } from "vue";
// import router from "@/router/index.js";
// import CompaniesIndex from "@/components/companies/CompaniesIndex.vue";
// import ProductIndex from "@/components/products/ProductIndex.vue";

// createApp({})
//   .use(router)
//   .component("CompaniesIndex", CompaniesIndex)
//   .component("ProductIndex", ProductIndex)
//   .mount("#app");
