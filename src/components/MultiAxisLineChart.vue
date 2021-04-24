<template>
  <canvas id="myChartMultiAxis" 
    v-bind:height="canvasSize.height"
    v-bind:width="canvasSize.width" />
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive } from "@vue/runtime-core";
import { Chart, ChartOptions, registerables } from "chart.js";
Chart.register(...registerables);

export default defineComponent({
  name: "MultiAxisLineChart",
  props: {
    title: {
      type: String,
      default: "unspecified",
      required: true,
    },
    labels: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: true,
    },
    y1Label: {
      type: String,
      default: "unspecified",
    },
    y1Data: {
      type: Array as PropType<number[]>,
      default: () => [],
      required: true,
    },
    y2Label: {
      type: String,
      default: "unspecified",
    },
    y2Data: {
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
      labels: props.labels,
      datasets: [
        {
          label: props.y1Label,
          data: props.y1Data,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          yAxisID: 'y1',
        },
        {
          label: props.y2Label,
          data: props.y2Data,
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          yAxisID: 'y2',
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
          text: props.title
        }
      },
      scales: {
        y1: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y2: {
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

    return {
      canvasSize,
    }
  }
});
</script>