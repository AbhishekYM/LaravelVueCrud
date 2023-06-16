<template>
    <div class="container">
      <h1>Edit Product</h1>
      <form @submit.prevent="saveProduct">
        <div class="mb-3">
          <label for="name" class="form-label">Name:</label>
          <input type="text" id="name" class="form-control" v-model="product.name" />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description:</label>
          <textarea id="description" class="form-control" v-model="product.description"></textarea>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price:</label>
          <input type="number" id="price" class="form-control" v-model="product.price" />
        </div>
        <div class="mb-3">
          <label for="quantity" class="form-label">Quantity:</label>
          <input type="number" id="quantity" class="form-control" v-model="product.quantity" />
        </div>
        <div class="mb-3">
          <label for="category" class="form-label">Category:</label>
          <input type="text" id="category" class="form-control" v-model="product.category" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" id="is_available" class="form-check-input" v-model="product.is_available" />
          <label for="is_available" class="form-check-label">Is Available</label>
        </div>
        <button type="submit" class="btn btn-primary">Create</button>
      </form>
    
      <button @click="goBack" class="btn btn-secondary mt-3">Back</button>
    </div>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  import useProducts from "@/composables/products";
  import { useRouter } from "vue-router";
  
  const product = reactive({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    is_available: false,
  });
  
  const { errors, storeProduct } = useProducts()
const saveProduct = async () => {
    await storeProduct({ ...product });
}
  
  </script>
  