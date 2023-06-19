<template>
<div>
    <table ref="dataTableRef" class="min-w-full"></table>
</div>
</template>

<script>
import {
    onMounted,
    watch,
    ref
} from 'vue';
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-dt';
import $ from 'jquery';

export default {
    props: {
        options: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const dataTableRef = ref(null);

        onMounted(() => {
            if (dataTableRef.value) {
                $(dataTableRef.value).DataTable(props.options);
            }
        });

        watch(
            () => props.options,
            () => {
                if (dataTableRef.value) {
                    $(dataTableRef.value).DataTable().destroy();
                    $(dataTableRef.value).DataTable(props.options);
                }
            }, {
                deep: true
            }
        );

        return {
            dataTableRef,
        };
    },
};
</script>
