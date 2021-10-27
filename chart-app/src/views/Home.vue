<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ChartApp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ChartApp from '@/components/ChartApp.vue'

export default {
  name: 'Home',
  components: {
    ChartApp
  }
}
</script>
