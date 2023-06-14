<template>
<div class="container">
    <h1>Edit Product</h1>
    <form @submit.prevent="updateProduct">
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
        <button type="submit" class="btn btn-primary">Update</button>
    </form>

    <button @click="goBack" class="btn btn-secondary mt-3">Back</button>
</div>
</template>

<script>
import useProducts from "@/composables/products";
import {
    onMounted
} from "vue";

const {
    errors,
    product,
    getProduct,
    updateProduct
} = useProducts()
const props = defineProps({
    id: {
        required: true,
        type: String
    }
})
const goBack = () => {
    router.push({
        name: "products.index"
    });
};

onMounted(getCompany(props.id))

const saveProducts = async () => {
    await updateProducts(props.id)
}
</script>
