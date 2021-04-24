<template>
  <div class="pane">
    <LineChart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LineChart from "@/components/LineChart.vue";

export default defineComponent({
  name: "Pane",
  components: {
    LineChart,
  },
});
</script>
