<template>
  <MultiAxisLineChart
    :title="state.title"
    :labels="state.labels"
    :y1Label="state.y1Label"
    :y1Data="state.y1Data"
    :y2Label="state.y2Label"
    :y2Data="state.y2Data"
   />
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
import MultiAxisLineChart from "@/components/MultiAxisLineChart.vue";


export default defineComponent({
  name: "TemperatureAndHumidityChart",
  components: {
    MultiAxisLineChart
  },
  setup(){
    const DATA_COUNT = 7;
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
      title: "Chart.js Line Chart - Multi Axis",
      labels: ['January','February','March','April','May','June'],
      y1Label: "Temperature (F)",
      y1Data: genRandomValues(),
      y2Label: "Humidity (%)",
      y2Data: genRandomValues(),
    });

    return {
      state
    }
  }
});
</script>