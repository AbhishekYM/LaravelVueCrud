<template>
<div>
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
        <div class="flex place-content-end mb-4">
            <div class="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer">
                <router-link :to="{ name: 'products.create' }" class="text-sm font-medium">Create product</router-link>
            </div>
        </div>
        <data-table-wrapper :options="dataTableOptions">
            <template #default>
                <table class="min-w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Availability</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="products.length">
                            <tr v-for="item in products" :key="item.id">
                                <td>{{ item.name }}</td>
                                <td>{{ item.description }}</td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.quantity }}</td>
                                <td>{{ item.category }}</td>
                                <td>{{ item.is_available }}</td>
                                <td>
                                    <img :src="getImageUrl(item)" alt="Product Image" style="width: 100px; height: 100px;" />
                                </td>
                                <td>
                                    <router-link :to="{ name: 'products.edit', params: { id: item.id } }" class="mr-2 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">Edit</router-link>
                                    <button @click="deleteProduct(item.id)" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">Delete</button>
                                </td>
                            </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="8">No products found.</td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </template>
        </data-table-wrapper>
    </div>
</div>
</template>

    
<script>
import DataTableWrapper from '@/components/products/DataTableWrapper.vue';
import useProducts from '@/composables/products';
import {
    onMounted
} from 'vue';
import {
    ref
} from 'vue';

export default {
    components: {
        DataTableWrapper,
    },
    setup() {
        const {
            products,
            getProducts,
            destroyProduct
        } = useProducts();

        onMounted(getProducts);

        const deleteProduct = async (id) => {
            if (!window.confirm('Are you sure?')) {
                return;
            }
            await destroyProduct(id);
            await getProducts();
        };

        const getImageUrl = (item) => {
            return `http://localhost/Company/public/storage/apiDocs/${item.image}`;
        };

        const dataTableOptions = {
            data: products,
            columns: [{
                    title: 'Name',
                    data: 'name'
                },
                {
                    title: 'Description',
                    data: 'description'
                },
                {
                    title: 'Price',
                    data: 'price'
                },
                {
                    title: 'Quantity',
                    data: 'quantity'
                },
                {
                    title: 'Category',
                    data: 'category'
                },
                {
                    title: 'Availability',
                    data: 'is_available'
                },
                {
                    title: 'Image',
                    data: 'image'
                },
                {
                    title: 'Action',
                    data: null
                },
            ],
        };

        return {
            products,
            deleteProduct,
            getImageUrl,
            dataTableOptions,
        };
    },
};
</script>

    
<style>
    </style>
