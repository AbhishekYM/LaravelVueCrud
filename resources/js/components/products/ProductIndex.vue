<template>
  <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
    <div class="flex place-content-end mb-4">
      <div class="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer">
        <router-link :to="{ name: 'products.create' }" class="text-sm font-medium">Create product</router-link>
      </div>
    </div>
    <table class="min-w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Availability</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.is_available }}</td>
          <td>
            <button @click="editProduct(item.id)" class="text-blue-500 hover:text-blue-700" title="Edit">
              <i class="fas fa-edit"></i>
            </button>
            <button @click="deleteProduct(item.id)" class="text-red-500 hover:text-red-700" title="Delete">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import useProducts from "@/composables/products";
import {
    onMounted
} from "vue";

const {
    products,
    getProducts,
    destroyProduct
} = useProducts();
onMounted(getProducts);

const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure?")) {
        return;
    }
    await destroyProduct(id);
    await getProducts();
};
</script>

<style>

</style>

