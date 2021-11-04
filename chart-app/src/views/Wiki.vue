<template>
    <div class="wiki">
        <h1>Wiki Placeholder</h1>
        <h1>Title for Wiki Page</h1>

        <!-- This is a place holder for which chart will be passed from the parent component
        this will need to be modified for component state once that task is completed -->
        <h2 v-if="chart1">Chart1</h2>
        <h2 v-if="chart2">Chart2</h2>
        <h2 v-if="chart3">Chart3</h2>
        <h2 v-else>Description Placeholder</h2>
    </div>
</template>
