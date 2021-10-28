<template>
  <div class="chart">
    <h1>{{ msg }}</h1>

<!--    This div is the container for the chart component-->
    <div class="chart-container">
      <div class="chart-placeholder">

      </div>
    </div>

<!--    This div is the container for the buttons-->
    <div class="button-container">
      <div class="dropdown-placeholder">

      </div>

      <div class="enter-placeholder">

      </div>

      <div class="reset-placeholder">

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ChartApp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.chart-container {
  display: flex;
  justify-content: center;
  margin: 40px 0 0;

}

/* The following CSS to the end of the file are placeholder elements to help with organizing the layout */
.chart-container > .chart-placeholder {
  height: 250px;
  width: 500px;
  background-color: #555;
}

.button-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  column-gap: 10px;
  margin: 40px 0 0;

}

.button-container > .dropdown-placeholder {
  height: 50px;
  width: 280px;
  background-color: #555;
}

.button-container > .enter-placeholder {
  height: 50px;
  width: 100px;
  background-color: #555;
}

.button-container > .reset-placeholder {
  height: 50px;
  width: 100px;
  background-color: #555;
}

</style>
