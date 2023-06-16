<!-- <template>
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
import $ from 'jquery';
import 'datatables.net-dt';

import 'datatables.net';

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
            $(dataTableRef.value).DataTable(props.options);
        });

        watch(
            () => props.options.data,
            () => {
                $(dataTableRef.value).DataTable().destroy();
                $(dataTableRef.value).DataTable(props.options);
            }
        );

        return {
            dataTableRef,
        };
    },
};
</script> -->

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
// import $ from 'jquery';
// import 'datatables.net-dt';

import 'datatables.net';
// import { onMounted, watch, ref } from 'vue';
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
      () => props.options.data,
      () => {
        if (dataTableRef.value) {
          $(dataTableRef.value).DataTable().destroy();
          $(dataTableRef.value).DataTable(props.options);
        }
      }
    );

    return {
      dataTableRef,
    };
  },
};
</script>
