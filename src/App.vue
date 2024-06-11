<template>
  <div>
    <app-sidebar></app-sidebar>
    <div class="container">
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from "@/views/Sidebar.vue";

export default {
  components: {
    'app-sidebar': Sidebar
  }
}
</script>

<style scoped>

</style>