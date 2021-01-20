<template>
  <div class="sidebar">
    <h1 class="sidebar__title">mfe-lerna-dashboard</h1>
    <ul class="sidebar__menu">
      <li class="sidebar__item"><a href="/dashboard">Dashboard</a></li>
      <li class="sidebar__item"><a href="/options">Options</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  @apply h-screen shadow-xl;
}

.sidebar__title {
  @apply text-2xl font-bold mb-6 text-center px-10 pt-10 text-gray-700;
}

.sidebar__item {
  @apply h-12 px-10 flex flex-1 items-center text-gray-700;
}
.sidebar__item:hover {
  @apply text-blue-500 cursor-pointer transition-all;
}
.sidebar__item:hover a {
  @apply transition-all;
  filter: drop-shadow(0px 0px 1px rgba(59, 130, 246, 0.5));
}
</style>
