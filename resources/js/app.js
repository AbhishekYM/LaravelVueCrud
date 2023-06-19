import './bootstrap';
import Alpine from 'alpinejs';
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from "vue";
import DataTable from 'datatables.net-vue3';
import router from '@/router/index.js';
import CompaniesIndex from '@/components/companies/CompaniesIndex.vue';
import ProductsIndex from '@/components/products/ProductIndex.vue';
import 'datatables.net-dt/css/jquery.dataTables.css';
// import 'datatables.net-select-dt/css/select.dataTables.css';
import 'jquery';
import DataTables from 'datatables.net';
import DataTablesVue3 from 'datatables.net-vue3';
// import 'datatables.net-select-dt/css/select.dataTables.css';


DataTables.use(DataTablesVue3);
const app = createApp({
  components: {
    CompaniesIndex,
    ProductsIndex,
  },
});

app.component('DataTable', DataTable);

app.use(router).mount('#app');

// import { createApp } from "vue";
// import router from "@/router/index.js";
// import CompaniesIndex from "@/components/companies/CompaniesIndex.vue";
// import ProductIndex from "@/components/products/ProductIndex.vue";

// createApp({})
//   .use(router)
//   .component("CompaniesIndex", CompaniesIndex)
//   .component("ProductIndex", ProductIndex)
//   .mount("#app");
