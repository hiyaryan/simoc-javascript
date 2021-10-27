<template>
  <div class="chart">
    <h1>{{ msg }}</h1>

<!--    Ryan cleared this section of h3's and p's-->
<!--    Add HTML elements here-->

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
</style>
