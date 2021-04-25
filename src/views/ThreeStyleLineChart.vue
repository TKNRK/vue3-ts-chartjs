<template>
  <StyledLineChart
    :unfilledData="state.unfilledData"
    :dashedData="state.dashedData"
    :filledData="state.filledData"
   />
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
import StyledLineChart from "@/components/StyledLineChart.vue";

export default defineComponent({
  name: "ThreeStyleLineChart",
  components: {
    StyledLineChart
  },
  setup(){
    const DATA_COUNT = 6;
    const MAX_NUMBER = 100;

    const genRandomValues = () => {
      const arr = [];
      for (let i=0; i < DATA_COUNT; i++) {
        const sign = Math.random() < 0.5 ? 1 : -1;
        arr.push(sign * Math.random() * MAX_NUMBER);
      }
      return arr;
    };

    const state = reactive({
      unfilledData: genRandomValues(),
      dashedData: genRandomValues(),
      filledData: genRandomValues(),
    });

    return {
      state
    }
  }
});
</script>