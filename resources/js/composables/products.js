import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useProducts() {
  const products = ref([]);
  const product = ref([]);
  const errors = ref("");
  const router = useRouter();

  const getProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      console.log(response.data.data);
      products.value = response.data.data; 
    } catch (error) {
      console.error(error);
    }
  };
  
  

  const getProduct = async (id) => {
    let response = await axios.get("/api/products/" + id);
    product.value = response.data.data;
  };

  const storeProduct = async (data) => {
    errors.value = ''
    try {
        await axios.post('/api/products/', data)
        await router.push({name: 'products.index'})
    } catch (e) {
        if (e.response.status === 422) {
            errors.value = e.response.data.errors
        }
    }
}

  const updateProduct = async (id) => {
    errors.value = "";
    try {
      await axios.put("/api/products/" + id, product.value);
      await router.push({ name: "products.index" });
    } catch (e) {
      if (e.response.status === 422) {
        errors.value = e.response.data.errors;
      }
    }
  };

  const destroyProduct = async (id) => {
    await axios.delete("/api/products/" + id);
  };

  return {
    products,
    product,
    errors,
    getProducts,
    getProduct,
    storeProduct,
    updateProduct,
    destroyProduct,
  };
}
