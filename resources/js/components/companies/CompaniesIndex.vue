<template>
<div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
    <div class="flex place-content-end mb-4">
        <div class="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer">
            <router-link :to="{ name: 'companies.create' }" class="text-sm font-medium">Create company</router-link>
        </div>
    </div>

    <table class="min-w-full border divide-y divide-gray-200">
        <thead>
            <tr>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Name</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Email</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Address</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Website</span>
                </th>
                <th class="px-6 py-3 bg-gray-50"></th>
            </tr>
        </thead>

        <tbody class="bg-white divide-y divide-gray-200 divide-solid">
            <DataTable class="display" :columns="columns" :data="companies" :options="{ select: true }" width="100%" />
        </tbody>
    </table>
</div>
</template>

<script>
import useCompanies from "@/composables/companies";
import DataTable from "datatables.net-vue3";
import Select from "datatables.net-select";
DataTable.use(Select);
import {
    onMounted
} from "vue";

const {
    companies,
    getCompanies,
    destroyCompany
} = useCompanies();
onMounted(getCompanies);
// const deleteCompany = async (id) => {
//     if (!window.confirm('Are you sure?')) {
//         return
//     }
//     await destroyCompany(id);
//     await getCompanies();

// }
const columns = [{
        data: "name"
    },
    {
        data: "email"
    },
    {
        data: "address"
    },
    {
        data: "website"
    },
    {
        data: "id"
    },
];
</script>
