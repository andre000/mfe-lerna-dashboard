<template>
  <div class="options-app">
    <h1 class="options-app__title">Options</h1>
    <opt-card>
      <opt-list></opt-list>
    </opt-card>
  </div>
</template>

<script>
import OptCard from '@/components/Card.vue';
import OptList from '@/components/List.vue';

export default {
  name: 'OptionsPage',
  components: {
    OptCard,
    OptList
  }
}
</script>

<style lang="postcss" scoped>
.options-app {
  @apply bg-gray-100 min-h-screen py-4 px-8 text-gray-700;
}
.options-app__title {
  @apply text-3xl font-bold mt-16 mb-8 text-blue-500;
}
</style>
