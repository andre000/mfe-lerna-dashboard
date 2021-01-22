<template>
  <div class="permissions">
    <h1 class="permissions__title">Permissions</h1>
    <h3 class="permissions__back" @click="$router.push(`/options`)">Go to Options</h3>
    <opt-card>
      Permissions
    </opt-card>
  </div>
</template>

<script>
import OptCard from '@/components/Card.vue';

export default {
  name: 'OptionPermissionsPage',
  components: {
    OptCard,
  }
}
</script>

<style lang="postcss" scoped>
.permissions {
  @apply bg-gray-100 min-h-screen py-4 px-8 text-gray-700;
}
.permissions__title {
  @apply text-3xl font-bold mt-16 mb-1 text-blue-500;
}
.permissions__back {
  @apply text-sm mb-8 text-gray-500 cursor-pointer;
}
</style>
