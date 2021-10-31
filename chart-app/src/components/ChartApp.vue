<template>
    <div class="chart">
        <h1>{{msg}}</h1>

        <!--    This div is the container for the chart component-->
        <div class="chart-container">
            <!-- Using Chart.js in a Vue.js Application-->
            <!-- Step 2. Modify App.vue to use the new Chart component-->
            <SampleChart />
        </div>

        <!--    This div is the container for the buttons-->
        <div class="controls-container">

            <div class="dropdown-container">
                <select id="chart-select" name="charts">
                    <option value="" hidden disabled selected>--Please select a chart--</option>
                    <option v-for="(chart, name) in charts" :key="name" :value="name">{{chart.label}}</option>
                </select>
            </div>

            <div class="enter-button-container">
                <button id="enter-button" name="enter">Enter</button>
            </div>

            <div class="refresh-button-container">
                <button id="refresh-button" name="refresh">Refresh</button>
            </div>
        </div>

    </div>
</template>

<script>
// Using Chart.js in a Vue.js Application
// Step 2. Modify ChartApp.vue to use the new Chart Component in this Component
import SampleChart from '@/components/SampleChart'

export default {
    name: 'ChartApp',
    components: {SampleChart},
    props: {
        msg: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            charts: {
                chart1: {label: 'Chart 1'},
                chart2: {label: 'Chart 2'},
                chart3: {label: 'Chart 3'},
            },
        }
    },
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

.controls-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  column-gap: 20px;
  margin: 40px 0 0;
}

#enter-button {
  height: 50px;
  width: 100px;
  border-radius: 8px;
  font-weight: 800;
  color: inherit;
  background-color: #42b983;
}

#refresh-button {
  height: 50px;
  width: 100px;
  border-radius: 8px;
  font-weight: 800;
  color: inherit;
  background-color: #555;
}

#chart-select {
  height: 50px;
  width: 200px;
  border-radius: 8px;
  border: solid #42b983;
  box-sizing: border-box;
  font-weight: 800;
  color: inherit;
  margin-right: 50px;
}
</style>
