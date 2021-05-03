<template>
  <div id="nav">
    <router-link to="/line-chart">LineChart</router-link> |
    <router-link to="/line-chart/random">LineChart(Random)</router-link> |
    <router-link to="/line-chart/time">TimeLineChart</router-link> |
    <router-link to="/line-chart/multi-axis">MultiAxisLineChart</router-link> |
    <router-link to="/line-chart/styled">StyledLineChart</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
