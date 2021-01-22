<template>
  <div class="card">
    <div v-if="title" class="card__title">{{ title }}</div>
    <div class="card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionsCard',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="postcss">
.card {
  @apply bg-white p-4 rounded shadow;
}
.card__title {
  @apply font-bold text-gray-700 text-xl mb-4;
}
</style>
