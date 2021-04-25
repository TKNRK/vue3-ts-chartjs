<template>
  <canvas id="myChartStyledLines"
    v-bind:height="canvasSize.height"
    v-bind:width="canvasSize.width" />
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive } from "@vue/runtime-core";
import { Chart, ChartOptions, registerables } from "chart.js";
Chart.register(...registerables);

export default defineComponent({
  name: "StyledLineChart",
  props: {
    unfilledData: {
      type: Array as PropType<number[]>,
      default: () => [],
      required: true,
    },
    dashedData: {
      type: Array as PropType<number[]>,
      default: () => [],
      required: true,
    },
    filledData: {
      type: Array as PropType<number[]>,
      default: () => [],
      required: true,
    },
    height: {
      type: Number,
      default: 284,
    },
    width: {
      type: Number,
      default: 512,
    },
  },
  setup(props){
    const canvasSize = reactive({
      height: props.height,
      width: props.width,
    });

    const data = {
      labels: ['January','February','March','April','May','June'],
      datasets: [
        {
          label: "unfilled",
          fill: false,
          data: props.unfilledData,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: "dashed",
          fill: false,
          data: props.dashedData,
          borderDash: [5, 5],
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
        {
          label: "filled",
          fill: true,
          data: props.filledData,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(5, 192, 192, 0.5)',
        }
      ]
    };


    const options: ChartOptions = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        },
      },
      interaction: {
        mode: 'index',
        intersect: false
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value'
          }
        }
      }
    };

    // show chart
    const showChart = () => {
      const canvasRef = document.getElementById('myChartStyledLines') as HTMLCanvasElement;
      if (canvasRef === null) return
      const canvas = canvasRef.getContext('2d');
      if (canvas === null) return;
      const myChartStyledLines = new Chart(canvas, {
        type: 'line',
        data,
        options: options,
      });
      console.debug(myChartStyledLines);
    }

    onMounted(() => {
      showChart();
    });

    return {
      canvasSize,
    }
  }
});
</script>