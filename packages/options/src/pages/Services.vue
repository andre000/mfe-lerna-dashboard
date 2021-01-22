<template>
  <div class="services">
    <h1 class="services__title">Services</h1>
    <h3 class="services__back" @click="$router.push(`/options`)">Go to Options</h3>
    <opt-card>
      Services
    </opt-card>
  </div>
</template>

<script>
import OptCard from '@/components/Card.vue';

export default {
  name: 'OptionServicesPage',
  components: {
    OptCard,
  }
}
</script>

<style lang="postcss" scoped>
.services {
  @apply bg-gray-100 min-h-screen py-4 px-8 text-gray-700;
}
.services__title {
  @apply text-3xl font-bold mt-16 mb-1 text-blue-500;
}
.services__back {
  @apply text-sm mb-8 text-gray-500 cursor-pointer;
}
</style>
