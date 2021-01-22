<template>
  <ul class="list">
    <li class="list__item" @click="$router.push('/options/users')">Users</li>
    <li class="list__item" @click="$router.push('/options/permissions')">Permissions</li>
    <li class="list__item" @click="$router.push('/options/logs')">Logs</li>
    <li class="list__item" @click="$router.push('/options/services')">Services</li>
  </ul>
</template>

<script>
export default {
  name: 'OptList'
}
</script>

<style lang="postcss" scoped>
.list {
  @apply -m-4;
}
.list__item {
  @apply py-4 border-b border-gray-200 px-4 cursor-pointer;
}
.list__item:hover {
  @apply bg-gray-50;
}
</style>
