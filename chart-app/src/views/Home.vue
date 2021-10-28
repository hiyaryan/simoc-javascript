<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <ChartApp msg="Chart App"/>
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
