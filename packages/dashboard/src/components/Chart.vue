<template>
  <div class="chart">
    <div class="chart__bar" v-for="(d,i) in data" :style="barHeight(d)" :key="i" ></div>
  </div>
</template>

<script>
export default {
  name: 'DashChart',
  props: {
    data: {
      type: Array,
      required: true
    }
  },

  computed: {
    maxValue() {
      return [...this.data].sort((a,b) => b - a)[0]
    }
  },

  methods: {
    barHeight(d) {
      return { height: `${~~(d / this.maxValue * 100)}%` }
    }
  }
}
</script>

<style lang="postcss" scoped>
.chart {
  @apply rounded border border-gray-50 flex items-end;
  height: 50vh;
  background: repeating-linear-gradient( -0deg, #fff, #ccc 1px, #fff 1px, #fff 50px );
}
.chart__bar {
  @apply bg-blue-500 flex-1 mx-4;
}
</style>
