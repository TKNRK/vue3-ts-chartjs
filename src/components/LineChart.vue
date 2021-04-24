<template>
  <canvas id="lineChartExample" height="768" width="1024">
  </canvas>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { Chart, ChartData, ChartOptions } from "chart.js";

export default defineComponent({
  name: "LineChart",
  setup(){
    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, max: 100};

    const genRandomValues = () => {
      const arr = [];
      for (let i=0; i < NUMBER_CFG.count; i++) {
        const sign = Math.random() < 0.5 ? 1 : -1;
        arr.push(sign * Math.random() * NUMBER_CFG.max);
      }
      return arr;
    };

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const data: ChartData = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: genRandomValues(),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          yAxisID: 'y',
        },
        {
          label: 'Dataset 2',
          data: genRandomValues(),
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          yAxisID: 'y1',
        }
      ]
    };

    const options: ChartOptions = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis'
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',

            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        }
    };

    // show chart
    const canvas = <HTMLCanvasElement> document.getElementById('lineChartExample');
    const ctx = canvas.getContext('2d');
    new Chart(ctx!, {
      type: "line",
      data: data,
      options: options,
    });
  }
});
</script>