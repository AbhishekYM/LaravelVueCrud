import { createRouter, createWebHistory } from "vue-router";

import CompaniesIndex from "@/components/companies/CompaniesIndex.vue";
import CompaniesCreate from "@/components/companies/CompaniesCreate.vue";
import CompaniesEdit from "@/components/companies/CompaniesEdit.vue";

import ProductIndex from "@/components/products/ProductIndex.vue";
import ProductCreate from "@/components/products/ProductCreate.vue";
import ProductEdit from "@/components/products/ProductEdit.vue";

const routes = [
  // Company Routes
  {
    path: "/dashboard",
    name: "companies.index",
    component: CompaniesIndex
  },
  {
    path: "/companies/create",
    name: "companies.create",
    component: CompaniesCreate,
  },
  {
    path: "/companies/:id/edit",
    name: "companies.edit",
    component: CompaniesEdit,
    props: true,
  },

  // Product Routes
  {
    path: "/products",
    name: "products.index",
    component: ProductIndex,
  },
   {
    path: "/products/create",
    name: "products.create",
    component: ProductCreate,
  },
  {
    path: "/products/:id/edit",
    name: "products.edit",
    component: ProductEdit,
    props: true,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
