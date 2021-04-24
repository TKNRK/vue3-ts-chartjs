<template>
  <h3 id="random-lc-title">This example pretend to call api, so dataset is rendered after 1 second.</h3>
  <button v-on:click="fetchData()">FetchNewData (Latency: 1s)</button>
  <LineChart
    :desc="state.desc"
    :labels="state.labels"
    :data="state.data"
  />
  <p v-show="state.loading">loading...</p>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "@vue/runtime-core";
import LineChart from "@/components/LineChart.vue";

const DATA_COUNT = 12;
const MAX_NUMBER = 100;
function randomizeData() {
  const arr = [];
  for (let i=0; i < DATA_COUNT; i++) {
    arr.push(Math.random() * MAX_NUMBER);
  }
  return arr;
};

function fetchDummyData() {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(() => randomizeData());
}

interface StateIF {
  loading: boolean,
  desc: string,
  labels: string[],
  data: number[],
}

export default defineComponent({
  name: "AsyncLineChart",
  components: {
    LineChart,
  },
  setup(){
    const state = reactive<StateIF>({
      loading: false,
      desc: "Average temperature (Fahrenheit)",
      labels: ['January','February','March','April','May','June', 'July','August','September','October','December','November'],
      data: [],
    });

    const fetchData = async() => {
      state.loading = true;
      state.data = await fetchDummyData();
      state.loading = false;
    };

    onMounted(async() => {
      fetchData();
    })

    return {
      state,
      fetchData
    }
  }
});
</script>