<template>
  <canvas id="myChart" height="284" width="512" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/runtime-core";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default defineComponent({
  name: "LineChart",
  setup(){
    const DATA_COUNT = 7;
    const MAX_NUMBER = 50;

    // -MAX_NUMBER ~ MAX_NUMBER の値を持つ、要素数 DATA_COUNT 個の配列を生成する
    const genRandomValues = () => {
      const arr = [];
      for (let i=0; i < DATA_COUNT; i++) {
        const sign = Math.random() < 0.5 ? 1 : -1;
        arr.push(sign * Math.random() * MAX_NUMBER);
      }
      return arr;
    };

    const labels = ['January','February','March','April','May','June'];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: genRandomValues(),
      }]
    };

    // show chart
    const showChart = () => {
      const canvasRef = document.getElementById('myChart') as HTMLCanvasElement;
      if (canvasRef === null) return
      const canvas = canvasRef.getContext('2d');
      if (canvas === null) return;
      const myChart = new Chart(canvas, {
        type: 'line',
        data,
        options: {},
      });
      console.debug(myChart);
    }

    onMounted(() => {
      showChart();
    });

    return {}
  }
});
</script>