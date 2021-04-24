<template>
  <div class="pane">
    <h2 id="line-chart-title">Line Chart Example</h2>
    <LineChart />

    <h2 id="multi-axis-line-chart-title">Multi Axis Line Chart Example</h2>
    <MultiAxisLineChart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LineChart from "@/components/LineChart.vue";
import MultiAxisLineChart from "@/components/MultiAxisLineChart.vue";

export default defineComponent({
  name: "Pane",
  components: {
    LineChart,
    MultiAxisLineChart,
  },
});
</script>
