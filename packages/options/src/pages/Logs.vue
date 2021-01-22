<template>
  <div class="logs">
    <h1 class="logs__title">Logs</h1>
    <h3 class="logs__back" @click="$router.push(`/options`)">Go to Options</h3>
    <opt-card>
      Logs
    </opt-card>
  </div>
</template>

<script>
import OptCard from '@/components/Card.vue';

export default {
  name: 'OptionLogsPage',
  components: {
    OptCard,
  }
}
</script>

<style lang="postcss" scoped>
.logs {
  @apply bg-gray-100 min-h-screen py-4 px-8 text-gray-700;
}
.logs__title {
  @apply text-3xl font-bold mt-16 mb-1 text-blue-500;
}
.logs__back {
  @apply text-sm mb-8 text-gray-500 cursor-pointer;
}
</style>
