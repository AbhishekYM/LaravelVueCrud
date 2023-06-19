<template>
  <div>
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
      <div class="flex place-content-end mb-4">
        <button
          class="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer focus:outline-none"
        >
          <router-link :to="{ name: 'products.create' }" class="text-sm font-medium"
            >Create product</router-link
          >
        </button>
      </div>
      <div></div>
      <data-table-wrapper :options="dataTableOptions">
        <template #default>
          <table ref="dataTableRef" class="min-w-full">
            <DataTable
              class="display"
              :columns="dataTableOptions.columns"
              :data="dataTableOptions.rows"
              :options="{ select: true }"
            >
            </DataTable>
          </table>
        </template>
      </data-table-wrapper>
      <!-- <data-table-wrapper :options="dataTableOptions">
            <template #default>
                <table class="min-w-full"> -->
      <!-- <DataTable class="display" :columns="columns" :data="products" :options="{ select: true }"> -->
      <!-- <thead> -->

      <!-- <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Category</th>
                                <th>Availability</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr> -->
      <!-- </thead>
                        <tbody>
                        </tbody> -->
      <!-- </DataTable> -->
      <!-- </table>
                </template>
            </data-table-wrapper> -->
    </div>
  </div>
  <br /><br />
  OUTPUT <br />
  ========================
  <br /><br />
  {{ dataTableOptions.columns }}
  <br /><br />
  {{ dataTableOptions.rows }}
  <!-- {{ products }} -->
</template>

<script>
import useProducts from "@/composables/products";
import DataTableWrapper from "@/components/products/DataTableWrapper.vue";
import $ from "jquery";

import DataTable from "datatables.net-vue3";
// import DataTable from 'datatables.net-vue3';

import DataTablesCore from "datatables.net";
import { onMounted } from "vue";
DataTable.use(DataTablesCore);
export default {
  components: {
    DataTableWrapper,
    DataTable,
  },
  setup() {
    const { products, getProducts, destroyProduct } = useProducts();
    onMounted(async () => {
      await getProducts();
    });
    const deleteProduct = async (id) => {
      if (!window.confirm("Are you sure?")) {
        return;
      }
      await destroyProduct(id);
      await getProducts();
    };

    const getImageUrl = (item) => {
      return `http://localhost/Company/public/storage/apiDocs/${item.image}`;
    };
    const dataTableOptions = {
      columns: [
        {
          title: "Name",
          data: "name",
        },
        {
          title: "Description",
          data: "description",
        },
        {
          title: "Price",
          data: "price",
        },
        {
          title: "Quantity",
          data: "quantity",
        },
        {
          title: "Category",
          data: "category",
        },
        {
          title: "Availability",
          data: "is_available",
        },
        {
          title: "Image",
          data: "image",
        },
        {
          title: "Action",
          //   data: null,
        },
      ],
      get rows() {
        return products;
      },
    };
    console.log("Products:", products);

    // const columns = [{
    //         data: 'name'
    //     },
    //     {
    //         data: 'description'
    //     },
    //     {
    //         data: 'quantity'
    //     },
    //     {
    //         data: 'category'
    //     },
    //     {
    //         data: 'is_avaliable'
    //     },
    //     {
    //         data: 'image'
    //     }
    // ];
    return {
      products,
      deleteProduct,
      getImageUrl,
      dataTableOptions,
      // columns,
    };
  },
};
</script>

<style></style>
