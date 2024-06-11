<template>
  <div class="dashboard">
    <div class="dashboard-wrap">
      <app-sidebar></app-sidebar>
      <div class="container">
        <div class="dashboard-body">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    'app-sidebar': Sidebar
  }
}
</script>

<style lang="scss" scoped>
  .dashboard-wrap {
    display: flex;
  }
</style>