<template>
  <div class="dashboard-app">
    <div class="dashboard-app__widgets">
      <dash-widget title="Sells" :value="100"></dash-widget>
      <dash-widget title="Clients" :value="321"></dash-widget>
      <dash-widget title="Products" :value="200"></dash-widget>
      <dash-widget title="Visits" :value="4000"></dash-widget>
    </div>

    <div class="dashboard-app__body">
      <dash-card title="Sales Chart" class="mr-4">
        <dash-chart :data="[10,20,4,39,33]"></dash-chart>
      </dash-card>

      <dash-card title="Visits Chart" class="ml-4">
        <dash-chart :data="[92,109,49,79,83]"></dash-chart>
      </dash-card>
    </div>
  </div>
</template>

<script>
import DashWidget from '@/components/Widget.vue';
import DashCard from '@/components/Card.vue';
import DashChart from '@/components/Chart.vue';

export default {
  name: 'App',
  components: {
    DashWidget,
    DashCard,
    DashChart
  }
}
</script>

<style lang="postcss" scoped>
.dashboard-app {
  @apply bg-gray-100 min-h-screen p-4 text-gray-700;
}

.dashboard-app__widgets {
  @apply flex flex-1;
}
.dashboard-app__body {
  @apply mx-4 mt-8 flex;
}
.dashboard-app__body > div {
  @apply w-1/2;
}
</style>
