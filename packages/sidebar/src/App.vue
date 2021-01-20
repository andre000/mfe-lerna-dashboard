<template>
  <div class="sidebar-app">
    <sidebar />
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import Sidebar from "./components/Sidebar";

export default {
  name: "SidebarApp",
  components: {
    Sidebar,
  },
};
</script>
