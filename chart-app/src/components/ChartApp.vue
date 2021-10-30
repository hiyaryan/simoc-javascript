<template>
  <div class="chart">
    <h1>{{ msg }}</h1>

<!--    This div is the container for the chart component-->
    <div class="chart-container">
      <!-- Using Chart.js in a Vue.js Application-->
      <!-- Step 2. Modify App.vue to use the new Chart component-->
      <SampleChart/>
    </div>

<!--    This div is the container for the buttons-->
    <div class="controls-container">

      <div class="dropdown-container">
        <select name="charts" id="chart-select">
          <option value="">-- Please select a chart --</option>
          <option value="chart1">Chart 1</option>
          <option value="chart2">Chart 2</option>
          <option value="chart3">Chart 3</option>
        </select>
      </div>

      <div class="enter-button-container">
        <button name="enter" id="enter-button">Enter</button>
      </div>

      <div class="reset-placeholder">

      </div>
    </div>

  </div>
</template>

<script>
// Using Chart.js in a Vue.js Application
// Step 2. Modify ChartApp.vue to use the new Chart Component in this Component
import SampleChart from "@/components/SampleChart";

export default {
  name: 'ChartApp',
  props: {
    msg: String
  },
  components: {SampleChart}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}

/* Using Chart.js in a Vue.js Application*/
/* Step 7. Adjust chart size and position*/
.chart-container {
  height: 250px;
  width: 500px;
  margin: 0 auto;
}

/*!* The following CSS to the end of the file are placeholder elements to help with organizing the layout *!*/
/*.chart-container > .chart-placeholder {*/
/*  height: 250px;*/
/*  width: 500px;*/
/*  background-color: #555;*/
/*}*/

.controls-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  column-gap: 20px;
  margin: 40px 0 0;
}

/*.controls-container > .dropdown-container {*/
/*  height: 50px;*/
/*  width: 280px;*/
/*  background-color: #555;*/
/*}*/

.controls-container > .enter-button-container > #enter-button {
  height: 50px;
  width: 100px;
  border-radius: 8px;
  font-weight: 800;
  color: inherit;
  background-color: #42b983;
}

.controls-container > .reset-placeholder {
  height: 50px;
  width: 100px;
  background-color: #555;
}


.controls-container > .dropdown-container > #chart-select {
  height: 50px;
  width: fit-content;
  border-radius: 8px;
  border: solid #42b983;
  box-sizing: border-box;
  font-weight: 800;
  color: inherit;
  margin-right: 50px;
}
</style>
