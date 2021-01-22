<template>
  <div class="users">
    <h1 class="users__title">Users</h1>
    <h3 class="users__back" @click="$router.push(`/options`)">Go to Options</h3>
    <opt-card>
      Users
    </opt-card>
  </div>
</template>

<script>
import OptCard from '@/components/Card.vue';

export default {
  name: 'OptionUsersPage',
  components: {
    OptCard,
  }
}
</script>

<style lang="postcss" scoped>
.users {
  @apply bg-gray-100 min-h-screen py-4 px-8 text-gray-700;
}
.users__title {
  @apply text-3xl font-bold mt-16 mb-1 text-blue-500;
}
.users__back {
  @apply text-sm mb-8 text-gray-500 cursor-pointer;
}
</style>
