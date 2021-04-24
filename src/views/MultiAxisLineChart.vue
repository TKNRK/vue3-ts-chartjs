<template>
  <canvas id="myChartMultiAxis" height="284" width="512" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/runtime-core";
import { Chart, ChartOptions, CoreScaleOptions, registerables } from "chart.js";
Chart.register(...registerables);

export default defineComponent({
  name: "MultiAxisLineChart",
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
      labels: labels, // X 軸のラベル
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
      // stacked: false,
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
    }

    // show chart
    const showChart = () => {
      const canvasRef = document.getElementById('myChartMultiAxis') as HTMLCanvasElement;
      if (canvasRef === null) return
      const canvas = canvasRef.getContext('2d');
      if (canvas === null) return;
      const myChartMultiAxis = new Chart(canvas, {
        type: 'line',
        data,
        options: options,
      });
      console.debug(myChartMultiAxis);
    }

    onMounted(() => {
      showChart();
    });

    return {}
  }
});
</script>