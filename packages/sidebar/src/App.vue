<template>
  <div class="sidebar-app h-full">
    <sidebar />
  </div>
</template>

<script scoped>
import "tailwindcss/tailwind.css";
import Sidebar from "./components/Sidebar";

export default {
  name: "SidebarApp",
  components: {
    Sidebar,
  },
};
</script>
