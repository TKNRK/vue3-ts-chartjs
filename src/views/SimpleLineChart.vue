<template>
  <LineChart
    :desc="state.desc"
    :labels="state.labels"
    :data="state.data"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
import LineChart from "@/components/LineChart.vue";

export default defineComponent({
  name: "SimpleLineChart",
  components: {
    LineChart,
  },
  setup(){
    const state = reactive({
      desc: "This is sample line chart",
      labels: ['A','B','C','D','E','F'],
      data: [1, 2, 3, 5, 9, 4, 6]
    });
    return {state}
  }
});
</script>