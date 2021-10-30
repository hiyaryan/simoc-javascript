<!-- Using Chart.js in a Vue.js Application-->
<!-- Step 1. Create a new chart component-->
<template>
  <div>
    <canvas id="sample-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

// Using Chart.js in a Vue.js Application
// Step 4. Import data from a JavaScript file
import sampleData from '../sampleData.js'

export default {
  name: "SampleChart",

  // Using Chart.js in a Vue.js Application
  // Step 5. Store chart data in data() function
  data() {
    return {
      sampleData: sampleData
    }
  },

  // Using Chart.js in a Vue.js Application
  // Step 6. Initialize the chart and write to <canvas>
  mounted() {
    const ctx = document.getElementById('sample-chart')
    new Chart(ctx, this.sampleData)
  }
}
</script>
