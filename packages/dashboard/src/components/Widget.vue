<template>
  <div class="widget" :class="mainClasses">
    <div class="widget__value">{{ value }}</div>
    <div class="widget__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'DashWidget',
  props: {
    value: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: 'w-1/4'
    }
  },
  computed: {
    mainClasses() {
      return [
        this.width || null
      ].filter(Boolean).join(' ')
    }
  }
}
</script>

<style lang="postcss" scoped>
.widget {
  @apply rounded bg-blue-500 shadow text-white m-4 h-32 p-4 relative;
}

.widget__value {
  @apply font-extrabold text-5xl;
}
.widget__title {
  @apply text-lg absolute bottom-3;
}
</style>
