import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import SimpleLineChart from "../views/SimpleLineChart.vue";
import AsyncLineChart from "../views/AsyncLineChart.vue";
import TemperatureAndHumidityChart from "../views/TemperatureAndHumidityChart.vue";
import ThreeStyleLineChart from "../views/ThreeStyleLineChart.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: Home.name,
    component: Home
  },
  {
    path: '/line-chart',
    name: SimpleLineChart.name,
    component: SimpleLineChart
  },
  {
    path: '/line-chart/random',
    name: AsyncLineChart.name,
    component: AsyncLineChart
  },
  {
    path: '/line-chart/multi-axis',
    name: TemperatureAndHumidityChart.name,
    component: TemperatureAndHumidityChart
  },
  {
    path: '/line-chart/styled',
    name: ThreeStyleLineChart.name,
    component: ThreeStyleLineChart
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
