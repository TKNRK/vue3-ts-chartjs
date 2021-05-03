<template>
  <canvas id="myTimeLineChart"
      height="200"
      width="600" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/runtime-core";
import 'chartjs-adapter-luxon';
// import dayjs from 'dayjs';
// import {DateTime} from 'luxon';
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
Chart.register(...registerables);

export default defineComponent({
  name: "SampleTimeLineChart",
  setup(){
    const data: ChartData = {
      labels: [
        '2017-06-20T00:00:00.000Z',
        '2017-06-20T07:00:00.000Z',
        '2017-06-20T08:12:00.000Z',
        '2017-06-20T11:00:00.000Z',
        '2017-06-20T11:30:00.000Z',
        '2017-06-20T12:00:00.000Z'
      ].map(s => new Date(s)),
      datasets: [{
        label: "sample time chart",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [1, 2, 3, 5, 9, 4, 6],
      }]
    };
    const options: ChartOptions = {
      plugins: {
        title: {
          text: 'Chart.js Time Scale',
          display: true
        }
      },
      scales: {
        x: {
          type: 'time',
          time: {
            // Luxon format string
            tooltipFormat: 'HHmm'
          },
          title: {
            display: true,
            text: 'Date'
          }
        },
        y: {
          title: {
            display: true,
            text: 'value'
          }
        }
      },
    };

    let myChart: Chart;

    onMounted(() => {
      if (!myChart) {
        const canvasRef = document.getElementById('myTimeLineChart') as HTMLCanvasElement;
        if (canvasRef === null) return
        const canvas = canvasRef.getContext('2d');
        if (canvas === null) return;
        myChart = new Chart(canvas, {
          type: 'line',
          data: data,
          options: options,
        });
      }
    });

    return {}
  }
});
</script>