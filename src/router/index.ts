import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SimpleLineChart from "../views/SimpleLineChart.vue";
import RandomLineChart from "../views/RandomLineChart.vue";
import MultiAxisLineChart from "../views/MultiAxisLineChart.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/line-chart',
    name: SimpleLineChart.name,
    component: SimpleLineChart
  },
  {
    path: '/line-chart/random',
    name: RandomLineChart.name,
    component: RandomLineChart
  },
  {
    path: '/line-chart/multi-axis',
    name: MultiAxisLineChart.name,
    component: MultiAxisLineChart
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
