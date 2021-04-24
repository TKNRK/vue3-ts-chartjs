<template>
  <canvas id="myLineChart"
      v-bind:height="canvasSize.height"
      v-bind:width="canvasSize.width" />
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive, watch } from "@vue/runtime-core";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default defineComponent({
  name: "LineChart",
  props: {
    desc: {
      type: String,
      default: "unspecified",
      required: true,
    },
    labels: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: true,
    },
    data: {
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
      width: props.width
    });

    const data = {
      labels: props.labels,
      datasets: [{
        label: props.desc,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: props.data,
      }]
    };

    let myChart: Chart<"line", number[], string>;

    onMounted(() => {
      if (!myChart) {
        const canvasRef = document.getElementById('myLineChart') as HTMLCanvasElement;
        if (canvasRef === null) return
        const canvas = canvasRef.getContext('2d');
        if (canvas === null) return;
        myChart = new Chart(canvas, {
          type: 'line',
          data,
          options: {},
        });
      }
    });

    watch(() => props.data, (first) => {
      data.datasets[0].data = first;
      myChart.update();
    });

    return {
      canvasSize,
    }
  }
});
</script>